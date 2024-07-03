import clsx from "clsx";
import React from "react";

type Props = {};

const teams = (props: Props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={
          "dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]"
        }
      />
      <rect
        x="3"
        y="13"
        width="8"
        height="8"
        rx="3"
        className={
          "dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]"
        }
      />
      <rect
        x="13"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={
          "dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]"
        }
      />
      <rect
        x="13"
        y="13"
        width="8"
        height="8"
        rx="3"
        className="dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF] "
      />
    </svg>
  );
};

export default teams;
