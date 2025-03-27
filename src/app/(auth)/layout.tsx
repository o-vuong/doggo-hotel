import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication - Doggo Hotel",
  description: "Authentication pages for Doggo Hotel",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="container relative flex h-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Link href="/" className="inline-flex items-center">
              <span className="text-2xl font-bold">🐕 Doggo Hotel</span>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
