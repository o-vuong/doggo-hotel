import React from 'react';
import { trpc } from '../../utils/trpc';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  loading?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, loading }) => {
  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-3/4"></div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className={`ml-2 flex items-baseline text-sm font-semibold ${
          change >= 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
        </p>
      </div>
    </div>
  );
};

const RevenueMetrics: React.FC = () => {
  const { data: metrics, isLoading: metricsLoading } = trpc.revenue.getMetrics.useQuery();
  const { data: revenueHistory, isLoading: historyLoading } = trpc.revenue.getHistory.useQuery();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Monthly Revenue"
          value={metricsLoading ? '-' : formatCurrency(metrics?.monthlyRevenue ?? 0)}
          change={metrics?.monthlyChange ?? 0}
          loading={metricsLoading}
        />
        <MetricCard
          title="Average Daily Revenue"
          value={metricsLoading ? '-' : formatCurrency(metrics?.avgDailyRevenue ?? 0)}
          change={metrics?.dailyChange ?? 0}
          loading={metricsLoading}
        />
        <MetricCard
          title="Outstanding Payments"
          value={metricsLoading ? '-' : formatCurrency(metrics?.outstandingPayments ?? 0)}
          change={metrics?.outstandingChange ?? 0}
          loading={metricsLoading}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Trend</h3>
        <div className="h-64">
          {historyLoading ? (
            <div className="animate-pulse h-full bg-gray-200 rounded"></div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={revenueHistory}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(date) => new Date(date).toLocaleDateString()}
                />
                <YAxis
                  tickFormatter={(value) => formatCurrency(value)}
                />
                <Tooltip
                  formatter={(value: number) => [formatCurrency(value), 'Revenue']}
                  labelFormatter={(label) => new Date(label).toLocaleDateString()}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#4F46E5"
                  name="Revenue"
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Status</h3>
          <div className="space-y-4">
            {!metricsLoading && metrics?.paymentStatus && (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Paid</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(metrics.paymentStatus.paid)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Pending</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(metrics.paymentStatus.pending)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Overdue</span>
                  <span className="text-sm font-medium text-red-600">
                    {formatCurrency(metrics.paymentStatus.overdue)}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Sources</h3>
          <div className="space-y-4">
            {!metricsLoading && metrics?.revenueSources && (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Boarding</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(metrics.revenueSources.boarding)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Additional Services</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(metrics.revenueSources.additionalServices)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Other</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(metrics.revenueSources.other)}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueMetrics;
