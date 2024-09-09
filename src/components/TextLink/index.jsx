import React from "react";

export const TextLink = ({ onClick, children }) => {
  return (
    <a
      onClick={onClick}
      className="cursor-pointer text-sm hover:underline sm:text-base"
    >
      {children}
    </a>
  );
};
