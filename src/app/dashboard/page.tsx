import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
      <p className="mt-2 text-muted-foreground">
        You are logged in as {session.user.email}
      </p>
    </div>
  );
}
