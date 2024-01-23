"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "../ui/separator";

import { Plus, TrendingDown, TrendingUp } from "lucide-react";

import { cn, formatValue } from "@/lib/utils";

import Link from "next/link";

import useModal from "@/hooks/use-modal-store";

interface HomeRegisterCardProps {
  type: "expenses" | "entries";
  items: Array<{
    id: string;
    amount: number;
    name: string;
    data: string;
  }>;
}

const HomeRegisterCard = ({ items, type }: HomeRegisterCardProps) => {
  const { onOpen } = useModal();

  return (
    <Card className="rounded-2xl">
      <CardHeader className="py-3">
        <CardTitle className="text-lg md:text-xl justify-between flex gap-2 items-center">
          {type === "entries" ? "Entries" : "Expenses"}
          <Link
            href={type === "entries" ? "/entries" : "/expenses"}
            className="flex text-xs items-center gap-2 opacity-70 font-medium"
          >
            <span>Click to see details</span>
            {type === "entries" ? (
              <TrendingUp className="opacity-70" />
            ) : (
              <TrendingDown className="opacity-70" />
            )}
          </Link>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="h-[270px] p-2 lg:h-[320px]">
        <ScrollArea className="h-full">
          {items.length <= 0 && (
            <div className="w-full h-[250px] lg:h-[290px] flex items-center justify-center text-center p-2">
              <p className="opacity-60 text-sm lg:text-lg">
                You dont have any {type} records yet, create one now!
              </p>
            </div>
          )}
          {items.length > 0 &&
            items.map((item) => (
              <button
                key={item.id}
                className="flex w-full justify-around p-4 border mb-2 rounded-xl"
              >
                <p>{item.name}</p>
                <p>{item.data}</p>
                <p
                  className={cn(
                    type === "entries" ? "text-green-500" : "text-red-400"
                  )}
                >
                  {type === "entries" ? "+" : "-"}
                  {formatValue(item.amount)}
                </p>
              </button>
            ))}
        </ScrollArea>
      </CardContent>
      <Separator />
      <CardFooter
        className="py-3 flex items-center justify-center bg-[#fdfdfd] dark:bg-[#0c0c0c] rounded-b-2xl cursor-pointer"
        onClick={() => onOpen("createRegister")}
      >
        <button className="flex gap-2 w-full h-full items-center text-sm font-medium hover:opacity-65 transition-opacity">
          <Plus /> ADD NEW REGISTER
        </button>
      </CardFooter>
    </Card>
  );
};

export default HomeRegisterCard;
