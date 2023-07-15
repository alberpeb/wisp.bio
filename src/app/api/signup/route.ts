import { NextRequest, NextResponse } from 'next/server';
import { UserModel, createUser } from '@/prisma/userService';
import { hash } from '@/lib/hashPass';
import {
  InvalidUser,
  SignupValidationUnion,
  UserSignup,
  validateUserSignup,
} from '@/lib/validation';
import Response from '@/lib/response';

export async function POST(request: NextRequest) {
  try {
    const userValidated: SignupValidationUnion = validateUserSignup(await request.json());
    if (!userValidated.success) {
      return NextResponse.json(
        { error: userValidated.value },
        { status: 422, headers: { 'content-type': 'application/problem+json' } }
      );
    }
    const userSignup: UserSignup = userValidated.value as UserSignup;

    userSignup.password = await hash(userSignup.password);
    const newUser: UserModel = await createUser(userSignup);

    return Response.success();
  } catch (error: any) {
    if (error.code === "P2002") {
      const dbError: InvalidUser = {success: false, value: error}
      return NextResponse.json(
        { error: { issues: [ {
          code: "username_email_exist",
          message: "Username or email already exist"
          } ] } },
        { status: 409, headers: { "content-type": "application/problem+json" } },
      );
    }
    return new NextResponse(error.message, { status: 500 });
  }
}