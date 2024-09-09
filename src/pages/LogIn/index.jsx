import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { TextLink } from "../../components/TextLink";

const schema = yup
  .object({
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
  })
  .required();

export const LogIn = () => {
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
      <h1 className="mb-3 mt-6 text-[22px] sm:text-3xl">Please log in</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 max-w-xs">
        <div className="mx-auto my-1 flex w-52 flex-col sm:w-60">
          <label htmlFor="LogInEmail" className="ps-1 sm:text-lg">
            Email
          </label>
          <input
            {...register("email", {
              required: true,
            })}
            id="LogInEmail"
            type="email"
            autoComplete="email"
            className="h-8 rounded-lg"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mx-auto my-3 flex w-52 flex-col pb-4 sm:w-60">
          <label htmlFor="LogInPassword" className="ps-1 sm:text-lg">
            Password
          </label>
          <input
            {...register("password", {
              required: true,
            })}
            id="LogInPassword"
            type="password"
            autoComplete="current-password"
            className="h-8 rounded-lg"
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="flex justify-center pb-6">
          <PrimaryButton type="submit">Log in</PrimaryButton>
        </div>
      </form>
      <Link
        to="/signup"
        aria-label="Sign up"
        className="mb-6 w-40 text-center sm:mb-8 sm:w-52"
      >
        <TextLink>
          Don’t have an account?{" "}
          <span className="font-medium">Please sign up</span>
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
