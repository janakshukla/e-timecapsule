import { PrismaClient } from '@prisma/client'
// ...existing code...

let prisma;

if (!global._prisma) {
  global._prisma = new PrismaClient();
}

prisma = global._prisma;

export { prisma};
