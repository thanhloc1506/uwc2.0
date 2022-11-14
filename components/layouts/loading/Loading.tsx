import React from "react";
import DefaultSpinner from "../spinner/DefaultSpinner";

const Loading = () => {
  return (
    <div className="flex flex-col place-items-center justify-center align-middle">
      <DefaultSpinner />
    </div>
  );
};

export default Loading;
