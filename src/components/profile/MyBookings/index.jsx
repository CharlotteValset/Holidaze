import React, { useState } from "react";
import ProfileImage from "../../../assets/images/profileImage.png";
import PlaceholderImage from "../../../assets/images/no_img.png";
import { API_Url, profile_Url, bookings_Url } from "../../../js/api/constants";
import { useFetch } from "../../../hooks/useFetch";
import { load } from "../../../js/storage/load";

export const MyBookings = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  const userProfile = load("profile");

  const userId = userProfile?.name;

  const { data, isLoading, hasError } = useFetch(
    `${API_Url}${profile_Url}/${userId}${bookings_Url}?_bookings=true&_venue=true&_customer=true`,
  );

  const imageUrl = data?.media?.url || PlaceholderImage;
  const bookingId = data?.id;

  let content;

  if (isLoading) {
    content = <div className="mt-96">Loading...</div>;
  } else if (hasError) {
    content = <div className="mt-96">Error when trying to load bookings</div>;
  } else if (!data) {
    content = <div className="mt-96">Bookings not found</div>;
  } else {
    content = (
      <>
        {activeTab === "bookings" && (
          <div className="bookings-card md:flex">
            <img
              src={imageUrl}
              alt="Luxury Home"
              className="rounded md:w-2/4 md:object-cover"
            />
            <div className="max-w-sm md:ml-2 md:mt-1 md:w-2/4 md:max-w-none">
              <div className="flex items-center justify-between px-2">
                <h2 className="truncate text-[22px] md:text-3xl">
                  {bookingId}
                </h2>
                <span className="flex flex-row items-center rounded px-2 py-0.5 text-sm font-normal text-dark-blue md:text-base">
                  <svg
                    className="me-2 h-3 w-3 text-dark-blue"
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
              <div className="flex items-center gap-1 px-2 pb-2">
                <i className="fa-solid fa-location-dot text-sm"></i>
                <p className="text-sm md:text-lg">Bergen, Norway</p>
              </div>
              <div className="px-2 pb-3 pt-1">
                <div className="flex justify-between">
                  <p className="md:text-lg">Owner:</p>
                  <div className="flex flex-row items-center gap-1">
                    <img
                      src={ProfileImage}
                      alt=""
                      className="h-6 w-6 rounded-full"
                    />
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
  }

  return <section>{content}</section>;
};
