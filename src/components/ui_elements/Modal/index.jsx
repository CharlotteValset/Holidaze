import React from "react";

export const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative mx-2 w-full max-w-md rounded-xl bg-light-blue sm:px-16">
        <button
          onClick={onClose}
          className="absolute right-4 top-[-5px] text-3xl"
        >
          <i className="fa-solid fa-xmark text-base"></i>
        </button>
        <h2 className="mx-auto my-6 text-center text-xl sm:text-2xl">
          {title}
        </h2>

        <div className="mb-4 flex-col justify-center">{children}</div>
        <div className="mb-8 flex justify-around">{footer}</div>
      </div>
    </div>
  );
};
