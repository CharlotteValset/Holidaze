import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { ProfileInfo } from "../../components/profile/ProfileInfo";
import { PrimaryButton } from "../../components/ui_elements/Buttons/PrimaryButton";
import { ProfileTabs } from "../../components/profile/ProfileTabs";
import { BecomeVenueManager } from "../../components/profile/BecomeVenueManager";
import { Loader } from "../../components/ui_elements/Loader";

import { useFetch } from "../../hooks/useFetch";

import { API_Url, profile_Url } from "../../js/api/constants";
import { load } from "../../js/storage/load";

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
    content = (
      <div className="mt-96">
        <Loader />
      </div>
    );
  } else if (hasError) {
    content = (
      <div className="mt-96">Error when trying to load the profile</div>
    );
  } else if (!data) {
    content = <div className="mt-96">Profile not found</div>;
  } else {
    content = (
      <>
        <Helmet>
          <title>My profile | Holidaze</title>
          <meta
            name="description"
            content="Your profile page where you can see your bookings and venues."
          />
        </Helmet>
        <section>
          <header className="mt-20 sm:hidden">
            <h1 className="text-center text-2xl">My profile</h1>
          </header>
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
        </section>
      </>
    );
    return <section>{content}</section>;
  }
};
