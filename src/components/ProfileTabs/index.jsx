import React, { useState } from "react";
import HeroImage from "../../assets/images/heroImage.png";
import { BookingsAccordion } from "../BookingsAccordion/index";
import { PrimaryButton } from "../Buttons/PrimaryButton";

export const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto max-w-screen-lg">
      <ul className="flex justify-start font-medium text-center text-gray-500">
        <li className="me-2">
          <button
            className={`inline-block p-3 font-normal rounded-t-lg ${
              activeTab === "bookings" ? "text-dark-blue bg-light-blue" : "text-gray-500"
            }`}
            onClick={() => handleTabClick("bookings")}
          >
            My bookings (1)
          </button>
        </li>
        <li className="me-2">
          <button
            className={`inline-block p-3 font-normal rounded-t-lg ${
              activeTab === "venues" ? "text-dark-blue bg-light-blue" : "text-gray-500"
            }`}
            onClick={() => handleTabClick("venues")}
          >
            My venues (1)
          </button>
        </li>
      </ul>

      <div className="bg-light-blue p-4 rounded-tr-lg rounded-b-lg">
        {activeTab === "bookings" && (
          <div className="bookings-card md:flex">
            <img src={HeroImage} alt="Luxury Home" className="rounded md:w-2/4 md:object-cover" />
            <div className="md:w-2/4 md:ml-4">
              <div className="flex justify-between items-center max-w-80 px-2">
                <h2 className="text-size-22 truncate">Modern Beach House</h2>
                <span className="flex flex-row items-center text-dark-blue text-sm font-normal px-2 py-0.5 rounded">
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
                <p className="text-sm">Bergen, Norway</p>
              </div>

              <div className="px-2 pt-1 pb-3 max-w-80">
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
        )}
        {activeTab === "venues" && (
          <div className="venue-card md:flex">
            <img src={HeroImage} alt="Luxury Home" className="rounded md:w-2/4 md:object-cover" />
            <div className="md:w-2/4 md:ml-4">
              <div className="flex justify-between mt-2 items-center">
                <h2 className="text-size-22">Luxury Home</h2>
                <PrimaryButton>Edit venue</PrimaryButton>
              </div>
              <div className="flex gap-1 items-center">
                <i className="fa-solid fa-location-dot text-sm"></i>
                <p className="text-sm">Bergen, Norway</p>
              </div>
              <div className="flex mt-3 items-center justify-between">
                <div className="flex gap-1">
                  <i className="fa-solid fa-user-group text-sm"></i>
                  <p className="text-sm">12 guests</p>
                </div>
                <p className="text-lg font-medium">
                  $ 975<span className="text-sm font-normal ml-1">per night</span>
                </p>
              </div>

              <div className="flex justify-between my-4 max-w-64">
                <div className="flex gap-1 text-xs">
                  <i className="fa-solid fa-wifi"></i>
                  <p>Wifi</p>
                </div>
                <div className="flex gap-1 text-xs">
                  <i className="fa-solid fa-dog"></i> <p>Pets</p>
                </div>
                <div className="flex gap-1 text-xs">
                  <i className="fa-solid fa-car"></i>
                  <p>Parking</p>
                </div>
                <div className="flex gap-1 text-xs">
                  <i className="fa-solid fa-utensils"></i>
                  <p>Breakfast</p>
                </div>
              </div>

              <h3 className="text-lg">Description</h3>
              <p className="text-base font-light max-w-72">
                Mr. PaddingBottom and Ms. Borderbottom invites you for a royal stay at the plaza
              </p>
              <h3 className="text-lg mt-4 mb-1">Bookings (3)</h3>
              <BookingsAccordion />
              <BookingsAccordion />
              <BookingsAccordion />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
