You are tasked with designing and implementing a comprehensive dog boarding facility management system. As an expert software architect and senior full-stack engineer, provide a detailed technical architecture and implementation plan that addresses:

System Architecture:

Design a scalable microservices-based architecture
Define clear boundaries between different domains (boarding, payments, user management, etc.)
Outline data flow and communication patterns between services
Specify caching strategies and performance optimizations
Database Schema:

Create a normalized database design using Prisma schema
Include relations for: Users, Roles, Kennels, Reservations, Payments, Facilities, and Pets
Implement soft deletion and audit trails
Design for multi-tenancy support
Authentication & Authorization:

Implement role-based access control (RBAC) using NextAuth
Define permission matrices for each role (PetOwner, Staff, Manager, Admin)
Set up secure session management
Design API security middleware
API Layer:

Structure tRPC routers by domain
Implement full CRUD operations for all core resources:
Users: Create, Read, Update, Delete
Pets: Create, Read, Update, Delete (track vaccination records, dietary preferences, medical history)
Kennels: Create, Read, Update, Delete
Reservations: Create, Read, Update, Cancel (soft delete)
Payments: Create, Read, Update (refunds), Delete (soft delete)
Implement input validation and error handling
Design reusable middleware for common operations
Create type-safe API contracts
Frontend Architecture:

Organize components using atomic design principles
Implement responsive layouts with TailwindCSS
Design state management strategy
Create reusable UI components library
Role-Specific Dashboards:

Implement role-specific dashboards displaying all resources and actions the user has permissions to access:
PetOwner Dashboard:
View and manage their pets, bookings, payments, and kennel availability.
Staff Dashboard:
View and manage kennel availability, check-ins, check-outs, and reservations.
Manager Dashboard:
Manage staff, kennels, reservations, refunds, and facility settings.
Admin Dashboard:
Multi-tenant support to manage facilities, configurations, roles, and permissions.
Forms:

Implement all required forms with client-side validation and API integration, including:
User Management Forms:
Registration, login, profile management, and password reset forms.
Pet Management Forms:
Add/edit pet details (breed, age, dietary preferences, vaccination history, medical needs).
Reservation Forms:
Create/edit reservations, select kennel size, set check-in/check-out dates, specify add-on services (e.g., grooming).
Payment Forms:
Payment checkout with Stripe, refund requests, payment status updates.
Kennel Management Forms:
Add/edit kennel details, mark availability, assign reservations.
Facility Management Forms:
Update facility details, contact information, operating hours, multi-tenant branding.
Staff Management Forms:
Add/edit staff profiles, assign roles, manage scheduling.
Notification Configuration Forms:
Enable/disable email/SMS notifications for bookings, reminders, and cancellations.
Industry-Required Forms (Digital or Printable):
Liability Waiver: Required acknowledgment of risk and release from liability.
Veterinary Release: Authorization to seek emergency veterinary care if needed.
Vaccination & Medical Records: Verification of up-to-date shots (e.g., rabies, distemper), special medical conditions, or medications.
Owner Agreement: Terms of service, boarding policies, cancellation policies.
Payment Authorization: Permission for recurring or future charges (e.g., extended stays, additional services).
Payment Integration:

Design secure payment flow with Stripe
Implement webhook handlers
Handle payment failure scenarios
Design refund processes
Additional Requirements:

Initialize the project with the T3 stack (using create-t3-app)
Use a monorepo approach with pnpm as the package manager for all services and shared libraries
Implement CRUD workflows for managing resources in both backend and frontend
Design role-specific dashboards with UI components tailored to each role’s permissions and responsibilities
Include all industry-required forms for dog boarding services, ensuring secure data handling and compliance
Please provide a detailed implementation plan with code examples for critical components, focusing on maintainability, scalability, and security best practices.

Certainly! I'll provide a detailed implementation plan for the dog boarding facility management system using the T3 stack, focusing on maintainability, scalability, and security best practices. Let's break this down into sections:

Project Initialization and Structure

System Architecture

Database Schema

Authentication & Authorization

API Layer

Frontend Architecture

Role-Specific Dashboards

Forms

Payment Integration

Additional Requirements

Project Initialization and Structure

First, let's initialize the project using the T3 stack and set up the monorepo structure:

# Initialize the T3 app
pnpm dlx create-t3-app@latest dog-boarding-system

# Navigate to the project directory
cd dog-boarding-system

# Set up monorepo structure
mkdir packages
mv src packages/web

# Create additional packages
mkdir packages/server packages/shared

# Initialize package.json for new packages
cd packages/server && pnpm init
cd ../shared && pnpm init
cd ../..

