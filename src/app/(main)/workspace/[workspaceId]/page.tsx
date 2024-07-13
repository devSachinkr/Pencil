"use client";
import WorkSpaceBody from "@/components/workspace/work-space-body";
import WorkSpaceHeader from "@/components/workspace/work-space-header";
import { useEditor } from "@/hooks/editor";
import { useFile } from "@/providers/file-provider";

import React, { useEffect } from "react";

type Props = {
  params: {
    workspaceId: string;
  };
};

const Page = ({ params: { workspaceId } }: Props) => {
  const { setWorkspaceId } = useFile();
  setWorkspaceId(workspaceId);
  return (
    <div className="w-full overflow-x-hidden lg:h-screen">
      <WorkSpaceHeader workspaceId={workspaceId} />

      <WorkSpaceBody workspaceId={workspaceId} />
    </div>
  );
};

export default Page;
