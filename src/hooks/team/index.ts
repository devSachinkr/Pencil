"use client";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { createTeamSchema } from "@/types/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { redirect, useRouter } from "next/navigation";
import ToastNotify from "@/components/global/toast-notify";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const useCreateTeam = () => {
  const { user } = useKindeBrowserClient();
  const router = useRouter();
  const createTeam = useMutation(api.teams.createTeam);
  const form = useForm<z.infer<typeof createTeamSchema>>({
    resolver: zodResolver(createTeamSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;

  const handleCreateForm = handleSubmit(
    async ({ name }: z.infer<typeof createTeamSchema>) => {
      setLoading(true);
      try {
        if (!user) return redirect("/");
        const res = await createTeam({
          name: name,
          createdBy: user?.email!,
        });
        if (res) {
          ToastNotify({
            title: "Success",
            msg: "Team created successfully",
          });
          reset();
          router.push("/dashboard");
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        ToastNotify({
          title: "Oops!",
          msg: "Something went wrong",
        });
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
  );

  return {
    form,
    loading,

    handleCreateForm,
    isSubmitting,
  };
};

export const useGetTeams = () => {
  const convex = useConvex();

  const [teamData, setTeamData] = useState<
    {
      _id: string;
      createdBy: string;
      name: string;
      _creationTime: number;
    }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useKindeBrowserClient();
  useEffect(() => {
    user && getUser();
  }, [user]);
  const getUser = async () => {
    try {
      setLoading(true);
      const res = await convex.query(api.teams.getTeams, {
        email: user?.email!,
      });
      if (res) {
        setTeamData(res);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    teamData,
    user,
    loading,
  };
};
