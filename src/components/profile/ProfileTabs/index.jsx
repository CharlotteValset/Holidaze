import React, { useState, useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import {
  all_Venues,
  API_Url,
  bookings_Url,
  profile_Url,
} from "../../../js/api/constants";
import { load } from "../../../js/storage/load";
import { Loader } from "../../ui_elements/Loader";
import { MyBookings } from "../MyBookings";
import { MyVenues } from "../MyVenues";

export const ProfileTabs = () => {
  const userProfile = load("profile");
  const userId = userProfile?.name;

  const {
    data: bookingsData,
    isLoading: isBookingsLoading,
    hasError: hasBookingsError,
  } = useFetch(
    `${API_Url}${profile_Url}/${userId}${bookings_Url}?_booking=true`,
  );

  const {
    data: venuesData,
    isLoading: isVenuesLoading,
    hasError: hasVenuesError,
  } = useFetch(`${API_Url}${profile_Url}/${userId}${all_Venues}`);

  const isLoading = isBookingsLoading || isVenuesLoading;
  const hasError = hasBookingsError || hasVenuesError;

  const hasBookings = bookingsData && bookingsData.length > 0;
  const hasVenues = venuesData && venuesData.length > 0;

  const [activeTab, setActiveTab] = useState(
    hasVenues ? "venues" : hasBookings ? "bookings" : "none",
  );

  useEffect(() => {
    if (hasVenues) {
      setActiveTab("venues");
    } else if (hasBookings) {
      setActiveTab("bookings");
    }
  }, [hasVenues, hasBookings]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (hasError) {
    content = <div className="mt-96">Error when trying to load page</div>;
  } else if (!bookingsData && !venuesData) {
    content = <div className="mt-96">Page not found</div>;
  } else {
    content = (
      <div className="mx-auto max-w-screen-lg p-1">
        <ul className="flex justify-start text-center font-medium text-gray-500">
          {hasBookings && (
            <li className="me-2">
              <button
                className={`inline-block rounded-t-lg px-5 py-3 font-normal sm:text-xl ${
                  activeTab === "bookings"
                    ? "bg-light-blue text-dark-blue"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabClick("bookings")}
              >
                My bookings ({bookingsData.length})
              </button>
            </li>
          )}
          {hasVenues && (
            <li className="me-2">
              <button
                className={`inline-block rounded-t-lg px-5 py-3 font-normal sm:text-xl ${
                  activeTab === "venues"
                    ? "bg-light-blue text-dark-blue"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabClick("venues")}
              >
                My venues ({venuesData.length})
              </button>
            </li>
          )}
        </ul>

        <div className="mb-3 rounded-b-lg rounded-tr-lg bg-light-blue p-3">
          {activeTab === "bookings" && hasBookings && (
            <div className="flex flex-col gap-10">
              <MyBookings data={bookingsData} key={bookingsData} />
            </div>
          )}
          {activeTab === "venues" && hasVenues && (
            <div className="flex flex-col gap-10">
              <MyVenues venuesData={venuesData} key={venuesData} />{" "}
            </div>
          )}
        </div>
      </div>
    );
  }

  return <section>{content}</section>;
};
