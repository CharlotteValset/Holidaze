import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PrimaryButton } from "../Buttons/PrimaryButton";

const schema = yup
  .object({
    checkIn: yup.date("Please add a check-in date").required("Please add a check-in date"),
    checkOut: yup.date().required("Please add a check-out date"),
    numberOfGuests: yup.number("Please add the number of guests").required("Please add the number of guests"),
  })
  .required();

export const BookVenue = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="bg-light-blue w-11/12 h-fit rounded-lg mx-auto xs:mx-0 xs:ml-4 mt-8 mb-5 xs:max-w-xs">
      <h3 className="text-center pt-4 pb-2 text-xl">Book this venue!</h3>
      <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
        <div className="flex flex-col mx-auto w-60 my-2">
          <label htmlFor="checkInDate" className="ps-1 sm:text-lg">
            Check-in
          </label>
          <input
            {...register("checkIn", {
              required: true,
            })}
            id="checkInDate"
            type="date"
            required
            className="rounded-lg h-8 border-gray-300 text-center"
          />
          {errors.checkIn && <p className="text-red-500 text-sm">{errors.checkIn.message}</p>}
        </div>
        <div className="flex flex-col mx-auto w-60 my-2 ">
          <label htmlFor="checkOutDate" className="ps-1 sm:text-lg">
            Check-out
          </label>
          <input
            {...register("checkOut", {
              required: true,
            })}
            id="checkOutDate"
            type="date"
            required
            className="rounded-lg h-8 border-gray-300 text-center"
          />
          {errors.checkOut && <p className="text-red-500 text-sm">{errors.checkOut.message}</p>}
        </div>
        <div className="flex flex-col mx-auto w-60 my-2">
          <label htmlFor="numberOfGuests" className="ps-1 pb-1 sm:text-lg">
            Number of guests
          </label>
          <select
            {...register("numberOfGuests", {
              required: true,
            })}
            id="numberOfGuests"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-32 p-2.5 text-center"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>12</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
          </select>
          {errors.numberOfGuests && <p className="text-red-500 text-sm">{errors.numberOfGuests.message}</p>}
        </div>
        <div className="flex justify-between w-56 mx-auto mt-6">
          <p>Total</p>
          <p className="text-xl">
            <span className="text-base">$</span> 1567
          </p>
        </div>
        <Link to="/confirmedBooking" aria-label="Confirmed booking" className="py-6 flex justify-center">
          <PrimaryButton type="submit">Book now</PrimaryButton>
        </Link>
      </form>
    </div>
  );
};
