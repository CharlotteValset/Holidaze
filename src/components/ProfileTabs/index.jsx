import React, { useState } from "react";
import { MyBookings } from "../MyBookings";
import { MyVenues } from "../MyVenues";

export const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto max-w-screen-lg p-1">
      <ul className="flex justify-start text-center font-medium text-gray-500">
        <li className="me-2">
          <button
            className={`inline-block rounded-t-lg p-3 font-normal md:text-lg ${
              activeTab === "bookings"
                ? "bg-light-blue text-dark-blue"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("bookings")}
          >
            My bookings (1)
          </button>
        </li>
        <li className="me-2">
          <button
            className={`inline-block rounded-t-lg p-3 font-normal md:text-lg ${
              activeTab === "venues"
                ? "bg-light-blue text-dark-blue"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("venues")}
          >
            My venues (1)
          </button>
        </li>
      </ul>

      <div className="mb-3 rounded-b-lg rounded-tr-lg bg-light-blue p-3">
        {activeTab === "bookings" && (
          <div className="flex flex-col gap-10">
            <MyBookings />
            <MyBookings />
            <MyBookings />
          </div>
        )}
        {activeTab === "venues" && (
          <div className="flex flex-col gap-10">
            <MyVenues />
            <MyVenues />
            <MyVenues />
            <MyVenues />
          </div>
        )}
      </div>
    </div>
  );
};
