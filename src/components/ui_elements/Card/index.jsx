import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../ui_elements/Buttons/PrimaryButton";
import ImagePlaceholder from "../../../assets/images/no_img.png";
import { formatPrice } from "../../../js/utils/formatPrice";

export const Card = ({ data }) => {
  const imageArray = data?.media;

  const imageUrl = imageArray?.[0]?.url ?? ImagePlaceholder;

  const location =
    data.location?.city && data.location?.country
      ? `${data.location.city}, ${data.location.country}`
      : "Location not available";

  const price = data.price || 0;
  const formattedPrice = formatPrice(price);

  return (
    <article className="sm:w-74 mx-auto my-1 w-full rounded-xl bg-light-blue md:w-[300px] xl:w-72">
      <div className="flex flex-col">
        <div className="">
          <img
            className="h-48 w-full rounded-t-xl object-cover xs:h-72 sm:h-48"
            src={imageUrl}
            alt="image"
          />
        </div>
        <div className="m-1 px-2">
          <div className="flex items-center justify-between">
            <h2 className="cursor-text truncate text-xl font-normal tracking-tight text-dark-blue">
              {data.name}
            </h2>
            <div className="flex items-center">
              <span className="flex flex-row items-center rounded px-2 py-0.5 text-xs font-normal text-dark-blue">
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
          </div>
          <div className="flex gap-1">
            <i className="fa-solid fa-location-dot text-xs"></i>
            <p className="text-xs">{location}</p>
          </div>
          <div className="my-2 flex items-center justify-between">
            <p className="text-base font-medium">
              $ {formattedPrice}{" "}
              <span className="text-xs font-normal">per night</span>
            </p>
            <Link to={`/singleVenue/${data.id}`}>
              <PrimaryButton>View more</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
