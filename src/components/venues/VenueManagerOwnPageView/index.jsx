import { Link } from "react-router-dom";
import { PrimaryButton } from "../../ui_elements/Buttons/PrimaryButton";

export const VenueManagerOwnPageView = () => {
  return (
    <div className="mx-auto mb-5 mt-8 h-fit w-11/12 rounded-lg bg-light-blue xs:mx-0 xs:ml-4 xs:max-w-xs">
      <h3 className="pb-0 pt-6 text-center text-2xl font-medium">
        This is your venue!
      </h3>
      <Link
        to="/addEditVenue"
        aria-label="Add/edit venue"
        className="flex justify-center py-6"
      >
        <PrimaryButton>Edit venue</PrimaryButton>
      </Link>
    </div>
  );
};
