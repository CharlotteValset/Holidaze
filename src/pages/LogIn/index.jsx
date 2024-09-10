import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PrimaryButton } from "../../components/ui_elements/Buttons/PrimaryButton";
import { TextLink } from "../../components/ui_elements/TextLink";
import { InputField } from "../../components/form_elements/InputField";

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
          <InputField
            label="Email"
            htmlFor="LogInEmail"
            register={register}
            registerYup="email"
            required={true}
            id="LogInEmail"
            type="email"
            className="h-8 w-52 rounded-lg border-gray-300 sm:w-60"
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
            className="h-8 w-52 rounded-lg border-gray-300 sm:w-60"
            errors={errors}
            togglePassword={true}
            autoComplete="current-password"
          />
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
