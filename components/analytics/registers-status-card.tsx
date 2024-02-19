import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  getAtualDateRegisters,
  getTotalRegistersAmount,
  monthsMap,
} from "@/lib/utils";

import { cn, formatValue } from "@/lib/utils";

import { BarChart, Frown, Laugh, Meh, Plus } from "lucide-react";

import { Entry, Expense } from "@prisma/client";

interface RegisterStatusCardProps {
  entries: Entry[];
  expenses: Expense[];
}

const RegistersStatusCard = ({
  entries,
  expenses,
}: RegisterStatusCardProps) => {
  const totalEntriesAmount = getTotalRegistersAmount(entries);
  const totalExpensesAmount = getTotalRegistersAmount(expenses);

  const isTotalPositive = totalEntriesAmount > totalExpensesAmount;
  const isTotalZero = totalEntriesAmount - totalExpensesAmount === 0;

  const thisMonthEntries = getAtualDateRegisters(entries);
  const thisMonthnExpenses = getAtualDateRegisters(expenses);

  const thisMonthEntriesAmount = getTotalRegistersAmount(thisMonthEntries);
  const thisMonthExpensesAmount = getTotalRegistersAmount(thisMonthnExpenses);

  const isThisMonthPositive = thisMonthEntriesAmount > thisMonthExpensesAmount;
  const isThisMonthZero =
    thisMonthEntriesAmount - thisMonthExpensesAmount === 0;

  return (
    <Card className="md:h-[250px] rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl flex gap-2 items-center capitalize justify-between">
          Your Status
          <BarChart className="opacity-70" />
        </CardTitle>
        <CardDescription className="text-xs md:text-base">
          The status of your general financial situation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p
          className={cn(
            `text-red-500 flex items-center text-2xl`,
            isTotalPositive && "text-[#006100] dark:text-[#55dd55]",
            isTotalZero && "text-zinc-400"
          )}
        >
          {isTotalPositive && <Plus className="w-4 h-4" />}
          {formatValue(totalEntriesAmount - totalExpensesAmount)}
          {isTotalPositive ? (
            <Laugh className="ml-1 w-5 h-5" />
          ) : !isTotalPositive && !isTotalZero ? (
            <Frown className="ml-1 w-5 h-5" />
          ) : (
            <Meh className="ml-1 w-5 h-5" />
          )}
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col text-xs md:text-base">
          <p className="opacity-90 mb-1 text-zinc-700 dark:text-white">
            {monthsMap[new Date().getMonth()]} Status:{" "}
          </p>
          <span
            className={cn(
              `text-red-500 flex items-center text-sm md:text-lg`,
              isThisMonthPositive && "text-[#006100] dark:text-[#55dd55]",
              isThisMonthZero && "text-zinc-400"
            )}
          >
            {isThisMonthPositive && <Plus className="w-4 h-4" />}
            {formatValue(thisMonthEntriesAmount - thisMonthExpensesAmount)}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegistersStatusCard;
