import { NextApiRequest, NextApiResponse } from 'next';
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { User } from 'next-auth';

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("Please provide process.env.NEXTAUTH_SECRET");
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        return { id: "1", name: "Carl Sagan", email: "csagan@space.com" } as User;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async jwt({ token, user }) {
      /* Step 1: update the token based on the user object */
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      /* Step 2: update the session.user based on the token object */
      if (token && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
})