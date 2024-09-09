import { Link } from "react-router-dom";
import ProfileImage from "../../assets/images/profileImage.png";
import HeroImage from "../../assets/images/heroImage.png";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";

export const ConfirmedBooking = () => {
  return (
    <>
      <div className="bookings-card mx-auto mb-8 mt-[100px] w-11/12 rounded-lg bg-light-blue md:mt-[120px] md:max-w-screen-md">
        <h1 className="mx-auto py-4 text-center text-[22px] sm:text-3xl md:py-8 md:text-4xl">
          Booking confirmed!
        </h1>
        <div className="mx-auto mb-2 max-w-screen-sm px-2 md:w-10/12">
          <img src={HeroImage} alt="Luxury Home" className="rounded-xl" />
        </div>
        <div className="mx-auto max-w-screen-sm px-2">
          <div className="flex items-center justify-between px-2">
            <h2 className="truncate text-[22px] md:text-3xl">
              Modern Beach House
            </h2>
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
          <div className="flex items-center gap-1 px-2 pb-2">
            <i className="fa-solid fa-location-dot text-sm"></i>
            <p className="text-sm font-light md:text-lg">Bergen, Norway</p>
          </div>
          <div className="px-2 pb-3 pt-1">
            <div className="flex justify-between">
              <p className="font-light md:text-lg">Owner:</p>
              <div className="flex flex-row items-center gap-1">
                <img
                  src={ProfileImage}
                  alt=""
                  className="h-6 w-6 rounded-full"
                />
                <p className="md:text-lg">Mr. Pixel</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="font-light md:text-lg">Email:</p>
              <p className="md:text-lg">mr-pixel@email.com</p>
            </div>
            <div className="flex justify-between">
              <p className="font-light md:text-lg">Check-in date:</p>
              <p className="md:text-lg">17/08/2024</p>
            </div>
            <div className="flex justify-between">
              <p className="font-light md:text-lg">Check-out date:</p>
              <p className="md:text-lg">20/08/2024</p>
            </div>
            <div className="flex justify-between">
              <p className="font-light md:text-lg">Days:</p>
              <p className="md:text-lg">3</p>
            </div>
            <div className="flex justify-between">
              <p className="font-light md:text-lg">Guests:</p>
              <p className="md:text-lg">5</p>
            </div>
            <div className="m-3 flex justify-between border-b border-light-gray">
              <p className="md:text-xl">Total amount:</p>
              <p className="font-medium md:text-xl">$ 1967</p>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/"
        aria-label="home"
        className="mb-6 flex flex-col items-center"
      >
        <PrimaryButton>Return to homepage</PrimaryButton>
      </Link>
    </>
  );
};
