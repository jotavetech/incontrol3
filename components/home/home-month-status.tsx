import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn, formatValue } from "@/lib/utils";

import { BarChart, Frown, Laugh, Meh, Plus } from "lucide-react";

interface HomeMonthStatusProps {
  entriesValue: number;
  expensesValue: number;
  month: string;
}

const HomeMonthStatus = ({
  entriesValue,
  expensesValue,
  month,
}: HomeMonthStatusProps) => {
  const isPositive = entriesValue > expensesValue;
  const isZero = entriesValue - expensesValue === 0;

  return (
    <Card className="md:h-[250px] rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl flex gap-2 items-center capitalize justify-between">
          Current Month Status ({month})
          <BarChart className="opacity-70" />
        </CardTitle>
        <CardDescription className="text-xs md:text-base">
          Remaining money for the month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p
          className={cn(
            `text-red-500 flex items-center text-2xl`,
            isPositive && "text-[#006100] dark:text-[#3daf3d]",
            isZero && "text-zinc-400"
          )}
        >
          {isPositive && <Plus className="w-4 h-4" />}
          {formatValue(entriesValue - expensesValue)}
          {isPositive ? (
            <Laugh className="ml-1 w-5 h-5" />
          ) : !isPositive && !isZero ? (
            <Frown className="ml-1 w-5 h-5" />
          ) : (
            <Meh className="ml-1 w-5 h-5" />
          )}
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-gray-800 text-xs dark:text-zinc-400">
          Keep adding your expenses to be inControl of your finances
        </p>
      </CardFooter>
    </Card>
  );
};

export default HomeMonthStatus;
