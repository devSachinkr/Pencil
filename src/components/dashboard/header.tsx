import React from "react";
import GradientText from "../global/GradientText";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import UserButton from "../global/user-button";


const Header = () => {
  return (
    <div className=" w-full h-full flex flex-col">
      <div className="flex items-center justify-between md:pl-10 pl-2 flex-col md:flex-row gap-2 ">
        <GradientText classes="text-[1.5rem] md:text-[2.5rem]">
          Dashboard
        </GradientText>

        <div className="flex items-center  gap-2">
          <Label htmlFor="search">
            <span
              className="border-[1px] border-accent rounded-md p-2 flex items-center
        border-r-0"
            >
              <Search />
            </span>
          </Label>
          <Input id="search" placeholder="Search" className="outline-none" />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
