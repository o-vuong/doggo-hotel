import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpc';

export const dashboardRouter = router({
  getDashboardMetrics: protectedProcedure.query(async ({ ctx }) => {
    // Total revenue: sum of amounts for payments with status PAID
    const totalRevenueResult = await ctx.prisma.payment.aggregate({
      _sum: { amount: true },
      where: { status: 'PAID' }
    });
    const totalRevenue = totalRevenueResult._sum.amount || 0;

    // Occupancy rates per facility: for each facility, calculate occupancy rate = (# of active reservations / capacity) * 100
    const facilities = await ctx.prisma.facility.findMany({
      include: { reservations: true },
    });
    const occupancyRates = facilities.map(f => {
      const activeReservations = f.reservations.filter(r => r.status !== 'CANCELLED').length;
      const rate = f.capacity && f.capacity > 0 ? (activeReservations / f.capacity) * 100 : 0;
      return { facilityId: f.id, occupancyRate: rate };
    });

    // Booking trends: count reservations per day for the last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentReservations = await ctx.prisma.reservation.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
      select: { createdAt: true },
    });

    const bookingTrendsMap: Record<string, number> = {};
    recentReservations.forEach(res => {
      const day = res.createdAt.toISOString().split('T')[0];
      bookingTrendsMap[day] = (bookingTrendsMap[day] || 0) + 1;
    });
    const bookingTrends = Object.entries(bookingTrendsMap).map(([date, count]) => ({ date, count }));

    return {
      totalRevenue,
      occupancyRates,
      bookingTrends,
    };
  })
}); 