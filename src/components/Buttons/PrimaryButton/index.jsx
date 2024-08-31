import React from "react";

export const PrimaryButton = ({ onClick, className, children, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={`text-base md:text-lg border rounded-lg border-dark-blue px-3 py-0.5 hover:bg-dark-blue hover:text-light-blue ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
