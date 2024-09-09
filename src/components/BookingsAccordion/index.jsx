import React, { useState } from "react";
import ProfileImage from "../../assets/images/profileImage.png";

export const BookingsAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="accordion-open">
      <h2 id="accordion-open-heading">
        <button
          type="button"
          className="flex w-full max-w-80 items-center justify-between gap-3 p-2 font-medium rtl:text-right"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls="accordion-open-body"
        >
          <div className="flex items-center gap-12">
            <div className="flex flex-row items-center gap-1">
              <img src={ProfileImage} alt="" className="h-6 w-6 rounded-full" />
              <p className="truncate text-sm">Mr: Pixel</p>
            </div>
            <span className="text-sm">17/08/2024</span>
          </div>
          <svg
            className={`h-3 w-3 transform ${isOpen ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body"
        className={`${isOpen ? "block" : "hidden"}`}
        aria-labelledby="accordion-open-heading"
      >
        <div className="max-w-80 bg-gray-100 px-3 pb-3 pt-1">
          <div className="flex justify-between">
            <p>Email:</p>
            <p className="font-medium">mr-pixel@email.com</p>
          </div>
          <div className="flex justify-between">
            <p>Check-in date:</p>
            <p className="font-medium">17/08/2024</p>
          </div>
          <div className="flex justify-between">
            <p>Check-out date:</p>
            <p className="font-medium">20/08/2024</p>
          </div>
          <div className="flex justify-between">
            <p>Days:</p>
            <p className="font-medium">3</p>
          </div>
          <div className="flex justify-between">
            <p>Guests:</p>
            <p className="font-medium">5</p>
          </div>
          <div className="flex justify-between">
            <p>Total amount:</p>
            <p className="font-medium">$ 1967</p>
          </div>
        </div>
      </div>
    </div>
  );
};
