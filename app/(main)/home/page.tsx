import HomeMonthStatus from "@/components/home/home-month-status";
import { ModeToggle } from "@/components/mode-toggle";
import ResumeCard from "@/components/resume-card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Separator } from "@/components/ui/separator";

import { Star, Menu } from "lucide-react";

const resumeMock = [
  {
    bills: 200,
    entries: 8000000,
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
        <h1 className="text-xl font-bold ml-4 my-4 md:ml-8 md:my-8 md:text-3xl flex items-center">
          in<span className="text-red-500">Control</span>
        </h1>
        <div className="flex md:hidden">
          <Popover>
            <PopoverTrigger className="mr-4">
              <Menu />
            </PopoverTrigger>
            <PopoverContent className="flex items-center gap-2 mr-3 shadow-lg">
              <ModeToggle /> Change theme
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex flex-col h-full w-full lg:max-w-[1600px] items-center md:items-start md:px-8 px-2">
        <div className="w-full flex flex-col md:flex-row gap-5">
          <Separator className="md:hidden" />
          <p className="pl-4 font-semibold text-base flex gap-2 items-center md:hidden">
            Hello, its good to see you! <Star className="w-4 h-4" />
          </p>
          <div className="md:w-1/2">
            <HomeMonthStatus entriesValue={800} billsValue={400} />
          </div>
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
