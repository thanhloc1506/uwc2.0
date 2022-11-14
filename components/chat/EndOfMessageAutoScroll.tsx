import React from "react";

interface Prop {
  ref: React.Ref<HTMLDivElement>;
}

const EndOfMessageAutoScroll: React.FC<Prop> = ({ ref }) => {
  return <div className="mb-8" ref={ref}></div>;
};

export default EndOfMessageAutoScroll;
