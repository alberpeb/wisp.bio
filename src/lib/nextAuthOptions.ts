import { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { UserModel, getUserByUsernameOrEmail } from '@/prisma/userService';
import { SigninValidationUnion, UserSignin, validateUserSignin } from './validation';
import Response from './response';
import { processUserSignin } from './utils';
import { compare } from './hashPass';

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("Please provide process.env.NEXTAUTH_SECRET");
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      type: "credentials",
      credentials: {},
      //@ts-ignore
      async authorize(credentials, req) {
        try {
            const userValidated: SigninValidationUnion = validateUserSignin(credentials as {
                usernameOrEmail: string;
                password: string;
            });
            
            if(!userValidated.success) {
                return Response.error([{
                    code: userValidated.value.name,
                    message: userValidated.value.message
                }]);
            }

            const userSignin: UserSignin = userValidated.value;
            const userModel: UserModel | null = await getUserByUsernameOrEmail(
                processUserSignin(userSignin)
            );

            if(!userModel) {
                return null;
            }

            if(userModel.password && await compare(userSignin.password, userModel.password)) {
                return {
                    username: userModel.username,
                };
            }
            return null;
        } catch (error: any) {
            return Response.serverError(error.message);
        }
      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  callbacks: {
    async signIn({user}) {
        if(!user) {
            return false;
        }
        return true;
    },
    async jwt({ token, user }) {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          username: u.username,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          username: token.username,
        },
      };
    },
  },
  pages: {
    signIn: "/signin",
  }
}