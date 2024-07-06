import WorkSpaceBody from "@/components/workspace/work-space-body";
import WorkSpaceHeader from "@/components/workspace/work-space-header";

import React from "react";

type Props = {
  params: {
    workspaceId: string;
  };
};

const page = ({ params: { workspaceId } }: Props) => {
  return (
    <div className="w-full overflow-x-hidden">
      <WorkSpaceHeader workspaceId={workspaceId} />

      <WorkSpaceBody workspaceId={workspaceId} />
    </div>
  );
};

export default page;
