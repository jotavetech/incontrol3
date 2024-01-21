import { Menu } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import { ModeToggle } from "../mode-toggle";
import { Separator } from "../ui/separator";
import { UserButton } from "@clerk/nextjs";

const HomeMobileMenu = () => {
  return (
    <Popover>
      <PopoverTrigger className="mr-4">
        <Menu />
      </PopoverTrigger>
      <PopoverContent className="mr shadow-lg flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <ModeToggle /> Change theme
        </div>
        <Separator />
        <div className="flex items-center gap-4">
          <UserButton
            afterSignOutUrl="/sign-in"
            appearance={{
              elements: {
                avatarBox: "w-9 h-9",
              },
            }}
          />
          Username
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default HomeMobileMenu;
