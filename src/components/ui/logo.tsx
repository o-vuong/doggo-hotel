import React from "react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-2">
      <span className="text-2xl">🐕</span>
      <span className="text-xl font-bold text-primary">Saint Tropawz</span>
    </Link>
  );
}
