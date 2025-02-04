import { TRPCError } from '@trpc/server';
import { logger } from '../logger';

interface ErrorWithCode extends Error {
  code?: string;
}

export const errorHandler = {
  // Handle database errors
  handleDatabaseError: (error: ErrorWithCode) => {
    logger.error('Database error:', error);
    
    // Common Prisma error codes
    switch (error.code) {
      case 'P2002':
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'A unique constraint would be violated.',
        });
      case 'P2025':
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Record not found.',
        });
      default:
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected database error occurred.',
        });
    }
  },

  // Handle authentication errors
  handleAuthError: (error: Error) => {
    logger.error('Authentication error:', error);
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Authentication failed.',
    });
  },

  // Handle validation errors
  handleValidationError: (error: Error) => {
    logger.error('Validation error:', error);
    throw new TRPCError({
      code: 'BAD_REQUEST',
      message: error.message,
    });
  },

  // Handle Stripe errors
  handleStripeError: (error: ErrorWithCode) => {
    logger.error('Stripe error:', error);
    
    switch (error.code) {
      case 'card_declined':
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'The card was declined.',
        });
      case 'expired_card':
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'The card has expired.',
        });
      case 'incorrect_cvc':
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'The CVC number is incorrect.',
        });
      default:
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected payment processing error occurred.',
        });
    }
  },

  // Handle general application errors
  handleApplicationError: (error: Error) => {
    logger.error('Application error:', error);
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred.',
    });
  },
};

// Error handler middleware for tRPC procedures
export const errorMiddleware = async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    logger.error('Middleware caught error:', error);

    if (error instanceof TRPCError) {
      throw error;
    }

    // Handle different types of errors
    if ((error as ErrorWithCode).code?.startsWith('P')) {
      errorHandler.handleDatabaseError(error as ErrorWithCode);
    } else if (error.name === 'ValidationError') {
      errorHandler.handleValidationError(error);
    } else if (error.name === 'StripeError') {
      errorHandler.handleStripeError(error as ErrorWithCode);
    } else if (error.name === 'AuthenticationError') {
      errorHandler.handleAuthError(error);
    } else {
      errorHandler.handleApplicationError(error);
    }
  }
};
