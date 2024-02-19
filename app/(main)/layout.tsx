import Header from "@/components/header";
import MobileBar from "@/components/mobile-bar/mobile-bar";
import Sidebar from "@/components/sidebar/sidebar";

import { currentUser } from "@/lib/current-user";

import { redirect } from "next/navigation";

import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = async ({ children }: MainLayoutProps) => {
  const user = await currentUser();

  if (!user) return redirect("/");

  return (
    <div className="min-h-full relative">
      <div className="hidden md:flex h-full w-[250px] z-30 flex-col fixed inset-y-0">
        <Sidebar />
      </div>
      <MobileBar />
      <Header />
      <main className="md:pl-[250px] h-full pt-20 md:pt-24">{children}</main>
    </div>
  );
};

export default MainLayout;
