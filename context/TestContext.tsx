import { createContext } from "react";

export const TestContext = createContext({});

export const TestProvider = ({ children }: { children: React.ReactNode }) => {
  return <TestContext.Provider value={{}}>{children}</TestContext.Provider>;
};
