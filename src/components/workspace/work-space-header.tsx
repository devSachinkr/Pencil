"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/pencil.png";
import { useFile } from "@/providers/file-provider";
import { Spinner } from "../global/spinner";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Share2 } from "lucide-react";
import { useEditor } from "@/hooks/editor";
type Props = {
  workspaceId: string;
};

const WorkSpaceHeader = ({ workspaceId }: Props) => {
  const { fileData, loading } = useFile();
  const {setTriggerSave,triggerSave}=useEditor();
  if (!fileData) return null;
  const Data = fileData?.filter((file) => file?._id === workspaceId);
  const currentFileData = Data[0];
  if (!currentFileData) return null;
  return (
    <header className="w-full flex items-center justify-between border-b-[1px] border-accent ">
      <div className="flex items-center px-4 p-3 ">
        <Image src={logo} alt="pencil" width={40} height={40} />
        <Spinner loading={loading}>
          <span className="capitalize">{currentFileData.fileName}</span>
        </Spinner>
      </div>
      <div className="pr-4 flex items-center gap-3">
        <Button onClick={()=>setTriggerSave((prev)=>!prev)}>Save</Button>
        <Button>
          <Share2 />
          Share
        </Button>
      </div>
    </header>
  );
};

export default WorkSpaceHeader;
