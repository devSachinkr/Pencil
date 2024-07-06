import React from "react";
import Document from "./document";

type Props = {
  workspaceId: string;
};

const WorkSpaceBody = ({workspaceId}: Props) => {
  return <div className="grid grid-cols-1 md:grid-cols-2">
    <Document/>
    {/* <WorkSpaceCanvas/> */}
  </div>;
};

export default WorkSpaceBody;
