import React from "react";
import logo from "../../../public/pencil.png";
import Image from "next/image";
import { User } from "lucide-react";
import GradientText from "../global/GradientText";
import TeamForm from "../forms/team-form";
type Props = {};

const CreateTeam = (props: Props) => {
  return (
    <div className="flex flex-col">
      <header className="flex items-center w-full pl-4 md:pl-8 mt-4">
        <Image src={logo} alt="app-logo" width={70} height={70} />
        <span className="text-5xl font-serif">Pencil 👋</span>
      </header>
      <section className="flex w-full justify-center flex-col items-center">
        <div
          className="mt-4 p-3 px-5 bg-lime-500/20
         rounded-md text-sm font-bold
         flex items-center gap-x-2 border-[1px] border-lime-400 text-lime-600 shadow-lg
         "
        >
          <User />
          Team Name
        </div>

        <h2 className="mt-4 text-2xl font-semibold md:text-5xl">
          <GradientText>What should we call your team?</GradientText>
        </h2>
        <p className="text-muted-foreground mt-2">You can change this later!</p>

        <TeamForm/>
      </section>
    </div>
  );
};

export default CreateTeam;
