import HomeMobileMenu from "@/components/home/home-mobile-menu";
import RegistersResumeCard from "@/components/analytics/registers-resume-card";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import { UserButton } from "@clerk/nextjs";
import { BarChart4, Tags } from "lucide-react";
import { redirect } from "next/navigation";
import CategoriesResume from "@/components/analytics/categories-resume";

const AnalyticsPage = async () => {
  const user = await currentUser();

  if (!user) return redirect("/sign-in");

  const entriesRegisters = await db.entry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const expensesRegisters = await db.expense.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="flex w-full lg:max-w-[1600px]  justify-between items-center">
        <h1 className="text-xl font-bold ml-4 my-4 md:ml-8 md:my-8 md:text-3xl flex items-center gap-2">
          Analytics <BarChart4 />
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
            Here its your resume!
          </p>
          <div className="md:w-1/2">
            <RegistersResumeCard type="entries" registers={entriesRegisters} />
          </div>
          <div className="md:w-1/2">
            <RegistersResumeCard
              type="expenses"
              registers={expensesRegisters}
            />
          </div>
        </div>
        <div className="w-full lg:max-w-[1600px] mb-20">
          <p className="pl-4 my-4 font-semibold text-base flex gap-2 items-center md:text-2xl md:my-8">
            Most used categories <Tags className="w-4 h-4" />
          </p>
          <div className="w-full flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <CategoriesResume type="entries" registers={entriesRegisters} />
            </div>
            <div className="md:w-1/2">
              <CategoriesResume type="expenses" registers={expensesRegisters} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
