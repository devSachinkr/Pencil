import React from "react";
import Loader from "./loader";

type Props = {
  loading: boolean;
};

const Spinner = ({ loading }: Props) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {loading && <Loader />}
    </div>
  );
};

export default Spinner;
