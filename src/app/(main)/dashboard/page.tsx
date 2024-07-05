"use client";
import React from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useCreateUserDb } from "@/hooks/user/index";
import Header from "@/components/dashboard/header";
import { useSideBar } from "@/providers/sidebar-context";
import { cn } from "@/lib/utils";
import FileList from "@/components/dashboard/file-list";

const Page = () => {
  const { isOpen } = useSideBar();
  return (
    <div
      className={cn(
        " md:pl-16 mt-10 ",
        isOpen ? "lg:w-[80vw] w-[60vw]" : "lg:w-[90vw] w-[80vw]"
      )}
    >
      <Header />

      <FileList />
    </div>
  );
};

export default Page;
