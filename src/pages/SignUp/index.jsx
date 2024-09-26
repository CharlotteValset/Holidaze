
import { Link } from "react-router-dom";
import React from "react";

import { TextLink } from "../../components/ui_elements/TextLink";

import { SignUpForm } from "../../components/forms/SignUpForm";

export const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up | Holidaze</title>
        <meta
          name="description"
          content="Sign up for a new account on Holidaze."
        />
      </Helmet>
    <section className="mx-auto mb-12 mt-[90px] flex w-11/12 max-w-sm flex-col items-center justify-center rounded-xl bg-light-blue sm:mt-[115px]">
      <header className="mb-3 mt-6">
        <h1 className="text-[22px] sm:text-3xl">Sign up here</h1>
      </header>
      <SignUpForm />
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
    </section>
</>
  );
};
