"use client";

import { BarChart, Home, PiggyBank, Plus, Wallet } from "lucide-react";

import SidebarNavButton from "./sidebar-nav-button";

import { ModeToggle } from "../mode-toggle";

import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

import useModal from "@/hooks/use-modal-store";

import Link from "next/link";

const Sidebar = () => {
  const { onOpen } = useModal();

  return (
    <div className="flex flex-col items-center h-full w-full dark:bg-[#090909] border-r bg-[#fefefe] px-5 shadow-sm">
      <Link href="/home" className="text-xl font-bold md:text-3xl py-14">
        in<span className="text-red-500">Control</span>
      </Link>
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
        <SidebarNavButton link="analytics">
          <BarChart className="w-5 h-5" /> Analytics
        </SidebarNavButton>
        <Separator />
        <Button
          className="flex justify-start gap-2 rounded-3xl"
          onClick={() => onOpen("createRegister")}
        >
          <Plus className="w-5 h-5" />
          Add Register
        </Button>
      </nav>
    </div>
  );
};

export default Sidebar;
