"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { formatValue } from "@/lib/utils";

import { CircleDollarSign, Minus, Plus } from "lucide-react";

import { useRouter } from "next/navigation";

interface HomeResumeCardProps {
  month: string;
  entries: number;
  expenses: number;
}

const HomeResumeCard = ({ month, entries, expenses }: HomeResumeCardProps) => {
  const { push } = useRouter();

  return (
    <Card
      className="md:h-[250px] rounded-2xl shadow-sm"
      onClick={() => push("/analytics")}
    >
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl flex gap-2 items-center justify-between capitalize">
          {month} Resume <CircleDollarSign className="opacity-70" />
        </CardTitle>
        <CardDescription className="text-xs md:text-base">
          This is the result for the month of {month}:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          Money that came in:{" "}
          <span className="font-semibold text-green-400 flex items-center">
            <Plus className="w-4 h-4" />
            {formatValue(entries)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          Money spent on expenses:{" "}
          <span className="font-semibold text-red-400 flex items-center">
            <Minus className="w-4 h-4" />
            {formatValue(expenses)}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-gray-800 text-xs dark:text-zinc-400 flex items-center gap-2">
          Click to see details
        </p>
      </CardFooter>
    </Card>
  );
};

export default HomeResumeCard;
