import { NextRequest, NextResponse } from 'next/server';
import { UserModel, createUser } from '@/prisma/userService';
import { hash } from '@/lib/hashPass';
import {
  InvalidUser,
  SignupValidationUnion,
  UserSignup,
  validateUserSignup,
} from '@/lib/validation';

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

    //yes, two times hashed password. this is the most important one, don't delete it
    userSignup.password = await hash(userSignup.password);
    const newUser: UserModel = await createUser(userSignup);

    //TODO use /login to send credentials and return a new session

    return new NextResponse(JSON.stringify(newUser), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.log("------------>error: ");
    console.log(error);

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