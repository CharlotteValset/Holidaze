import ProfileImage from "../../assets/images/profileImage.png";
import HeroImage from "../../assets/images/heroImage.png";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";

export const ConfirmedBooking = () => {
  return (
    <>
      <div className="bookings-card bg-light-blue mt-[100px] mb-8 md:mt-[120px] w-11/12 md:max-w-screen-md rounded-lg mx-auto">
        <h1 className="text-center mx-auto text-[22px] sm:text-3xl md:text-4xl py-4 md:py-8">Booking confirmed!</h1>
        <div className="max-w-screen-sm md:w-10/12 mx-auto mb-2 px-2">
          <img src={HeroImage} alt="Luxury Home" className="rounded-xl" />
        </div>
        <div className="max-w-screen-sm mx-auto px-2">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-[22px] md:text-3xl truncate">Modern Beach House</h2>
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
          <div className="flex gap-1 items-center px-2 pb-2">
            <i className="fa-solid fa-location-dot text-sm"></i>
            <p className="text-sm md:text-lg font-light">Bergen, Norway</p>
          </div>
          <div className="px-2 pt-1 pb-3">
            <div className="flex justify-between">
              <p className="md:text-lg font-light">Owner:</p>
              <div className="flex flex-row items-center gap-1">
                <img src={ProfileImage} alt="" className="w-6 h-6 rounded-full" />
                <p className=" md:text-lg">Mr. Pixel</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="md:text-lg font-light">Email:</p>
              <p className=" md:text-lg">mr-pixel@email.com</p>
            </div>
            <div className="flex justify-between">
              <p className="md:text-lg font-light">Check-in date:</p>
              <p className=" md:text-lg">17/08/2024</p>
            </div>
            <div className="flex justify-between">
              <p className="md:text-lg font-light">Check-out date:</p>
              <p className=" md:text-lg">20/08/2024</p>
            </div>
            <div className="flex justify-between">
              <p className="md:text-lg font-light">Days:</p>
              <p className="md:text-lg">3</p>
            </div>
            <div className="flex justify-between">
              <p className="md:text-lg font-light">Guests:</p>
              <p className="md:text-lg">5</p>
            </div>
            <div className="flex justify-between border-b border-light-gray m-3">
              <p className="md:text-xl">Total amount:</p>
              <p className="font-medium md:text-xl">$ 1967</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-6">
        <PrimaryButton>Return to homepage</PrimaryButton>
      </div>
    </>
  );
};
