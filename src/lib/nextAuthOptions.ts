import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { SigninValidationUnion, UserSignin, validateUserSignin } from './validation';
import Response from './response';
import { processUserSignin } from './utils';
import { UserModel, getUserByUsernameOrEmail } from '@/prisma/userService';
import { compare } from './hashPass';

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("Please provide process.env.NEXTAUTH_SECRET");
}

/*const callbacks = {
  async jwt(token: any, user: any) {
    if (user) {
      token.accessToken = user.data.token
    }
    return token
  },

  async session(session: any, token: any) {
    session.accessToken = token.accessToken
    return session
  }
}*/


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
                return Response.error([ {
                    code: "user_not_found",
                    message: "User doesn't exist"
                }])
            }
            console.log("usuario encontrado")

            if(userModel.password && await compare(userSignin.password, userModel.password)) {
                return Response.success();
            }
        } catch (error: any) {
            return Response.serverError(error.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  }
}