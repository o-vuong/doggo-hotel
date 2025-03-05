Project Path: pet-boarding-system

Source Tree:

```
pet-boarding-system
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── prettier.config.js
├── prisma
│   ├── migrations
│   │   ├── 20241208121707_init
│   │   │   └── migration.sql
│   │   ├── 20241208124443_add_password_reset
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── public
│   └── favicon.ico
├── README.md
├── src
│   ├── app
│   │   ├── _components
│   │   │   └── post.tsx
│   │   ├── api
│   │   │   ├── auth
│   │   │   │   ├── [...nextauth]
│   │   │   │   │   └── route.ts
│   │   │   │   ├── forgot-password
│   │   │   │   │   └── route.ts
│   │   │   │   ├── reset-password
│   │   │   │   │   └── route.ts
│   │   │   │   └── signup
│   │   │   │       └── route.ts
│   │   │   └── trpc
│   │   │       └── [trpc]
│   │   │           └── route.ts
│   │   ├── auth
│   │   │   ├── forgot-password
│   │   │   │   └── page.tsx
│   │   │   ├── reset-password
│   │   │   │   └── page.tsx
│   │   │   ├── signin
│   │   │   │   └── page.tsx
│   │   │   └── signup
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── layout
│   │   │   ├── layout.tsx
│   │   │   └── navbar.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── spinner.tsx
│   │       └── table.tsx
│   ├── env.js
│   ├── server
│   │   ├── api
│   │   │   ├── root.ts
│   │   │   ├── routers
│   │   │   │   ├── booking.ts
│   │   │   │   ├── facility.ts
│   │   │   │   ├── payment.ts
│   │   │   │   ├── pet.ts
│   │   │   │   ├── post.ts
│   │   │   │   └── user.ts
│   │   │   └── trpc.ts
│   │   ├── auth
│   │   │   ├── config.ts
│   │   │   └── index.ts
│   │   └── db.ts
│   ├── styles
│   │   └── globals.css
│   ├── trpc
│   │   ├── query-client.ts
│   │   ├── react.tsx
│   │   └── server.ts
│   └── utils
│       └── cn.ts
├── start-database.sh
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/next.config.js`:

```js
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {};

export default config;

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/package.json`:

```json
{
  "name": "pet-boarding-system",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "next build",
    "check": "next lint && tsc --noEmit",
    "db:generate": "prisma migrate dev",
    "db:migrate": "prisma migrate deploy",
    "db:push": "prisma db push",
    "db:studio": "prisma studio",
    "dev": "next dev --turbo",
    "format:check": "prettier --check \"**/*.{ts,tsx,js,jsx,mdx}\" --cache",
    "format:write": "prettier --write \"**/*.{ts,tsx,js,jsx,mdx}\" --cache",
    "postinstall": "prisma generate",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "preview": "next build && next start",
    "start": "next start",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@auth/prisma-adapter": "^2.7.2",
    "@prisma/client": "^5.14.0",
    "@sentry/nextjs": "^8.42.0",
    "@t3-oss/env-nextjs": "^0.10.1",
    "@tanstack/react-query": "^5.50.0",
    "@trpc/client": "^11.0.0-rc.446",
    "@trpc/react-query": "^11.0.0-rc.446",
    "@trpc/server": "^11.0.0-rc.446",
    "@upstash/ratelimit": "^2.0.5",
    "bcrypt": "^5.1.1",
    "clsx": "^2.1.1",
    "geist": "^1.3.0",
    "ioredis": "^5.4.1",
    "next": "^15.0.1",
    "next-auth": "5.0.0-beta.25",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "server-only": "^0.0.1",
    "stripe": "^17.4.0",
    "superjson": "^2.2.1",
    "tailwind-merge": "^2.5.5",
    "zod": "^3.23.3"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.2",
    "@types/eslint": "^8.56.10",
    "@types/node": "^20.14.10",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^8.1.0",
    "@typescript-eslint/parser": "^8.1.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^15.0.1",
    "postcss": "^8.4.39",
    "prettier": "^3.3.2",
    "prettier-plugin-tailwindcss": "^0.6.5",
    "prisma": "^5.14.0",
    "tailwindcss": "^3.4.3",
    "typescript": "^5.5.3"
  },
  "ct3aMetadata": {
    "initVersion": "7.38.1"
  },
  "packageManager": "pnpm@9.14.2"
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/postcss.config.js`:

