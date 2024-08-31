import React from "react";

export const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-light-blue rounded-xl mx-2 max-w-md w-full">
        <button onClick={onClose} className="absolute top-62 right-4 text-3xl">
          &times;
        </button>
        <h2 className="text-xl sm:text-2xl text-center mx-auto my-6">{title}</h2>

        <div className="mb-4 flex-col justify-center">{children}</div>
        <div className="flex justify-center mb-8">{footer}</div>
      </div>
    </div>
  );
};
