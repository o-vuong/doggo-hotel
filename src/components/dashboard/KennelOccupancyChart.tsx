import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { trpc } from '../../utils/trpc';

interface OccupancyData {
  date: string;
  occupied: number;
  available: number;
}

const KennelOccupancyChart: React.FC = () => {
  const { data: occupancyData, isLoading } = trpc.kennel.getOccupancyStats.useQuery();

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    );
  }

  const chartData: OccupancyData[] = occupancyData?.map(item => ({
    date: new Date(item.date).toLocaleDateString(),
    occupied: item.occupied,
    available: item.available,
  })) ?? [];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Kennel Occupancy</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="occupied" stackId="a" fill="#4F46E5" name="Occupied" />
            <Bar dataKey="available" stackId="a" fill="#93C5FD" name="Available" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default KennelOccupancyChart;
