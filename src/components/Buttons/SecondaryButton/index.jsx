import React from "react";

export const SecondaryButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="text-base md:text-lg border rounded-lg px-3 py-0.5 bg-soft-pink hover:bg-dark-blue hover:text-soft-pink"
    >
      {children}
    </button>
  );
};
