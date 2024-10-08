import { Link } from "react-router-dom";

import { PrimaryButton } from "../../ui_elements/Buttons/PrimaryButton";

export const VenueManagerOwnPageView = ({ venue }) => {
  return (
    <div className="mx-auto mb-5 mt-8 h-fit w-11/12 rounded-lg bg-light-blue xs:mx-0 xs:ml-4 xs:max-w-xs">
      <h2 className="pb-0 pt-6 text-center text-2xl font-medium">
        This is your venue!
      </h2>
      <Link
        to="/addEditVenue"
        state={{ venue, isEdit: true }}
        aria-label="Add/edit venue"
        className="flex justify-center py-6"
      >
        <PrimaryButton>Edit venue</PrimaryButton>
      </Link>
    </div>
  );
};
