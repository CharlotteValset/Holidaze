import React, { useState } from "react";
import ProfileImage from "../../assets/images/profileImage.png";
import { Modal } from "../Modal";
import { PrimaryButton } from "../Buttons/PrimaryButton";

export const ProfileInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <article className="my-4 sm:flex sm:flex-row-reverse sm:mt-8 sm:ml-4 sm:justify-end sm:w-full">
      <div className="flex flex-col items-center mb-3 sm:items-start sm:justify-center sm:ml-4 sm:w-max mx-auto">
        <p className="font-light sm:text-2xl">Diane Borderbottom</p>
        <p className="text-dark-gray text-sm font-light sm:text-xl">Venue manager</p>
      </div>
      <div className="flex flex-col items-center sm:w-36">
        <img src={ProfileImage} alt="Profile Image" className="rounded-full w-20 h-20 mx-auto sm:w-32 sm:h-32" />
        <div className="flex gap-1 items-center cursor-pointer sm:justify-center">
          <i className="fa-regular fa-pen-to-square text-xs"></i>
          <button onClick={() => setIsModalOpen(true)} className="text-xs sm:text-sm font-light hover:underline">
            Update image
          </button>
        </div>

        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Edit profile image"
            footer={
              <PrimaryButton onClick={() => setIsModalOpen(false)} className="mx-5">
                Save
              </PrimaryButton>
            }
          >
            <img src={ProfileImage} alt="Profile" className="rounded-full w-40 h-40 mx-auto" />
            <div className="flex flex-col mx-auto w-56 my-6">
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
