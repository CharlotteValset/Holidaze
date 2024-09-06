import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { TextLink } from "../../components/TextLink";

const schema = yup
  .object({
    fullName: yup.string().min(3, "Full name should be at least 3 characters.").required(),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .matches(/^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/, "Email must be a stud.noroff.no address")
      .required("Please enter a valid email address"),
    password: yup.string().min(8, "Password should be at least 8 characters.").required(),
    profileImage: yup
      .string()
      .nullable()
      .trim()
      .url("Please enter a valid URL")
      .test("is-https", "URL must start with https://", (value) => !value || value.startsWith("https://")),
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
    <div className="flex flex-col justify-center items-center mt-[90px] sm:mt-[115px] mb-5 bg-light-blue rounded-xl mx-auto w-11/12 max-w-sm">
      <h1 className="mt-6 mb-3 text-[22px] sm:text-3xl">Sign up here</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 max-w-xs">
        <div className="flex flex-col mx-auto w-52 sm:w-60 mt-2 mb-1">
          <label htmlFor="SignUpFullName" className="ps-1 sm:text-lg">
            Full name
          </label>
          <input
            {...register("fullName", {
              required: true,
            })}
            id="SignUpFullName"
            type="text"
            className="rounded-lg h-8"
          />
          {errors.fullName && <p className="text-red-500 text-sm pt-1 ps-1">{errors.fullName.message}</p>}
        </div>
        <div className="flex flex-col mx-auto w-52 sm:w-60 mt-2 mb-1">
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
            className="rounded-lg h-8"
          />
          {errors.email && <p className="text-red-500 text-sm pt-1 ps-1">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col mx-auto w-52 sm:w-60 mt-2 mb-1">
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
            className="rounded-lg h-8"
          />
          {errors.password && <p className="text-red-500 text-sm pt-1 ps-1">{errors.password.message}</p>}
        </div>
        <div className="flex flex-col mx-auto w-52 sm:w-60 mt-2 mb-3 pb-4">
          <label htmlFor="SignUpProfileImage" className="ps-1 sm:text-lg">
            Profile image url
          </label>
          <input
            {...register("profileImage", {
              required: true,
            })}
            id="SignUpProfileImage"
            type="text"
            className="rounded-lg h-8"
          />
          {errors.profileImage && <p className="text-red-500 text-sm pt-1 ps-1">{errors.profileImage.message}</p>}
        </div>
        <div className="pb-6 flex justify-center">
          <PrimaryButton type="submit">Sign up</PrimaryButton>
        </div>
      </form>
      <Link to="/login" aria-label="Log in" className="w-40 sm:w-52 text-center mb-6 sm:mb-8">
        <TextLink>
          Already have an account? <span className="font-medium">Please log in</span>
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
