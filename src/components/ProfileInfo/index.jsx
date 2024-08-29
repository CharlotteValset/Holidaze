import ProfileImage from "../../assets/images/profileImage.png";

export const ProfileInfo = () => {
  return (
    <article className="m-auto p-3 flex justify-center md:justify-start w-11/12">
      <div className=" flex-col justify-center">
        <img src={ProfileImage} alt="Profile Image" className="rounded-full w-16 h-16 mx-auto" />
        <div className="flex gap-1 items-center cursor-pointer">
          <i className="fa-regular fa-pen-to-square text-xs"></i>
          <p className="text-xs font-light hover:underline ">Update image</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="font-light">Diane Borderbottom</p>
        <p className="text-dark-gray text-sm font-light">Venue manager</p>
      </div>
    </article>
  );
};
