"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="rounded-none">
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
      <CardContent className="h-[300px] p-2 lg:h-[360px]">
        <ScrollArea className="h-full">
          <button
            className="flex gap-2 w-full p-4 border mb-2 rounded-xl items-center text-sm font-medium bg-[#fdfdfd] dark:bg-transparent hover:opacity-75 transition-opacity"
            onClick={() => onOpen("createRegister")}
          >
            <Plus /> ADD NEW REGISTER
          </button>
          {items.length > 0 &&
            items.map((item) => (
              <button
                key={item.id}
                className="flex w-full justify-around p-4 border mb-2 "
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
    </Card>
  );
};

export default HomeRegisterCard;
