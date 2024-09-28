import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { PrimaryButton } from "../../ui_elements/Buttons/PrimaryButton";
import { BookVenueNotLoggedIn } from "../../../components/bookings/BookVenueNotLoggedIn";

import { usePost } from "../../../hooks/usePost";
import { useFetch } from "../../../hooks/useFetch";

import { load } from "../../../js/storage/load";
import { formatDate } from "../../../js/utils/formatDate";
import { all_Venues, API_Url, bookings_Url } from "../../../js/api/constants";

export const BookVenue = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = load("accessToken");

  const [selectedCheckInDate, setSelectedCheckInDate] = useState(new Date());
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(new Date());
  const [totalPrice, setTotalPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const schema = yup
    .object({
      checkIn: yup
        .date("Please add a check-in date")
        .required("Please add a check-in date"),
      checkOut: yup
        .date("Please add a check-out date")
        .required("Please add a check-out date"),
      numberOfGuests: yup
        .number("Please add the number of guests")
        .min(1, "Minimum number of guests is 1")
        .max(data.maxGuests, `Maximum number of guests is ${data.maxGuests}`)
        .required("Please add the number of guests"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    setError,
  } = useForm({ resolver: yupResolver(schema) });

  const { postData, isLoading, hasError } = usePost(API_Url + bookings_Url);
  const { data: bookingsData } = useFetch(
    `${API_Url}${all_Venues}/${id}?_bookings=true`,
  );

  useEffect(() => {
    register("checkIn");
  }, [register]);

  const getBookedDates = () => {
    if (bookingsData?.bookings) {
      return bookingsData.bookings.map((booking) => ({
        start: new Date(booking.dateFrom),
        end: new Date(booking.dateTo),
      }));
    }
    return [];
  };

  const bookedDates = getBookedDates();
  const totalOfNights = Math.ceil(
    (selectedCheckOutDate - selectedCheckInDate) / (1000 * 60 * 60 * 24),
  );
  const pricePerNight = data.price;

  useEffect(() => {
    const calculateTotalPrice = (pricePerNight, totalOfNights) =>
      pricePerNight * totalOfNights;
    const newTotalPrice = calculateTotalPrice(pricePerNight, totalOfNights)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    setTotalPrice(newTotalPrice);
  }, [selectedCheckInDate, selectedCheckOutDate, pricePerNight, totalOfNights]);

  const onSubmit = async (formData) => {
    const payload = {
      dateFrom: formatDate(selectedCheckInDate),
      dateTo: formatDate(selectedCheckOutDate),
      guests: formData.numberOfGuests,
      venueId: id,
    };

    try {
      const result = await postData(payload);
      if (result && !hasError) {
        reset();
        navigate("/confirmedBooking", {
          state: { payload, venue: data, totalPrice },
        });
      } else {
        console.error("Error submitting booking:", hasError);
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  const isDateRangeOverlapping = (checkIn, checkOut, bookedDates) => {
    return bookedDates.some((booked) => {
      const bookedStart = new Date(booked.start).setHours(0, 0, 0, 0); // Normalize to midnight
      const bookedEnd = new Date(booked.end).setHours(23, 59, 59, 999); // Normalize to end of day

      const checkInDate = new Date(checkIn).setHours(0, 0, 0, 0);
      const checkOutDate = new Date(checkOut).setHours(23, 59, 59, 999);

      return checkInDate <= bookedEnd && checkOutDate >= bookedStart;
    });
  };

  const handleCheckInDateChange = (date) => {
    setSelectedCheckInDate(date);
    setValue("checkIn", date);

    const newCheckOutDate = new Date(date);
    newCheckOutDate.setDate(newCheckOutDate.getDate() + 1);

    if (selectedCheckOutDate <= date) {
      setSelectedCheckOutDate(newCheckOutDate);
      setValue("checkOut", newCheckOutDate);
    }

    if (isDateRangeOverlapping(date, selectedCheckOutDate, bookedDates)) {
      setErrorMessage(
        "The selected date range overlaps with unavailable dates. Please choose different dates.",
      );
    } else {
      setErrorMessage("");
    }
  };

  const handleCheckOutDateChange = (date) => {
    const minCheckOutDate = new Date(selectedCheckInDate);
    minCheckOutDate.setDate(minCheckOutDate.getDate() + 1);

    if (date < minCheckOutDate) {
      setSelectedCheckOutDate(minCheckOutDate);
      setValue("checkOut", minCheckOutDate);
    } else {
      setSelectedCheckOutDate(date);
      setValue("checkOut", date);
    }

    if (isDateRangeOverlapping(selectedCheckInDate, date, bookedDates)) {
      setErrorMessage(
        "The selected date range overlaps with unavailable dates. Please choose different dates.",
      );
    } else {
      setErrorMessage("");
    }
  };

  const isDateBookable = (date) => {
    return !bookedDates.some(
      (booked) => date >= booked.start && date <= booked.end,
    );
  };

  const getDayClassName = (date) => {
    let className = "";

    if (
      date >= selectedCheckInDate &&
      date <= selectedCheckOutDate &&
      isDateBookable(date)
    ) {
      className += " react-datepicker__day--in-range";
    }

    if (!isDateBookable(date)) {
      className += " react-datepicker__day--booked";
    }

    return className.trim();
  };

  return (
    <section className="mx-auto mb-5 mt-8 h-fit w-11/12 rounded-lg bg-light-blue xs:max-w-xs md:ml-14">
      <header className="pb-2 pt-6">
        <h2 className="text-center text-2xl">Book this venue!</h2>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <div className="mx-auto flex w-[199px] flex-col py-2">
            <label className="text-lg" htmlFor="checkIn">
              Check-in
            </label>
            <DatePicker
              selected={selectedCheckInDate}
              onChange={handleCheckInDateChange}
              selectsStart
              id="checkIn"
              startDate={selectedCheckInDate}
              endDate={selectedCheckOutDate}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              excludeDateIntervals={bookedDates}
              dayClassName={getDayClassName}
              className="w-full rounded-lg border border-gray-300 p-2 text-center shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.checkIn && (
              <p className="text-sm text-red-600">{errors.checkIn.message}</p>
            )}
          </div>

          <div className="mx-auto flex w-[199px] flex-col py-2">
            <label htmlFor="checkOut" className="my-1 ps-1 text-lg">
              Check-out
            </label>
            <DatePicker
              {...register("checkOut", { required: true })}
              id="checkOut"
              selected={selectedCheckOutDate}
              onChange={handleCheckOutDateChange}
              selectsStart
              startDate={selectedCheckInDate}
              endDate={selectedCheckOutDate}
              dateFormat="dd/MM/yyyy"
              minDate={new Date(selectedCheckInDate).setDate(
                selectedCheckInDate.getDate() + 1,
              )}
              dayClassName={getDayClassName}
              excludeDateIntervals={bookedDates}
              className="w-full rounded-lg border border-gray-300 p-2 text-center text-base shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.checkOut && (
              <p className="text-sm text-red-600">{errors.checkOut.message}</p>
            )}
          </div>
          {errorMessage && (
            <p className="mx-auto w-[199px] text-left text-sm text-red-600">
              {errorMessage}
            </p>
          )}

          <div className="mx-auto flex w-[202px] flex-col items-start py-2">
            <label htmlFor="numberOfGuests" className="pb-1 ps-1 text-lg">
              Number of guests
            </label>
            <select
              {...register("numberOfGuests", { required: true })}
              id="numberOfGuests"
              className="block w-28 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900"
            >
              <option value="0">0</option>
              {Array.from({ length: data.maxGuests }, (_, i) => i + 1).map(
                (num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ),
              )}
            </select>
            {errors.numberOfGuests && (
              <p className="text-sm text-red-600">
                {errors.numberOfGuests.message}
              </p>
            )}
          </div>

          <div className="mx-auto mt-6 flex w-[202px] pl-1">
            <p className="mr-1 text-lg">Booking is for</p>
            <span className="mr-1 text-lg font-medium">{totalOfNights}</span>
            <p className="text-lg">nights</p>
          </div>

          <div className="mx-auto mt-6 flex w-[202px] gap-6 pl-1">
            <p className="text-xl">Total price</p>
            <p className="mr-1 text-xl">$ {totalPrice}</p>
          </div>

          {token ? (
            <PrimaryButton
              className="mx-auto my-8 w-32"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Booking..." : "Book now"}
            </PrimaryButton>
          ) : (
            <BookVenueNotLoggedIn />
          )}
        </div>
      </form>
    </section>
  );
};
