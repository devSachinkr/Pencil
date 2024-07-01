"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";
import GradientText from "../global/GradientText";
import Link from "next/link";
import { ArrowBigRight } from "lucide-react";

export function Background() {
  return (
    <div>
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="flex items-center px-10 p-3 rounded-full bg-neutral-800 border-[1px] border-primary text-lime-400">
        Try it now <ArrowBigRight size={16}/>
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-[2.5rem] md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-[#298dbe] text-center font-sans font-bold">
         
          Documents & diagrams for engineering teams
          
        </h1>
        <p></p>
        <p className="text-neutral-400 max-w-lg mx-auto my-2  text-center relative z-10 text-2xl">
          All-in-one markdown editor, collaborative canvas, and diagram-as-code
          builder
        </p>
      </div>
      <BackgroundBeams />
        
    </div>
    
    </div>
  );
}
