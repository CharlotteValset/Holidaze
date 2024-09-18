import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileInfo } from "../../components/profile/ProfileInfo";
import { PrimaryButton } from "../../components/ui_elements/Buttons/PrimaryButton";
import { ProfileTabs } from "../../components/profile/ProfileTabs";
import { useFetch } from "../../hooks/useFetch";
import { API_Url, profile_Url } from "../../js/api/constants";
import { load } from "../../js/storage/load";
import { BecomeVenueManager } from "../../components/profile/BecomeVenueManager";

export const Profile = () => {
  const [isVenueManager, setIsVenueManager] = useState(false);

  const userProfile = load("profile");
  const userId = userProfile?.name;

  const { data, isLoading, hasError } = useFetch(
    `${API_Url}${profile_Url}/${userId}?_bookings=true&_venues=true`,
  );

  useEffect(() => {
    if (data && data.venueManager !== undefined) {
      setIsVenueManager(data.venueManager);
    }
  }, [data]);

  let content;

  if (isLoading) {
    content = <div className="mt-96">Loading...</div>;
  } else if (hasError) {
    content = (
      <div className="mt-96">Error when trying to load the profile</div>
    );
  } else if (!data) {
    content = <div className="mt-96">Profile not found</div>;
  } else {
    content = (
      <>
        <h1 className="mt-20 text-center text-2xl sm:hidden">My profile</h1>
        <div className="mx-auto flex w-full max-w-screen-lg flex-col sm:mt-16 sm:flex-row sm:justify-around md:mt-20">
          <ProfileInfo data={data} key={data} />
          {isVenueManager && (
            <Link
              to="/addEditVenue"
              aria-label="Add/edit venue"
              className="mb-6 mr-2 mt-6 flex justify-center sm:my-auto sm:w-full sm:justify-end sm:p-2"
            >
              <PrimaryButton>+ Add new venue</PrimaryButton>
            </Link>
          )}
        </div>
        <BecomeVenueManager />
        <ProfileTabs />
      </>
    );
    return <section>{content}</section>;
  }
};
