import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Separator } from "../ui/separator";

import { BarChart } from "lucide-react";

import { Entry, Expense } from "@prisma/client";
import CategoriesChart from "./categories-chart";

type Register = Entry | Expense;

interface CategoriesResumeProps {
  type: "entries" | "expenses";
  registers: Register[];
}

const CategoriesResume = ({ registers, type }: CategoriesResumeProps) => {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="py-3">
        <CardTitle className="text-lg md:text-xl justify-between flex gap-2 items-center">
          <span className="capitalize">{type} Categories Chart</span>
          <BarChart className="opacity-70" />
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="h-[360px] p-2 lg:h-[320px] pt-6">
        <CategoriesChart registers={registers} />
      </CardContent>
    </Card>
  );
};

export default CategoriesResume;
