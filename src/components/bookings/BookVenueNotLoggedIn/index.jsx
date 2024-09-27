import { Link } from "react-router-dom";

import { PrimaryButton } from "../../ui_elements/Buttons/PrimaryButton";
import { TextLink } from "../../ui_elements/TextLink";

export const BookVenueNotLoggedIn = () => {
  return (
    <div className="">
      <h2 className="mx-auto w-52 pb-0 pt-6 text-center text-2xl font-medium">
        Please log in to book this venue!
      </h2>
      <Link
        to="/logIn"
        aria-label="Sign up"
        className="flex justify-center py-6"
      >
        <PrimaryButton>Log in</PrimaryButton>
      </Link>
      <Link
        to="/signUp"
        aria-label="Sign up"
        className="mx-auto flex w-40 pb-6 text-center sm:mb-8 sm:w-52"
      >
        <TextLink>
          {" "}
          Don’t have an account?{" "}
          <span className="font-medium">Please sign up</span>
        </TextLink>
      </Link>
    </div>
  );
};
