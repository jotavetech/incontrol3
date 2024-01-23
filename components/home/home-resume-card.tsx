import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { formatValue } from "@/lib/utils";

import {
  ArrowLeft,
  ArrowRight,
  CircleDollarSign,
  Minus,
  Plus,
} from "lucide-react";

interface HomeResumeCardProps {
  mouth: string;
  entries: number;
  expenses: number;
}

const HomeResumeCard = ({ mouth, entries, expenses }: HomeResumeCardProps) => {
  return (
    <Card className="md:h-[250px] rounded-2xl">
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl flex gap-2 items-center justify-between capitalize">
          {mouth} Resume <CircleDollarSign className="opacity-70" />
        </CardTitle>
        <CardDescription className="text-xs md:text-base">
          This is the result for the month of {mouth}:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          Money that came in:{" "}
          <span className="font-semibold text-green-500 flex items-center">
            <Plus className="w-4 h-4" />
            {formatValue(entries)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          Money spent on expenses:{" "}
          <span className="font-semibold text-red-500 flex items-center">
            <Minus className="w-4 h-4" />
            {formatValue(expenses)}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-gray-800 text-xs dark:text-zinc-400 flex items-center gap-2">
          Swipe to see past summaries <ArrowLeft className="w-3 h-3" />
          <ArrowRight className="w-3 h-3" />
        </p>
      </CardFooter>
    </Card>
  );
};

export default HomeResumeCard;
