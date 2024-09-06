import { Link } from "react-router-dom";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { TextLink } from "../TextLink";

export const BookVenueNotLoggedIn = () => {
  return (
    <div className="bg-light-blue w-11/12 h-fit rounded-lg mx-auto xs:mx-0 xs:ml-4 mt-8 mb-5 xs:max-w-xs">
      <h3 className="text-center pt-6 pb-0 text-2xl font-medium w-52 mx-auto">Please log in to book this venue!</h3>
      <div className="py-6 flex justify-center">
        <PrimaryButton>Log in</PrimaryButton>
      </div>
      <Link to="/signUp" aria-label="Sign up" className="w-40 sm:w-52 text-center pb-6 sm:mb-8 mx-auto">
        <TextLink>
          {" "}
          Don’t have an account? <span className="font-medium">Please sign up</span>
        </TextLink>
      </Link>
    </div>
  );
};
