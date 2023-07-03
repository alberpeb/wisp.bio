import { NextResponse } from 'next/server'
import prisma from "@/lib/prisma";

export async function GET(req: Request, res: Response) {
  try {
    const allUsers = await prisma?.user.findMany();

    return new NextResponse(JSON.stringify(allUsers), { 
     status: 201, 
     headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return new NextResponse("User with email already exists", {
        status: 409,
      });
    }
    return new NextResponse(error.message, { status: 500 });
  }
}