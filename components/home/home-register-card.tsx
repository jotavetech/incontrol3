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

import Link from "next/link";

import useModal from "@/hooks/use-modal-store";

import HomeRegisterItems from "./home-register-items";

import { Entry, Expense } from "@prisma/client";

interface HomeRegisterCardProps {
  type: "expenses" | "entries";
  registers: Expense[] | Entry[];
}

const HomeRegisterCard = ({ type, registers }: HomeRegisterCardProps) => {
  const { onOpen } = useModal();

  return (
    <Card className="rounded-2xl shadow-sm">
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
          <HomeRegisterItems type={type} registers={registers} />
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
