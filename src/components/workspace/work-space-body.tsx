import React from "react";
import Document from "./document";
import WorkSpaceCanvas from "./work-space-canvas";

type Props = {
  workspaceId: string;
};

const WorkSpaceBody = ({ workspaceId }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
      <Document />
      <WorkSpaceCanvas />
    </div>
  );
};

export default WorkSpaceBody;
