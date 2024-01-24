import HomeResumeCard from "@/components/home/home-resume-card";
import HomeMonthStatus from "@/components/home/home-month-status";
import HomeRegisterCard from "@/components/home/home-register-card";
import HomeMobileMenu from "@/components/home/home-mobile-menu";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Separator } from "@/components/ui/separator";

import { Star, BarChart3 } from "lucide-react";

import { UserButton } from "@clerk/nextjs";

import { currentUser } from "@/lib/current-user";

import { redirect } from "next/navigation";

import { db } from "@/lib/db";

const resumeMock = [
  {
    expenses: 200,
    entries: 8000000,
    mouth: "January",
  },
  {
    expenses: 500,
    entries: 2200,
    mouth: "December",
  },
  {
    expenses: 700,
    entries: 800,
    mouth: "November",
  },
];

const HomePage = async () => {
  const user = await currentUser();

  if (!user) return redirect("/sign-in");

  const entries = await db.entry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const expenses = await db.expense.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const getTotal = (type: "expense" | "entry") => {
    if (type === "expense") {
      return expenses.reduce((ac, curr) => ac + curr.amount, 0);
    }

    if (type === "entry") {
      return entries.reduce((ac, curr) => ac + curr.amount, 0);
    }

    return 0;
  };

  return (
    <div>
      <div className="flex w-full lg:max-w-[1600px]  justify-between items-center">
        <h1 className="text-xl font-bold ml-4 my-4 md:ml-8 md:my-8 md:text-3xl flex items-center">
          in<span className="text-red-500">Control</span>
        </h1>
        <div className="hidden md:flex mr-8 my-8">
          <UserButton
            afterSignOutUrl="/sign-in"
            appearance={{
              elements: { avatarBox: "w-12 h-12 " },
            }}
          />
        </div>
        <div className="flex md:hidden">
          <HomeMobileMenu />
        </div>
      </div>
      <div className="flex flex-col h-full w-full lg:max-w-[1600px] items-center md:items-start md:px-8 px-2">
        <div className="w-full flex flex-col md:flex-row gap-5">
          <Separator className="md:hidden" />
          <p className="pl-4 font-semibold text-base flex gap-2 items-center md:hidden">
            Hello, its good to see you! <Star className="w-4 h-4" />
          </p>
          <div className="md:w-1/2">
            <HomeMonthStatus
              entriesValue={getTotal("entry")}
              expensesValue={getTotal("expense")}
            />
          </div>
          <Carousel className="md:w-1/2">
            <CarouselContent>
              {resumeMock.map((resume) => (
                <CarouselItem key={resume.expenses} className="cursor-pointer">
                  <HomeResumeCard
                    expenses={resume.expenses}
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
        <div className="w-full lg:max-w-[1600px] mb-20">
          <p className="pl-4 my-4 font-semibold text-base flex gap-2 items-center md:text-2xl md:my-8">
            Last Registers <BarChart3 className="w-4 h-4" />
          </p>
          <div className="w-full flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <HomeRegisterCard type="entries" registers={entries} />
            </div>
            <div className="md:w-1/2">
              <HomeRegisterCard type="expenses" registers={expenses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
