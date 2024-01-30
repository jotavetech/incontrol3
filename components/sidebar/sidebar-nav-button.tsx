import { ReactNode } from "react";

import Link from "next/link";

import { Button } from "../ui/button";

import { cn } from "@/lib/utils";

type LinkType = "home" | "entries" | "expenses" | "resume/1";

interface SidebarNavButtonProps {
  children: ReactNode;
  link: LinkType;
}

const SidebarNavButton = ({ link, children }: SidebarNavButtonProps) => {
  return (
    <Link href={`/${link}`} className="w-full">
      <Button
        variant={"primary"}
        className={cn("w-full flex justify-start gap-2 ")}
      >
        {children}
      </Button>
    </Link>
  );
};

export default SidebarNavButton;
