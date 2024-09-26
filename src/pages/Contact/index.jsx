import { useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ContactImage from "../../assets/images/contactImage.jpg";

import { InputField } from "../../components/form_elements/InputField";
import { PrimaryButton } from "../../components/ui_elements/Buttons/PrimaryButton";
import { InfoMessage } from "../../components/ui_elements/InfoMessage";

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
    <>
      <Helmet>
        <title>Contact us | Holidaze</title>
        <meta
          name="description"
          content="Contact us for any questions or inquiries you may have. We're here to help!"
        />
      </Helmet>
      <section className="mx-auto mb-6 mt-[70px] w-11/12 max-w-screen-lg md:mt-[110px] md:flex md:flex-row-reverse md:gap-1">
        <div className="md:w-7/12">
          <img
            className="w-full md:h-full md:object-cover md:p-4"
            src={ContactImage}
            alt="Image of two people sitting at a table and talking to each other"
          />
        </div>

        <div className="mb-4 flex flex-col items-center md:w-6/12">
          <header className="w-full text-center">
            <h1 className="pt-4 text-2xl md:text-3xl">Contact us</h1>
            <p className="w-10/12 py-4 text-center text-lg font-light xs:w-11/12 md:text-xl">
              Please don’t hesitate to reach out!
            </p>
          </header>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-11/12 max-w-xs rounded-lg bg-light-blue"
          >
            <div className="mx-auto my-1 flex w-52 flex-col sm:w-60">
              <InputField
                label="Name"
                htmlFor="contactName"
                register={register}
                registerYup="contactName"
                required={true}
                id="contactName"
                type="text"
                className="h-9 w-52 rounded-lg border-gray-300 sm:w-60"
                errors={errors}
              />
            </div>
            <div className="mx-auto my-1 flex w-52 flex-col sm:w-60">
              <InputField
                label="Email"
                htmlFor="contactEmail"
                register={register}
                registerYup="contactEmail"
                required={true}
                id="contactEmail"
                type="email"
                className="h-9 w-52 rounded-lg border-gray-300 sm:w-60"
                errors={errors}
              />
            </div>
            <div className="mx-auto my-1 flex w-52 flex-col sm:w-60">
              <InputField
                label="Subject"
                htmlFor="contactSubject"
                register={register}
                registerYup="contactSubject"
                required={true}
                id="contactSubject"
                type="text"
                className="h-9 w-52 rounded-lg border-gray-300 sm:w-60"
                errors={errors}
              />
            </div>
            <div className="mx-auto my-1 flex w-52 flex-col sm:w-60">
              <div className="mx-auto my-1 flex w-52 flex-col sm:w-60">
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
                  className="block w-52 rounded-lg border border-gray-300 p-2.5 sm:w-60"
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
                  <p className="mx-auto w-40">
                    Thank you for reaching out to us!
                  </p>
                  <i className="fa-solid fa-heart text-soft-pink"></i>
                  <p className="mx-auto w-44">
                    {" "}
                    We will get in touch as soon as possible.
                  </p>
                </InfoMessage>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
