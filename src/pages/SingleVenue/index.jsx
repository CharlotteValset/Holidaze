import { Link } from "react-router-dom";
import { Gallery } from "../../components/Gallery";
import { VenueInfo } from "../../components/VenueInfo";
import { BookVenue } from "../../components/BookVenue";
import { VenueManagerOwnPageView } from "../../components/VenueManagerOwnPageView";
import { BookVenueNotLoggedIn } from "../../components/BookVenueNotLoggedIn";

export const SingleVenue = () => {
  return (
    <section className="mt-[90px] lg:mt-[110px] max-w-screen-lg mx-auto">
      <Link
        to="/"
        aria-label="Home"
        className="flex flex-row mt-20 ms-6 md:ms-10 items-center gap-1 hover:text-soft-pink"
      >
        <i className="fa-solid fa-chevron-left"></i>
        <p className="hover:underline cursor-pointer sm:text-lg">Back</p>
      </Link>
      <div>
        <Gallery />
      </div>
      <div className="flex flex-col md:flex-row md:max-w-screen-lg md:justify-between md:mx-10">
        <VenueInfo />
        <BookVenue />
      </div>
      <VenueManagerOwnPageView />
      <BookVenueNotLoggedIn />
    </section>
  );
};
