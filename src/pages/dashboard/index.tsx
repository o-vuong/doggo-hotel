import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { MainDashboard } from "~/components/dashboard/MainDashboard";
import { api } from "~/utils/api";

const Dashboard: NextPage = () => {
  const { data: session } = useSession();
  const { data: metrics } = api.dashboard.getMetrics.useQuery(undefined, {
    enabled: !!session,
    select: (data) => ({
      activeReservations: {
        label: "Active Reservations",
        value: data.activeReservations.value,
        trend: data.activeReservations.trend
      },
      occupancyRate: {
        label: "Occupancy Rate",
        value: data.occupancyRate.value,
        trendLabel: data.occupancyRate.trendLabel
      },
      revenue: {
        label: "Revenue",
        value: data.revenue.value,
        trend: data.revenue.trend
      },
      availableKennels: {
        label: "Available Kennels",
        value: data.availableKennels.value,
        trendLabel: data.availableKennels.trendLabel
      }
    })
  });

  const { data: recentActivity } = api.dashboard.getRecentActivity.useQuery(undefined, {
    enabled: !!session,
    select: (data) => data.map(activity => ({
      type: activity.type as 'CHECK_IN' | 'CHECK_OUT',
      petName: activity.petName,
      ownerName: activity.ownerName,
      kennelNumber: activity.kennelNumber,
      timestamp: activity.timestamp
    }))
  });
  const { data: occupancyData } = api.dashboard.getOccupancyData.useQuery(undefined, {
    enabled: !!session,
  });

  if (!metrics || !recentActivity || !occupancyData) {
    return (
      <DashboardLayout>
        <div className="flex h-full items-center justify-center">
          <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <MainDashboard
        metrics={metrics}
        recentActivity={recentActivity}
        occupancyData={occupancyData}
      />
    </DashboardLayout>
  );
};

export default Dashboard;
