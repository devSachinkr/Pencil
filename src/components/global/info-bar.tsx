import Image from "next/image";
import React from "react";
import pencil from "../../../public/pencil.png";
import { menuOptions } from "@/constants";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
type Props = {};
const InfoBar = async (props: Props) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="w-full flex items-center justify-between pt-4 bg-transparent sticky top-0 z-[99]">
      <div className="pl-3 flex items-center ">
        <Image src={pencil} alt="app-logo" width={60} height={60} />
        <span className="text-2xl font-serif">Pencil.io</span>
      </div>
      <div className="flex gap-x-4  text-lg ">
        {menuOptions.map((item) => (
          <ul
            key={item.name}
            className="hover:text-muted-foreground font-semibold opacity-0 md:opacity-100"
          >
            <Link href={item.path}>{item.name}</Link>
          </ul>
        ))}
      </div>
      <div className=" pr-3 flex gap-x-4 items-center">
        {!user ? (
          <LoginLink className="bg-primary p-3 px-4 rounded-md text-white">
            Login
          </LoginLink>
        ) : (
          <Link
            href={"/dashboard"}
            className="bg-primary/30 p-3 px-4 rounded-full border-[1px] border-primary"
          >
            Dashboard
          </Link>
        )}

        <ModeToggle />
      </div>
    </div>
  );
};

export default InfoBar;
