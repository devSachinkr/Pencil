"use client";
import { useCreateTeamDb } from "@/hooks/user";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
   const {loading}=useCreateTeamDb();
  return <div>{children}</div>;
};

export default Layout;
