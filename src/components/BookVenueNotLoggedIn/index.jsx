import { Link } from "react-router-dom";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { TextLink } from "../TextLink";

export const BookVenueNotLoggedIn = () => {
  return (
    <div className="mx-auto mb-5 mt-8 h-fit w-11/12 rounded-lg bg-light-blue xs:mx-0 xs:ml-4 xs:max-w-xs">
      <h3 className="mx-auto w-52 pb-0 pt-6 text-center text-2xl font-medium">
        Please log in to book this venue!
      </h3>
      <div className="flex justify-center py-6">
        <PrimaryButton>Log in</PrimaryButton>
      </div>
      <Link
        to="/signUp"
        aria-label="Sign up"
        className="mx-auto w-40 pb-6 text-center sm:mb-8 sm:w-52"
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
