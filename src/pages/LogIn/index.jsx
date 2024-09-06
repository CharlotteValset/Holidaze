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
      .matches(/^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/, "Email must be a stud.noroff.no address")
      .required("Please enter a valid email address"),
    password: yup.string().min(8, "Password should be at least 8 characters.").required(),
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
    <div className="flex flex-col justify-center items-center mt-[90px] sm:mt-[115px] mb-5 bg-light-blue rounded-xl mx-auto w-11/12 max-w-sm">
      <h1 className="mt-6 mb-3 text-[22px] sm:text-3xl">Please log in</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 max-w-xs">
        <div className="flex flex-col mx-auto w-52 sm:w-60 my-1">
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
            className="rounded-lg h-8"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col mx-auto w-52 sm:w-60 my-3 pb-4">
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
            className="rounded-lg h-8"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <div className="pb-6 flex justify-center">
          <PrimaryButton type="submit">Log in</PrimaryButton>
        </div>
      </form>
      <Link to="/signup" aria-label="Sign up" className="w-40 sm:w-52 text-center mb-6 sm:mb-8">
        <TextLink>
          Don’t have an account? <span className="font-medium">Please sign up</span>
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
