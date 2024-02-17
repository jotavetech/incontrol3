import { ReactNode } from "react";

import Link from "next/link";

import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type LinkType = "home" | "entries" | "expenses" | "analytics";

interface MobileNavButtonProps {
  children: ReactNode;
  link: LinkType;
}

const MobileNavButton = ({ link, children }: MobileNavButtonProps) => {
  const pathname = usePathname();

  const isActive = pathname === `/${link}`;

  return (
    <Button
      variant={"mobile"}
      className={cn("w-12 h-12 rounded-full", isActive && "opacity-80")}
    >
      <Link
        href={`/${link}`}
        className="flex flex-col justify-center items-center gap-1 text-xs font-medium"
      >
        {children}
      </Link>
    </Button>
  );
};

export default MobileNavButton;
