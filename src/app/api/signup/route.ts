import { NextRequest, NextResponse } from 'next/server'
import prisma from "@/lib/prisma";
import { hash } from '@/lib/hashPass';
import { InvalidUser, SignupValidationUnion, UserSignup, objectContains, validateUserSignup } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    const userValidated: SignupValidationUnion = validateUserSignup( await request.json() );
    
    if(!userValidated.success)
      return NextResponse.json(
        { error: userValidated.value },
        { status: 422, headers: { 'content-type': 'application/json' } },
      );
    
    const userOk: UserSignup = userValidated.value as UserSignup;
    //yes, two times hashed password. this is the most important one, don't delete it
    userOk.password = await hash(userOk.password);

    const createdUser = createUser(userOk);

    return new NextResponse(JSON.stringify(userValidated), { 
     status: 201, 
     headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {

    if (error.code === "P2002") {
      const dbError: InvalidUser = {success: false, value: error}
      return NextResponse.json(
        { error: { issues: [ {
          code: "username_email_exist",
          message: 'Username or email already exist' 
          } ] } },
        { status: 409, headers: { 'content-type': 'application/json' } },
      );
    }
    return new NextResponse(error.message, { status: 500 });
  }
}


async function createUser(userOk: UserSignup) {
  return await prisma?.user.create({
    data: {
      "username": userOk.username,
      "password": userOk.password,
      "email": userOk.email,
    }
  });
}