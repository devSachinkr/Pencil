import { cn } from "@/utils/cn";
import React from "react";

type Props = {
  text?: string;
  to?: string;
  from?: string;
  classes?: string;
  size?: string;
  children?: React.ReactNode;
};

const GradientText = ({ text, from, to, classes, size, children }: Props) => {
  return (
    <div
      className={`bg-gradient-to-r from-red-600 
        via-green-800 to-blue-600 text-transparent bg-clip-text relative`}
    >
      <div
        className={cn('font-bold', classes)}
      >
        {text} {children && children}
      </div>
    </div>
  );
};

export default GradientText;
