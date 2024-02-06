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
      return new NextResponse("Unauthorized, Missing User", {
        status: 401,
      });
    }

    const expense = await db.expense.create({
      data: {
        userId: user.id,
        name,
        description,
        amount,
        category,
      },
    });

    return NextResponse.json({ expense });
  } catch (error) {
    console.log("[EXPENSES_POST]", error);
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

    const expense = await db.expense.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        amount,
      },
    });

    return NextResponse.json({ expense });
  } catch (error) {
    console.log("[EXPENSES_PATCH]", error);
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

    const expenses = await db.expense.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ expenses });
  } catch (error) {
    console.log("[EXPENSES_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    const user = await currentUser();

    if (!id) {
      return new NextResponse("Missing ID", { status: 500 });
    }

    if (!user) {
      return new NextResponse("Unauthorized, Missing User Information", {
        status: 401,
      });
    }

    await db.expense.delete({
      where: {
        id,
      },
    });

    return NextResponse.json("Resource deleted successfully", { status: 204 });
  } catch (error) {
    console.log("[EXPENSES_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
