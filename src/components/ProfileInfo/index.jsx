import React, { useState } from "react";
import ProfileImage from "../../assets/images/profileImage.png";
import { Modal } from "../Modal";
import { PrimaryButton } from "../Buttons/PrimaryButton";

export const ProfileInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <article className="my-4 sm:ml-4 sm:mt-8 sm:flex sm:w-full sm:flex-row-reverse sm:justify-end">
      <div className="mx-auto mb-3 flex flex-col items-center sm:ml-4 sm:w-max sm:items-start sm:justify-center">
        <p className="font-light sm:text-2xl">Diane Borderbottom</p>
        <p className="text-sm font-light text-dark-gray sm:text-xl">
          Venue manager
        </p>
      </div>
      <div className="flex flex-col items-center sm:w-36">
        <img
          src={ProfileImage}
          alt="Profile Image"
          className="mx-auto h-20 w-20 rounded-full sm:h-32 sm:w-32"
        />
        <div className="flex cursor-pointer items-center gap-1 sm:justify-center">
          <i className="fa-regular fa-pen-to-square text-xs"></i>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-xs font-light hover:underline sm:text-sm"
          >
            Update image
          </button>
        </div>

        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Edit profile image"
            footer={
              <PrimaryButton
                onClick={() => setIsModalOpen(false)}
                className="mx-5"
              >
                Save
              </PrimaryButton>
            }
          >
            <img
              src={ProfileImage}
              alt="Profile"
              className="mx-auto h-40 w-40 rounded-full"
            />
            <div className="mx-auto my-6 flex w-56 flex-col">
              <label htmlFor="EditProfileImg" className="ps-1">
                Image Url
              </label>
              <input type="text" id="EditProfileImg" className="rounded-lg" />
            </div>
          </Modal>
        )}
      </div>
    </article>
  );
};
