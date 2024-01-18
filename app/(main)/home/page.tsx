import ResumeCard from "@/components/resume-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Home } from "lucide-react";

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
      <div className="flex flex-col h-full w-full items-center md:items-start md:px-8">
        <div className="w-full md:w-1/2 lg:w-[500px]">
          <Carousel>
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
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
