import { ProfileInfo } from "../../components/ProfileInfo";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { ProfileTabs } from "../../components/ProfileTabs";

export const Profile = () => {
  return (
    <>
      <h1 className="mt-20 md:mt-28 text-2xl text-center">My profile</h1>
      <div className="md:flex md:justify-between md:mx-auto md:max-w-4xl">
        <ProfileInfo />
        <div className="flex justify-center mt-3 mb-6">
          <PrimaryButton>+ Add new venue</PrimaryButton>
        </div>
      </div>
      <ProfileTabs />
    </>
  );
};
