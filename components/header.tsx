"use client";

import { UserButton } from "@clerk/nextjs";

import Link from "next/link";

import { ModeTogglePresentation } from "./mode-toggle-presentation";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="md:pl-[250px] border-b h-16 flex items-center justify-center bg-glass fixed w-full top-0 z-10">
      <nav className="w-full px-5 md:px-10 lg:max-w-[1600px] flex justify-between items-center">
        <Link
          href={pathname}
          className="text-xl font-bold md:text-3xl capitalize"
        >
          {pathname.split("/")}
        </Link>
        <div className="flex items-center gap-2">
          <ModeTogglePresentation aria-label="change theme" />
          <UserButton
            afterSignOutUrl="/sign-in"
            appearance={{
              elements: { avatarBox: "w-9 h-9 " },
            }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