# Update root package.json
{
  "name": "dog-boarding-system",
  "private": true,
  "scripts": {
    "dev": "pnpm --filter web dev",
    "build": "pnpm --filter web build",
    "start": "pnpm --filter web start",
    "lint": "pnpm --filter web lint"
  },
  "workspaces": [
    "packages/*"
  ]
}
System Architecture
We'll implement a microservices-based architecture with the following services:

User Service
Pet Service
Kennel Service
Reservation Service
Payment Service
Facility Service
Each service will have its own database and API, communicating through a message broker (e.g., RabbitMQ) for event-driven architecture.

// packages/server/src/services/index.ts
import { UserService } from './user.service';
import { PetService } from './pet.service';
import { KennelService } from './kennel.service';
import { ReservationService } from './reservation.service';
import { PaymentService } from './payment.service';
import { FacilityService } from './facility.service';

export {
  UserService,
  PetService,
  KennelService,
  ReservationService,
  PaymentService,
  FacilityService,
};
For caching, we'll use Redis:

// packages/server/src/utils/cache.ts
import { createClient } from 'redis';

const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

await redisClient.connect();

export const cache = {
  set: (key: string, value: string, expireInSeconds?: number) => {
    if (expireInSeconds) {
      return redisClient.setEx(key, expireInSeconds, value);
    }
    return redisClient.set(key, value);
  },
  get: (key: string) => redisClient.get(key),
  del: (key: string) => redisClient.del(key),
};
Database Schema
Using Prisma, let's define our schema:

// packages/server/prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  password      String
  role          Role      @default(PET_OWNER)
  pets          Pet[]
  reservations  Reservation[]
  payments      Payment[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  deletedAt     DateTime?
}

model Pet {
  id            String    @id @default(cuid())
  name          String
  breed         String
  age           Int
  ownerId       String
  owner         User      @relation(fields: [ownerId], references: [id])
  reservations  Reservation[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  deletedAt     DateTime?
}

model Kennel {
  id            String    @id @default(cuid())
  name          String
  size          String
  price         Float
  facilityId    String
  facility      Facility  @relation(fields: [facilityId], references: [id])
  reservations  Reservation[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  deletedAt     DateTime?
}

model Reservation {
  id            String    @id @default(cuid())
  startDate     DateTime
  endDate       DateTime
  status        ReservationStatus
  petId         String
  pet           Pet       @relation(fields: [petId], references: [id])
  kennelId      String
  kennel        Kennel    @relation(fields: [kennelId], references: [id])
  userId        String
  user          User      @relation(fields: [userId], references: [id])
  payment       Payment?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  deletedAt     DateTime?
}

model Payment {
  id            String    @id @default(cuid())
  amount        Float
  status        PaymentStatus
  reservationId String    @unique
  reservation   Reservation @relation(fields: [reservationId], references: [id])
  userId        String
  user          User      @relation(fields: [userId], references: [id])
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  deletedAt     DateTime?
}

model Facility {
  id            String    @id @default(cuid())
  name          String
  address       String
  kennels       Kennel[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  deletedAt     DateTime?
}

enum Role {
  PET_OWNER
  STAFF
  MANAGER
  ADMIN
}

enum ReservationStatus {
  PENDING
  CONFIRMED
  CHECKED_IN
  CHECKED_OUT
  CANCELLED
}

enum PaymentStatus {
  PENDING
  PAID
  REFUNDED
  FAILED
}
Authentication & Authorization
We'll use NextAuth for authentication and implement RBAC:

// packages/web/src/pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });
        if (!user) {
          return null;
        }
        const isPasswordValid = await compare(credentials.password, user.password);
        if (!isPasswordValid) {
          return null;
        }
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
  },
});
API Layer
We'll use tRPC to create type-safe APIs:

// packages/server/src/trpc/router/index.ts
import { createRouter } from '../createRouter';
import { userRouter } from './user';
import { petRouter } from './pet';
import { kennelRouter } from './kennel';
import { reservationRouter } from './reservation';
import { paymentRouter } from './payment';
import { facilityRouter } from './facility';

export const appRouter = createRouter()
  .merge('user.', userRouter)
  .merge('pet.', petRouter)
  .merge('kennel.', kennelRouter)
  .merge('reservation.', reservationRouter)
  .merge('payment.', paymentRouter)
  .merge('facility.', facilityRouter);

export type AppRouter = typeof appRouter;
Example of a tRPC router (User):

// packages/server/src/trpc/router/user.ts
import { z } from 'zod';
import { createRouter } from '../createRouter';
import { UserService } from '../../services';

