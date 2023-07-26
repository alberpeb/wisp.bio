import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const test = await prisma.user.upsert({
    where: { email: 'test@test.com' },
    update: {},
    create: {
        username: 'testify',
        name: 'Testify Testifson',
        email: 'test@test.com',
        mainLinks: {
            create: {
            title: 'Check out Prisma with Next.js',
            url: 'https://www.prisma.io/nextjs',
            },
        },
        customLinks: {
            create: {
            title: 'Check out Prisma with Next.js',
            url: 'https://www.prisma.io/nextjs',
            },
        },
    },
  });
  console.log({ test })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })