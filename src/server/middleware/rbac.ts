import { NextApiRequest, NextApiResponse } from 'next';
import { getServerAuthSession } from '~/server/auth';

/**
 * Middleware to enforce role-based access control (RBAC)
 *
 * @param {string[]} allowedRoles - Array of roles allowed to access the route
 * @returns {Function} Middleware function
 */
export function withRole(allowedRoles: string[]) {
  return (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
      const session = await getServerAuthSession({ req, res });

      if (!session || !allowedRoles.includes(session.user.role)) {
        res.status(403).json({ message: 'Forbidden' });
        return;
      }

      await handler(req, res);
    };
  };
} 