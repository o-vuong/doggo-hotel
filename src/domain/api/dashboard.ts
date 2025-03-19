import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { ReservationStatus, KennelSize } from "@prisma/client";
import { TRPCError } from "@trpc/server";

export const dashboardRouter = createTRPCRouter({
  getMetrics: protectedProcedure.query(async ({ ctx }) => {
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const firstDayOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

    // Get active reservations
    const activeReservations = await ctx.prisma.reservation.count({
      where: {
        status: {
          in: [ReservationStatus.CONFIRMED, ReservationStatus.CHECKED_IN],
        },
        startDate: {
          lte: now,
        },
        endDate: {
          gte: now,
        },
      },
    });

    // Get last month's active reservations for trend
    const lastMonthReservations = await ctx.prisma.reservation.count({
      where: {
        status: {
          in: [ReservationStatus.CONFIRMED, ReservationStatus.CHECKED_IN],
        },
        startDate: {
          gte: firstDayOfLastMonth,
          lt: firstDayOfMonth,
        },
      },
    });

    // Calculate reservation trend
    const reservationTrend = lastMonthReservations 
      ? ((activeReservations - lastMonthReservations) / lastMonthReservations) * 100
      : 0;

    // Get total kennels and occupied kennels for occupancy rate
    const totalKennels = await ctx.prisma.kennel.count();
    const occupiedKennels = await ctx.prisma.kennel.count({
      where: {
        status: "OCCUPIED",
      },
    });
    const occupancyRate = Math.round((occupiedKennels / totalKennels) * 100);

    // Get revenue metrics
    const currentMonthRevenue = await ctx.prisma.payment.aggregate({
      where: {
        status: "PAID",
        createdAt: {
          gte: firstDayOfMonth,
        },
      },
      _sum: {
        amount: true,
      },
    });

    const lastMonthRevenue = await ctx.prisma.payment.aggregate({
      where: {
        status: "PAID",
        createdAt: {
          gte: firstDayOfLastMonth,
          lt: firstDayOfMonth,
        },
      },
      _sum: {
        amount: true,
      },
    });

    const revenueTrend = lastMonthRevenue._sum.amount
      ? ((currentMonthRevenue._sum.amount! - lastMonthRevenue._sum.amount) / lastMonthRevenue._sum.amount) * 100
      : 0;

    // Get available kennels
    const availableKennels = await ctx.prisma.kennel.count({
      where: {
        status: "AVAILABLE",
      },
    });

    return {
      activeReservations: {
        value: activeReservations,
        trend: Math.round(reservationTrend),
      },
      occupancyRate: {
        value: occupancyRate,
        trendLabel: `${occupiedKennels} out of ${totalKennels} kennels occupied`,
      },
      revenue: {
        value: Math.round(currentMonthRevenue._sum.amount || 0),
        trend: Math.round(revenueTrend),
      },
      availableKennels: {
        value: availableKennels,
        trendLabel: `${availableKennels} kennels ready for booking`,
      },
    };
  }),

  getRecentActivity: protectedProcedure.query(async ({ ctx }) => {
    const recentReservations = await ctx.prisma.reservation.findMany({
      where: {
        OR: [
          { status: ReservationStatus.CHECKED_IN },
          { status: ReservationStatus.CHECKED_OUT },
        ],
      },
      orderBy: {
        updatedAt: 'desc',
      },
      take: 5,
      include: {
        pet: {
          include: {
            owner: true,
          },
        },
        kennel: true,
      },
    });

    return recentReservations.map((reservation) => ({
      type: reservation.status === ReservationStatus.CHECKED_IN ? 'CHECK_IN' : 'CHECK_OUT',
      petName: reservation.pet.name,
      ownerName: reservation.pet.owner.email,
      kennelNumber: reservation.kennel.name,
      timestamp: reservation.updatedAt.toLocaleString(),
    }));
  }),

  getOccupancyData: protectedProcedure.query(async ({ ctx }) => {
    const now = new Date();
    const dates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      return date;
    }).reverse();

    const occupancyData = await Promise.all(
      dates.map(async (date) => {
        const nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 1);

        const occupiedKennels = await ctx.prisma.reservation.findMany({
          where: {
            startDate: {
              lte: nextDay,
            },
            endDate: {
              gte: date,
            },
            status: {
              in: [ReservationStatus.CHECKED_IN, ReservationStatus.CONFIRMED],
            },
          },
          include: {
            kennel: true,
          },
        });

        const bySize = occupiedKennels.reduce(
          (acc, reservation) => {
            const size = reservation.kennel.size;
            acc[size.toLowerCase() as Lowercase<KennelSize>] += 1;
            return acc;
          },
          { small: 0, medium: 0, large: 0 }
        );

        return {
          date: date.toLocaleDateString('en-US', { weekday: 'short' }),
          ...bySize,
        };
      })
    );

    return occupancyData;
  }),
});
