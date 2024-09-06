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
      <h1 className="mt-20 text-2xl text-center sm:hidden">My profile</h1>
      <div className="sm:flex sm:justify-between sm:mx-auto sm:max-w-screen-lg sm:mb-4 sm:mt-12 md:mt-20">
        <ProfileInfo />
        <Link
          to="/addEditVenue"
          aria-label="Add/edit venue"
          className="flex justify-center mt-6 mb-6 mr-2 sm:w-full sm:my-auto sm:justify-end sm:p-2"
        >
          <PrimaryButton>+ Add new venue</PrimaryButton>
        </Link>
      </div>
      <div className="flex justify-center mb-4">
        <TextLink onClick={() => setIsModalOpen(true)}>Want to become a venue manager?</TextLink>{" "}
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="I want to become a venue manager"
            footer={
              <>
                <SecondaryButton onClick={() => setIsModalOpen(false)}>No</SecondaryButton>
                <PrimaryButton onClick={() => setIsModalOpen(false)} className="mx-5">
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
