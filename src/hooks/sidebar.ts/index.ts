'use client';
import { useState } from "react";

export const useSideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toogleSidebar = () => {
    setIsOpen(!isOpen);
  };

  
  return {
    isOpen,
    toogleSidebar,
  };
};
