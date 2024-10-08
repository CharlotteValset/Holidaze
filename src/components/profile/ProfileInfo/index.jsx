import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ProfileImagePlaceholder from "../../../assets/images/no_ProfileImg.png";

import { usePut } from "../../../hooks/usePut";

import { Modal } from "../../ui_elements/Modal";
import { PrimaryButton } from "../../ui_elements/Buttons/PrimaryButton";
import { SecondaryButton } from "../../ui_elements/Buttons/SecondaryButton";
import { InputField } from "../../form_elements/InputField";

import { API_Url, profile_Url } from "../../../js/api/constants";
import { load } from "../../../js/storage/load";

import { handleImageErrors } from "../../../js/utils/handleImageErrors";

const editProfileImageSchema = yup.object({
  editImg: yup.string().url("Invalid URL").required("Image URL is required"),
});

export const ProfileInfo = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userProfile = load("profile");
  const userId = userProfile?.name;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(editProfileImageSchema) });

  const { putData, response, hasError } = usePut(
    `${API_Url}${profile_Url}/${userId}`,
  );

  const handleEditProfileImage = async (formData) => {
    try {
      const updateData = {
        avatar: {
          url: formData.editImg,
          alt: "Profile image",
        },
      };

      await putData(updateData);

      if (!hasError) {
        setIsModalOpen(false);
        window.location.reload();
      } else {
        console.error("Error updating profile image:", response);
      }
    } catch (error) {
      console.error("Unexpected error during API call:", error);
    }
  };

  const onSubmit = (data) => {
    handleEditProfileImage(data);
    reset();
  };

  const userName = data?.name || "Profile name not available";
  const isVenueManager = data.venueManager ? "Venue Manager" : "";
  const avatarImg = data?.avatar?.url || ProfileImagePlaceholder;

  return (
    <article className="my-4 sm:ml-4 sm:mt-8 sm:flex sm:w-full sm:flex-row-reverse sm:justify-end">
      <div className="mx-auto mb-3 flex flex-col items-center sm:ml-4 sm:w-max sm:items-start sm:justify-center">
        <p className="text-lg font-light sm:text-2xl">{userName}</p>
        <p className="text-sm font-light text-dark-gray sm:text-xl">
          {isVenueManager}
        </p>
      </div>
      <div className="flex flex-col items-center sm:w-36">
        <img
          src={avatarImg}
          alt="Profile Image"
          onError={(e) => handleImageErrors(e, ProfileImagePlaceholder)}
          className="mx-auto h-20 w-20 rounded-full object-cover sm:h-32 sm:w-32"
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
              <>
                <SecondaryButton onClick={() => setIsModalOpen(false)}>
                  Cancel
                </SecondaryButton>
                <PrimaryButton type="button" onClick={handleSubmit(onSubmit)}>
                  Save
                </PrimaryButton>
              </>
            }
          >
            <img
              src={avatarImg}
              alt="Profile Image"
              className="mx-auto h-40 w-40 rounded-full object-cover"
              onError={(e) => handleImageErrors(e, ProfileImagePlaceholder)}
            />
            <form
              id="editProfileForm"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center pt-4"
            >
              <InputField
                label="Image url"
                htmlFor="editProfileImg"
                register={register}
                registerYup="editImg"
                required={false}
                id="editProfileImg"
                type="url"
                className="h-9 w-full rounded-lg border-gray-300"
                errors={errors}
              />
            </form>
          </Modal>
        )}
      </div>
    </article>
  );
};
