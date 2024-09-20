import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PrimaryButton } from "../../ui_elements/Buttons/PrimaryButton";
import { BookVenueNotLoggedIn } from "../../../components/bookings/BookVenueNotLoggedIn";
import { load } from "../../../js/storage/load";
import { Flowbite, Datepicker } from "flowbite-react";
const schema = yup
  .object({
    checkIn: yup
      .date("Please add a check-in date")
      .required("Please add a check-in date"),
    checkOut: yup.date().required("Please add a check-out date"),
    numberOfGuests: yup
      .number("Please add the number of guests")
      .required("Please add the number of guests"),
  })
  .required();

const customTheme = {
  datepicker: {
    root: {
      base: "relative",
    },
    popup: {
      root: {
        base: "absolute top-10 z-50 block pt-2",
        inline: "relative top-0 z-auto",
        inner:
          "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700",
      },
    },
    input: {
      base: "block w-full rounded-lg border-gray-300 bg-white p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white", // Customize text color
      text: "text-gray-900",
    },
    views: {
      days: {
        items: {
          item: {
            selected: "bg-cyan-700 text-blue hover:bg-cyan-600",
          },
        },
      },
    },
    footer: {
      button: {
        today:
          "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700",
        clear:
          "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
      },
    },
  },
};

export const BookVenue = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const token = load("accessToken");
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="mx-auto mb-5 mt-8 h-fit w-11/12 rounded-lg bg-light-blue xs:mx-0 xs:ml-4 xs:max-w-xs">
      <h3 className="pb-2 pt-4 text-center text-xl">Book this venue!</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-48">
        <Flowbite theme={{ theme: customTheme }}>
          <div className="mx-auto mt-5 max-w-sm">
            <Datepicker onChange={handleDateChange} value={selectedDate} />
          </div>
        </Flowbite>
        <div className="mx-auto my-2 flex flex-col">
          <label htmlFor="checkInDate">Check-in</label>
          <Datepicker
            weekStart={1}
            {...register("checkIn", {
              required: true,
            })}
          />
          {errors.checkIn && (
            <p className="text-sm text-red-500">{errors.checkIn.message}</p>
          )}
        </div>
        <div className="mx-auto my-2 flex flex-col">
          <label htmlFor="checkInDate">Check-out</label>
          <Datepicker
            onChange={(date) => handleDateChange("checkIn", date)}
            className="selected:bg-red-500 selected:text-white hover:bg-red-400"
          />
          <Datepicker
            weekStart={1}
            {...register("checkOut", {
              required: true,
            })}
          />
          {errors.checkOut && (
            <p className="text-sm text-red-500">{errors.checkOut.message}</p>
          )}
        </div>
        <div className="mx-auto my-2 flex flex-col">
          <label htmlFor="numberOfGuests" className="pb-1 ps-1 sm:text-lg">
            Number of guests
          </label>
          <select
            {...register("numberOfGuests", {
              required: true,
            })}
            id="numberOfGuests"
            className="block w-32 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
          {errors.numberOfGuests && (
            <p className="text-sm text-red-500">
              {errors.numberOfGuests.message}
            </p>
          )}
        </div>
        <div className="mx-auto mt-6 flex w-56 justify-between">
          <p>Total</p>
          <p className="text-xl">
            <span className="text-base">$</span> 1567
          </p>
        </div>
        {token ? (
          <Link
            to="/confirmedBooking"
            aria-label="Confirmed booking"
            className="flex justify-center py-6"
          >
            <PrimaryButton type="submit">Book now</PrimaryButton>
          </Link>
        ) : (
          <BookVenueNotLoggedIn />
        )}
      </form>
    </div>
  );
};
