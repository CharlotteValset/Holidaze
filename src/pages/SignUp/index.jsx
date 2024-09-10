import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PrimaryButton } from "../../components/ui_elements/Buttons/PrimaryButton";
import { TextLink } from "../../components/ui_elements/TextLink";
import { InputField } from "../../components/form_elements/InputField";

const schema = yup.object({
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
});

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

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mx-auto mb-5 mt-[90px] flex w-11/12 max-w-sm flex-col items-center justify-center rounded-xl bg-light-blue sm:mt-[115px]">
      <h1 className="mb-3 mt-6 text-[22px] sm:text-3xl">Sign up here</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 max-w-xs">
        <div className="mx-auto mb-1 mt-2 flex w-52 flex-col gap-2 sm:w-60">
          <InputField
            label="Full name"
            htmlFor="FullName"
            register={register}
            registerYup="fullName"
            required={true}
            id="FullName"
            type="text"
            className="my-1 h-8 w-52 rounded-lg border-gray-300 sm:w-60"
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
            className="h-8 w-52 rounded-lg border-gray-300 sm:w-60"
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
            className="h-8 w-52 rounded-lg border-gray-300 sm:w-60"
            errors={errors}
            togglePassword={true}
          />
          <InputField
            label="Image url"
            htmlFor="SignUpProfileImage"
            register={register}
            registerYup="profileImage"
            required={false}
            id="SignUpProfileImage"
            type="url"
            className="h-8 w-52 rounded-lg border-gray-300 sm:w-60"
            errors={errors}
          />
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
