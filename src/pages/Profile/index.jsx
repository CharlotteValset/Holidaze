import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProfileInfo } from "../../components/profile/ProfileInfo";
import { PrimaryButton } from "../../components/ui_elements/Buttons/PrimaryButton";
import { SecondaryButton } from "../../components/ui_elements/Buttons/SecondaryButton";
import { ProfileTabs } from "../../components/profile/ProfileTabs";
import { TextLink } from "../../components/ui_elements/TextLink";
import { Modal } from "../../components/ui_elements/Modal";

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <h1 className="mt-20 text-center text-2xl sm:hidden">My profile</h1>
      <div className="mx-auto flex w-full max-w-screen-lg flex-col sm:mt-16 sm:flex-row sm:justify-around md:mt-20">
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
          <p>Want to become a venue manager?</p>
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
