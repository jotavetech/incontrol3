import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/db";

import { NextResponse } from "next/server";

// VERIFICAR SE É UM ID VALIDO
export async function POST(req: Request) {
  try {
    const { name, description, amount, category } = await req.json();
    const user = await currentUser();

    if (!name || !description || !amount || !category) {
      return new NextResponse("Missing fields", { status: 500 });
    }

    if (!user) {
      return new NextResponse("Unauthorized, Missing User Information", {
        status: 401,
      });
    }

    const entry = await db.entry.create({
      data: {
        userId: user.id,
        name,
        description,
        amount,
        category,
      },
    });

    return NextResponse.json({ entry });
  } catch (error) {
    console.log("[ENTRIES_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const { name, description, amount, id } = await req.json();
    const user = await currentUser();

    if (!name || !description || !amount) {
      return new NextResponse("Missing fields", { status: 500 });
    }

    if (!user) {
      return new NextResponse("Unauthorized, Missing User Information", {
        status: 401,
      });
    }

    const entry = await db.entry.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        amount,
      },
    });

    return NextResponse.json({ entry });
  } catch (error) {
    console.log("[ENTRIES_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const user = await currentUser();

    if (!user) {
      return new NextResponse("Unauthorized, Missing User", {
        status: 401,
      });
    }

    const entries = await db.entry.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ entries });
  } catch (error) {
    console.log("[ENTRIES_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
