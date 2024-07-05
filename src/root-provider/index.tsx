'use cilent'
import Sidebar from "@/components/sidebar";
import { FileProvider } from "@/providers/file-provider";
import { SidebarProvider } from "@/providers/sidebar-context";
import { TeamProvider } from "@/providers/team-provide";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const RootProvider = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <TeamProvider>
        <FileProvider>{children}</FileProvider>
      </TeamProvider>
    </SidebarProvider>
  );
};

export default RootProvider;
