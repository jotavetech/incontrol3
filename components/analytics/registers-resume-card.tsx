import { Minus, Plus, TrendingDown, TrendingUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { cn, formatValue, getAtualDateRegisters, monthsMap } from "@/lib/utils";

import { Entry, Expense } from "@prisma/client";

type Register = Entry | Expense;

interface RegistersResumeCardProps {
  registers: Register[];
  type: "entries" | "expenses";
}

const RegistersResumeCard = ({ registers, type }: RegistersResumeCardProps) => {
  const allRegistersTotalAmount = () =>
    registers.reduce((ac, curr) => ac + curr.amount, 0);

  const thisMonthRegistersAmount = () => {
    const atualDateRegisters = getAtualDateRegisters(registers);

    return atualDateRegisters.reduce((ac, curr) => ac + curr.amount, 0);
  };

  return (
    <Card className="md:h-[250px] rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl flex gap-2 items-center capitalize justify-between">
          <span className="capitalize">{type} Resume</span>
          {type === "entries" ? (
            <TrendingUp className="opacity-70" />
          ) : (
            <TrendingDown className="opacity-70" />
          )}
        </CardTitle>
        <CardDescription className="text-xs md:text-base">
          Total of all your {type}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="flex gap-2 items-center text-2xl">
          <span
            className={cn(
              `text-red-400 flex items-center`,
              type === "entries" && "text-green-400",
              allRegistersTotalAmount() === 0 && "text-zinc-400"
            )}
          >
            {type === "entries" ? (
              <Plus className="w-4 h-4" />
            ) : (
              <Minus className="w-4 h-4" />
            )}
            {formatValue(allRegistersTotalAmount())}
          </span>
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col text-sm md:text-lg">
          <p className="opacity-90 mb-1 text-zinc-700 dark:text-white">
            Only {monthsMap[new Date().getMonth()]} Total:{" "}
          </p>
          <span
            className={cn(
              `text-red-400 flex items-center`,
              type === "entries" && "text-green-400",
              thisMonthRegistersAmount() === 0 && "text-zinc-400 "
            )}
          >
            {type === "entries" ? (
              <Plus className="w-4 h-4" />
            ) : (
              <Minus className="w-4 h-4" />
            )}
            {formatValue(thisMonthRegistersAmount())}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegistersResumeCard;
