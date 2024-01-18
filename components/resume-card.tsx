import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ResumeCardProps {
  mouth: string;
  entries: number;
  bills: number;
}

const ResumeCard = ({ mouth, entries, bills }: ResumeCardProps) => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-lg">{mouth} Resume</CardTitle>
        <CardDescription className="text-xs">
          This is the result for the month of {mouth}:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          Money that came in:{" "}
          <span className="font-semibold">{entries.toFixed(2)}</span>
        </div>
        <div>
          Money spent on bills:{" "}
          <span className="font-semibold">{bills.toFixed(2)}</span>
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
