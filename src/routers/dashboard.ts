import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpc';
 
import { subDays } from 'date-fns';

/**
 * Dashboard Router
 *
 * Provides aggregated metrics for dashboard visualizations. These include:
 * - Total revenue from PAID payments
 * - Occupancy rates per facility
 * - Recent bookings count (in the last 30 days)
 */
export const dashboardRouter = router({
    getDashboardMetrics: protectedProcedure.query(async ({ ctx }) => {
        // Aggregate total revenue from payments with status 'PAID'
        const totalRevenueAgg = await ctx.prisma.payment.aggregate({
            _sum: { amount: true },
            where: { status: 'PAID' },
        });
        const totalRevenue = totalRevenueAgg._sum.amount || 0;

        // Retrieve facilities to calculate occupancy rates
        const facilities = await ctx.prisma.facility.findMany({
            include: {
                kennels: true,
                reservations: true,
            },
        });
        const occupancyRates = facilities.map(facility => {
            const totalKennels = facility.kennels.length;
            // Count reservations that indicate a kennel is reserved (not available) -- using status check
            const reservedKennels = facility.reservations.filter(r => r.status === 'CHECKED_IN').length;
            return {
                facilityId: facility.id,
                occupancy: totalKennels > 0 ? (reservedKennels / totalKennels) * 100 : 0,
            };
        });

        // Count recent bookings in the last 30 days
        const thirtyDaysAgo = subDays(new Date(), 30);
        const recentBookings = await ctx.prisma.reservation.count({
            where: { createdAt: { gte: thirtyDaysAgo } },
        });

        const marketingContent = await ctx.prisma.marketingContent.findFirst({
            orderBy: { updatedAt: 'desc' },
        });
        const marketingCopy = marketingContent?.content ?? '';

        return {
            totalRevenue,
            occupancyRates,
            recentBookings,
            marketingCopy
        };
    }),
}); 