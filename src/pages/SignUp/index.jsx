import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { TextLink } from "../../components/TextLink";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Full name should be at least 3 characters.")
      .required(),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .matches(
        /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/,
        "Email must be a stud.noroff.no address",
      )
      .required("Please enter a valid email address"),
    password: yup
      .string()
      .min(8, "Password should be at least 8 characters.")
      .required(),
    profileImage: yup
      .string()
      .nullable()
      .trim()
      .url("Please enter a valid URL")
      .test(
        "is-https",
        "URL must start with https://",
        (value) => !value || value.startsWith("https://"),
      ),
  })
  .required();

export const SignUp = () => {
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
    <div className="mx-auto mb-5 mt-[90px] flex w-11/12 max-w-sm flex-col items-center justify-center rounded-xl bg-light-blue sm:mt-[115px]">
      <h1 className="mb-3 mt-6 text-[22px] sm:text-3xl">Sign up here</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 max-w-xs">
        <div className="mx-auto mb-1 mt-2 flex w-52 flex-col sm:w-60">
          <label htmlFor="SignUpFullName" className="ps-1 sm:text-lg">
            Full name
          </label>
          <input
            {...register("fullName", {
              required: true,
            })}
            id="SignUpFullName"
            type="text"
            className="h-8 rounded-lg"
          />
          {errors.fullName && (
            <p className="ps-1 pt-1 text-sm text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div className="mx-auto mb-1 mt-2 flex w-52 flex-col sm:w-60">
          <label htmlFor="SignUpEmail" className="ps-1 sm:text-lg">
            Email
          </label>
          <input
            {...register("email", {
              required: true,
            })}
            id="SignUpEmail"
            type="email"
            autoComplete="email"
            className="h-8 rounded-lg"
          />
          {errors.email && (
            <p className="ps-1 pt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mx-auto mb-1 mt-2 flex w-52 flex-col sm:w-60">
          <label htmlFor="SignUpPassword" className="ps-1 sm:text-lg">
            Password
          </label>
          <input
            {...register("password", {
              required: true,
            })}
            id="SignUpPassword"
            type="password"
            autoComplete="current-password"
            className="h-8 rounded-lg"
          />
          {errors.password && (
            <p className="ps-1 pt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="mx-auto mb-3 mt-2 flex w-52 flex-col pb-4 sm:w-60">
          <label htmlFor="SignUpProfileImage" className="ps-1 sm:text-lg">
            Profile image url
          </label>
          <input
            {...register("profileImage", {
              required: true,
            })}
            id="SignUpProfileImage"
            type="text"
            className="h-8 rounded-lg"
          />
          {errors.profileImage && (
            <p className="ps-1 pt-1 text-sm text-red-500">
              {errors.profileImage.message}
            </p>
          )}
        </div>
        <div className="flex justify-center pb-6">
          <PrimaryButton type="submit">Sign up</PrimaryButton>
        </div>
      </form>
      <Link
        to="/login"
        aria-label="Log in"
        className="mb-6 w-40 text-center sm:mb-8 sm:w-52"
      >
        <TextLink>
          Already have an account?{" "}
          <span className="font-medium">Please log in</span>
        </TextLink>
      </Link>
    </div>
  );
};

/* import React, { useState } from "react";

export const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle the password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative flex items-center mt-52">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        className="border rounded p-2 w-full"
      />
      <button type="button" onClick={togglePasswordVisibility} className="absolute right-2 text-gray-600">
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}; */
