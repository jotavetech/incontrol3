import { initialUser } from "@/lib/initial-user";

import { redirect } from "next/navigation";

const SetupPage = async () => {
  const user = await initialUser();

  if (user) return redirect("/home");

  return redirect("/presentation");
};

export default SetupPage;
