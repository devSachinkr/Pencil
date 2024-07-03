import Collapse from "@/icons/collapse";
import DashboardSvg from "@/icons/dashboard";
import SettingsSvg from "@/icons/settings";
import PremiumSvg from "@/icons/premium";
import TeamsSvg from "@/icons/teams";

import { Bolt, LogOut, LucideIcon, UserRound } from "lucide-react";
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
