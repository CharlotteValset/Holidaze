import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { InputField } from "../../components/InputField";
import { Checkbox } from "../../components/Checkbox";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { SecondaryButton } from "../../components/Buttons/SecondaryButton";
import { AddImageForm } from "../../components/AddImageForm";
import { Modal } from "../../components/Modal";
import { TextLink } from "../../components/TextLink";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Venue title is required"),
  description: Yup.string().required("Description of venue is required").min(20, "Must be at least 20 characters"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  wifi: Yup.boolean(),
  pets: Yup.boolean(),
  breakfast: Yup.boolean(),
  parking: Yup.boolean(),
  maxGuests: Yup.number().required("Please add maximum allowed guests").min(1, "Minimum 1 guest required"),
  pricePrNight: Yup.number().required("Please add price per night").min(1, "Price per night must be at least 1"),
  images: Yup.array()
    .of(Yup.string().url("Invalid URL").required("At least one image is required"))
    .min(1, "At least one image is required"),
});

export const AddEditVenue = () => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      maxGuests: 1,
      pricePrNight: 1,
      images: [""],
    },
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitted },
  } = methods;

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-light-blue mt-[100px] mb-8 md:mt-[120px] w-11/12 md:max-w-screen-md rounded-lg mx-auto md:flex md:justify-around"
      >
        <div className="md:pt-4 md:w-80 md:pb-8">
          <h1 className="pt-4 mb-2 text-[22px] sm:text-3xl text-center md:text-left md:mb-4 md:ps-11">Add new venue</h1>
          <InputField
            label="Title"
            htmlFor="venueTitle"
            register={register}
            registerYup="title"
            required={true}
            id="venueTitle"
            type="text"
            className="rounded-lg h-8 border-gray-300"
            errors={errors}
          />
          <div className="flex flex-col mx-auto w-60 my-2">
            <label htmlFor="venueDescription" className="ps-1 sm:text-lg">
              Description
            </label>
            <textarea
              {...register("description", {
                required: true,
                minLength: 3,
              })}
              id="venueDescription"
              rows="4"
              className="block p-2.5 w-full rounded-lg border border-gray-300"
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>
          <InputField
            label="City"
            htmlFor="venueCity"
            register={register}
            registerYup="city"
            required={true}
            id="venueCity"
            type="text"
            className="rounded-lg h-8 border-gray-300"
            errors={errors}
          />
          <InputField
            label="Country"
            htmlFor="venueCountry"
            register={register}
            registerYup="country"
            required={true}
            id="venueCountry"
            type="text"
            className="rounded-lg h-8 border-gray-300"
            errors={errors}
          />
          <div className="flex justify-between my-4 max-w-60 mx-auto">
            <div>
              <Checkbox
                register={register}
                registerYup="wifi"
                id="venueWifi"
                icon="fa-solid fa-wifi"
                checkboxHtmlFor="venueWifi"
                label="Wifi"
              />
              <Checkbox
                register={register}
                registerYup="breakfast"
                id="venueBreakfast"
                icon="fa-solid fa-utensils"
                checkboxHtmlFor="venueBreakfast"
                label="Breakfast"
              />
            </div>
            <div>
              <Checkbox
                register={register}
                registerYup="pets"
                id="venuePets"
                icon="fa-solid fa-dog"
                checkboxHtmlFor="venuePets"
                label="Pets"
              />
              <Checkbox
                register={register}
                registerYup="parking"
                id="venueParking"
                icon="fa-solid fa-car"
                checkboxHtmlFor="venueParking"
                label="Parking"
              />
            </div>
          </div>
        </div>
        <div className="md:pt-[73px] md:w-80">
          {" "}
          <div className="flex flex-col mx-auto w-60 my-4">
            <div className="ps-1">
              <i className="fa-solid fa-user-group"></i>
              <label htmlFor="venueMaxGuests" className="ps-2 pb-1 sm:text-lg">
                Max guests
              </label>
            </div>
            <select
              {...register("maxGuests", {
                required: "Please select the maximum number of guests.",
              })}
              id="venueMaxGuests"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block h-8 w-36 p-1.5 text-center"
            >
              <option value=""></option>
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
            {errors.maxGuests && <p className="text-red-500 text-sm">{errors.maxGuests.message}</p>}
          </div>
          <InputField
            icon={<i className="fa-regular fa-dollar-sign ps-1"></i>}
            label="Price per night"
            htmlFor="venuePricePrNight"
            register={register}
            registerYup="pricePrNight"
            required={true}
            min="1"
            id="venuePricePrNight"
            type="number"
            className="rounded-lg h-8 border-gray-300 text-center max-w-36"
            errors={errors}
          />
          <AddImageForm setImages={setValue} errors={errors} isSubmitted={isSubmitted} />{" "}
          <div className="flex justify-center gap-4 py-6 md:w-60 md:mx-auto md:justify-start">
            <Link to="/profile" aria-label="Profile">
              <SecondaryButton>Cancel</SecondaryButton>
            </Link>
            <PrimaryButton type="submit">Add venue</PrimaryButton>
          </div>
          <div className="">
            <TextLink onClick={() => setIsModalOpen(true)}>Delete venue?</TextLink>{" "}
            {isModalOpen && (
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Are you sure you want to delete this venue?"
                footer={
                  <>
                    <SecondaryButton onClick={() => setIsModalOpen(false)}>Delete venue</SecondaryButton>
                    <PrimaryButton onClick={() => setIsModalOpen(false)} className="">
                      Keep venue
                    </PrimaryButton>
                  </>
                }
              ></Modal>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