```js
export default {
  plugins: {
    tailwindcss: {},
  },
};

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/prettier.config.js`:

```js
/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
};

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/prisma/migrations/20241208124443_add_password_reset/migration.sql`:

```sql
-- CreateTable
CREATE TABLE "PasswordReset" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PasswordReset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PasswordReset_token_key" ON "PasswordReset"("token");

-- CreateIndex
CREATE INDEX "PasswordReset_token_idx" ON "PasswordReset"("token");

-- CreateIndex
CREATE INDEX "PasswordReset_userId_idx" ON "PasswordReset"("userId");

-- AddForeignKey
ALTER TABLE "PasswordReset" ADD CONSTRAINT "PasswordReset_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/prisma/migrations/migration_lock.toml`:

```toml
# Please do not edit this file manually
# It should be added in your version-control system (i.e. Git)
provider = "postgresql"
```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/README.md`:

```md
# Create T3 App|

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/_components/post.tsx`:

```tsx
"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export function LatestPost() {
  const [latestPost] = api.post.getLatest.useSuspenseQuery();

  const utils = api.useUtils();
  const [name, setName] = useState("");
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
      setName("");
    },
  });

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ name });
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-black"
        />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createPost.isPending}
        >
          {createPost.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/api/auth/[...nextauth]/route.ts`:

```ts
import { handlers } from "~/server/auth";

export const { GET, POST } = handlers;

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/api/auth/forgot-password/route.ts`:

```ts
import { randomBytes } from "crypto";
import { type NextRequest } from "next/server";
import { z } from "zod";
import { db } from "~/server/db";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = {
      email: formData.get("email"),
    };

    const result = forgotPasswordSchema.safeParse(data);
    if (!result.success) {
      return Response.json(
        { error: result.error.issues[0]?.message ?? "Invalid data" },
        { status: 400 },
      );
    }

    const user = await db.user.findUnique({
      where: { email: result.data.email },
    });

    if (!user) {
      // Don't reveal that the email doesn't exist
      return Response.json(
        { message: "If an account exists with this email, you will receive a password reset link" },
        { status: 200 },
      );
    }

    const token = randomBytes(32).toString("hex");
    const expires = new Date();
    expires.setHours(expires.getHours() + 1); // Token expires in 1 hour

    await db.passwordReset.create({
      data: {
        token,
        expires,
        userId: user.id,
      },
    });

    // TODO: Send email with reset link
    // For now, just redirect to the reset page with the token
    return Response.redirect(
      new URL(`/auth/reset-password?token=${token}`, req.url),
    );
  } catch (error) {
    console.error("Forgot password error:", error);
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/api/auth/reset-password/route.ts`:

```ts
import { hash } from "bcrypt";
import { type NextRequest } from "next/server";
import { z } from "zod";
import { db } from "~/server/db";

const resetPasswordSchema = z.object({
  token: z.string().min(1, "Token is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = {
      token: formData.get("token"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    const result = resetPasswordSchema.safeParse(data);
    if (!result.success) {
      return Response.json(
        { error: result.error.issues[0]?.message ?? "Invalid data" },
        { status: 400 },
      );
    }

    const passwordReset = await db.passwordReset.findFirst({
      where: {
        token: result.data.token,
        expires: { gt: new Date() },
        used: false,
      },
      include: { user: true },
    });

    if (!passwordReset) {
      return Response.json(
        { error: "Invalid or expired token" },
        { status: 400 },
      );
    }

    const hashedPassword = await hash(result.data.password, 10);
    await db.$transaction([
      db.user.update({
        where: { id: passwordReset.userId },
        data: { password: hashedPassword },
      }),
      db.passwordReset.update({
        where: { id: passwordReset.id },
        data: { used: true },
      }),
    ]);

    return Response.redirect(new URL("/auth/signin", req.url));
  } catch (error) {
    console.error("Reset password error:", error);
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/api/auth/signup/route.ts`:

```ts
import { hash } from "bcrypt";
import { type NextRequest } from "next/server";
import { z } from "zod";
import { db } from "~/server/db";

const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    const result = signUpSchema.safeParse(data);
    if (!result.success) {
      return Response.json(
        { error: result.error.issues[0]?.message ?? "Invalid data" },
        { status: 400 },
      );
    }

    const existingUser = await db.user.findUnique({
      where: { email: result.data.email },
    });

    if (existingUser) {
      return Response.json(
        { error: "Email already exists" },
        { status: 400 },
      );
    }

    const hashedPassword = await hash(result.data.password, 10);
    await db.user.create({
      data: {
        name: result.data.name,
        email: result.data.email,
        password: hashedPassword,
        role: "CUSTOMER",
      },
    });

    return Response.redirect(new URL("/auth/signin", req.url));
  } catch (error) {
    console.error("Sign up error:", error);
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/api/trpc/[trpc]/route.ts`:

```ts
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { type NextRequest } from "next/server";

import { env } from "~/env";
import { appRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a HTTP request (e.g. when you make requests from Client Components).
 */
const createContext = async (req: NextRequest) => {
  return createTRPCContext({
    headers: req.headers,
  });
};

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createContext(req),
    onError:
      env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
            );
          }
        : undefined,
  });

export { handler as GET, handler as POST };

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/auth/forgot-password/page.tsx`:

```tsx
import { type Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Form, FormField, FormSection } from "~/components/ui/form";
import { Input } from "~/components/ui/input";

export const metadata: Metadata = {
  title: "Forgot Password - Pet Boarding",
  description: "Reset your password",
};

export default async function ForgotPasswordPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <Card className="w-full max-w-md">
        <CardHeader
          title="Forgot Password"
          description="Enter your email address and we'll send you a link to reset your password."
        />
        <CardContent>
          <Form action="/api/auth/forgot-password" method="POST">
            <FormSection>
              <FormField>
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </FormField>
              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </FormSection>
          </Form>
          <p className="mt-6 text-center text-sm text-gray-500">
            Remember your password?{" "}
            <Link
              href="/auth/signin"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/auth/reset-password/page.tsx`:

```tsx
import { type Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Form, FormField, FormSection } from "~/components/ui/form";
import { Input } from "~/components/ui/input";

export const metadata: Metadata = {
  title: "Reset Password - Pet Boarding",
  description: "Create a new password",
};

interface Props {
  searchParams: {
    token?: string;
  };
}

export default async function ResetPasswordPage({ searchParams }: Props) {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  if (!searchParams.token) {
    redirect("/auth/forgot-password");
  }

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <Card className="w-full max-w-md">
        <CardHeader
          title="Reset Password"
          description="Enter your new password below."
        />
        <CardContent>
          <Form action="/api/auth/reset-password" method="POST">
            <input type="hidden" name="token" value={searchParams.token} />
            <FormSection>
              <FormField>
                <Input
                  label="New Password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                />
              </FormField>
              <FormField>
                <Input
                  label="Confirm New Password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                />
              </FormField>
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </FormSection>
          </Form>
          <p className="mt-6 text-center text-sm text-gray-500">
            Remember your password?{" "}
            <Link
              href="/auth/signin"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/layout.tsx`:

```tsx
import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/layout/layout.tsx`:

```tsx
import { type PropsWithChildren } from "react";
import { Navbar } from "./navbar";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/layout/navbar.tsx`:

```tsx
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Role } from "@prisma/client";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
  >
    {children}
  </Link>
);

export function Navbar() {
  const { data: session } = useSession();
  const userRole = session?.user?.role as Role | undefined;

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">Pet Boarding</span>
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              {session ? (
                <>
                  {userRole === Role.CUSTOMER && (
                    <>
                      <NavLink href="/pets">My Pets</NavLink>
                      <NavLink href="/bookings">My Bookings</NavLink>
                    </>
                  )}
                  {[Role.STAFF, Role.MANAGER, Role.ADMIN].includes(userRole!) && (
                    <>
                      <NavLink href="/dashboard">Dashboard</NavLink>
                      <NavLink href="/bookings/manage">Manage Bookings</NavLink>
                    </>
                  )}
                  {[Role.MANAGER, Role.ADMIN].includes(userRole!) && (
                    <NavLink href="/facility">Facility</NavLink>
                  )}
                  {userRole === Role.ADMIN && (
                    <NavLink href="/admin">Admin</NavLink>
                  )}
                </>
              ) : null}
            </div>
          </div>
          <div className="flex items-center">
            {session ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">
                  {session.user?.name ?? session.user?.email}
                </span>
                <button
                  onClick={() => void signOut()}
                  className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-500"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => void signIn()}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/ui/button.tsx`:

```tsx
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "~/utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const variants = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-500",
      secondary: "bg-gray-600 text-white hover:bg-gray-500",
      danger: "bg-red-600 text-white hover:bg-red-500",
      ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
    };

    const sizes = {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        disabled={disabled ?? isLoading}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/ui/card.tsx`:

```tsx
import { type HTMLAttributes } from "react";
import { cn } from "~/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "article" | "section";
}

export function Card({
  as: Component = "div",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-lg border border-gray-200 bg-white p-6 shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export function CardHeader({
  title,
  description,
  className,
  ...props
}: CardHeaderProps) {
  return (
    <div className={cn("space-y-1.5", className)} {...props}>
      <h3 className="text-2xl font-semibold leading-none tracking-tight">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("pt-6", className)} {...props} />
  );
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center pt-6", className)}
      {...props}
    />
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/ui/form.tsx`:

```tsx
import { type ReactNode } from "react";
import { cn } from "~/utils/cn";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function Form({ className, children, ...props }: FormProps) {
  return (
    <form className={cn("space-y-6", className)} {...props}>
      {children}
    </form>
  );
}

interface FormSectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function FormSection({
  title,
  description,
  children,
  className,
}: FormSectionProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {(title || description) && (
        <div>
          {title && (
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {title}
            </h3>
          )}
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
      )}
      <div className="space-y-6">{children}</div>
    </div>
  );
}

interface FormRowProps {
  children: ReactNode;
  className?: string;
}

export function FormRow({ children, className }: FormRowProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface FormFieldProps {
  children: ReactNode;
  span?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function FormField({
  children,
  span = 6,
  className,
}: FormFieldProps) {
  return (
    <div
      className={cn(
        "sm:col-span-" + span,
        className,
      )}
    >
      {children}
    </div>
  );
}

interface FormActionsProps {
  children: ReactNode;
  className?: string;
}

export function FormActions({ children, className }: FormActionsProps) {
  return (
    <div
      className={cn(
        "flex justify-end space-x-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/ui/input.tsx`:

```tsx
import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "~/utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type = "text", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "block w-full rounded-md border-gray-300 shadow-sm",
            "focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            error && "border-red-300 focus:border-red-500 focus:ring-red-500",
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/ui/select.tsx`:

```tsx
import { type SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "~/utils/cn";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <select
          className={cn(
            "block w-full rounded-md border-gray-300 shadow-sm",
            "focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            error && "border-red-300 focus:border-red-500 focus:ring-red-500",
            className,
          )}
          ref={ref}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/ui/spinner.tsx`:

```tsx
import { cn } from "~/utils/cn";

interface SpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Spinner({ className, size = "md" }: SpinnerProps) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div role="status">
      <svg
        className={cn(
          "animate-spin text-gray-200 dark:text-gray-600",
          "fill-indigo-600",
          sizes[size],
          className,
        )}
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/ui/table.tsx`:

```tsx
import { type ReactNode } from "react";
import { cn } from "~/utils/cn";

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}

export function Table({ className, children, ...props }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table
        className={cn(
          "min-w-full divide-y divide-gray-300",
          className,
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

export function TableHeader({ children, className }: TableHeaderProps) {
  return (
    <thead className={cn("bg-gray-50", className)}>
      <tr>{children}</tr>
    </thead>
  );
}

interface TableBodyProps {
  children: ReactNode;
  className?: string;
}

export function TableBody({ children, className }: TableBodyProps) {
  return (
    <tbody
      className={cn(
        "divide-y divide-gray-200 bg-white",
        className,
      )}
    >
      {children}
    </tbody>
  );
}

interface TableRowProps {
  children: ReactNode;
  className?: string;
}

export function TableRow({ children, className }: TableRowProps) {
  return (
    <tr
      className={cn(
        "hover:bg-gray-50",
        className,
      )}
    >
      {children}
    </tr>
  );
}

interface TableHeaderCellProps {
  children: ReactNode;
  className?: string;
}

export function TableHeaderCell({
  children,
  className,
}: TableHeaderCellProps) {
  return (
    <th
      scope="col"
      className={cn(
        "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
        className,
      )}
    >
      {children}
    </th>
  );
}

interface TableCellProps {
  children: ReactNode;
  className?: string;
}

export function TableCell({ children, className }: TableCellProps) {
  return (
    <td
      className={cn(
        "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
        className,
      )}
    >
      {children}
    </td>
  );
}

interface TableEmptyProps {
  colSpan: number;
  message?: string;
  className?: string;
}

export function TableEmpty({
  colSpan,
  message = "No data available",
  className,
}: TableEmptyProps) {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className={cn(
          "px-3 py-8 text-center text-sm text-gray-500",
          className,
        )}
      >
        {message}
      </td>
    </tr>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/env.js`:

```js
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    AUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),
    AUTH_DISCORD_ID: z.string(),
    AUTH_DISCORD_SECRET: z.string(),
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_DISCORD_ID: process.env.AUTH_DISCORD_ID,
    AUTH_DISCORD_SECRET: process.env.AUTH_DISCORD_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/api/root.ts`:

```ts
import { postRouter } from "~/server/api/routers/post";
import { userRouter } from "~/server/api/routers/user";
import { petRouter } from "~/server/api/routers/pet";
import { bookingRouter } from "~/server/api/routers/booking";
import { facilityRouter } from "~/server/api/routers/facility";
import { paymentRouter } from "~/server/api/routers/payment";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  user: userRouter,
  pet: petRouter,
  booking: bookingRouter,
  facility: facilityRouter,
  payment: paymentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/api/routers/facility.ts`:

```ts
import { z } from "zod";
import { TRPCError } from "@trpc/server";

import {
  createTRPCRouter,
  protectedProcedure,
  managerProcedure,
} from "~/server/api/trpc";

const facilityUpdateSchema = z.object({
  capacity: z.number().int().min(1).optional(),
  pricing: z.number().min(0).optional(),
});

export const facilityRouter = createTRPCRouter({
  update: managerProcedure
    .input(facilityUpdateSchema)
    .mutation(async ({ ctx, input }) => {
      const facility = await ctx.db.facility.findFirst();

      if (!facility) {
        return ctx.db.facility.create({
          data: {
            capacity: input.capacity ?? 10,
            pricing: input.pricing ?? 50.00,
          },
        });
      }

      return ctx.db.facility.update({
        where: { id: facility.id },
        data: input,
      });
    }),

  get: protectedProcedure.query(async ({ ctx }) => {
    const facility = await ctx.db.facility.findFirst();

    if (!facility) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Facility configuration not found",
      });
    }

    return facility;
  }),

  availability: protectedProcedure
    .input(
      z.object({
        startDate: z.date(),
        endDate: z.date(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const facility = await ctx.db.facility.findFirst();
      if (!facility) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Facility configuration not found",
        });
      }

      const bookings = await ctx.db.booking.findMany({
        where: {
          OR: [
            {
              startDate: {
                lte: input.endDate,
              },
              endDate: {
                gte: input.startDate,
              },
            },
          ],
          status: {
            in: ["PENDING", "APPROVED", "CHECKED_IN"],
          },
        },
      });

      const dates = [];
      let currentDate = new Date(input.startDate);
      while (currentDate <= input.endDate) {
        const bookingsOnDate = bookings.filter((booking) => {
          const bookingStart = new Date(booking.startDate);
          const bookingEnd = new Date(booking.endDate);
          return currentDate >= bookingStart && currentDate <= bookingEnd;
        });

        dates.push({
          date: new Date(currentDate),
          available: facility.capacity - bookingsOnDate.length,
          total: facility.capacity,
        });

        currentDate.setDate(currentDate.getDate() + 1);
      }

      return dates;
    }),
});

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/api/routers/pet.ts`:

```ts
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  staffProcedure,
} from "~/server/api/trpc";

const petCreateSchema = z.object({
  name: z.string().min(1).max(50),
  type: z.string().min(1).max(50),
  breed: z.string().min(1).max(50),
  age: z.number().int().min(0),
  ownerId: z.string().optional(), // Optional for staff to create for existing users
});

const petUpdateSchema = z.object({
  id: z.string(),
  name: z.string().min(1).max(50).optional(),
  type: z.string().min(1).max(50).optional(),
  breed: z.string().min(1).max(50).optional(),
  age: z.number().int().min(0).optional(),
});

export const petRouter = createTRPCRouter({
  create: protectedProcedure
    .input(petCreateSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.pet.create({
        data: {
          ...input,
          ownerId: input.ownerId ?? ctx.session.user.id,
        },
      });
    }),

  update: protectedProcedure
    .input(petUpdateSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, ...updateData } = input;
      
      // Verify ownership or staff status
      const pet = await ctx.db.pet.findUnique({
        where: { id },
        select: { ownerId: true },
      });

      if (!pet) {
        throw new Error("Pet not found");
      }

      if (
        pet.ownerId !== ctx.session.user.id &&
        ctx.session.user.role === "CUSTOMER"
      ) {
        throw new Error("Not authorized");
      }

      return ctx.db.pet.update({
        where: { id },
        data: updateData,
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // Verify ownership or staff status
      const pet = await ctx.db.pet.findUnique({
        where: { id: input.id },
        select: { ownerId: true },
      });

      if (!pet) {
        throw new Error("Pet not found");
      }

      if (
        pet.ownerId !== ctx.session.user.id &&
        ctx.session.user.role === "CUSTOMER"
      ) {
        throw new Error("Not authorized");
      }

      return ctx.db.pet.delete({
        where: { id: input.id },
      });
    }),

  byId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const pet = await ctx.db.pet.findUnique({
        where: { id: input.id },
        include: {
          owner: {
            select: {
              id: true,
              email: true,
            },
          },
          bookings: {
            select: {
              id: true,
              startDate: true,
              endDate: true,
              status: true,
            },
          },
        },
      });

      if (!pet) {
        throw new Error("Pet not found");
      }

      // Only allow owner or staff to view details
      if (
        pet.ownerId !== ctx.session.user.id &&
        ctx.session.user.role === "CUSTOMER"
      ) {
        throw new Error("Not authorized");
      }

      return pet;
    }),

  all: staffProcedure.query(async ({ ctx }) => {
    return ctx.db.pet.findMany({
      include: {
        owner: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });
  }),

  myPets: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.pet.findMany({
      where: {
        ownerId: ctx.session.user.id,
      },
      include: {
        bookings: {
          select: {
            id: true,
            startDate: true,
            endDate: true,
            status: true,
          },
        },
      },
    });
  }),
});

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/api/routers/post.ts`:

```ts
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });

    return post ?? null;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/api/routers/user.ts`:

```ts
import { z } from "zod";
import { hash } from "bcrypt";

import {
  createTRPCRouter,
  protectedProcedure,
  adminProcedure,
} from "~/server/api/trpc";
import { Role } from "@prisma/client";

const userCreateSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.nativeEnum(Role).default(Role.CUSTOMER),
  staffLevel: z.number().optional(),
});

const userUpdateSchema = z.object({
  id: z.string(),
  email: z.string().email().optional(),
  role: z.nativeEnum(Role).optional(),
  staffLevel: z.number().optional(),
});

export const userRouter = createTRPCRouter({
  create: adminProcedure
    .input(userCreateSchema)
    .mutation(async ({ ctx, input }) => {
      const hashedPassword = await hash(input.password, 10);
      return ctx.db.user.create({
        data: {
          ...input,
          hashedPassword,
        },
        select: {
          id: true,
          email: true,
          role: true,
          staffLevel: true,
        },
      });
    }),

  update: adminProcedure
    .input(userUpdateSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, ...updateData } = input;
      return ctx.db.user.update({
        where: { id },
        data: updateData,
        select: {
          id: true,
          email: true,
          role: true,
          staffLevel: true,
        },
      });
    }),

  delete: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.delete({
        where: { id: input.id },
      });
    }),

  me: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      select: {
        id: true,
        email: true,
        role: true,
        staffLevel: true,
        pets: {
          select: {
            id: true,
            name: true,
            type: true,
            breed: true,
            age: true,
          },
        },
      },
    });
  }),

  all: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        staffLevel: true,
      },
    });
  }),
});

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/auth/config.ts`:

```ts
import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

import { db } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  providers: [
    DiscordProvider,
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  adapter: PrismaAdapter(db),
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
} satisfies NextAuthConfig;

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/auth/index.ts`:

```ts
import NextAuth from "next-auth";
import { cache } from "react";

import { authConfig } from "./config";

const { auth: uncachedAuth, handlers, signIn, signOut } = NextAuth(authConfig);

const auth = cache(uncachedAuth);

export { auth, handlers, signIn, signOut };

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/db.ts`:

```ts
import { PrismaClient } from "@prisma/client";

import { env } from "~/env";

const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/trpc/query-client.ts`:

```ts
import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from "@tanstack/react-query";
import SuperJSON from "superjson";

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 30 * 1000,
      },
      dehydrate: {
        serializeData: SuperJSON.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        deserializeData: SuperJSON.deserialize,
      },
    },
  });

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/trpc/react.tsx`:

```tsx
"use client";

import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import { loggerLink, unstable_httpBatchStreamLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import { useState } from "react";
import SuperJSON from "superjson";

import { type AppRouter } from "~/server/api/root";
import { createQueryClient } from "./query-client";

let clientQueryClientSingleton: QueryClient | undefined = undefined;
const getQueryClient = () => {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return createQueryClient();
  }
  // Browser: use singleton pattern to keep the same query client
  return (clientQueryClientSingleton ??= createQueryClient());
};

export const api = createTRPCReact<AppRouter>();

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export function TRPCReactProvider(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === "development" ||
            (op.direction === "down" && op.result instanceof Error),
        }),
        unstable_httpBatchStreamLink({
          transformer: SuperJSON,
          url: getBaseUrl() + "/api/trpc",
          headers: () => {
            const headers = new Headers();
            headers.set("x-trpc-source", "nextjs-react");
            return headers;
          },
        }),
      ],
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {props.children}
      </api.Provider>
    </QueryClientProvider>
  );
}

function getBaseUrl() {
  if (typeof window !== "undefined") return window.location.origin;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/trpc/server.ts`:

```ts
import "server-only";

import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { headers } from "next/headers";
import { cache } from "react";

import { createCaller, type AppRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";
import { createQueryClient } from "./query-client";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(async () => {
  const heads = new Headers(await headers());
  heads.set("x-trpc-source", "rsc");

  return createTRPCContext({
    headers: heads,
  });
});

const getQueryClient = cache(createQueryClient);
const caller = createCaller(createContext);

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
  caller,
  getQueryClient
);

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/utils/cn.ts`:

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/start-database.sh`:

```sh
#!/usr/bin/env bash
# Use this script to start a docker container for a local development database

# TO RUN ON WINDOWS:
# 1. Install WSL (Windows Subsystem for Linux) - https://learn.microsoft.com/en-us/windows/wsl/install
# 2. Install Docker Desktop for Windows - https://docs.docker.com/docker-for-windows/install/
# 3. Open WSL - `wsl`
# 4. Run this script - `./start-database.sh`

# On Linux and macOS you can run this script directly - `./start-database.sh`

DB_CONTAINER_NAME="pet-boarding-system-postgres"

if ! [[ -x "$(command -v docker)" ]]; then
	echo -e "Docker is not installed. Please install docker and try again.\nDocker install guide: https://docs.docker.com/engine/install/"
	exit 1
fi

if ! docker info >/dev/null 2>&1; then
	echo "Docker daemon is not running. Please start Docker and try again."
	exit 1
fi

if [ "$(docker ps -q -f name=$DB_CONTAINER_NAME)" ]; then
	echo "Database container '$DB_CONTAINER_NAME' already running"
	exit 0
fi

if [ "$(docker ps -q -a -f name=$DB_CONTAINER_NAME)" ]; then
	docker start "$DB_CONTAINER_NAME"
	echo "Existing database container '$DB_CONTAINER_NAME' started"
	exit 0
fi

# import env variables from .env
set -a
source .env

DB_PASSWORD=$(echo "$DATABASE_URL" | awk -F':' '{print $3}' | awk -F'@' '{print $1}')
DB_PORT=$(echo "$DATABASE_URL" | awk -F':' '{print $4}' | awk -F'\/' '{print $1}')

if [ "$DB_PASSWORD" = "password" ]; then
	echo "You are using the default database password"
	read -p "Should we generate a random password for you? [y/N]: " -r REPLY
	if ! [[ $REPLY =~ ^[Yy]$ ]]; then
		echo "Please change the default password in the .env file and try again"
		exit 1
	fi
	# Generate a random URL-safe password
	DB_PASSWORD=$(openssl rand -base64 12 | tr '+/' '-_')
	sed -i -e "s#:password@#:$DB_PASSWORD@#" .env
fi

docker run -d \
	--name $DB_CONTAINER_NAME \
	-e POSTGRES_USER="postgres" \
	-e POSTGRES_PASSWORD="$DB_PASSWORD" \
	-e POSTGRES_DB=pet-boarding-system \
	-p "$DB_PORT":5432 \
	docker.io/postgres && echo "Database container '$DB_CONTAINER_NAME' was successfully created"
```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/tailwind.config.ts`:

```ts
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/tsconfig.json`:

```json
{
  "compilerOptions": {
    /* Base Options: */
    "esModuleInterop": true,
    "skipLibCheck": true,
    "target": "es2022",
    "allowJs": true,
    "resolveJsonModule": true,
    "moduleDetection": "force",
    "isolatedModules": true,

    /* Strictness */
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "checkJs": true,

    /* Bundled projects */
    "lib": ["dom", "dom.iterable", "ES2022"],
    "noEmit": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "preserve",
    "plugins": [{ "name": "next" }],
    "incremental": true,

    /* Path Aliases */
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"]
    }
  },
  "include": [
    ".eslintrc.cjs",
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    "**/*.cjs",
    "**/*.js",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}

```