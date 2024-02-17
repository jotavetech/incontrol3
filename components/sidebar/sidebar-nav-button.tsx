import { ReactNode } from "react";

import Link from "next/link";

import { Button } from "../ui/button";

import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";

type LinkType = "home" | "entries" | "expenses" | "analytics";

interface SidebarNavButtonProps {
  children: ReactNode;
  link: LinkType;
}

const SidebarNavButton = ({ link, children }: SidebarNavButtonProps) => {
  const pathname = usePathname();

  const isActive = pathname === `/${link}`;

  return (
    <Link href={`/${link}`} className="w-full">
      <Button
        variant={"primary"}
        className={cn(
          "w-full flex justify-start gap-2",
          isActive && "opacity-60"
        )}
      >
        {children}
      </Button>
    </Link>
  );
};

export default SidebarNavButton;
