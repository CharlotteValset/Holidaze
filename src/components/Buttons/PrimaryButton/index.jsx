import React from "react";

export const PrimaryButton = ({ children }) => {
  return (
    <button className="text-base border rounded-lg border-dark-blue px-3 py-0.5 hover:bg-dark-blue hover:text-light-blue">
      {children}
    </button>
  );
};
