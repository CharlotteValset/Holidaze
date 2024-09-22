import React, { useEffect, useState } from "react";
import { SecondaryButton } from "../../../components/ui_elements/Buttons/SecondaryButton";
import { PrimaryButton } from "../../../components/ui_elements/Buttons/PrimaryButton";
import { Modal } from "../../../components/ui_elements/Modal";
import { TextLink } from "../../../components/ui_elements/TextLink";
import { usePut } from "../../../hooks/usePut";
import { useFetch } from "../../../hooks/useFetch";
import { load } from "../../../js/storage/load";
import { API_Url, profile_Url } from "../../../js/api/constants";
import { Loader } from "../../ui_elements/Loader";

export const BecomeVenueManager = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVenueManager, setIsVenueManager] = useState(false);

  const userProfile = load("profile");
  const userId = userProfile?.name;

  const {
    data: profileData,
    isLoading: isProfileLoading,
    hasError: profileError,
  } = useFetch(`${API_Url}${profile_Url}/${userId}`);

  const { putData, response, isLoading, hasError } = usePut(
    `${API_Url}${profile_Url}/${userId}`,
  );

  useEffect(() => {
    if (profileData && profileData.venueManager !== undefined) {
      setIsVenueManager(profileData.venueManager);
    }
  }, [profileData]);

  const handleBecomeManager = async () => {
    await putData({ venueManager: true });

    if (!putError) {
      setIsVenueManager(true);
    }

    setIsModalOpen(false);
  };

  if (isProfileLoading) {
    return <Loader />;
  }

  if (profileError) {
    return (
      <p className="text-red-500">
        Failed to load profile. Please try again later.
      </p>
    );
  }

  return (
    <div className="mb-4 flex justify-center">
      {!isVenueManager && (
        <TextLink onClick={() => setIsModalOpen(true)}>
          <p>Want to become a venue Manager?</p>
        </TextLink>
      )}
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
                onClick={handleBecomeManager}
                className="mx-5"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Yes"}
              </PrimaryButton>
            </>
          }
        ></Modal>
      )}
      {hasError && (
        <p className="text-red-500">
          Failed to update profile. Please try again.
        </p>
      )}
    </div>
  );
};
