"use client";
import Teams from "@/icons/teams";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/pencil.png";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import BottomSIdeBarNav from "./bottom-sidebar-nav";

import { TEAM_DETAILS_MENU_OPTIONS } from "@/constants";
import { useGetTeams } from "@/hooks/team";
import { cn } from "@/lib/utils";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
const FullSidebar = () => {
  const { loading, teamData, user, activeTeam, setActiveTeam } = useGetTeams();
  console.log("first");
  console.log(activeTeam);
  return (
    <div className=" w-full  h-screen flex flex-col items-center ">
      <div className="flex-1 flex w-full  flex-col items-center">
        <Popover>
          <PopoverTrigger
            className=" flex items-center gap-x-2 w-[80%] bg-primary border-[1px] border-primary rounded-full  px-4 p-3"
            asChild
          >
            <div>
              <Image src={logo} alt="logo" width={30} height={30} />
              <h2>{activeTeam?.name}</h2>
              <ChevronDown />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <Card>
              <CardContent>
                {teamData?.map((t) => (
                  <h2
                    key={t.name}
                    className={cn(
                      `flex items-center px-4 p-3
              rounded-md mt-2 hover:bg-primary/30 cursor-pointer`,
                      activeTeam?._id == t._id
                        ? "bg-primary/30"
                        : "bg-transparent"
                    )}
                    onClick={() => setActiveTeam(t)}
                  >
                    {t.name}
                  </h2>
                ))}

                <Separator orientation="horizontal" className="my-2 " />

                <div className="flex items-start flex-col ">
                  {TEAM_DETAILS_MENU_OPTIONS.map((item) => (
                    <div key={item.name} className="mt-2 w-full">
                      {item.name === "Logout" ? (
                        <Button className="w-full">
                          <LogoutLink
                            className="flex 
        items-center gap-x-2 p-3 px-4 rounded-md w-full"
                          >
                            <item.icon />
                            Logout
                          </LogoutLink>
                        </Button>
                      ) : (
                        <Link
                          href={item.path}
                          className="
      flex items-center gap-x-2 p-3 px-4 rounded-md hover:text-muted-foreground"
                        >
                          <item.icon />
                          <p className="text-sm">{item.name}</p>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <Separator orientation="horizontal" className="my-2 " />
                <div className="flex items-center gap-x-2">
                  <Avatar>
                    <AvatarImage src={user?.picture!} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    {user?.given_name || ""}
                    <p className="text-muted-foreground">
                      {user?.email! || ""}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </PopoverContent>
        </Popover>
        <section
          className=" w-full mt-8 flex
      flex-col items-center"
        >
          <Link
            href={"#"}
            className="px-4 p-3 bg-accent bg-opacity-25 rounded-md w-[90%] text-start pl-4 flex items-center gap-x-2"
          >
            <Teams />
            All Files
          </Link>
        </section>
      </div>

      <div className="flex-1">
        <BottomSIdeBarNav />
      </div>
    </div>
  );
};

export default FullSidebar;
