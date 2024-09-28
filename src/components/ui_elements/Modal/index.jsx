import React from "react";

export const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50">
      <div className="mx-2 mt-32 w-full max-w-md rounded-xl bg-light-blue sm:mt-44 sm:px-16">
        <h2 className="mx-auto my-6 text-center text-[22px] sm:text-2xl">
          {title}
        </h2>

        <div className="mb-4 flex-col justify-center">{children}</div>
        <div className="mb-8 flex justify-center gap-8">{footer}</div>
      </div>
    </div>
  );
};
