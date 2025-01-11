/**
 * Kennel Details Page
 * 
 * Displays detailed information about a kennel and allows editing if authorized.
 * Shows kennel information, current status, and upcoming reservations.
 */

import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { KennelForm } from "~/components/forms/KennelForm";
import { Button } from "~/components/ui/button";
import { api } from "~/utils/api";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { Badge } from "~/components/ui/badge";
import { format } from "date-fns";
import { Pencil, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";

const KennelDetailsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const utils = api.useContext();

  const { data: kennel, isLoading } = api.kennel.getById.useQuery(
    id as string,
    {
      enabled: !!id,
    }
  );

  const { mutate: updateKennel, isLoading: isUpdating } =
    api.kennel.update.useMutation({
      onSuccess: async () => {
        await utils.kennel.getById.invalidate(id as string);
        setIsEditing(false);
      },
    });

  const { mutate: deleteKennel, isLoading: isDeleting } =
    api.kennel.delete.useMutation({
      onSuccess: async () => {
        await router.push("/kennels");
      },
    });

  const handleUpdate = (data: any) => {
    updateKennel({ id: id as string, data });
  };

  const handleDelete = () => {
    deleteKennel(id as string);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "AVAILABLE":
        return "bg-green-100 text-green-800";
      case "OCCUPIED":
        return "bg-blue-100 text-blue-800";
      case "MAINTENANCE":
        return "bg-yellow-100 text-yellow-800";
      case "RESERVED":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div>Loading...</div>
      </DashboardLayout>
    );
  }

  if (!kennel) {
    return (
      <DashboardLayout>
        <div>Kennel not found</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
                {kennel.name}
              </h2>
              <Badge className={getStatusColor(kennel.status)}>
                {kennel.status}
              </Badge>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              {kennel.size} Kennel • ${kennel.dailyRate}/day
            </p>
          </div>
          {session?.user.role === "ADMIN" && (
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
                disabled={isUpdating}
              >
                <Pencil className="mr-2 h-4 w-4" />
                {isEditing ? "Cancel Edit" : "Edit Kennel"}
              </Button>
              <Button
                variant="destructive"
                onClick={() => setShowDeleteDialog(true)}
                disabled={isDeleting}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Kennel
              </Button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="rounded-lg bg-white p-6 shadow">
          {isEditing ? (
            <KennelForm
              initialData={kennel}
              onSubmit={handleUpdate}
              isSubmitting={isUpdating}
            />
          ) : (
            <div className="space-y-8">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-medium">Basic Information</h3>
                <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Size</dt>
                    <dd className="mt-1">{kennel.size}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Daily Rate
                    </dt>
                    <dd className="mt-1">${kennel.dailyRate}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Maximum Weight
                    </dt>
                    <dd className="mt-1">{kennel.maxWeight} lbs</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Location</dt>
                    <dd className="mt-1">{kennel.location || "Not specified"}</dd>
                  </div>
                </dl>
              </div>

              {/* Description and Features */}
              <div>
                <h3 className="text-lg font-medium">Description & Features</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Description
                    </dt>
                    <dd className="mt-1 whitespace-pre-wrap">
                      {kennel.description || "No description provided"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Features
                    </dt>
                    <dd className="mt-2">
                      <div className="flex flex-wrap gap-2">
                        {kennel.features?.map((feature) => (
                          <Badge key={feature} variant="secondary">
                            {feature}
                          </Badge>
                        )) || "No features listed"}
                      </div>
                    </dd>
                  </div>
                </div>
              </div>

              {/* Upcoming Reservations */}
              {kennel.reservations && kennel.reservations.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium">Upcoming Reservations</h3>
                  <div className="mt-4">
                    <div className="overflow-hidden rounded-lg border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                            >
                              Pet
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                            >
                              Check-in
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                            >
                              Check-out
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                            >
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {kennel.reservations.map((reservation) => (
                            <tr
                              key={reservation.id}
                              className="cursor-pointer hover:bg-gray-50"
                              onClick={() =>
                                router.push(`/reservations/${reservation.id}`)
                              }
                            >
                              <td className="whitespace-nowrap px-6 py-4">
                                <div className="flex items-center">
                                  <div>
                                    <div className="font-medium text-gray-900">
                                      {reservation.pet.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      {reservation.pet.breed}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                {format(
                                  new Date(reservation.startDate),
                                  "MMM d, yyyy"
                                )}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                {format(
                                  new Date(reservation.endDate),
                                  "MMM d, yyyy"
                                )}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <Badge
                                  className={
                                    reservation.status === "CONFIRMED"
                                      ? "bg-green-100 text-green-800"
                                      : reservation.status === "PENDING"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-gray-100 text-gray-800"
                                  }
                                >
                                  {reservation.status}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Notes */}
              {kennel.notes && (
                <div>
                  <h3 className="text-lg font-medium">Notes</h3>
                  <div className="mt-4 whitespace-pre-wrap rounded-md bg-gray-50 p-4 text-sm">
                    {kennel.notes}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Kennel</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this kennel? This action cannot be
              undone, and all associated data will be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DashboardLayout>
  );
};

export default KennelDetailsPage;
