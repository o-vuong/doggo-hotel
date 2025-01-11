/**
 * Pet Details Page
 * 
 * Displays detailed information about a pet and allows editing if authorized.
 * Shows pet information, medical history, and recent reservations.
 * 
 * @module pages/pets/[id]
 */

import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { PetForm } from "~/components/forms/PetForm";
import { Button } from "~/components/ui/button";
import { api } from "~/utils/api";
import { Pencil, Trash2, AlertTriangle } from "lucide-react";

const PetDetailsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const utils = api.useContext();
  
  const { data: pet, isLoading } = api.pet.getById.useQuery(id as string, {
    enabled: !!id,
  });

  const { mutate: updatePet, isLoading: isUpdating } = api.pet.update.useMutation(
    {
      onSuccess: async () => {
        await utils.pet.getById.invalidate(id as string);
        setIsEditing(false);
      },
    }
  );

  const { mutate: deletePet, isLoading: isDeleting } = api.pet.delete.useMutation(
    {
      onSuccess: async () => {
        await router.push("/pets");
      },
    }
  );

  const handleUpdate = (data: any) => {
    updatePet({ id: id as string, data });
  };

  const handleDelete = () => {
    deletePet(id as string);
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div>Loading...</div>
      </DashboardLayout>
    );
  }

  if (!pet) {
    return (
      <DashboardLayout>
        <div>Pet not found</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
              {pet.name}
            </h2>
            <p className="mt-1 text-sm text-gray-500">{pet.breed}</p>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={() => setIsEditing(!isEditing)}
              disabled={isUpdating}
            >
              <Pencil className="mr-2 h-4 w-4" />
              {isEditing ? "Cancel Edit" : "Edit Pet"}
            </Button>
            <Button
              variant="destructive"
              onClick={() => setShowDeleteConfirm(true)}
              disabled={isDeleting}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Pet
            </Button>
          </div>
        </div>

        {/* Delete Confirmation */}
        {showDeleteConfirm && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Delete {pet.name}?
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-red-700">
                    This action cannot be undone. All pet data, including
                    reservations, will be permanently deleted.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex space-x-3">
                    <Button
                      variant="destructive"
                      onClick={handleDelete}
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Deleting..." : "Yes, Delete Pet"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowDeleteConfirm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pet Form or Details */}
        <div className="rounded-lg bg-white p-6 shadow">
          {isEditing ? (
            <PetForm
              initialData={pet}
              onSubmit={handleUpdate}
              isSubmitting={isUpdating}
            />
          ) : (
            <div className="space-y-6">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Basic Information
                </h3>
                <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Age</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {new Date().getFullYear() -
                        new Date(pet.dateOfBirth).getFullYear()}{" "}
                      years
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Weight</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {pet.weight} lbs
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Medical Information */}
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Medical Information
                </h3>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Medical Conditions
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {pet.medicalConditions || "None reported"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Medications
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {pet.medications || "None"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Dietary Restrictions
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {pet.dietaryRestrictions || "None"}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Emergency Contacts */}
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Emergency Contacts
                </h3>
                <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Emergency Contact
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {pet.emergencyContactName}
                      <br />
                      {pet.emergencyContactPhone}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Veterinarian
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {pet.vetName || "Not specified"}
                      {pet.vetPhone && <br />}
                      {pet.vetPhone}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Recent Stays */}
              {pet.reservations && pet.reservations.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Recent Stays
                  </h3>
                  <div className="mt-4 overflow-hidden rounded-md border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
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
                        {pet.reservations.map((reservation) => (
                          <tr key={reservation.id}>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                              {new Date(
                                reservation.startDate
                              ).toLocaleDateString()}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                              {new Date(reservation.endDate).toLocaleDateString()}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm">
                              <span
                                className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                  reservation.status === "CONFIRMED"
                                    ? "bg-green-100 text-green-800"
                                    : reservation.status === "PENDING"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {reservation.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PetDetailsPage;
