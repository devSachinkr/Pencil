import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar";
type Props = {
  children: React.ReactNode;
};

const layout = async ({ children }: Props) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  if (!user) {
    return redirect("/api/auth/login?");
  }
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default layout;
