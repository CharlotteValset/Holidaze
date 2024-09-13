import React, { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { API_Url, bookings_Url, profile_Url } from "../../../js/api/constants";
import { load } from "../../../js/storage/load";
import { MyBookings } from "../MyBookings";
import { MyVenues } from "../MyVenues";

export const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const userProfile = load("profile");

  const userId = userProfile?.name;

  const { data, isLoading, hasError } = useFetch(
    `${API_Url}${profile_Url}/${userId}${bookings_Url}?_bookings=true&_venues=true`,
  );

  let content;

  if (isLoading) {
    content = <div className="mt-96">Loading...</div>;
  } else if (hasError) {
    content = <div className="mt-96">Error when trying to load page</div>;
  } else if (!data) {
    content = <div className="mt-96">Page not found</div>;
  } else {
    const hasBookings = data.bookings && data.bookings.length > 0; // Check if there are bookings
    content = (
      <div className="mx-auto max-w-screen-lg p-1">
        <ul className="flex justify-start text-center font-medium text-gray-500">
          {hasBookings && ( // Only render the "My bookings" tab if there are bookings
            <li className="me-2">
              <button
                className={`inline-block rounded-t-lg p-3 font-normal md:text-lg ${
                  activeTab === "bookings"
                    ? "bg-light-blue text-dark-blue"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabClick("bookings")}
              >
                My bookings ({data.bookings.length})
              </button>
            </li>
          )}
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
              <MyBookings data={data} key={data} />
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

    return <section>{content}</section>;
  }
};
