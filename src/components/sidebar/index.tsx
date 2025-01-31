"use client";
import Collapse from "@/icons/collapse";
import { cn } from "@/lib/utils";
import React from "react";
import logo from "../../../public/pencil.png";
import Image from "next/image";
import { SIDEBAR_MENU_OPTIONS } from "@/constants";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Tooltips } from "../global/tooltip";
import FullSidebar from "./full-sidebar";
import {  useSideBar } from "@/providers/sidebar-context";
import { ModeToggle } from "../global/mode-toggle";
type Props = {};

const Sidebar = (props: Props) => {
  const { isOpen, toggleSidebar } = useSideBar();
  return (
      <div
        className={cn(
          "flex flex-col transition-all bg-background ",
          isOpen ? "w-60 " : "w-16 h-screen",
          "pb-5  border-r  border-slate-200  dark:border-slate-700 ease-in-out delay-150 duration-300   overflow-x-hidden "
        )}
      >
        <div className="flex items-center justify-between mt-4 pl-4 pr-4">
          <Collapse onClick={toggleSidebar} />
          {isOpen && <Image src={logo} alt="logo" width={30} height={30} />}
        </div>
        <Separator
          orientation="horizontal"
          className="w-full mt-4 bg-slate-500"
        />
        <div className=" flex flex-col items-center ">
          {SIDEBAR_MENU_OPTIONS.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={cn(!isOpen ? "" : "w-48")}
            >
              {!isOpen && (
                <div className=" flex  mt-9">
                  <Tooltips name={item.name}>
                    <item.icon />
                  </Tooltips>
                </div>
              )}
            </Link>
          ))}
          { !isOpen && <div className="mt-10">
          <ModeToggle />
          </div>}
          {isOpen && (
            <div className="flex  h-full w-full mt-9 items-center gap-x-2 ">
              <FullSidebar />
            </div>
          )}
        </div>
      </div>
  );
};

export default Sidebar;
