// auth.ts
import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/clientpromise"
import Google from "next-auth/providers/google"

declare module "next-auth" {
  interface User {
    role?: string
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise,{
    databaseName: "nextauth",

  }),
  providers: [Google({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    profile(profile) {
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        image: profile.picture,
        role:  profile.role ?? "user"
      }
    }
  })],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      if(user) token.role = user.role
      return token
    }
  },
})