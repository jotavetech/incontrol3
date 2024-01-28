import HomeMobileMenu from "@/components/home/home-mobile-menu";
import RegistersTable from "@/components/registers/registes-table";
import { Separator } from "@/components/ui/separator";

import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/db";

import { UserButton } from "@clerk/nextjs";
import { TrendingDown } from "lucide-react";

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

  const getTotal = () => expenses.reduce((ac, curr) => ac + curr.amount, 0);

  return (
    <div>
      <div className="flex w-full lg:max-w-[1600px]  justify-between items-center">
        <h1 className="text-xl font-bold ml-4 my-4 md:ml-8 md:my-8 md:text-3xl flex items-center gap-2">
          Expenses <TrendingDown />
        </h1>
        <div className="hidden md:flex mr-8 my-8">
          <UserButton
            afterSignOutUrl="/sign-in"
            appearance={{
              elements: { avatarBox: "w-12 h-12 " },
            }}
          />
        </div>
        <div className="flex md:hidden">
          <HomeMobileMenu />
        </div>
      </div>
      <div className="flex flex-col h-full w-full lg:max-w-[1600px] items-center md:items-start md:px-8 px-2">
        <Separator className="md:hidden" />

        <RegistersTable
          type="expenses"
          registers={expenses}
          total={getTotal()}
        />
      </div>
    </div>
  );
};

export default ExpensesPage;
