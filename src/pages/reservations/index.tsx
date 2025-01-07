import { useState } from "react";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { ReservationForm } from "~/components/forms/ReservationForm";
import { Role, ReservationStatus } from "@prisma/client";

export default function ReservationsPage() {
  const { data: session } = useSession();
  const [showForm, setShowForm] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<ReservationStatus | "ALL">("ALL");

  const { data: reservations, isLoading } = api.reservation.getAll.useQuery(
    selectedStatus === "ALL" ? undefined : { status: selectedStatus }
  );

  const updateStatus = api.reservation.updateStatus.useMutation({
    onSuccess: () => {
      utils.reservation.getAll.invalidate();
    },
  });

  const cancelReservation = api.reservation.cancel.useMutation({
    onSuccess: () => {
      utils.reservation.getAll.invalidate();
    },
  });

  const utils = api.useContext();

  const handleStatusChange = async (id: string, status: ReservationStatus) => {
    try {
      await updateStatus.mutateAsync({ id, status });
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleCancel = async (id: string) => {
    if (window.confirm("Are you sure you want to cancel this reservation?")) {
      try {
        await cancelReservation.mutateAsync(id);
      } catch (error) {
        console.error("Failed to cancel reservation:", error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Reservations</h1>
        {session?.user.role === Role.PET_OWNER && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            {showForm ? "Cancel" : "New Reservation"}
          </button>
        )}
      </div>

      {showForm && (
        <div className="mb-8 rounded-lg border bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">New Reservation</h2>
          <ReservationForm onSuccess={() => setShowForm(false)} />
        </div>
      )}

      <div className="mb-4">
        <label className="mr-2 text-sm font-medium">Filter by status:</label>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value as ReservationStatus | "ALL")}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="ALL">All</option>
          {Object.values(ReservationStatus).map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Pet
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Kennel
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Payment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {reservations?.map((reservation) => (
                <tr key={reservation.id}>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div>
                      <div className="font-medium">{reservation.pet.name}</div>
                      <div className="text-sm text-gray-500">
                        {reservation.pet.breed}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div>
                      <div>
                        {new Date(reservation.startDate).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        to {new Date(reservation.endDate).toLocaleDateString()}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div>
                      <div>{reservation.kennel.name}</div>
                      <div className="text-sm text-gray-500">
                        {reservation.kennel.size}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {[Role.ADMIN, Role.STAFF, Role.MANAGER].includes(
                      session?.user.role as Role
                    ) ? (
                      <select
                        value={reservation.status}
                        onChange={(e) =>
                          handleStatusChange(
                            reservation.id,
                            e.target.value as ReservationStatus
                          )
                        }
                        className="rounded-md border-gray-300 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        {Object.values(ReservationStatus).map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span
                        className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          reservation.status === "CONFIRMED"
                            ? "bg-green-100 text-green-800"
                            : reservation.status === "PENDING"
                            ? "bg-yellow-100 text-yellow-800"
                            : reservation.status === "CANCELLED"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {reservation.status}
                      </span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        reservation.payment?.status === "PAID"
                          ? "bg-green-100 text-green-800"
                          : reservation.payment?.status === "PENDING"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {reservation.payment?.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {reservation.status === "PENDING" && (
                      <button
                        onClick={() => handleCancel(reservation.id)}
                        className="text-sm text-red-600 hover:text-red-900"
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
