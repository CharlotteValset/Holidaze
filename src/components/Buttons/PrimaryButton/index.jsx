import React from "react";

export const PrimaryButton = ({ type = "button", onClick, className, children, ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-base md:text-lg border rounded-lg border-dark-blue px-3 py-0.5 hover:bg-dark-blue hover:text-light-blue ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

/* export const PrimaryButton = ({ type, onClick, className, children, ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-base md:text-lg border rounded-lg border-dark-blue px-3 py-0.5 hover:bg-dark-blue hover:text-light-blue ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}; */
