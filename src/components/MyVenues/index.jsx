import React, { useState } from "react";
import HeroImage from "../../assets/images/heroImage.png";
import { BookingsAccordion } from "../BookingsAccordion";
import { PrimaryButton } from "../Buttons/PrimaryButton";

export const MyVenues = () => {
  const [activeTab, setActiveTab] = useState("venues");

  return (
    <>
      {activeTab === "venues" && (
        <div className="venue-card md:flex">
          <img src={HeroImage} alt="Luxury Home" className="rounded md:w-2/4 md:object-cover" />
          <div className="md:w-2/4 md:ml-4">
            <div className="flex justify-between mt-3 md:mt-1 items-center">
              <h2 className="text-[22px] md:text-3xl truncate">Luxury Home</h2>
              <PrimaryButton>Edit venue</PrimaryButton>
            </div>
            <div className="flex gap-1 items-center">
              <i className="fa-solid fa-location-dot text-sm md:text-lg"></i>
              <p className="text-sm md:text-lg">Bergen, Norway</p>
            </div>
            <div className="flex mt-3 items-center justify-between xs:flex-col xs:items-start xs:gap-5 xs:my-5">
              <div className="flex gap-1">
                <i className="fa-solid fa-user-group text-sm md:text-lg"></i>
                <p className="text-sm md:text-lg">12 guests</p>
              </div>
              <p className="text-lg md:text-xl font-medium">
                $ 975<span className="text-sm md:text-lg font-normal ml-1">per night</span>
              </p>
            </div>
            <div className="flex justify-between my-4 max-w-64 md:max-w-80">
              <div className="flex gap-1 text-xs md:text-base">
                <i className="fa-solid fa-wifi"></i>
                <p>Wifi</p>
              </div>
              <div className="flex gap-1 text-xs md:text-base">
                <i className="fa-solid fa-dog"></i> <p>Pets</p>
              </div>
              <div className="flex gap-1 text-xs md:text-base">
                <i className="fa-solid fa-car"></i>
                <p>Parking</p>
              </div>
              <div className="flex gap-1 text-xs md:text-base">
                <i className="fa-solid fa-utensils"></i>
                <p>Breakfast</p>
              </div>
            </div>
            <h3 className="text-lg md:text-xl">Description</h3>
            <p className="text-base md:text-lg font-light max-w-72 md:max-w-96">
              Mr. PaddingBottom and Ms. Borderbottom invites you for a royal stay at the plaza
            </p>
            <h3 className="text-lg mt-4 mb-1 md:text-xl">Bookings (3)</h3>
            <BookingsAccordion />
            <BookingsAccordion />
            <BookingsAccordion />
          </div>
        </div>
      )}
    </>
  );
};
