import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "../ui/separator";

import { TrendingDown, TrendingUp } from "lucide-react";

import { cn, formatValue } from "@/lib/utils";

import Link from "next/link";

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
        <ScrollArea className="h-full ">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex w-full justify-around p-4 border mb-2 rounded-lg"
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
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default HomeRegisterCard;
