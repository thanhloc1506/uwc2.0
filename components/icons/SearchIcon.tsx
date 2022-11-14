import React from "react";

const SearchIcon = () => {
  return (
    <svg
      className="h-5 w-5 text-black"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="10" cy="10" r="7" />{" "}
      <line x1="21" y1="21" x2="15" y2="15" />
    </svg>
  );
};

export default SearchIcon;
