"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { api } from "../../../convex/_generated/api";
import { useConvex, useMutation, useQuery } from "convex/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useCreateUserDb = () => {
  const convex = useConvex();
  const [userData, setUserData] = React.useState<{
    __tableName: string;
  }>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const { user } = useKindeBrowserClient();

  const createUser = useMutation(api.user.createUser);

  const insertUser = async () => {
    setLoading(true);
    const checkUser = await convex.query(api.user.getUser, {
      email: user?.email!,
    });
    if (checkUser.length === 0 || !checkUser) {
      try {
        const res = await createUser({
          avatar: user?.picture!,
          email: user?.email!,
          name: user?.given_name!,
          plan: "STANDARD",
          role: "USER",
        });
        setUserData(res);
      } catch (err) {
        console.log(err);
        return;
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      insertUser();
    }
  }, [user]);

  return { userData, loading };
};

export const useCreateTeamDb = () => {
  const { user } = useKindeBrowserClient();
  const convex = useConvex();
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const createTeam = async () => {
    setLoading(true);
    try {
      const checkExistingTeam = await convex.query(api.teams.getTeams, {
        email: user?.email!,
      });
      if (checkExistingTeam.length === 0 || !checkExistingTeam.length) {
        router.push("/teams/create");
        setLoading(false);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      createTeam();
    }
  }, [user]);
  return { loading };
};
