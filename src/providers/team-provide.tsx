"use client";

import { TEAM } from "@/hooks/team";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../convex/_generated/api";

type initialProps = {
  activeTeam: TEAM;
  loading: boolean;
  teamData: TEAM[];
  setActiveTeam: Dispatch<SetStateAction<TEAM>>;
  user: {
    id: string;
    email: string | null;
    given_name: string | null;
    family_name: string | null;
    picture: string | null;
  } | null;
  getUser: () => Promise<void>;
};
const initialState: initialProps = {
  activeTeam: {} as TEAM,
  loading: false,
  setActiveTeam: () => {},
  teamData: [] as TEAM[],
  user: {} as initialProps["user"],
  getUser: async () => {},
};

const TeamContext = createContext(initialState);

type TeamProvideProps = {
  children: React.ReactNode;
};
export const TeamProvider = ({ children }: TeamProvideProps) => {
  const [activeTeam, setActiveTeam] = useState<TEAM>({} as TEAM);
  const [teamData, setTeamData] = useState<TEAM[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useKindeBrowserClient();
  const convex = useConvex();

  const getUser = async () => {
    try {
      setLoading(true);
      const res: TEAM[] = await convex.query(api.teams.getTeams, {
        email: user?.email!,
      });
      if (res) {
        setTeamData(res);
        setActiveTeam(res[0]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    user && getUser();
  }, [user]);

  useEffect(() => {
    activeTeam && setActiveTeam(activeTeam);
  }, [activeTeam]);
  const value: initialProps = {
    activeTeam,
    loading,
    setActiveTeam,
    teamData,
    user,
    getUser,
  };
  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
};

export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error("useTeam must be used within a <TeamProvider />");
  }
  return context;
};
