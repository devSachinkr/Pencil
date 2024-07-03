"use client";
import { sidebarMenuOptions } from "@/constants";
import Image from "next/image";
import React from "react";
import logo from "../../../public/pencil.png";
import { ArrowDownAZ, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import TeamCard from "./team-card";
import { Spinner } from "../global/spinner";
import { useGetTeams } from "@/hooks/team";
const FullSidebar = () => {
  const {loading, teamData, user}=useGetTeams();
  return (
    <div className=" w-full flex flex-col items-center">
      <Popover>
        <PopoverTrigger className=" flex items-center gap-x-2 w-[80%] bg-primary/30 border-[1px] border-primary rounded-full  px-4 p-3">
          <Image src={logo} alt="logo" width={30} height={30} />
          <Spinner loading={loading}>
            {teamData?.find((t) => t.createdBy === user?.email)?.name}
          </Spinner>
          <ChevronDown />
        </PopoverTrigger>
        <PopoverContent>
          <TeamCard />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FullSidebar;
