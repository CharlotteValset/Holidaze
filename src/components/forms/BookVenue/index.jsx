import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PrimaryButton } from "../../ui_elements/Buttons/PrimaryButton";
import { BookVenueNotLoggedIn } from "../../../components/bookings/BookVenueNotLoggedIn";
import { load } from "../../../js/storage/load";
import { all_Venues, API_Url, bookings_Url } from "../../../js/api/constants";
import { usePost } from "../../../hooks/usePost";
import { useFetch } from "../../../hooks/useFetch";
import { formatDate } from "../../../js/utils/formatDate";

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
      .required("Please add the number of guests"),
  })
  .required();

export const BookVenue = ({ data }) => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    setError,
  } = useForm({ resolver: yupResolver(schema) });

  const [selectedCheckInDate, setSelectedCheckInDate] = useState(new Date());
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(new Date());
  const [totalPrice, setTotalPrice] = useState(0);
  const token = load("accessToken");
  const navigate = useNavigate();

  const { postData, response, isLoading, hasError } = usePost(
    API_Url + bookings_Url,
  );

  const { data: bookingsData, isLoading: bookingsLoading } = useFetch(
    `${API_Url}${all_Venues}/${id}?_bookings=true`,
  );

  const getBookedDates = () => {
    if (bookingsData && bookingsData.bookings) {
      return bookingsData.bookings.map((booking) => {
        const dateFrom = new Date(booking.dateFrom);
        const dateTo = new Date(booking.dateTo);
        return { start: dateFrom, end: dateTo };
      });
    }
    return [];
  };

  const bookedDates = getBookedDates();

  const totalOfNights = Math.ceil(
    (selectedCheckOutDate.getTime() - selectedCheckInDate.getTime()) /
      (1000 * 60 * 60 * 24),
  );

  const pricePerNight = data.price;

  useEffect(() => {
    const calculateTotalPrice = (pricePerNight, totalOfNights) => {
      return pricePerNight * totalOfNights;
    };

    const newTotalPrice = calculateTotalPrice(pricePerNight, totalOfNights);
    const formattedPrice = newTotalPrice
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    setTotalPrice(formattedPrice);
  }, [selectedCheckInDate, selectedCheckOutDate, pricePerNight, totalOfNights]);

  const onSubmit = async (formData) => {
    if (data.maxGuests < formData.numberOfGuests) {
      setError("numberOfGuests", {
        type: "manual",
        message: "Exceeded max guests, please reduce number.",
      });
      return;
    }

    const payload = {
      dateFrom: formatDate(selectedCheckInDate),
      dateTo: formatDate(selectedCheckOutDate),
      guests: formData.numberOfGuests,
      venueId: id,
    };

    console.log("Submitting payload:", payload);

    try {
      const result = await postData(payload);

      if (result && !hasError) {
        console.log("New booking submitted:", result);

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

  const minimumStay = 1;

  const handleCheckInDateChange = (date) => {
    setSelectedCheckInDate(date);
    setValue("checkIn", date);

    const minCheckOutDate = new Date(date);
    minCheckOutDate.setDate(minCheckOutDate.getDate() + minimumStay);

    if (selectedCheckOutDate < minCheckOutDate) {
      setSelectedCheckOutDate(minCheckOutDate);
      setValue("checkOut", minCheckOutDate);
    }
  };

  const handleCheckOutDateChange = (date) => {
    const minCheckOutDate = new Date(selectedCheckInDate);
    minCheckOutDate.setDate(minCheckOutDate.getDate() + minimumStay);

    if (date < minCheckOutDate) {
      setSelectedCheckOutDate(minCheckOutDate);
      setValue("checkOut", minCheckOutDate);
    } else {
      setSelectedCheckOutDate(date);
      setValue("checkOut", date);
    }
  };

  return (
    <div className="mx-auto mb-5 ml-0 mt-8 h-fit w-11/12 rounded-lg bg-light-blue xs:max-w-xs md:ml-14">
      <h3 className="pb-2 pt-4 text-center text-xl lg:text-2xl">
        Book this venue!
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto flex flex-col py-2">
          <label htmlFor="checkIn">Check-in</label>
          <DatePicker
            selected={selectedCheckInDate}
            onChange={handleCheckInDateChange}
            selectsStart
            startDate={selectedCheckInDate}
            endDate={selectedCheckOutDate}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            excludeDateIntervals={bookedDates}
            className="w-full rounded-lg border border-gray-300 p-2 text-center shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.checkIn && (
            <p className="text-sm text-red-500">{errors.checkIn.message}</p>
          )}
        </div>

        <div className="mx-auto flex flex-col py-2">
          <label htmlFor="checkOut" className="my-1 ps-1 sm:text-lg">
            Check-out
          </label>
          <DatePicker
            {...register("checkOut", {
              required: true,
            })}
            id="checkOut"
            selected={selectedCheckOutDate}
            onChange={handleCheckOutDateChange}
            selectsStart
            startDate={selectedCheckInDate}
            endDate={selectedCheckOutDate}
            dateFormat="dd/MM/yyyy"
            minDate={new Date(selectedCheckInDate).setDate(
              selectedCheckInDate.getDate() + minimumStay,
            )}
            excludeDateIntervals={bookedDates}
            className="w-full rounded-lg border border-gray-300 p-2 text-center shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.checkOut && (
            <p className="text-sm text-red-500">{errors.checkOut.message}</p>
          )}
        </div>
        <div className="mx-auto flex flex-col py-2">
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
            <option value="0">0</option>
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
        <div className="mx-auto mt-6 flex">
          <p className="mr-1">Booking is for</p>
          <p className="mr-1 font-medium">{totalOfNights}</p>
          <p>nights</p>
        </div>
        <div className="mx-auto mt-6 flex justify-between">
          <p>Total price</p>
          <p className="text-xl">
            <span className="mr-1 text-base">$</span>
            {totalPrice}
          </p>
        </div>
        {token ? (
          <PrimaryButton type="submit">Book now</PrimaryButton>
        ) : (
          <BookVenueNotLoggedIn />
        )}
      </form>
    </div>
  );
};
