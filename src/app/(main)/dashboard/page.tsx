"use client";
import React from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useCreateUserDb } from "@/hooks/create-user-db";
type Props = {};

const Page = (props: Props) => {
  const { loading } = useCreateUserDb();

  return loading ? <div>loading...</div> : <div>Dashboard</div>;
};

export default Page;
