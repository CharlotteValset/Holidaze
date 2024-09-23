import React, { useState } from "react";
import PlaceholderImage from "../../../assets/images/no_img.png";
import { API_Url, profile_Url, bookings_Url } from "../../../js/api/constants";
import { useFetch } from "../../../hooks/useFetch";
import { load } from "../../../js/storage/load";
import { formatPrice } from "../../../js/utils/formatPrice";
import { formatDate } from "../../../js/utils/formatDate";
import { Loader } from "../../ui_elements/Loader";
import { handleImageError } from "../../../js/utils/handleImageError";

export const MyBookings = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  const loadProfile = load("profile");
  const userId = loadProfile?.name;

  const {
    data: bookings,
    isLoading,
    hasError,
  } = useFetch(
    `${API_Url}${profile_Url}/${userId}${bookings_Url}?_venue=true&_customer=true`,
  );

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (hasError) {
    content = <div className="mt-96">Error when trying to load bookings</div>;
  } else if (!bookings || bookings.length === 0) {
    content = <div className="mt-96">No bookings found</div>;
  } else {
    content = (
      <div className="bookings-container">
        {bookings.map((booking) => {
          const { id, dateFrom, dateTo, guests, venue } = booking;

          const formattedDateFrom = dateFrom
            ? formatDate(new Date(dateFrom))
            : "Date unavailable";
          const formattedDateTo = dateTo
            ? formatDate(new Date(dateTo))
            : "Date unavailable";

          const venueImageUrl = venue?.media?.[0]?.url || PlaceholderImage;
          const venueName = venue?.name || "Venue title not available";
          const venueLocation =
            venue.location?.city && venue.location?.country
              ? `${venue.location.city}, ${venue.location.country}`
              : "Location not available";
          const totalOfNights = Math.ceil(
            (new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
              (1000 * 60 * 60 * 24),
          );

          const pricePerNight = venue?.price || 0;
          const totalPrice = pricePerNight * totalOfNights;
          const formattedTotalPrice = formatPrice(totalPrice);

          const guestsCount = guests || 0;

          return (
            <div
              key={id}
              className="bookings-card mb-4 xs:mb-6 xs:flex xs:gap-2"
            >
              <div className="h-[180px] w-full xs:h-[250px] xs:w-[200px] sm:w-2/4 md:h-[300px] lg:h-[300px]">
                <img
                  src={venueImageUrl}
                  alt={venue?.media?.[0]?.alt || "Venue Image"}
                  className="h-full w-full rounded object-cover"
                  onError={handleImageError}
                />
              </div>
              <div className="max-w-md xs:w-2/3 sm:w-2/4 md:ml-2 md:mt-1 md:max-w-none">
                <div className="flex items-center justify-between px-2">
                  <h2 className="truncate text-[22px] md:pt-2 md:text-3xl">
                    {venueName}
                  </h2>
                  <span className="flex flex-row items-center rounded px-2 py-0.5 text-sm font-normal text-dark-blue sm:text-base">
                    {venue.rating ? (
                      <>
                        <svg
                          className="me-2 h-3 w-3 text-dark-blue"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>{" "}
                        {venue.rating}
                      </>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-1 px-2 pb-2">
                  <i className="fa-solid fa-location-dot text-sm"></i>
                  <p className="text-base md:text-lg">{venueLocation}</p>
                </div>
                <div className="px-1 pb-3 pt-3">
                  <div className="flex justify-between">
                    <p className="pb-1 sm:text-lg">Check-in date:</p>
                    <p className="pb-1 font-medium sm:text-lg">
                      {formattedDateFrom}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="pb-1 sm:text-lg">Check-out date:</p>
                    <p className="pb-1 font-medium sm:text-lg">
                      {formattedDateTo}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="pb-1 sm:text-lg">Nights:</p>
                    <p className="pb-1 font-medium sm:text-lg">
                      {totalOfNights}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="pb-1 sm:text-lg">Guests:</p>
                    <p className="pb-5 font-medium sm:text-lg">{guestsCount}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="pb-1 font-medium sm:text-lg">Total price:</p>
                    <p className="pb-1 font-medium sm:text-lg">
                      ${formattedTotalPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return <section>{content}</section>;
};
