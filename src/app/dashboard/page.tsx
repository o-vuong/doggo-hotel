import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

async function getStats() {
  const [totalPets, totalReservations, totalFacilities, reservationsByStatus] =
    await Promise.all([
      prisma.pet.count(),
      prisma.reservation.count(),
      prisma.facility.count(),
      prisma.reservation.groupBy({
        by: ["status"],
        _count: true,
      }),
    ]);

  return {
    totalPets,
    totalReservations,
    totalFacilities,
    reservationsByStatus,
  };
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const stats = await getStats();

  const chartData = [
    {
      name: "Pending",
      value:
        stats.reservationsByStatus.find((s) => s.status === "PENDING")
          ?._count || 0,
    },
    {
      name: "Confirmed",
      value:
        stats.reservationsByStatus.find((s) => s.status === "CONFIRMED")
          ?._count || 0,
    },
    {
      name: "Completed",
      value:
        stats.reservationsByStatus.find((s) => s.status === "COMPLETED")
          ?._count || 0,
    },
    {
      name: "Cancelled",
      value:
        stats.reservationsByStatus.find((s) => s.status === "CANCELLED")
          ?._count || 0,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Total Pets
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {stats.totalPets}
          </dd>
        </div>

        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Total Reservations
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {stats.totalReservations}
          </dd>
        </div>

        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Total Facilities
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {stats.totalFacilities}
          </dd>
        </div>
      </dl>

      <div className="mt-8">
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Reservations by Status
          </h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#0D9488"
                  fill="#0D9488"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
