import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField } from "../../components/InputField";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { InfoMessage } from "../../components/InfoMessage";
import ContactImage from "../../assets/images/contactImage.jpg";

const contactSchema = yup
  .object({
    contactName: yup
      .string()
      .required("Please enter your name")
      .min(3, "Name should be at least 3 characters"),
    contactEmail: yup
      .string()
      .email("Email must be a valid email address")
      .required("Please enter your email address"),
    contactSubject: yup
      .string()
      .required("Please enter a subject title")
      .min(3, "Subject title should be at least 3 characters"),
    contactMessage: yup
      .string()
      .min(20, "Message should be at least 20 characters"),
  })
  .required();

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(contactSchema) });

  const [infoMessage, setInfoMessage] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setInfoMessage("Message sent! We'll be in touch soon.");
  };

  return (
    <section className="mx-auto mb-6 mt-[70px] max-w-screen-lg md:mt-[110px] md:flex md:flex-row-reverse md:gap-6">
      <div className="md:w-7/12">
        <img
          className="w-full md:h-full md:object-cover md:p-4"
          src={ContactImage}
          alt=""
        />
      </div>
      <div className="mb-4 flex flex-col items-center md:w-5/12">
        <h1 className="w-11/12 py-3 text-center text-[22px] md:ml-24 md:text-left md:text-3xl">
          Contact us
        </h1>
        <p className="w-11/12 py-2 text-center text-lg font-light md:ml-24 md:text-left md:text-xl">
          Please don’t hesitate to reach out!
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-5 mt-8 h-fit w-11/12 rounded-lg bg-light-blue xs:mx-0 xs:ml-4 xs:max-w-xs md:ml-3"
        >
          <InputField
            label="Name"
            htmlFor="contactName"
            register={register}
            registerYup="contactName"
            required={true}
            id="contactName"
            type="text"
            className="h-8 rounded-lg border-gray-300"
            errors={errors}
          />
          <InputField
            label="Email"
            htmlFor="contactEmail"
            register={register}
            registerYup="contactEmail"
            required={true}
            id="contactEmail"
            type="email"
            className="h-8 rounded-lg border-gray-300"
            errors={errors}
          />
          <InputField
            label="Subject"
            htmlFor="contactSubject"
            register={register}
            registerYup="contactSubject"
            required={true}
            id="contactSubject"
            type="text"
            className="h-8 rounded-lg border-gray-300"
            errors={errors}
          />
          <div className="mx-auto my-2 flex w-60 flex-col">
            <label htmlFor="contactMessage" className="ps-1 sm:text-lg">
              Message
            </label>
            <textarea
              {...register("contactMessage", {
                required: true,
                minLength: 3,
              })}
              id="contactMessage"
              rows="4"
              className="block w-full rounded-lg border border-gray-300 p-2.5"
            ></textarea>
            {errors.contactMessage && (
              <p className="text-sm text-red-500">
                {errors.contactMessage.message}
              </p>
            )}
          </div>
          <div className="flex justify-center py-3">
            <PrimaryButton type="submit">Send</PrimaryButton>
          </div>
          {infoMessage && (
            <InfoMessage className="mb-8 mt-4 space-y-3 text-center sm:text-xl">
              <p className="mx-auto w-40">Thank you for reaching out to us!</p>
              <i className="fa-solid fa-heart text-soft-pink"></i>
              <p className="mx-auto w-44">
                {" "}
                We will get in touch as soon as possible.
              </p>
            </InfoMessage>
          )}
        </form>
      </div>
    </section>
  );
};
