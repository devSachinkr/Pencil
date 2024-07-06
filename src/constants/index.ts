import Collapse from "@/icons/collapse";
import DashboardSvg from "@/icons/dashboard";
import SettingsSvg from "@/icons/settings";
import PremiumSvg from "@/icons/premium";
import TeamsSvg from "@/icons/teams";

import {
  Bolt,
  Flag,
  Github,
  LockKeyhole,
  LogOut,
  LucideIcon,
  Trash2,
  UserRound,
} from "lucide-react";
import React from "react";
type menuOption = {
  path: string;
  name: string;
};

export const menuOptions: menuOption[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

export type sidebarMenuOptions = {
  icon: any;
  path: string;
  name: string;
};

export const SIDEBAR_MENU_OPTIONS: sidebarMenuOptions[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: DashboardSvg,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: SettingsSvg,
  },
  {
    name: "Billings",
    path: "/billings",
    icon: PremiumSvg,
  },
  {
    name: "Teams",
    path: "/teams",
    icon: TeamsSvg,
  },
];

export type teamNameMenuOptions = {
  name: string;
  path: string;
  icon: LucideIcon;
};
export const TEAM_DETAILS_MENU_OPTIONS: teamNameMenuOptions[] = [
  {
    name: "Join or create team",
    path: "/teams/create",
    icon: UserRound,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Bolt,
  },
  {
    name: "Logout",
    path: "#",
    icon: LogOut,
  },
];

export type sidebarMenuOptionBottom = {
  name: string;
  path: string;
  icon: LucideIcon;
  sideIcon: string;
};
export const SIDEBAR_MENU_OPTIONS_BOTTOM: sidebarMenuOptionBottom[] = [
  {
    name: "Getting Started",
    path: "#",
    icon: Flag,
    sideIcon: "S",
  },
  {
    name: "Github Sync",
    path: "#",
    icon: Github,
    sideIcon: "G",
  },
  {
    name: "Private Files",
    path: "#",
    icon: LockKeyhole,
    sideIcon: "UPGRADE",
  },
  {
    name: "Archive",
    path: "#",
    icon: Trash2,
    sideIcon: "E",
  },
];

export type FILE_SCHEMA = {
  _id: string;
  fileName: string;
  archived: boolean;
  createdBy: string;
  _creationTime: number;
  document: string;
  teamID: string;
  whiteBoard: string;
} | null;

import { useFile } from "@/providers/file-provider";

export const TABLE_HEAD: { name: string }[] = [
  {
    name: "File Name",
  },
  {
    name: "Created By",
  },
  {
    name: "Created At",
  },
  {
    name: "Author",
  },
  {
    name: "Action",
  },
];
