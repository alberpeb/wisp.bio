import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

//info await prisma.$connect(); for avoiding lazy connetion
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;