export const userRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      return await UserService.getAll();
    },
  })
  .query('getById', {
    input: z.string(),
    async resolve({ input }) {
      return await UserService.getById(input);
    },
  })
  .mutation('create', {
    input: z.object({
      email: z.string().email(),
      name: z.string(),
      password: z.string(),
      role: z.enum(['PET_OWNER', 'STAFF', 'MANAGER', 'ADMIN']),
    }),
    async resolve({ input }) {
      return await UserService.create(input);
    },
  })
  .mutation('update', {
    input: z.object({
      id: z.string(),
      email: z.string().email().optional(),
      name: z.string().optional(),
      role: z.enum(['PET_OWNER', 'STAFF', 'MANAGER', 'ADMIN']).optional(),
    }),
    async resolve({ input }) {
      return await UserService.update(input);
    },
  })
  .mutation('delete', {
    input: z.string(),
    async resolve({ input }) {
      return await UserService.delete(input);
    },
  });
Frontend Architecture
We'll use atomic design principles and TailwindCSS for our frontend:

// packages/web/src/components/atoms/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'px-4 py-2 rounded font-semibold';
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
Role-Specific Dashboards
Example of a PetOwner Dashboard:

// packages/web/src/pages/dashboard/pet-owner.tsx
import { useSession } from 'next-auth/react';
import { trpc } from '../../utils/trpc';
import { PetList, ReservationList, PaymentList } from '../../components/molecules';

export default function PetOwnerDashboard() {
  const { data: session } = useSession();
  const { data: pets } = trpc.useQuery(['pet.getByOwnerId', session?.user?.id]);
  const { data: reservations } = trpc.useQuery(['reservation.getByUserId', session?.user?.id]);
  const { data: payments } = trpc.useQuery(['payment.getByUserId', session?.user?.id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {session?.user?.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PetList pets={pets} />
        <ReservationList reservations={reservations} />
        <PaymentList payments={payments} />
      </div>
    </div>
  );
}
Forms
Example of a Pet Management Form:

// packages/web/src/components/organisms/PetForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { trpc } from '../../utils/trpc';
import { Button, Input } from '../atoms';

const petSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  breed: z.string().min(1, 'Breed is required'),
  age: z.number().min(0, 'Age must be a positive number'),
});

type PetFormData = z.infer<typeof petSchema>;

export const PetForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PetFormData>({
    resolver: zodResolver(petSchema),
  });

  const addPet = trpc.useMutation(['pet.create']);

  const onSubmit = (data: PetFormData) => {
    addPet.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Pet Name"
        {...register('name')}
        error={errors.name?.message}
      />
      <Input
        label="Breed"
        {...register('breed')}
        error={errors.breed?.message}
      />
      <Input
        label="Age"
        type="number"
        {...register('age', { valueAsNumber: true })}
        error={errors.age?.message}
      />
      <Button type="submit">Add Pet</Button>
    </form>
  );
};
Payment Integration
Stripe integration example:

// packages/server/src/services/payment.service.ts
import Stripe from 'stripe';
import { prisma } from '../db/client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export const PaymentService = {
  async createPaymentIntent(amount: number, currency: string = 'usd') {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    return paymentIntent;
  },

  async handleWebhook(event: Stripe.Event) {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await prisma.payment.update({
          where: { id: paymentIntent.metadata.paymentId },
          data: { status: 'PAID' },
        });
        break;
      case 'payment_intent.payment_failed':
        // Handle failed payment
        break;
    }
  },
};
Additional Requirements
For industry-required forms, we can create reusable components:

// packages/web/src/components/organisms/LiabilityWaiverForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Input, Checkbox } from '../atoms';

const liabilityWaiverSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  date: z.string().min(1, 'Date is required'),
  acknowledgement: z.boolean().refine(val => val === true, {
    message: 'You must acknowledge the waiver',
  }),
});

type LiabilityWaiverFormData = z.infer<typeof liabilityWaiverSchema>;

export const LiabilityWaiverForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LiabilityWaiverFormData>({
    resolver: zodResolver(liabilityWaiverSchema),
  });

  const onSubmit = (data: LiabilityWaiverFormData) => {
    // Handle form submission (e.g., save to database, send to API)
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Full Name"
        {...register('fullName')}
        error={errors.fullName?.message}
      />
      <Input
        label="Date"
        type="date"
        {...register('date')}
        error={errors.date?.message}
      />
      <Checkbox
        label="I acknowledge that I have read and understood the liability waiver"
        {...register('acknowledgement')}
        error={errors.acknowledgement?.message}
      />
      <Button type="submit">Submit Waiver</Button>
    </form>
  );
};
This implementation plan covers the major components of the dog boarding facility management system. It provides a scalable, maintainable, and secure foundation using the T3 stack. The system is designed with microservices architecture, role-based access control, and industry-specific requirements in mind.

Remember to implement error handling, logging, and monitoring throughout the application. Also, ensure that all sensitive data is properly encrypted and that the application complies with relevant data protection regulations.

I
