import { ModeTogglePresentation } from "@/components/mode-toggle-presentation";

import Link from "next/link";

import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="relative">
      <header className="border-b h-16 flex items-center justify-center bg-glass fixed w-full">
        <nav className="w-full px-5 md:px-10 lg:max-w-[1300px] flex justify-between items-center">
          <Link href="/" className="text-xl font-bold md:text-3xl">
            in<span className="text-red-500">Control</span>
          </Link>
          <div className="flex items-center gap-2">
            <ModeTogglePresentation aria-label="change theme" />
          </div>
        </nav>
      </header>
      <div className="w-full min-h-screen flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
