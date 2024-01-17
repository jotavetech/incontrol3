import { ReactNode } from "react";

import Link from "next/link";

import { Button } from "../ui/button";

type LinkType = "home" | "entries" | "bills" | "resume";

interface SidebarNavButtonProps {
  children: ReactNode;
  link: LinkType;
}

const SidebarNavButton = ({ link, children }: SidebarNavButtonProps) => {
  return (
    <Button variant={"secondary"} className="w-full">
      <Link href={`/${link}`} className="flex justify-start gap-2 w-full">
        {children}
      </Link>
    </Button>
  );
};

export default SidebarNavButton;
