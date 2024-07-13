import { useFile } from "@/providers/file-provider";
import { useMutation } from "convex/react";
import { useEffect, useState } from "react";
import { api } from "../../../convex/_generated/api";

export const useCanvas = () => {
  const {
    triggerSave,
    workspaceId,
    initialWhiteBoardData,
    setInitialWhiteBoardData,
  } = useFile();
  const [whiteBoardData, setWhiteBoardData] = useState<any>();
  const updateWhiteBoardData = useMutation(api.files.updateWhiteBoard);

  const saveWhiteBoard = async () => {
    try {
      const res = await updateWhiteBoardData({
        // @ts-ignore
        _id: workspaceId,
        whiteBoard: JSON.stringify(whiteBoardData) ?? "",
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    saveWhiteBoard();
  }, [triggerSave]);
  useEffect(() => {
    setInitialWhiteBoardData(initialWhiteBoardData);
  }, [initialWhiteBoardData]);
  return {
    setWhiteBoardData,
    whiteBoardData,
    initialWhiteBoardData,
  };
};
