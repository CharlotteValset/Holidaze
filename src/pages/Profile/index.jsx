import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProfileInfo } from "../../components/ProfileInfo";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { SecondaryButton } from "../../components/Buttons/SecondaryButton";
import { ProfileTabs } from "../../components/ProfileTabs";
import { TextLink } from "../../components/TextLink";
import { Modal } from "../../components/Modal";

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <h1 className="mt-20 text-center text-2xl sm:hidden">My profile</h1>
      <div className="sm:mx-auto sm:mb-4 sm:mt-12 sm:flex sm:max-w-screen-lg sm:justify-between md:mt-20">
        <ProfileInfo />
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
          Want to become a venue manager?
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
};
