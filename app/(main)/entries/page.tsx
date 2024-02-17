import RegistersTable from "@/components/registers/registes-table";
import { Separator } from "@/components/ui/separator";

import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/db";

import { redirect } from "next/navigation";

const EntriesPage = async () => {
  const user = await currentUser();

  if (!user) return redirect("/sign-in");

  const entries = await db.entry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="flex flex-col h-full w-full lg:max-w-[1600px] items-center md:items-start md:px-8 px-2">
        <Separator className="md:hidden" />

        <RegistersTable type="entries" registers={entries} />
      </div>
    </div>
  );
};

export default EntriesPage;
