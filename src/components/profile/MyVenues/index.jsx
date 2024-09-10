import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../../assets/images/heroImage.png";
import { BookingsAccordion } from "../../bookings/BookingsAccordion";
import { PrimaryButton } from "../../ui_elements/Buttons/PrimaryButton";

export const MyVenues = () => {
  const [activeTab, setActiveTab] = useState("venues");

  return (
    <>
      {activeTab === "venues" && (
        <div className="venue-card md:flex">
          <img
            src={HeroImage}
            alt="Luxury Home"
            className="rounded md:w-2/4 md:object-cover"
          />
          <div className="md:ml-4 md:w-2/4">
            <div className="mt-3 flex items-center justify-between md:mt-1">
              <h2 className="truncate text-[22px] md:text-3xl">Luxury Home</h2>
              <Link to="/addEditVenue" aria-label="Add/edit venue">
                <PrimaryButton>Edit venue</PrimaryButton>
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-location-dot text-sm md:text-lg"></i>
              <p className="text-sm md:text-lg">Bergen, Norway</p>
            </div>
            <div className="mt-3 flex items-center justify-between xs:my-5 xs:flex-col xs:items-start xs:gap-5">
              <div className="flex gap-1">
                <i className="fa-solid fa-user-group text-sm md:text-lg"></i>
                <p className="text-sm md:text-lg">12 guests</p>
              </div>
              <p className="text-lg font-medium md:text-xl">
                $ 975
                <span className="ml-1 text-sm font-normal md:text-lg">
                  per night
                </span>
              </p>
            </div>
            <div className="my-4 flex max-w-64 justify-between md:max-w-80">
              <div className="flex items-center gap-1 text-xs md:text-base">
                <i className="fa-solid fa-wifi"></i>
                <p>Wifi</p>
              </div>
              <div className="flex items-center gap-1 text-xs md:text-base">
                <i className="fa-solid fa-dog"></i> <p>Pets</p>
              </div>
              <div className="flex items-center gap-1 text-xs md:text-base">
                <i className="fa-solid fa-car"></i>
                <p>Parking</p>
              </div>
              <div className="flex items-center gap-1 text-xs md:text-base">
                <i className="fa-solid fa-utensils"></i>
                <p>Breakfast</p>
              </div>
            </div>
            <h3 className="text-lg md:text-xl">Description</h3>
            <p className="max-w-72 text-base font-light md:max-w-96 md:text-lg">
              Mr. PaddingBottom and Ms. Borderbottom invites you for a royal
              stay at the plaza
            </p>
            <h3 className="mb-1 mt-4 text-lg md:text-xl">Bookings (3)</h3>
            <BookingsAccordion />
            <BookingsAccordion />
            <BookingsAccordion />
          </div>
        </div>
      )}
    </>
  );
};
