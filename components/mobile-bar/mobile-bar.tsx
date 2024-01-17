import { BarChart, Home, PiggyBank, Plus, Wallet } from "lucide-react";

import MobileNavButton from "./mobile-nav-button";
import { Button } from "../ui/button";

const MobileBar = () => {
  return (
    <div className="fixed md:hidden bottom-0 left-0 w-full h-[70px] dark:bg-[#1E1F22] bg-[#e3e5e8] rounded-t-3xl">
      <nav className="flex w-full justify-around  items-center h-full">
        <MobileNavButton link="home">
          <Home />
        </MobileNavButton>
        <MobileNavButton link="entries">
          <PiggyBank />
        </MobileNavButton>
        <Button className="w-14 h-14 rounded-full shadow-sm">
          <Plus />
        </Button>
        <MobileNavButton link="bills">
          <Wallet />
        </MobileNavButton>
        <MobileNavButton link="resume">
          <BarChart />
        </MobileNavButton>
      </nav>
    </div>
  );
};

export default MobileBar;
