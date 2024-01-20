"use client";

import { BarChart, Home, PiggyBank, Plus, Wallet } from "lucide-react";

import SidebarNavButton from "./sidebar-nav-button";

import { ModeToggle } from "../mode-toggle";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

import useModal from "@/hooks/use-modal-store";

const Sidebar = () => {
  const { onOpen } = useModal();

  return (
    <div className="flex flex-col items-center h-full w-full dark:bg-[#0d0e0f] bg-[#f5f5f5] px-5">
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
        <SidebarNavButton link="expenses">
          <Wallet className="w-5 h-5" /> Expenses
        </SidebarNavButton>
        <SidebarNavButton link="resume">
          <BarChart className="w-5 h-5" /> Resume
        </SidebarNavButton>
        <Separator />
        <Button
          className="flex justify-start gap-2"
          onClick={() => onOpen("createRegister")}
        >
          <Plus className="w-5 h-5" />
          Add Register
        </Button>
      </nav>
      <div className="flex flex-col justify-center items-center w-full gap-2 text-sm absolute bottom-10 left-0">
        <ModeToggle />
        <p>Toggle theme.</p>
      </div>
    </div>
  );
};

export default Sidebar;
