import React, { useState } from "react";
import HeroImage from "../../assets/images/heroImage.png";
import ProfileImage from "../../assets/images/profileImage.png";

export const MyBookings = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  return (
    <>
      {activeTab === "bookings" && (
        <div className="bookings-card md:flex">
          <img src={HeroImage} alt="Luxury Home" className="rounded md:w-2/4 md:object-cover" />
          <div className="max-w-sm md:w-2/4 md:ml-2 md:mt-1 md:max-w-none">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-[22px] md:text-3xl truncate">Modern Beach House</h2>
              <span className="flex flex-row items-center text-dark-blue text-sm md:text-base font-normal px-2 py-0.5 rounded">
                <svg
                  className="w-3 h-3 text-dark-blue me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>{" "}
                4.6
              </span>
            </div>
            <div className="flex gap-1 items-center px-2 pb-2">
              <i className="fa-solid fa-location-dot text-sm"></i>
              <p className="text-sm md:text-lg">Bergen, Norway</p>
            </div>
            <div className="px-2 pt-1 pb-3">
              <div className="flex justify-between">
                <p className="md:text-lg">Owner:</p>
                <div className="flex flex-row items-center gap-1">
                  <img src={ProfileImage} alt="" className="w-6 h-6 rounded-full" />
                  <p className="font-medium md:text-lg">Mr. Pixel</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="md:text-lg">Email:</p>
                <p className="font-medium md:text-lg">mr-pixel@email.com</p>
              </div>
              <div className="flex justify-between">
                <p className="md:text-lg">Check-in date:</p>
                <p className="font-medium md:text-lg">17/08/2024</p>
              </div>
              <div className="flex justify-between">
                <p className="md:text-lg">Check-out date:</p>
                <p className="font-medium md:text-lg">20/08/2024</p>
              </div>
              <div className="flex justify-between">
                <p className="md:text-lg">Days:</p>
                <p className="font-medium md:text-lg">3</p>
              </div>
              <div className="flex justify-between">
                <p className="md:text-lg">Guests:</p>
                <p className="font-medium md:text-lg">5</p>
              </div>
              <div className="flex justify-between">
                <p className="md:text-lg">Total amount:</p>
                <p className="font-medium md:text-lg">$ 1967</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
