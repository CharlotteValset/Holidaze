import React from "react";

export const PrimaryButton = ({
  type = "button",
  onClick,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg border border-dark-blue px-3 py-0.5 text-base hover:bg-dark-blue hover:text-light-blue md:text-lg ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
