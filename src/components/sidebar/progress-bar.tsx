"use client";
import React from "react";
import { Progress } from "../ui/progress";
import { TEAM } from "@/hooks/team";
import { useFile } from "@/providers/file-provider";


const ProgressBar = () => {
  const { fileLength } = useFile();
  return (
    <>
      <div className="h-4 w-[90%] bg-gray-200 rounded-full mt-3">
        <div
          className={`h-4 bg-[#29adbe] rounded-full`}
          style={{
            //@ts-ignore
            width:`${(fileLength/5)*100}%`,
          }}
        />
      </div>

      <span className="text-muted-foreground">{`${fileLength}`} of 5</span>

      <span className="text-muted-foreground text-center">
        Upgrade plan for unlimited access
      </span>
    </>
  );
};

export default ProgressBar;
