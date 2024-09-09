import ProfileImage from "../../assets/images/profileImage.png";

export const VenueInfo = () => {
  return (
    <div className="mx-auto w-11/12">
      <div className="sm:mr-3 sm:w-full">
        <div className="mt-3 flex items-center justify-between md:mt-1 md:w-80">
          <h2 className="truncate text-[22px] md:text-3xl">Luxury Home</h2>
          <span className="flex flex-row items-center rounded px-2 py-0.5 text-sm font-normal text-dark-blue md:text-base">
            <svg
              className="me-2 h-3 w-3 text-dark-blue"
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
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-location-dot text-sm md:text-lg"></i>
          <p className="text-sm md:text-lg">Bergen, Norway</p>
        </div>
        <div className="mt-3 flex items-center justify-between sm:my-5 sm:items-start sm:gap-5 md:flex-col">
          <div className="flex gap-1">
            <i className="fa-solid fa-user-group text-sm md:text-lg"></i>
            <p className="text-sm md:text-lg">12 guests</p>
          </div>
          <p className="text-lg font-medium md:text-xl">
            $ 975
            <span className="ml-1 text-sm font-normal md:text-lg">
              per night
            </span>
          </p>
        </div>
        <div className="my-4 flex max-w-64 justify-between md:max-w-80">
          <div className="flex items-center gap-1 rounded bg-light-blue px-1 py-0.5 text-xs md:text-base">
            <i className="fa-solid fa-wifi"></i>
            <p>Wifi</p>
          </div>
          <div className="flex items-center gap-1 rounded bg-light-blue px-1 py-0.5 text-xs md:text-base">
            <i className="fa-solid fa-dog"></i> <p>Pets</p>
          </div>
          <div className="flex items-center gap-1 rounded bg-light-blue px-1 py-0.5 text-xs md:text-base">
            <i className="fa-solid fa-car"></i>
            <p>Parking</p>
          </div>
          <div className="flex items-center gap-1 rounded bg-light-blue px-1 py-0.5 text-xs md:text-base">
            <i className="fa-solid fa-utensils"></i>
            <p>Breakfast</p>
          </div>
        </div>
        <h3 className="mt-6 text-lg md:text-xl">Description</h3>
        <p className="w-72 text-base font-light xs:w-11/12 md:text-lg">
          Mr. PaddingBottom and Ms. Borderbottom invites you for a royal stay at
          the plaza. og så skriver vi litt mer om huset her det har mange bad et
          deilig stort kjøkken osv
        </p>
        <div className="my-4">
          <h3 className="text-lg md:text-xl">Owner</h3>
          <div className="flex flex-row items-center">
            <img
              src={ProfileImage}
              className="ml-1 h-10 w-10 rounded-full"
              alt=""
            />
            <div className="flex flex-col items-start ps-2">
              <p className="font-light sm:text-2xl">Diane Borderbottom</p>
              <p className="text-sm font-light text-dark-gray sm:text-xl">
                mrsBorderbottom@email.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
