// app/dashboard/page.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/signin");
  }

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Welcome {session.user.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>You are signed in as {session.user.email}</p>
        </CardContent>
      </Card>
    </div>
  );
}
