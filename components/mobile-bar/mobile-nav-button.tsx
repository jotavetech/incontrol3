import { ReactNode } from "react";

import Link from "next/link";

import { Button } from "../ui/button";

type LinkType = "home" | "entries" | "expenses" | "resume";

interface MobileNavButtonProps {
  children: ReactNode;
  link: LinkType;
}

const MobileNavButton = ({ link, children }: MobileNavButtonProps) => {
  return (
    <Button variant={"mobile"} className="w-12 h-12 rounded-full">
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
