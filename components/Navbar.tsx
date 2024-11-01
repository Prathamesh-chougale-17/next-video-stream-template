// components/Navbar.tsx
"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          YourApp
        </Link>

        <div className="flex items-center gap-4">
          {session ? (
            <>
              <span>Welcome, {session.user?.name}</span>
              <Button variant="outline" onClick={() => signOut()}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={() => signIn("google")}>
                Login
              </Button>
              <Button>Sign Up</Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
