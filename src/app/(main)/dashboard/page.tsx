"use client";
import React from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useCreateUserDb } from "@/hooks/user/index";

const Page = () => {
  const { loading } = useCreateUserDb();

  return <div>
    Dashboard
    </div>;
};

export default Page;
