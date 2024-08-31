import React, { useState } from "react";
import { MyBookings } from "../MyBookings";
import { MyVenues } from "../MyVenues";

export const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto p-1 max-w-screen-lg">
      <ul className="flex justify-start font-medium text-center text-gray-500">
        <li className="me-2">
          <button
            className={`inline-block p-3 font-normal rounded-t-lg md:text-lg ${
              activeTab === "bookings" ? "text-dark-blue bg-light-blue" : "text-gray-500"
            }`}
            onClick={() => handleTabClick("bookings")}
          >
            My bookings (1)
          </button>
        </li>
        <li className="me-2">
          <button
            className={`inline-block p-3 font-normal rounded-t-lg md:text-lg ${
              activeTab === "venues" ? "text-dark-blue bg-light-blue" : "text-gray-500"
            }`}
            onClick={() => handleTabClick("venues")}
          >
            My venues (1)
          </button>
        </li>
      </ul>

      <div className="bg-light-blue p-3 rounded-tr-lg rounded-b-lg mb-3">
        {activeTab === "bookings" && (
          <div className="flex flex-col gap-6">
            <MyBookings />
            <MyBookings />
            <MyBookings />
          </div>
        )}
        {activeTab === "venues" && (
          <div className="flex flex-col gap-6">
            <MyVenues />
            <MyVenues />
          </div>
        )}
      </div>
    </div>
  );
};
