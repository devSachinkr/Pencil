"use client";
import Sidebar from "@/components/sidebar";
import React, { createContext, useContext, useState } from "react";

const initialState = {
  isOpen: false,
  toggleSidebar: () => {},
};
type SidebarProps = {
  children: React.ReactNode;
};
const SidebarContext = createContext(initialState);

export const SidebarProvider = ({ children }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSideBar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSideBar must be used within a <SidebarProvider />");
  }
  return context;
};

