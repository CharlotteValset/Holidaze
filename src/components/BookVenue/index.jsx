import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { InputField } from "../InputField";

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
    <div className="mx-auto mb-5 mt-8 h-fit w-11/12 rounded-lg bg-light-blue xs:mx-0 xs:ml-4 xs:max-w-xs">
      <h3 className="pb-2 pt-4 text-center text-xl">Book this venue!</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
        <InputField
          label="Check-in"
          htmlFor="checkInDate"
          register={register}
          registerYup="checkIn"
          required={true}
          id="checkInDate"
          type="date"
          className="h-8 rounded-lg border-gray-300 text-center"
          errors={errors}
        />
        <InputField
          label="Check-out"
          htmlFor="checkOutDate"
          register={register}
          registerYup="checkOut"
          required={true}
          id="checkOutDate"
          type="date"
          className="h-8 rounded-lg border-gray-300 text-center"
          errors={errors}
        />
        <div className="mx-auto my-2 flex w-60 flex-col">
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
        <Link
          to="/confirmedBooking"
          aria-label="Confirmed booking"
          className="flex justify-center py-6"
        >
          <PrimaryButton type="submit">Book now</PrimaryButton>
        </Link>
      </form>
    </div>
  );
};
