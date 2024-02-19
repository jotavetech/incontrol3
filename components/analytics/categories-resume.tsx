import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { BarChart } from "lucide-react";

import CategoriesChart from "./categories-chart";

import { Register } from "@/types";

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
      <CardContent className="h-[400px] p-2 pt-6">
        <CategoriesChart registers={registers} />
      </CardContent>
    </Card>
  );
};

export default CategoriesResume;
