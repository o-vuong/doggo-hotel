import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { MainDashboard } from "~/components/dashboard/MainDashboard";
import { api } from "~/utils/api";

const Dashboard: NextPage = () => {
  const { data: session } = useSession();
  const { data: metrics } = api.dashboard.getMetrics.useQuery(undefined, {
    enabled: !!session,
  });
  const { data: recentActivity } = api.dashboard.getRecentActivity.useQuery(undefined, {
    enabled: !!session,
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
