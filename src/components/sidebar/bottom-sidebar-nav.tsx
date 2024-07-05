import { SIDEBAR_MENU_OPTIONS_BOTTOM } from "@/constants";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import DialogBox from "../global/dialog-box";
import FileForm from "../forms/file-form";
import { useGetTeams } from "@/hooks/team";
import { useFile } from "@/hooks/file";
import ProgressBar from "./progress-bar";

type Props = {
  activeTeam: any;
};

const BottomSIdeBarNav = ({ activeTeam }: Props) => {
  
  return (
    <section className="w-full flex items-center flex-col ">
      {SIDEBAR_MENU_OPTIONS_BOTTOM.map((item) => (
        <Link
          href={item.path}
          key={item.name}
          className="flex items-center gap-2 bg-accent p-3 px-4 mt-3 w-[90%] justify-between rounded-md hover:bg-accent/80"
        >
          <p className="flex items-center gap-2 text-sm">
            <item.icon />
            {item.name}
          </p>
          {item.sideIcon === "UPGRADE" ? (
            <span className="p-2 px-2 bg-gray-600 text-sm rounded-md">
              {item.sideIcon}
            </span>
          ) : (
            <span className="text-muted-foreground">{item.sideIcon}</span>
          )}
        </Link>
      ))}

      <div className="flex flex-col w-full gap-2 items-center">
        <DialogBox
          title="Create file"
          desc="Easily create a new file with a single click"
          cardTitle="File Details"
          cardDesc="Fill in the details of your file"
          content={<FileForm activeTeam={activeTeam}/>}
        >
          <Button className="w-[90%] mt-4 text-lg font-semibold">
            New File
          </Button>
        </DialogBox>

      <ProgressBar activeTeam={activeTeam}/>
      
      </div>
    </section>
  );
};

export default BottomSIdeBarNav;
