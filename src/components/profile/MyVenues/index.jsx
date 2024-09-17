import React from "react";
import { Link } from "react-router-dom";
import ImagePlaceholder from "../../../assets/images/no_img.png";
import { BookingsAccordion } from "../../bookings/BookingsAccordion";
import { PrimaryButton } from "../../ui_elements/Buttons/PrimaryButton";

export const MyVenues = ({ data }) => {
  return (
    <div className="venues-list">
      {data.map((venue, index) => {
        const venueImageArray = venue?.media;
        const venueImageUrl = venueImageArray?.[0]?.url ?? ImagePlaceholder;
        const venueTitle = venue?.name;
        const location =
          venue?.location?.city && venue?.location?.country
            ? `${venue.location.city}, ${venue.location.country}`
            : "Location not available";
        const maxGuests = venue?.maxGuests || "Max guests not available";
        const price = venue?.price;
        const venueDescription = venue?.description || "No description added";

        return (
          <div key={index} className="venue-card my-4 pb-6 md:flex">
            <div className="">
              <img
                src={venueImageUrl}
                alt="Venue"
                className="h-52 w-full rounded-lg object-cover xs:h-72 sm:h-96 md:h-[350px] md:w-[420px] lg:h-[450px] lg:w-[600px]"
              />
            </div>
            <div className="md:ml-4 md:w-2/4">
              <div className="mt-3 flex items-center justify-between md:mt-1">
                <h2 className="truncate text-[22px] md:text-3xl">
                  {venueTitle}
                </h2>
                <Link
                  to="/addEditVenue"
                  state={{ venue, isEdit: true }}
                  aria-label="Edit venue"
                >
                  <PrimaryButton>Edit venue</PrimaryButton>
                </Link>
              </div>
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-location-dot text-sm md:text-lg"></i>
                <p className="text-sm md:text-lg">{location}</p>
              </div>
              <div className="mt-3 flex items-center justify-between xs:my-5 xs:flex-col xs:items-start xs:gap-5">
                <div className="flex gap-1">
                  <i className="fa-solid fa-user-group text-sm md:text-lg"></i>
                  <p className="text-sm md:text-lg">{maxGuests} guests</p>
                </div>
                <p className="text-lg font-medium md:text-xl">
                  $ {price}
                  <span className="ml-1 text-sm font-normal md:text-lg">
                    per night
                  </span>
                </p>
              </div>
              <div className="my-4 flex max-w-64 justify-start gap-2 md:max-w-80">
                {venue.meta?.wifi && (
                  <div className="flex items-center gap-1 rounded bg-light-blue px-1 py-0.5 text-xs md:text-base">
                    <i className="fa-solid fa-wifi"></i>
                    <p>Wifi</p>
                  </div>
                )}
                {venue.meta?.pets && (
                  <div className="flex items-center gap-1 rounded bg-light-blue px-1 py-0.5 text-xs md:text-base">
                    <i className="fa-solid fa-dog"></i>
                    <p>Pets</p>
                  </div>
                )}
                {venue.meta?.parking && (
                  <div className="flex items-center gap-1 rounded bg-light-blue px-1 py-0.5 text-xs md:text-base">
                    <i className="fa-solid fa-car"></i>
                    <p>Parking</p>
                  </div>
                )}
                {venue.meta?.breakfast && (
                  <div className="flex items-center gap-1 rounded bg-light-blue px-1 py-0.5 text-xs md:text-base">
                    <i className="fa-solid fa-utensils"></i>
                    <p>Breakfast</p>
                  </div>
                )}
              </div>
              <h3 className="text-lg md:text-xl">Description</h3>
              <p className="max-w-72 text-base font-light md:max-w-96 md:text-lg">
                {venueDescription}
              </p>
              <h3 className="mb-1 mt-4 text-lg md:text-xl">Bookings (3)</h3>
              <BookingsAccordion />
              <BookingsAccordion />
              <BookingsAccordion />
            </div>
          </div>
        );
      })}
    </div>
  );
};
