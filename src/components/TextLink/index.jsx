import React from "react";

export const TextLink = ({ onClick, children }) => {
  return (
    <a onClick={onClick} className="text-sm sm:text-xl hover:underline cursor-pointer">
      {children}
    </a>
  );
};
