import { UserButton } from "@clerk/nextjs";

import HomeMobileMenu from "./home/home-mobile-menu";

const Header = () => {
  return (
    <div className="flex w-full lg:max-w-[1600px]  justify-between items-center">
      <h1 className="text-xl font-bold ml-4 my-4 md:ml-8 md:my-8 md:text-3xl flex items-center">
        in<span className="text-red-500">Control</span>
      </h1>
      <div className="hidden md:flex mr-8 my-8">
        <UserButton
          afterSignOutUrl="/sign-in"
          appearance={{
            elements: { avatarBox: "w-12 h-12 " },
          }}
        />
      </div>
      <div className="flex md:hidden">
        <HomeMobileMenu />
      </div>
    </div>
  );
};

export default Header;
