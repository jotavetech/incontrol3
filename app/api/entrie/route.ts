import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId, name, description, amount, category } = await req.json();

    if (!name || !description || !amount || !category) {
      return new NextResponse("Missing fields", { status: 500 });
    }

    if (!userId) {
      return new NextResponse("Unauthorized, Missing ID", { status: 401 });
    }

    const entrie = await db.entrie.create({
      data: {
        userId,
        name,
        description,
        amount,
        category,
      },
    });

    return NextResponse.json({ entrie });
  } catch (error) {
    console.log("[ENTRIES_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
