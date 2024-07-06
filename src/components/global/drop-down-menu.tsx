import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideIcon } from "lucide-react";

type Props = {
  menuTrigger: React.ReactNode;
  lable: string;
  action: string | React.ReactNode;
};

const DropDownMenu = ({ lable, menuTrigger, action }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{menuTrigger}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-muted-foreground">{lable}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem >{action}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenu;
