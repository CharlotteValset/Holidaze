import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProfileInfo } from "../../components/profile/ProfileInfo";
import { PrimaryButton } from "../../components/ui_elements/Buttons/PrimaryButton";
import { SecondaryButton } from "../../components/ui_elements/Buttons/SecondaryButton";
import { ProfileTabs } from "../../components/profile/ProfileTabs";
import { TextLink } from "../../components/ui_elements/TextLink";
import { Modal } from "../../components/ui_elements/Modal";
import { useFetch } from "../../hooks/useFetch";
import { API_Url, profile_Url } from "../../js/api/constants";
import { load } from "../../js/storage/load";

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userProfile = load("profile");

  const userId = userProfile?.name;

  const { data, isLoading, hasError } = useFetch(
    `${API_Url}${profile_Url}/${userId}?_bookings=true&_venues=true`,
  );

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
          <Link
            to="/addEditVenue"
            aria-label="Add/edit venue"
            className="mb-6 mr-2 mt-6 flex justify-center sm:my-auto sm:w-full sm:justify-end sm:p-2"
          >
            <PrimaryButton>+ Add new venue</PrimaryButton>
          </Link>
        </div>
        <div className="mb-4 flex justify-center">
          <TextLink onClick={() => setIsModalOpen(true)}>
            <p>
              {!data?.venueManager ? "Want to become a venue Manager?" : ""}
            </p>
          </TextLink>{" "}
          {isModalOpen && (
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="I want to become a venue manager"
              footer={
                <>
                  <SecondaryButton onClick={() => setIsModalOpen(false)}>
                    No
                  </SecondaryButton>
                  <PrimaryButton
                    onClick={() => setIsModalOpen(false)}
                    className="mx-5"
                  >
                    Yes
                  </PrimaryButton>
                </>
              }
            ></Modal>
          )}
        </div>
        <ProfileTabs />
      </>
    );
    return <section>{content}</section>;
  }
};
