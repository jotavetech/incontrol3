import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn, formatValue } from "@/lib/utils";

import { Plus } from "lucide-react";

interface HomeMonthStatusProps {
  entriesValue: number;
  billsValue: number;
}

const HomeMonthStatus = ({
  entriesValue,
  billsValue,
}: HomeMonthStatusProps) => {
  const isPositive = () => entriesValue > billsValue;

  return (
    <Card className="md:h-[250px] rounded-none">
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl flex gap-2 items-center capitalize">
          Current Month Status
        </CardTitle>
        <CardDescription className="text-xs md:text-base">
          Currently your status is:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p
          className={cn(
            `text-red-500 flex items-center text-2xl`,
            isPositive() && "text-green-400"
          )}
        >
          {isPositive() && <Plus className="w-4 h-4" />}
          {formatValue(entriesValue - billsValue)}
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-gray-800 text-xs dark:text-zinc-400">
          Keep adding your expenses/bills to be inControl of your finances
        </p>
      </CardFooter>
    </Card>
  );
};

export default HomeMonthStatus;
