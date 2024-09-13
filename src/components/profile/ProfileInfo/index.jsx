import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import noAvatarImg from "../../../assets/images/no_ProfileImg.png";
import { Modal } from "../../ui_elements/Modal";
import { PrimaryButton } from "../../ui_elements/Buttons/PrimaryButton";
import { InputField } from "../../form_elements/InputField";

const editProfileImageSchema = yup.object({
  editImg: yup.string().url("Invalid URL"),
});

export const ProfileInfo = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(editProfileImageSchema) });

  const onSubmit = (data) => {
    console.log("object");
    console.log(data);
    reset();
  };

  const userName = data?.name || "Profile name not available";
  const isVenueManager = data.venueManager ? "Venue Manager" : "";
  const avatarImg = data?.avatar?.url || noAvatarImg;

  return (
    <article className="my-4 sm:ml-4 sm:mt-8 sm:flex sm:w-full sm:flex-row-reverse sm:justify-end">
      <div className="mx-auto mb-3 flex flex-col items-center sm:ml-4 sm:w-max sm:items-start sm:justify-center">
        <p className="font-light sm:text-2xl">{userName}</p>
        <p className="text-sm font-light text-dark-gray sm:text-xl">
          {isVenueManager}
        </p>
      </div>
      <div className="flex flex-col items-center sm:w-36">
        <img
          src={avatarImg}
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
          >
            <img
              src={avatarImg}
              alt="Profile"
              className="mx-auto h-40 w-40 rounded-full"
            />
            <FormProvider>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center"
              >
                <InputField
                  label="Image url"
                  htmlFor="editProfileImg"
                  register={register}
                  registerYup="editImg"
                  required={false}
                  id="editProfileImg"
                  type="url"
                  className="h-8 w-full rounded-lg border-gray-300"
                  errors={errors}
                />
                <PrimaryButton
                  type="submit"
                  onClick={() => setIsModalOpen(false)}
                  className="mx-auto text-center"
                >
                  Save
                </PrimaryButton>
              </form>
            </FormProvider>
          </Modal>
        )}
      </div>
    </article>
  );
};
