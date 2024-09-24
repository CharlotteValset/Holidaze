import ProfileImagePlaceholder from "../../../assets/images/no_ProfileImg.png";

import { formatPrice } from "../../../js/utils/formatPrice";
import { handleImageErrors } from "../../../js/utils/handleImageErrors";

export const VenueInfo = ({ data }) => {
  const venueTitle = data.name ? data?.name : "Venue title not available";

  const location =
    data.location?.city && data.location?.country
      ? `${data.location.city}, ${data.location.country}`
      : "Location not available";

  const maxGuests = data.maxGuests || "Max guests not available";

  const ownerAvatarUrl = data.owner?.avatar?.url || ProfileImagePlaceholder;
  const ownerName = data.owner?.name || "Owner name not available";
  const ownerEmail = data.owner?.email || "Owner email not available";
  const venueDescription = data.description
    ? data?.description
    : "No description available";
  const price = data.price || 0;
  const formattedPrice = formatPrice(price);

  return (
    <div className="mx-auto w-11/12">
      <div className="sm:mr-3 sm:w-full">
        <div className="mt-3 flex justify-between align-middle md:mt-1 lg:gap-3">
          <h2 className="text-lg sm:text-3xl md:text-3xl">{venueTitle}</h2>
          <span className="flex flex-row items-baseline rounded px-2 py-0.5 align-top text-sm font-normal text-dark-blue md:text-base">
            <svg
              className="me-2 h-3 w-3 text-dark-blue"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>{" "}
            {data.rating}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-location-dot text-sm md:text-base"></i>
          <p className="text-base md:text-lg">{location}</p>
        </div>
        <div className="mt-3 flex items-center justify-between sm:my-5 sm:items-start sm:gap-5 md:flex-col">
          <div className="flex gap-1">
            <i className="fa-solid fa-user-group text-sm md:text-base"></i>
            <p className="text-base md:text-lg">{maxGuests} guests</p>
          </div>
          <p className="text-lg font-medium md:text-2xl">
            $ {formattedPrice}
            <span className="ml-1 text-base font-normal md:text-lg">
              per night
            </span>
          </p>
        </div>
        <div className="my-4 flex max-w-64 flex-wrap gap-2 md:max-w-80">
          {data.meta?.wifi && (
            <div className="flex items-center gap-1 rounded bg-light-blue px-1 py-0.5 text-xs md:text-base">
              <i className="fa-solid fa-wifi"></i>
              <p>Wifi</p>
            </div>
          )}
          {data.meta?.pets && (
            <div className="flex items-center gap-1 rounded bg-light-blue px-1 py-0.5 text-xs md:text-base">
              <i className="fa-solid fa-dog"></i>
              <p>Pets</p>
            </div>
          )}
          {data.meta?.parking && (
            <div className="flex items-center gap-1 rounded bg-light-blue px-1 py-0.5 text-xs md:text-base">
              <i className="fa-solid fa-car"></i>
              <p>Parking</p>
            </div>
          )}
          {data.meta?.breakfast && (
            <div className="flex items-center gap-1 rounded bg-light-blue px-1 py-0.5 text-xs md:text-base">
              <i className="fa-solid fa-utensils"></i>
              <p>Breakfast</p>
            </div>
          )}
        </div>
        <h3 className="mb-1 mt-6 text-xl md:text-xl">Description</h3>
        <p className="w-64 ps-0.5 text-lg font-light xs:w-11/12 md:text-lg">
          {venueDescription}
        </p>
        <div className="my-4">
          <h3 className="mb-1 text-xl md:text-xl">Owner</h3>
          <div className="flex flex-row items-center">
            <img
              src={ownerAvatarUrl}
              className="mr-1 h-14 w-14 rounded-full object-cover sm:mr-2 sm:h-16 sm:w-16"
              alt="Owners Profile Image"
              onError={(e) => handleImageErrors(e, ProfileImagePlaceholder)}
            />
            <div className="flex flex-col items-start ps-2">
              <p className="text-lg font-light sm:text-2xl">{ownerName}</p>
              <p className="text-base font-light text-dark-gray sm:text-xl">
                {ownerEmail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
