import React, { useState } from "react";

import ProfileImagePlaceholder from "../../../assets/images/no_ProfileImg.png";

import { Loader } from "../../ui_elements/Loader";

import { useFetch } from "../../../hooks/useFetch";

import { all_Venues, API_Url } from "../../../js/api/constants";

import { formatDate } from "../../../js/utils/formatDate";
import { handleImageErrors } from "../../../js/utils/handleImageErrors";

export const BookingsAccordion = ({ venueId }) => {
  const [openBookingId, setOpenBookingId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenBookingId(openBookingId === id ? null : id);
  };

  const {
    data: venueBookings,
    isLoading,
    hasError,
  } = useFetch(`${API_Url}${all_Venues}/${venueId}?_bookings=true`);

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (hasError) {
    content = <div>Error when trying to load venue bookings</div>;
  } else if (!venueBookings?.bookings?.length) {
    content = <div>No bookings found for this venue</div>;
  } else {
    content = venueBookings.bookings.map((booking) => {
      const dateFrom = booking?.dateFrom ? new Date(booking.dateFrom) : null;
      const dateTo = booking?.dateTo ? new Date(booking.dateTo) : null;

      const formattedDateFrom = dateFrom
        ? formatDate(dateFrom)
        : "Date unavailable";
      const formattedDateTo = dateTo ? formatDate(dateTo) : "Date unavailable";
      const ProfileImage =
        booking.customer.avatar.url || ProfileImagePlaceholder;
      return (
        <div key={booking.id} id={`accordion-open-${booking.id}`}>
          <h2 id={`accordion-open-heading-${booking.id}`}>
            <button
              type="button"
              className="flex w-full max-w-80 items-center justify-between gap-3 p-2 font-medium rtl:text-right"
              onClick={() => toggleAccordion(booking.id)}
              aria-expanded={openBookingId === booking.id}
              aria-controls={`accordion-open-body-${booking.id}`}
            >
              <div className="flex items-center gap-12">
                <div className="flex flex-row items-center gap-1">
                  <img
                    src={ProfileImage}
                    alt="Profile image"
                    className="h-6 w-6 rounded-full object-cover"
                    onError={(e) =>
                      handleImageErrors(e, ProfileImagePlaceholder)
                    }
                  />
                  <p className="truncate text-sm">{booking.customer.name}</p>
                </div>
                <span className="text-sm">{formattedDateFrom}</span>
              </div>
              <svg
                className={`h-3 w-3 transform ${
                  openBookingId === booking.id ? "rotate-180" : ""
                } shrink-0`}
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
            id={`accordion-open-body-${booking.id}`}
            className={`${openBookingId === booking.id ? "block" : "hidden"}`}
            aria-labelledby={`accordion-open-heading-${booking.id}`}
          >
            <div className="mb-3 max-w-80 bg-gray-100 px-3 pb-2 pt-1">
              <div className="flex justify-between">
                <p>Email:</p>
                <p className="truncate font-medium">{booking.customer.email}</p>
              </div>
              <div className="flex justify-between">
                <p>Check-in date:</p>
                <p className="font-medium">{formattedDateFrom}</p>
              </div>
              <div className="flex justify-between">
                <p>Check-out date:</p>
                <p className="font-medium">{formattedDateTo}</p>
              </div>
              <div className="flex justify-between">
                <p>Guests:</p>
                <p className="font-medium">{booking.guests}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return <article>{content}</article>;
};
