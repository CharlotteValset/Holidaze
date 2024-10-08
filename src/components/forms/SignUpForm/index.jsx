import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { PrimaryButton } from "../../ui_elements/Buttons/PrimaryButton";
import { InputField } from "../../form_elements/InputField";

import { register as registerUser } from "../../../js/api/auth/register.jsx";
import { login as loginUser } from "../../../js/api/auth/login.jsx";

const schema = yup.object({
  name: yup
    .string()
    .min(3, "Name should be at least 3 characters.")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Name can only contain letters, numbers, and underscores.",
    )
    .required("Name is required."),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/,
      "Email must be a stud.noroff.no address.",
    )
    .required("Please enter a valid email address."),
  password: yup
    .string()
    .min(8, "Password should be at least 8 characters.")
    .required(),
  profileImageUrl: yup
    .string()
    .nullable()
    .url("Please enter a valid URL")
    .test(
      "is-https",
      "URL must start with https://",
      (value) => !value || value.startsWith("https://"),
    ),
});

export const SignUpForm = () => {
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setFormError("");

    try {
      const { name, email, password, profileImageUrl } = data;
      const profileImgUrlString = profileImageUrl
        ? String(profileImageUrl)
        : "";

      const registrationResponse = await registerUser(
        name,
        email,
        password,
        profileImgUrlString,
      );

      const loginResponse = await loginUser(email, password);

      navigate("/");
    } catch (error) {
      console.error("Error object:", error);

      let errorMessage = "Registration failed. Please try again.";

      if (error.message) {
        errorMessage = error.message;
      }

      setFormError(errorMessage);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {formError && <div className="mb-4 text-red-600">{formError}</div>}

      <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 max-w-xs">
        <div className="mx-auto mb-1 mt-2 flex w-52 flex-col sm:w-60">
          <InputField
            label="Name"
            htmlFor="SignUpName"
            register={register}
            registerYup="name"
            required={true}
            id="SignUpName"
            type="text"
            className="my-1 h-9 w-52 rounded-lg border-gray-300 sm:w-60"
            errors={errors}
          />
          <InputField
            label="Email"
            htmlFor="SignUpEmail"
            register={register}
            registerYup="email"
            required={true}
            id="SignUpEmail"
            type="email"
            className="h-9 w-52 rounded-lg border-gray-300 sm:w-60"
            errors={errors}
          />
          <InputField
            label="Password"
            htmlFor="SignUpPassword"
            register={register}
            registerYup="password"
            required={true}
            id="SignUpPassword"
            type="password"
            className="h-9 w-52 rounded-lg border-gray-300 sm:w-60"
            errors={errors}
            togglePassword={true}
          />
          <InputField
            label="Image url"
            htmlFor="SignUpProfileImage"
            register={register}
            registerYup="profileImageUrl"
            required={false}
            id="SignUpProfileImage"
            type="url"
            className="h-9 w-52 rounded-lg border-gray-300 sm:w-60"
            errors={errors}
          />
        </div>
        <div className="flex justify-center pb-6 pt-3">
          <PrimaryButton type="submit">Sign up</PrimaryButton>
        </div>
      </form>
    </>
  );
};
