import React from "react";

export const SecondaryButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border bg-soft-pink px-3 py-0.5 text-base hover:bg-dark-blue hover:text-soft-pink md:text-lg"
    >
      {children}
    </button>
  );
};
