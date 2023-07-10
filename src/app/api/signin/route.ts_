/*import { NextRequest, NextResponse } from 'next/server'
import { UserModel, getUserByUsernameOrEmail } from "@/prisma/userService";
import { compare } from '@/lib/hashPass';
import { processUserSignin } from '@/lib/utils';
import Response from '@/lib/response';
import { InvalidUser, SigninValidationUnion, UserSignin, validateUserSignin } from '@/lib/validation';


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userValidated: SigninValidationUnion = validateUserSignin(body);
    
    const userSignin: UserSignin = body as UserSignin;
    const userModel: UserModel | null = await getUserByUsernameOrEmail(
        processUserSignin(userSignin)
    );

    if(!userModel) {
      return NextResponse.json(
        { error: { issues: [ {
          code: "user_not_found",
          message: "User doesn't exist" 
          } ] } },
        { status: 204, headers: { 'content-type': 'application/problem+json' } },
      );
    }

    if(userModel.password && await compare(userSignin.password, userModel.password)) {
      //return Response.
    }

    //TODO use /login to send credentials and return a new session
  
    return Response.unauthorized();
  } catch (error: any) {

    return Response.serverError(error.message);
  }
}*/