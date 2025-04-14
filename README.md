# 🐕 Doggo Hotel - Pet Boarding Management System

A comprehensive dog boarding facility management system built with the T3 Stack. This system allows pet owners to book boarding services for their dogs, while providing staff with tools to manage kennels, reservations, and payments.

## 🌟 Features

### For Pet Owners

- 🐾 Register and manage multiple pets
- 📅 Book boarding reservations
- 💳 Process payments securely
- 📱 View booking history and status
- 🏷️ Add special care instructions

### For Staff

- 🏠 Manage kennel availability
- ✅ Process check-ins and check-outs
- 📊 View daily occupancy
- 🔔 Receive booking notifications
- 📝 Update booking status

### For Managers/Admins

- 👥 Manage staff accounts
- 💰 Set pricing and services
- 📈 View reports and analytics
- ⚙️ Configure facility settings
- 🏷️ Manage add-on services

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) with [TypeScript](https://www.typescriptlang.org)
- **API**: [tRPC](https://trpc.io) for end-to-end type safety
- **Database**: [PostgreSQL](https://www.postgresql.org) with [Prisma](https://prisma.io)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Payments**: [Stripe](https://stripe.com)
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Custom components with Radix UI primitives

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- PostgreSQL
- pnpm
- Stripe account (for payments)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/doggo-hotel.git
cd doggo-hotel
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Update the .env file with your configuration:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/doggo_hotel"

# NextAuth
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# Stripe
STRIPE_SECRET_KEY="your-stripe-secret-key"
STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"
STRIPE_PUBLIC_KEY="your-stripe-public-key"
```

5. Initialize the database:

```bash
pnpm db:push   # Push the schema to the database
pnpm db:seed   # Seed initial data
```

6. Start the development server:

```bash
pnpm dev
```

## 📁 Project Structure

```
doggo-hotel/
├── prisma/                # Database schema and migrations
│   ├── schema.prisma     # Database schema
│   └── seed.ts          # Seed data
├── public/               # Static files
├── src/
│   ├── components/       # React components
│   │   ├── forms/       # Form components
│   │   ├── layout/      # Layout components
│   │   └── ui/          # UI components
│   ├── pages/           # Next.js pages
│   │   ├── api/         # API routes
│   │   ├── auth/        # Authentication pages
│   │   └── dashboard/   # Dashboard pages
│   ├── server/          # Server-side code
│   │   ├── api/         # tRPC API definitions
│   │   └── auth.ts      # Authentication configuration
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
└── package.json         # Project dependencies
```

## 🔐 Authentication

The system uses NextAuth.js with a custom credential provider:

- **Roles**: PET_OWNER, STAFF, MANAGER, ADMIN
- **Sessions**: JWT-based with role information
- **Registration**: Custom implementation with password hashing
- **Protection**: Route-based and component-level protection

## 📊 Database Schema

Key models in the system:

- **User**: Account information and role
- **Pet**: Pet profiles and medical information
- **Kennel**: Boarding spaces and availability
- **Reservation**: Booking information
- **Payment**: Transaction records
- **Facility**: Location and operating hours
- **AddOnService**: Additional services

## 🔄 API Routes

The system uses tRPC for type-safe API routes:

- **/api/auth**: Authentication and user management
- **/api/pets**: Pet profile management
- **/api/kennels**: Kennel management
- **/api/reservations**: Booking management
- **/api/payments**: Payment processing

## 💳 Payment Integration

Stripe integration for secure payments:

- Secure payment processing
- Webhook handling
- Refund management
- Payment history

## 📱 Responsive Design

The system is fully responsive with:

- Mobile-first approach
- Responsive navigation
- Touch-friendly interfaces
- Adaptive layouts

## 🧪 Testing

Run the test suite:

```bash
pnpm test        # Run all tests
pnpm test:watch  # Run tests in watch mode
```

## 🚀 Deployment

1. Build the application:

```bash
pnpm build
```

2. Start the production server:

```bash
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- T3 Stack creators
- NextAuth.js team
- Prisma team
- Tailwind CSS team
- Stripe team

## 📞 Support

For support, email support@doggohotel.com or join our Slack channel.

## PWA Setup
The app is configured as a Progressive Web App (PWA). To complete the setup:

1. Replace the placeholder icons in `public/icons/` with your actual app icons:
   - `icon-192x192.png`
   - `icon-512x512.png`
   
   These icons are currently placeholders and should be replaced with your branded icons before production deployment.
