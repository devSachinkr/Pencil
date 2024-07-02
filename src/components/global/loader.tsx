import React from "react";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
