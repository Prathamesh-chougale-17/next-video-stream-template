"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  return (
    <main className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
        Welcome to YourApp
      </h1>
      <p className="max-w-[600px] text-muted-foreground">
        Your perfect application starter with authentication, modern UI, and
        best practices.
      </p>
      {!session ? (
        <div className="flex gap-4">
          <Link href={"/auth/signin"}>
            <Button size="lg">Dashboard</Button>
          </Link>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link href={"/dashboard"}>
            <Button size="lg">Dashboard</Button>
          </Link>
        </div>
      )}
    </main>
  );
}
