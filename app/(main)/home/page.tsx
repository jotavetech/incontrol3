import HomeResumeCard from "@/components/home/home-resume-card";
import HomeMonthStatus from "@/components/home/home-month-status";
import HomeRegisterCard from "@/components/home/home-register-card";

import { Separator } from "@/components/ui/separator";

import { Star, BarChart3, Home } from "lucide-react";

import { currentUser } from "@/lib/current-user";
import { getAtualDateRegisters, monthsMap } from "@/lib/utils";
import { db } from "@/lib/db";

import { redirect } from "next/navigation";

const HomePage = async () => {
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

  const expenses = await db.expense.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const getTotal = (type: "expense" | "entry") => {
    if (type === "expense") {
      const atualMonthExpenses = getAtualDateRegisters(expenses);
      return atualMonthExpenses.reduce((ac, curr) => ac + curr.amount, 0);
    }

    if (type === "entry") {
      const atualMonthEntries = getAtualDateRegisters(entries);
      return atualMonthEntries.reduce((ac, curr) => ac + curr.amount, 0);
    }

    return 0;
  };

  return (
    <div>
      <div className="flex flex-col h-full w-full lg:max-w-[1600px] items-center md:items-start md:px-8 px-2">
        <div className="w-full flex flex-col md:flex-row gap-5">
          <Separator className="md:hidden" />
          <p className="pl-4 font-semibold text-base flex gap-2 items-center md:hidden">
            Hello, its good to see you! <Star className="w-4 h-4" />
          </p>
          <div className="md:w-1/2">
            <HomeMonthStatus
              entriesValue={getTotal("entry")}
              expensesValue={getTotal("expense")}
              month={monthsMap[new Date().getMonth()]}
            />
          </div>
          <div className="md:w-1/2">
            <HomeResumeCard
              expenses={getTotal("expense")}
              entries={getTotal("entry")}
              month={monthsMap[new Date().getMonth()]}
            />
          </div>
        </div>
        <div className="w-full lg:max-w-[1600px] mb-20">
          <p className="pl-4 my-4 font-semibold text-base flex gap-2 items-center md:text-2xl md:my-8">
            Last Registers <BarChart3 className="w-4 h-4" />
          </p>
          <div className="w-full flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <HomeRegisterCard type="entries" registers={entries} />
            </div>
            <div className="md:w-1/2">
              <HomeRegisterCard type="expenses" registers={expenses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
