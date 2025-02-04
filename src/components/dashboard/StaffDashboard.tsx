import React from 'react';
import { trpc } from '../../utils/trpc';
import { useSession } from 'next-auth/react';

const StaffDashboard: React.FC = () => {
  const { data: session } = useSession();
  const { data: kennels } = trpc.kennel.getAll.useQuery();
  const { data: reservations } = trpc.reservation.getAll.useQuery();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Staff Dashboard</h1>
      
      {/* Kennel Management Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Kennel Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {kennels?.map((kennel) => (
            <div key={kennel.id} className="p-4 border rounded-lg shadow">
              <h3 className="font-semibold">Kennel {kennel.id}</h3>
              <p>Size: {kennel.size}</p>
              <p>Status: {kennel.status}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reservations Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Today's Reservations</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Pet Name</th>
                <th className="px-4 py-2">Owner</th>
                <th className="px-4 py-2">Check-in</th>
                <th className="px-4 py-2">Check-out</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations?.map((reservation) => (
                <tr key={reservation.id}>
                  <td className="px-4 py-2">{reservation.pet.name}</td>
                  <td className="px-4 py-2">{reservation.user.email}</td>
                  <td className="px-4 py-2">{reservation.startDate.toLocaleDateString()}</td>
                  <td className="px-4 py-2">{reservation.endDate.toLocaleDateString()}</td>
                  <td className="px-4 py-2">{reservation.status}</td>
                  <td className="px-4 py-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                      Check-in
                    </button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded">
                      Check-out
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default StaffDashboard;
