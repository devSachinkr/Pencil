"use cilent";

import { createFileSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../../convex/_generated/api";
import { useMutation } from "convex/react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useGetTeams } from "../team";
import ToastNotify from "@/components/global/toast-notify";

export const useFile = () => {
  const { user } = useKindeBrowserClient();
  const { setActiveTeam, activeTeam } = useGetTeams();
  const [selectedTeam, setSelectedTeam] = useState<string>("");
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
  const handelCreate = handleSubmit(
    async (data: z.infer<typeof createFileSchema>) => {
      setLoading(true);
      try {
        const res = await createFile({
          fileName: data.fileName,
          createdBy: user?.email!,
          teamId: activeTeam?._id!,
        });

        if (res) {
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

  

  return { form, loading, handelCreate };
};
