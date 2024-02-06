import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { entryId: string } }
) {
  try {
    const user = await currentUser();

    if (!user) {
      return new NextResponse("Unauthorized, Missing User Information", {
        status: 401,
      });
    }

    await db.entry.delete({
      where: {
        id: params.entryId,
        userId: user.id,
      },
    });

    return NextResponse.json("Resource deleted successfully");
  } catch (error) {
    console.log("[ENTRIES_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
