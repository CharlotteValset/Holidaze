import { Link, useLocation } from "react-router-dom";
import ProfileImage from "../../assets/images/no_ProfileImg.png";
import placeholderImage from "../../assets/images/no_img.png";
import { PrimaryButton } from "../../components/ui_elements/Buttons/PrimaryButton";
import { formatPrice } from "../../js/utils/formatPrice";

export const ConfirmedBooking = () => {
  const location = useLocation();
  const { payload, venue, totalPrice } = location.state || {}; // Destructure payload and venue data

  if (!payload || !venue || !totalPrice) {
    return <p>Booking details are missing. Please try again.</p>;
  }

  const formattedPrice = formatPrice(totalPrice);

  return (
    <>
      <div className="bookings-card mx-auto mb-8 mt-[100px] w-11/12 rounded-lg bg-light-blue md:mt-[120px] md:max-w-screen-md">
        <h1 className="mx-auto py-4 text-center text-[22px] sm:text-3xl md:py-8 md:text-4xl">
          Booking confirmed!
        </h1>
        <div className="mx-auto mb-2 max-w-screen-sm px-2 md:w-10/12">
          <img
            src={venue.media[0].url || placeholderImage}
            alt="Luxury Home"
            className="rounded-xl"
          />
        </div>
        <div className="mx-auto max-w-screen-sm px-2">
          <div className="flex items-center justify-between px-2">
            <h2 className="truncate text-[22px] md:text-3xl">{venue.name}</h2>
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
              {venue.rating}
            </span>
          </div>
          <div className="flex items-center gap-1 px-2 pb-2">
            <i className="fa-solid fa-location-dot text-sm"></i>
            <p className="text-sm font-light md:text-lg">
              {venue.location.city}, {venue.location.country}
            </p>
          </div>
          <div className="px-2 pb-3 pt-1">
            <div className="flex justify-between">
              <p className="font-light md:text-lg">Owner:</p>
              <div className="flex flex-row items-center gap-1">
                <img
                  src={venue.owner.media?.url || ProfileImage}
                  alt=""
                  className="h-6 w-6 rounded-full object-cover"
                />
                <p className="md:text-lg">{venue.owner.name}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="font-light md:text-lg">Email:</p>
              <p className="truncate md:text-lg">{venue.owner.email}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-light md:text-lg">Check-in date:</p>
              <p className="md:text-lg">{payload.dateFrom}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-light md:text-lg">Check-out date:</p>
              <p className="md:text-lg">{payload.dateTo}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-light md:text-lg">Nights:</p>
              <p className="md:text-lg">
                {Math.ceil(
                  (new Date(payload.dateTo).getTime() -
                    new Date(payload.dateFrom).getTime()) /
                    (1000 * 60 * 60 * 24),
                )}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-light md:text-lg">Guests:</p>
              <p className="md:text-lg">{payload.guests}</p>
            </div>
            <div className="m-3 flex justify-between border-b border-light-gray">
              <p className="md:text-xl">Total amount:</p>
              <p className="font-medium md:text-xl">${formattedPrice}</p>
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
