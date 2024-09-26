import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { PrimaryButton } from "../../components/ui_elements/Buttons/PrimaryButton";
import { TextLink } from "../../components/ui_elements/TextLink";
import { InputField } from "../../components/form_elements/InputField";

import { login as loginUser } from "../../js/api/auth/login.jsx";

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
      const { email, password } = data;

      const response = await loginUser(email, password);

      console.log("Login success! :", response);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);

      let errorMessage = "Login failed. Please try again.";

      if (error.message) {
        errorMessage = error.message;
      }

      setFormError(errorMessage);
    } finally {
      reset();
    }
  };

  return (
    <section className="mx-auto mb-12 mt-[90px] flex w-11/12 max-w-sm flex-col items-center justify-center rounded-xl bg-light-blue sm:mt-[115px]">
      <header className="mb-3 mt-6">
        <h1 className="text-[22px] sm:text-3xl">Please log in</h1>
      </header>
      {formError && <div className="mb-4 text-red-600">{formError}</div>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 max-w-xs">
        <div className="mx-auto my-1 flex w-52 flex-col sm:w-60">
          <InputField
            label="Email"
            htmlFor="LogInEmail"
            register={register}
            registerYup="email"
            required={true}
            id="LogInEmail"
            type="email"
            className="h-9 w-52 rounded-lg border-gray-300 sm:w-60"
            errors={errors}
            autoComplete="email"
          />
        </div>
        <div className="mx-auto my-3 flex w-52 flex-col pb-4 sm:w-60">
          <InputField
            label="Password"
            htmlFor="LogInPassword"
            register={register}
            registerYup="password"
            required={true}
            id="LogInPassword"
            type="password"
            className="h-9 w-52 rounded-lg border-gray-300 sm:w-60"
            errors={errors}
            togglePassword={true}
            autoComplete="current-password"
          />
        </div>
        <div className="flex justify-center pb-6">
          <PrimaryButton type="submit">Log in</PrimaryButton>
        </div>
      </form>
      <footer>
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
      </footer>
    </section>
  );
};
