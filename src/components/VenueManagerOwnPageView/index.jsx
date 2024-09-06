import { Link } from "react-router-dom";
import { PrimaryButton } from "../Buttons/PrimaryButton";

export const VenueManagerOwnPageView = () => {
  return (
    <div className="bg-light-blue w-11/12 h-fit rounded-lg mx-auto xs:mx-0 xs:ml-4 mt-8 mb-5 xs:max-w-xs">
      <h3 className="text-center pt-6 pb-0 text-2xl font-medium">This is your venue!</h3>
      <Link to="/addEditVenue" aria-label="Add/edit venue" className="py-6 flex justify-center">
        <PrimaryButton>Edit venue</PrimaryButton>
      </Link>
    </div>
  );
};
