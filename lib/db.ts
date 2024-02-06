// import { PrismaClient } from "@prisma/client";

// declare global {
//   var prisma: PrismaClient | undefined;
// }

// export const db = globalThis.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const db = globalThis.prisma ?? prismaClientSingleton();

export { db };

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
