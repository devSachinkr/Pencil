"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { TEAM_DETAILS_MENU_OPTIONS } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useGetTeams } from "@/hooks/team";
import { Spinner } from "../global/spinner";
import { cn } from "@/lib/utils";

type Props = {};

const TeamCard = (props: Props) => {
  const { teamData, loading, user } = useGetTeams();
  console.log(teamData[0]);
  if (!user) return;
  return (
    <Card>
      <CardContent>
        <h2
          className={cn(
            `flex items-center px-4 p-3
         rounded-md mt-2`,
            teamData.map((t) =>
              teamData[0]._id === t._id ? "bg-primary/30" : ""
            )
          )}
        >
          <Spinner loading={loading}>
            {teamData?.find((t) => t.createdBy === user?.email)?.name}
          </Spinner>
        </h2>

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
            <p className="text-muted-foreground">{user?.email! || ""}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
