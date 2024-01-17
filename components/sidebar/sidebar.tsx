import { BarChart, Home, PiggyBank, Wallet } from "lucide-react";

import SidebarNavButton from "./sidebar-nav-button";

import { ModeToggle } from "../mode-toggle";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center h-full w-full dark:bg-[#121314] bg-[#e3e5e8] px-5">
      <p className="capitalize text-xl font-semibold py-14">
        Hello, <span className="text-primary">Joao</span>
      </p>
      <nav className="w-full flex flex-col gap-4">
        <SidebarNavButton link="home">
          <Home className="w-5 h-5" /> Home
        </SidebarNavButton>
        <SidebarNavButton link="entries">
          <PiggyBank className="w-5 h-5" /> Entries
        </SidebarNavButton>
        <SidebarNavButton link="bills">
          <Wallet className="w-5 h-5" /> Bills
        </SidebarNavButton>
        <SidebarNavButton link="resume">
          <BarChart className="w-5 h-5" /> Resume
        </SidebarNavButton>
      </nav>
      <div className="flex flex-col justify-center items-center w-full gap-2 text-sm absolute bottom-10 left-0">
        <ModeToggle />
        <p>Toggle theme.</p>
      </div>
    </div>
  );
};

export default Sidebar;
