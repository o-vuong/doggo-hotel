import React from 'react';
import { trpc } from '../../utils/trpc';
import { useSession } from 'next-auth/react';

const ManagerDashboard: React.FC = () => {
  const { data: session } = useSession();
  const { data: staff } = trpc.user.getAllStaff.useQuery();
  const { data: kennels } = trpc.kennel.getAll.useQuery();
  const { data: reservations } = trpc.reservation.getAll.useQuery();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manager Dashboard</h1>
      
      {/* Staff Management Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Staff Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {staff?.map((member) => (
            <div key={member.id} className="p-4 border rounded-lg shadow">
              <h3 className="font-semibold">{member.name}</h3>
              <p>Email: {member.email}</p>
              <p>Role: {member.role}</p>
              <div className="mt-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facility Management Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Facility Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Kennel Statistics */}
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Kennel Statistics</h3>
            <p>Total Kennels: {kennels?.length}</p>
            <p>Available: {kennels?.filter(k => k.status === 'AVAILABLE').length}</p>
            <p>Occupied: {kennels?.filter(k => k.status === 'OCCUPIED').length}</p>
          </div>
          
          {/* Revenue Statistics */}
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Revenue Statistics</h3>
            <p>Today's Revenue: $XXX</p>
            <p>Monthly Revenue: $XXX</p>
            <p>Pending Payments: X</p>
          </div>
        </div>
      </section>

      {/* Reservations Overview */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Reservations Overview</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Pet</th>
                <th className="px-4 py-2">Owner</th>
                <th className="px-4 py-2">Dates</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Payment</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations?.map((reservation) => (
                <tr key={reservation.id}>
                  <td className="px-4 py-2">{reservation.id}</td>
                  <td className="px-4 py-2">{reservation.pet.name}</td>
                  <td className="px-4 py-2">{reservation.user.email}</td>
                  <td className="px-4 py-2">
                    {reservation.startDate.toLocaleDateString()} - 
                    {reservation.endDate.toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">{reservation.status}</td>
                  <td className="px-4 py-2">{reservation.payment.status}</td>
                  <td className="px-4 py-2">
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Cancel
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

export default ManagerDashboard;
