import ResumeCard from "@/components/resume-card";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

import { Home, Plus, Star, Minus } from "lucide-react";

const resumeMock = [
  {
    bills: 200,
    entries: 800,
    mouth: "January",
  },
  {
    bills: 500,
    entries: 2200,
    mouth: "December",
  },
  {
    bills: 700,
    entries: 800,
    mouth: "November",
  },
];

const HomePage = () => {
  return (
    <div>
      <div className="flex w-full justify-between items-center">
        <h1 className="text-xl font-bold ml-4 my-4 md:ml-8 md:my-8 md:text-3xl flex gap-2 items-center">
          <Home /> Home
        </h1>
      </div>
      <div className="flex flex-col h-full w-full lg:max-w-[1600px] items-center md:items-start md:px-8 px-2">
        <div className="w-full flex flex-col md:flex-row gap-5">
          <Separator className="md:hidden" />
          <p className="pl-4 font-semibold text-base flex gap-2 items-center md:hidden">
            Hello, its good to see you! <Star className="w-4 h-4" />
          </p>
          <Card className="md:h-[250px] md:w-1/2 rounded-none">
            <CardHeader>
              <CardTitle className="text-lg md:text-2xl flex gap-2 items-center">
                Actual Month Status
              </CardTitle>
              <CardDescription className="text-xs md:text-lg">
                Your actual status is:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-green-500 flex items-center text-2xl">
                $200.00 <Plus className="w-4 h-4" />
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-gray-800 text-xs dark:text-zinc-400">
                Continue adding register to track your finances
              </p>
            </CardFooter>
          </Card>
          <Carousel className="md:w-1/2">
            <CarouselContent>
              {resumeMock.map((resume) => (
                <CarouselItem key={resume.bills} className="cursor-pointer">
                  <ResumeCard
                    bills={resume.bills}
                    entries={resume.entries}
                    mouth={resume.mouth}
                  />
                </CarouselItem>
              ))}
              <CarouselItem>Your summaries ended</CarouselItem>
            </CarouselContent>
            <CarouselNext className="hidden md:flex right-4 opacity-20 hover:opacity-100" />
            <CarouselPrevious className="hidden md:flex left-4 opacity-20 hover:opacity-100" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
