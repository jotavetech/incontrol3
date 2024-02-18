import { currentUser } from "@clerk/nextjs";

import { db } from "@/lib/db";

import { redirect } from "next/navigation";

export const initialUser = async () => {
  const userAuth = await currentUser();

  if (!userAuth) return redirect("/presentation");

  const user = await db.user.findUnique({
    where: {
      id: userAuth.id,
    },
  });

  if (user) return user;

  const newUser = await db.user.create({
    data: {
      id: userAuth.id,
      name: `${userAuth.firstName}${
        userAuth.lastName ? ` ${userAuth.lastName}` : ""
      }`,
      email: userAuth.emailAddresses[0].emailAddress,
      imageUrl: userAuth.imageUrl,
    },
  });

  return newUser;
};
