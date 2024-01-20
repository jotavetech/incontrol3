"use client";

import { BarChart, Home, PiggyBank, Plus, Wallet } from "lucide-react";

import MobileNavButton from "./mobile-nav-button";

import { Button } from "../ui/button";

import useModal from "@/hooks/use-modal-store";

const MobileBar = () => {
  const { onOpen } = useModal();

  return (
    <div className="fixed md:hidden bottom-0 left-0 w-full h-[70px] dark:bg-[#0d0e0f] bg-[#f5f5f5] rounded-t-3xl">
      <nav className="flex w-full justify-around  items-center h-full">
        <MobileNavButton link="home">
          <Home />
          Home
        </MobileNavButton>
        <MobileNavButton link="entries">
          <PiggyBank />
          Entries
        </MobileNavButton>
        <Button
          className="w-14 h-14 rounded-full shadow-sm"
          onClick={() => onOpen("createRegister")}
        >
          <Plus />
        </Button>
        <MobileNavButton link="bills">
          <Wallet />
          Bills
        </MobileNavButton>
        <MobileNavButton link="resume">
          <BarChart />
          Analytics
        </MobileNavButton>
      </nav>
    </div>
  );
};

export default MobileBar;
