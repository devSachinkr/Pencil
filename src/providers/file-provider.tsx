"use client";

import { FILE_SCHEMA } from "@/constants";
import { TEAM } from "@/hooks/team";
import { useConvex } from "convex/react";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { useTeam } from "./team-provide";

type initialProps = {
  activeTeam: TEAM;
  fileData: FILE_SCHEMA[];
  fileLength: Number;
  loading: boolean;
};
const initialState: initialProps = {
  activeTeam: {} as TEAM,
  fileData: [],
  fileLength: 0,
  loading: false,
};

const FileContext = createContext(initialState);

type fileProvideProps = {
  children: React.ReactNode;
};

export const FileProvider = ({ children }: fileProvideProps) => {
  const { activeTeam } = useTeam();
  const [fileData, setFileData] = useState<FILE_SCHEMA[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [fileLength, setFilelenght] = useState<Number>(0);
  const router = useRouter();
  const convex = useConvex();
  const getFilesOfTeam = async () => {
    try {
      setLoading(true);
      const res: FILE_SCHEMA[] | null = await convex.query(api.files.getFiles, {
        teamId: activeTeam?._id!,
      });
      if (res) {
        setFilelenght(res.length);
        setFileData(res);
        router.refresh();
        return res;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
   getFilesOfTeam();
  },[activeTeam])

  const value: initialProps = {
    activeTeam,
    fileData,
    fileLength,
    loading,
  };
  return <FileContext.Provider value={value}>{children}</FileContext.Provider>;
};

export const useFile = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error("useFile must be used within <FileProvider>");
  }
  return context;
};
