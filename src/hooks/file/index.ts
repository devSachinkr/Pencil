"use cilent";

import { createFileSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../../convex/_generated/api";
import { useConvex, useMutation } from "convex/react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { TEAM, useGetTeams } from "../team";
import ToastNotify from "@/components/global/toast-notify";
import { FILE_SCHEMA } from "@/constants";
import { useRouter } from "next/navigation";

export const useFile = ({ activeTeam }: { activeTeam?: TEAM }) => {
  const convex = useConvex();
  const { user } = useKindeBrowserClient();
  const router = useRouter();
  const [selectedTeam, setSelectedTeam] = useState<TEAM>();
  const [filesLenght, setFilelenght] = useState<Number>(0);
  const form = useForm<z.infer<typeof createFileSchema>>({
    resolver: zodResolver(createFileSchema),
    mode: "onChange",
    defaultValues: {
      fileName: "",
    },
  });
  const createFile = useMutation(api.files.createFile);
  const { handleSubmit } = form;
  const [loading, setLoading] = useState<boolean>(false);
 const [tracking, setTracking] = useState<boolean>(false);
  const handelCreate = handleSubmit(
    async (data: z.infer<typeof createFileSchema>) => {
      setLoading(true);
      try {
        const res = await createFile({
          fileName: data.fileName,
          createdBy: user?.email!,
          teamId: activeTeam?._id!,
          archived: false,
          document: "",
          whiteBoard: "",
        });

        if (res) {
          getFilesOfTeam();
          ToastNotify({
            title: "Success",
            msg: "File created successfully",
          });
          form.reset();
        }
      } catch (err) {
        console.log(err);
        ToastNotify({
          title: "Oops!",
          msg: "Failed to create file",
        });
      } finally {
        setLoading(false);
      }
    }
  );

  const getFilesOfTeam = async () => {
    try {
      setLoading(true);
      const res: FILE_SCHEMA[] | null = await convex.query(api.files.getFiles, {
        teamId: activeTeam?._id!,
      });
      if (res) {
        setFilelenght(res.length);
        router.refresh();
        return res;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilesOfTeam();
  }, [activeTeam]);

  useEffect(() => {
    setSelectedTeam(activeTeam);
  }, [activeTeam]);

  return {
    form,
    loading,
    handelCreate,
    activeTeam,
    selectedTeam,
    filesLenght,
  };
};
