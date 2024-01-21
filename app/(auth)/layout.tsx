import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-w-full min-h-screen flex flex-col justify-start md:justify-center items-center">
      <div className="text-center w-full space-y-2 mb-5 mt-10 md:my-5">
        <h1 className="text-3xl md:text-6xl font-bold">
          in<span className="text-red-500">Control</span>
        </h1>
        <p className="text-medium md:text-xl text-base">
          Login to your account to be inControl.
        </p>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
