import RegistersTable from "@/components/registers/registes-table";
import { Separator } from "@/components/ui/separator";

import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/db";

import { redirect } from "next/navigation";

const ExpensesPage = async () => {
  const user = await currentUser();

  if (!user) return redirect("/sign-in");

  const expenses = await db.expense.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-full w-full lg:max-w-[1600px] items-center md:items-start md:px-8 px-2">
        <p className="font-medium text-lg self-start">
          All your expenses list.
        </p>
        <RegistersTable type="expenses" registers={expenses} />
      </div>
    </div>
  );
};

export default ExpensesPage;
