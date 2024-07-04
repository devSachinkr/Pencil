"use client";

import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return { isOpen, setIsOpen, closeModal };
};
