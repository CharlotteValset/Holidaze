import HeroImage from "../../assets/images/heroImage.png";
import { PrimaryButton } from "../Buttons/PrimaryButton";

export const Card = () => {
  return (
    <article className="my-1 w-11/12 mx-auto sm:w-72 rounded-xl bg-light-blue">
      <div className="flex flex-col">
        <div className="">
          <img className="w-full max-h-72 object-cover rounded-t-xl" src={HeroImage} alt="image" />
        </div>
        <div className="px-2 m-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-normal tracking-tight cursor-text truncate text-dark-blue">Luxury Home</h2>
            <div className="flex items-center">
              <span className="flex flex-row items-center text-dark-blue text-xs font-normal px-2 py-0.5 rounded">
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
          </div>
          <div className="flex gap-1">
            <i className="fa-solid fa-location-dot text-xs"></i>
            <p className="text-xs">Bergen, Norway</p>
          </div>
          <div className="flex justify-between items-center my-2">
            <p className="text-base font-medium">
              $ 975 <span className="text-xs font-normal">per night</span>
            </p>
            <PrimaryButton>View more</PrimaryButton>
          </div>
        </div>
      </div>
    </article>
  );
};
