import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatValue } from "@/lib/utils";

import { CircleDollarSign } from "lucide-react";

interface ResumeCardProps {
  mouth: string;
  entries: number;
  bills: number;
}

const ResumeCard = ({ mouth, entries, bills }: ResumeCardProps) => {
  return (
    <Card className="md:h-[250px]">
      <CardHeader>
        <CardTitle className="text-lg flex gap-2 items-center">
          {mouth} Resume <CircleDollarSign />
        </CardTitle>
        <CardDescription className="text-xs">
          This is the result for the month of {mouth}:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          Money that came in:{" "}
          <span className="font-semibold">{formatValue(entries)}</span>
        </div>
        <div>
          Money spent on bills:{" "}
          <span className="font-semibold">{formatValue(bills)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-gray-800 text-xs dark:text-zinc-400">
          Swipe to see past summaries
        </p>
      </CardFooter>
    </Card>
  );
};

export default ResumeCard;
