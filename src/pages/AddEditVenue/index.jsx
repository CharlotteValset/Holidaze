import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { InputField } from "../../components/form_elements/InputField";
import { Checkbox } from "../../components/form_elements/Checkbox";
import { PrimaryButton } from "../../components/ui_elements/Buttons/PrimaryButton";
import { SecondaryButton } from "../../components/ui_elements/Buttons/SecondaryButton";
import { AddImageForm } from "../../components/forms/AddImageForm";
import { Modal } from "../../components/ui_elements/Modal";
import { TextLink } from "../../components/ui_elements/TextLink";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Venue title is required"),
  description: Yup.string()
    .required("Description of venue is required")
    .min(20, "Must be at least 20 characters"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  wifi: Yup.boolean(),
  pets: Yup.boolean(),
  breakfast: Yup.boolean(),
  parking: Yup.boolean(),
  maxGuests: Yup.number()
    .required("Please add maximum allowed guests")
    .min(1, "Minimum 1 guest required"),
  pricePrNight: Yup.number()
    .required("Please add price per night")
    .min(1, "Price per night must be at least 1"),
  images: Yup.array()
    .of(
      Yup.string()
        .url("Invalid URL")
        .required("At least one image is required"),
    )
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
        className="mx-auto mb-8 mt-[100px] w-11/12 rounded-lg bg-light-blue md:mt-[120px] md:flex md:max-w-screen-md md:justify-around"
      >
        <div className="md:w-80 md:pb-8 md:pt-4">
          <h1 className="mb-2 pt-4 text-center text-[22px] sm:text-3xl md:mb-4 md:ps-11 md:text-left">
            Add new venue
          </h1>
          <InputField
            label="Title"
            htmlFor="venueTitle"
            register={register}
            registerYup="title"
            required={true}
            id="venueTitle"
            type="text"
            className="h-8 rounded-lg border-gray-300"
            errors={errors}
          />
          <div className="mx-auto my-2 flex w-60 flex-col">
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
              className="block w-full rounded-lg border border-gray-300 p-2.5"
            ></textarea>
            {errors.description && (
              <p className="text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>
          <InputField
            label="City"
            htmlFor="venueCity"
            register={register}
            registerYup="city"
            required={true}
            id="venueCity"
            type="text"
            className="h-8 rounded-lg border-gray-300"
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
            className="h-8 rounded-lg border-gray-300"
            errors={errors}
          />
          <div className="mx-auto my-4 flex max-w-60 justify-between">
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
        <div className="md:w-80 md:pt-[73px]">
          {" "}
          <div className="mx-auto my-4 flex w-60 flex-col">
            <div className="ps-1">
              <i className="fa-solid fa-user-group"></i>
              <label htmlFor="venueMaxGuests" className="pb-1 ps-2 sm:text-lg">
                Max guests
              </label>
            </div>
            <select
              {...register("maxGuests", {
                required: "Please select the maximum number of guests.",
              })}
              id="venueMaxGuests"
              className="block h-8 w-36 rounded-lg border border-gray-300 bg-gray-50 p-1.5 text-center text-sm text-gray-900"
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
            {errors.maxGuests && (
              <p className="text-sm text-red-500">{errors.maxGuests.message}</p>
            )}
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
            className="h-8 max-w-36 rounded-lg border-gray-300 text-center"
            errors={errors}
          />
          <AddImageForm
            setImages={setValue}
            errors={errors}
            isSubmitted={isSubmitted}
          />{" "}
          <div className="flex justify-center gap-4 py-6 md:mx-auto md:w-60 md:justify-start">
            <Link to="/profile" aria-label="Profile">
              <SecondaryButton>Cancel</SecondaryButton>
            </Link>
            <PrimaryButton type="submit">Add venue</PrimaryButton>
          </div>
          <div className="">
            <TextLink onClick={() => setIsModalOpen(true)}>
              Delete venue?
            </TextLink>{" "}
            {isModalOpen && (
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Are you sure you want to delete this venue?"
                footer={
                  <>
                    <SecondaryButton onClick={() => setIsModalOpen(false)}>
                      Delete venue
                    </SecondaryButton>
                    <PrimaryButton
                      onClick={() => setIsModalOpen(false)}
                      className=""
                    >
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
