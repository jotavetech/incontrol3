import { ModeTogglePresentation } from "@/components/mode-toggle-presentation";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Coins,
  Github,
  Library,
  ListOrdered,
  LogIn,
  MoveRight,
  PieChart,
  Settings2,
} from "lucide-react";

import Image from "next/image";

import Link from "next/link";

import { redirect } from "next/navigation";

import { currentUser } from "@/lib/current-user";

const PresentationPage = async () => {
  const user = await currentUser();

  if (user) return redirect("/home");

  return (
    <main className="relative bg-gradient-to-b from-white to-[#f7f7f7] dark:from-black dark:to-[#0d0d0d]">
      <header className="border-b h-16 flex items-center justify-center bg-glass fixed w-full">
        <nav className="w-full px-5 md:px-10 lg:max-w-[1300px] flex justify-between items-center">
          <h1 className="text-xl font-bold md:text-3xl">
            in<span className="text-red-500">Control</span>
          </h1>
          <div className="flex items-center gap-2">
            <Link href="/sign-in" className="text-sm md:text-base">
              Login
            </Link>
            <ModeTogglePresentation aria-label="change theme" />
          </div>
        </nav>
      </header>
      <section className="w-full h-screen flex items-center justify-center">
        <div className="text-center px-5 lg:px-0">
          <h1 className="font-bold text-4xl md:text-6xl">Stay inControl</h1>
          <p className="mt-3 w-full md:w-[600px] lg:w-[700px] text-base md:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400">
            Your easiest and simpliest way to control your finances, empowering
            you to manage your money with ease and transparency. Free.
            Accessible. Open Source.
          </p>
          <div className="space-x-2 md:space-x-4 mt-5">
            <Link href="/sign-in" aria-label="Go to login page">
              <Button variant="outline2" className="shadow-sm rounded-lg">
                <LogIn className="mr-2 w-4 h-4" /> Login
              </Button>
            </Link>
            <a
              href="https://github.com/jotavetech/incontrol3"
              target="_blank"
              aria-label="Go to project repository on github"
            >
              <Button variant="outline" className="shadow-sm rounded-lg">
                <Github className="mr-2 w-4 h-4" />
                Github
              </Button>
            </a>
          </div>
          <div className="w-full mt-7 lg:mt-8">
            <Image
              src="/images/homeWhite.png"
              width={1920}
              height={1080}
              className="object-cover w-full md:w-[700px] rounded-2xl shadow-xl dark:hidden"
              alt="inControl home page photo"
            />
            <Image
              src="/images/homeBlack.png"
              width={1920}
              height={1080}
              className="object-cover w-full md:w-[700px] rounded-2xl shadow-xl hidden dark:block"
              alt="inControl home page photo"
            />
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="text-center px-5 lg:px-0 w-full flex flex-col items-center">
          <h2 className="font-semibold text-2xl md:text-3xl">
            But Why inControl?
          </h2>
          <p className="mt-3 w-full md:w-[600px] lg:w-[700px] text-base md:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400">
            If you are thinking about &ldquo;why should I use incontrol?&ldquo;
            I will list some amazing resources for you.
          </p>

          <div className="max-w-full md:max-w-[1000px] flex gap-2 md:gap-5 mt-10 flex-wrap justify-center">
            <Card className="w-[320px] md:w-[300px] h-[300px] rounded-xl cursor-pointer shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl justify-between">
                  Filter Your Registers{" "}
                  <Settings2 className="text-zinc-800 dark:text-zinc-400 " />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left text-lg">
                <p>
                  With inControl you can see a list of your registration and
                  filter by categories or date of the month.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/sign-in"
                  className="text-zinc-800 dark:text-zinc-400 flex items-center gap-2 hover:translate-x-2 transition-transform"
                >
                  Login <MoveRight />
                </Link>
              </CardFooter>
            </Card>
            <Card className="w-[320px] md:w-[300px] h-[300px] rounded-xl cursor-pointer shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl justify-between">
                  Order Your Registers{" "}
                  <ListOrdered className="text-zinc-800 dark:text-zinc-400 " />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left text-lg">
                <p>
                  In addition to that, you can also order the list of your
                  transactions by date or amount value.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/sign-in"
                  className="text-zinc-800 dark:text-zinc-400 flex items-center gap-2 hover:translate-x-2 transition-transform"
                >
                  Login <MoveRight />
                </Link>
              </CardFooter>
            </Card>
            <Card className="w-[320px] md:w-[300px] h-[300px] rounded-xl cursor-pointer shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl justify-between">
                  Register Categories{" "}
                  <Library className="text-zinc-800 dark:text-zinc-400 " />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left text-lg">
                <p>
                  You can create a register by defining your category and type
                  (expense) or (entry).
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/sign-in"
                  className="text-zinc-800 dark:text-zinc-400 flex items-center gap-2 hover:translate-x-2 transition-transform"
                >
                  Login <MoveRight />
                </Link>
              </CardFooter>
            </Card>
            <Card className="w-[320px] md:w-[300px] h-[300px] rounded-xl cursor-pointer shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl justify-between">
                  Financial Status{" "}
                  <Coins className="text-zinc-800 dark:text-zinc-400 " />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left text-lg">
                <p>
                  InControl will show you how much money is remaining or
                  missing, either overall or for the current month.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/sign-in"
                  className="text-zinc-800 dark:text-zinc-400 flex items-center gap-2 hover:translate-x-2 transition-transform"
                >
                  Login <MoveRight />
                </Link>
              </CardFooter>
            </Card>
            <Card className="w-[320px] md:w-[300px] h-[300px] rounded-xl cursor-pointer shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl justify-between">
                  Categories Graph{" "}
                  <PieChart className="text-zinc-800 dark:text-zinc-400 " />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left text-lg">
                <p>
                  On the Analytics page, you&apos;ll see graphs of your most
                  frequently used transaction categories.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/sign-in"
                  className="text-zinc-800 dark:text-zinc-400 flex items-center gap-2 hover:translate-x-2 transition-transform"
                >
                  Login <MoveRight />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full mt-20 flex flex-col items-center">
        <div className="text-center px-5 lg:px-0 ">
          <h1 className="font-bold text-4xl md:text-6xl">FAQ</h1>
          <p className="mt-3 w-full md:w-[600px] lg:w-[700px] text-base md:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400">
            You might have some questions, so I&apos;ll try to answer some of
            them here to make your life easier.
          </p>
        </div>
        <div className="my-10 w-full px-10 flex justify-center">
          <Accordion type="multiple" className="w-full md:w-[600px]">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I add a new transaction?
              </AccordionTrigger>
              <AccordionContent>
                In the InControl navigation bar, you&apos;ll find an &ldquo;Add
                Record&ldquo; button. There, you can choose how you&apos;d like
                to create and submit it.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can I categorize my registers?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can categorize your expenses at the time of creation.
                You&apos;ll have a &ldquo;category&ldquo; field where you can
                choose one of the listed categories.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How can I track my current balance?
              </AccordionTrigger>
              <AccordionContent>
                In the InControl menu, you&apos;ll find a card displaying your
                current month status, showing how much money is remaining or
                lacking for the month.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How do I view expense reports?
              </AccordionTrigger>
              <AccordionContent>
                On the analytics page, you&apos;ll also find an overall status
                and one for the current month. You can also view and export
                charts showing the categories in which you&apos;ve had the most
                records created.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How do I send bug reports or contribute to the project?
              </AccordionTrigger>
              <AccordionContent>
                To contribute to the project or submit your bug report, you can
                access our GitHub repository and create your issue or pull
                request by{" "}
                <a
                  href="https://github.com/jotavetech/incontrol3"
                  className="underline text-blue-900"
                  target="_blank"
                >
                  clicking here
                </a>
                .
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <footer className="w-full py-4 bg-white dark:bg-black text-center">
        <p>
          InControl is an app created with much ❤️ by{" "}
          <a
            href="https://beacons.ai/jotavetech"
            className="underline text-blue-900"
            target="_blank"
          >
            @jotavetech
          </a>
        </p>
      </footer>
    </main>
  );
};

export default PresentationPage;
