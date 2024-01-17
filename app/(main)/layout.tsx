import MobileBar from "@/components/mobile-bar/mobile-bar";
import Sidebar from "@/components/sidebar/sidebar";

import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-full relative">
      <div className="hidden md:flex h-full w-[250px] z-30 flex-col fixed inset-y-0">
        <Sidebar />
      </div>
      <MobileBar />
      <main className="md:pl-[72px] h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
