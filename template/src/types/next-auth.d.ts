import { type DefaultSession } from "next-auth";

import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
    } & DefaultSession["user"];
  }
}


/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
    interface JWT {
      /** This is an example. You can find me in types/next-auth.d.ts */
      idToken?: string
    }
  }