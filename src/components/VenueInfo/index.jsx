import ProfileImage from "../../assets/images/profileImage.png";

export const VenueInfo = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="sm:w-full sm:mr-3">
        <div className="flex justify-between mt-3 md:mt-1 items-center md:w-80">
          <h2 className="text-[22px] md:text-3xl truncate">Luxury Home</h2>
          <span className="flex flex-row items-center text-dark-blue text-sm md:text-base font-normal px-2 py-0.5 rounded">
            <svg
              className="w-3 h-3 text-dark-blue me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>{" "}
            4.6
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <i className="fa-solid fa-location-dot text-sm md:text-lg"></i>
          <p className="text-sm md:text-lg">Bergen, Norway</p>
        </div>
        <div className="flex mt-3 items-center justify-between md:flex-col sm:items-start sm:gap-5 sm:my-5">
          <div className="flex gap-1">
            <i className="fa-solid fa-user-group text-sm md:text-lg"></i>
            <p className="text-sm md:text-lg">12 guests</p>
          </div>
          <p className="text-lg md:text-xl font-medium">
            $ 975<span className="text-sm md:text-lg font-normal ml-1">per night</span>
          </p>
        </div>
        <div className="flex justify-between my-4 max-w-64 md:max-w-80">
          <div className="flex items-center gap-1 text-xs md:text-base bg-light-blue px-1 py-0.5 rounded">
            <i className="fa-solid fa-wifi"></i>
            <p>Wifi</p>
          </div>
          <div className="flex items-center gap-1 text-xs md:text-base bg-light-blue px-1 py-0.5  rounded">
            <i className="fa-solid fa-dog"></i> <p>Pets</p>
          </div>
          <div className="flex items-center gap-1 text-xs md:text-base bg-light-blue px-1 py-0.5 rounded">
            <i className="fa-solid fa-car"></i>
            <p>Parking</p>
          </div>
          <div className="flex items-center gap-1 text-xs md:text-base bg-light-blue px-1 py-0.5  rounded">
            <i className="fa-solid fa-utensils"></i>
            <p>Breakfast</p>
          </div>
        </div>
        <h3 className="text-lg md:text-xl mt-6">Description</h3>
        <p className="text-base md:text-lg font-light w-72 xs:w-11/12">
          Mr. PaddingBottom and Ms. Borderbottom invites you for a royal stay at the plaza. og så skriver vi litt mer om
          huset her det har mange bad et deilig stort kjøkken osv
        </p>
        <div className="my-4">
          <h3 className="text-lg md:text-xl">Owner</h3>
          <div className="flex flex-row items-center">
            <img src={ProfileImage} className="rounded-full h-10 w-10 ml-1" alt="" />
            <div className="flex flex-col items-start ps-2">
              <p className="font-light sm:text-2xl">Diane Borderbottom</p>
              <p className="text-dark-gray text-sm font-light sm:text-xl">mrsBorderbottom@email.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
