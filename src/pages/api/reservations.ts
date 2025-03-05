import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { prisma } from '~/server/db';
import { withRole } from '~/server/middleware/rbac';
import { ReservationStatus } from '@prisma/client';

/**
 * API route to handle reservations
 * Only accessible by roles: Manager, Facility Admin, System Admin
 */
const handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void> = async (req, res) => {
  if (req.method === 'POST') {
    const { petId, kennelId, userId, startDate, endDate } = req.body;

    try {
      const reservation = await prisma.reservation.create({
        data: {
          petId,
          kennelId,
          userId,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          status: ReservationStatus.PENDING,
        },
      });

      res.status(201).json(reservation);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create reservation' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
  return Promise.resolve();
};

export default withRole(['Manager', 'Facility Admin', 'System Admin'])(handler); 