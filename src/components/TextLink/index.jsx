import React from "react";

export const TextLink = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer text-center text-sm hover:underline sm:text-base"
    >
      {children}
    </button>
  );
};
