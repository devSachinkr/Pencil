"use client";

import { FILE_SCHEMA } from "@/constants";
import { TEAM } from "@/hooks/team";
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
import { useRouter } from "next/navigation";
import { useTeam } from "./team-provide";

type initialProps = {
  activeTeam: TEAM;
  fileData: FILE_SCHEMA[];
  fileLength: Number;
  loading: boolean;
  workspaceId: string;
  setWorkspaceId: Dispatch<SetStateAction<string>>;
  setTriggerSave: Dispatch<SetStateAction<boolean>>;
  triggerSave: boolean;
  initialWhiteBoardData: any;
  setInitialWhiteBoardData: Dispatch<SetStateAction<any>>;
};
const initialState: initialProps = {
  activeTeam: {} as TEAM,
  fileData: [],
  fileLength: 0,
  loading: false,
  workspaceId: "",
  setWorkspaceId: () => {},
  setTriggerSave: () => {},
  triggerSave: false,
  initialWhiteBoardData: null,
  setInitialWhiteBoardData: () => {},
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
  const [triggerSave, setTriggerSave] = useState<boolean>(false);
  const [workspaceId, setWorkspaceId] = useState<string>("");
  const [initialWhiteBoardData, setInitialWhiteBoardData] = useState<any>(null);
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
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilesOfTeam();
  }, [activeTeam]);
  useEffect(() => {
    setWorkspaceId(workspaceId);
  }, [workspaceId]);

  const value: initialProps = {
    activeTeam,
    fileData,
    fileLength,
    loading,
    setWorkspaceId,
    workspaceId,
    setTriggerSave,
    triggerSave,
    initialWhiteBoardData,
    setInitialWhiteBoardData,
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
