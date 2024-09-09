import { Link } from "react-router-dom";
import { Gallery } from "../../components/Gallery";
import { VenueInfo } from "../../components/VenueInfo";
import { BookVenue } from "../../components/BookVenue";
import { VenueManagerOwnPageView } from "../../components/VenueManagerOwnPageView";
import { BookVenueNotLoggedIn } from "../../components/BookVenueNotLoggedIn";

export const SingleVenue = () => {
  return (
    <section className="mx-auto mt-[10px] max-w-screen-lg md:mt-[40px] lg:mt-[30px]">
      <Link
        to="/"
        aria-label="Home"
        className="ms-6 mt-20 flex flex-row items-center gap-1 hover:text-soft-pink md:ms-10"
      >
        <i className="fa-solid fa-chevron-left"></i>
        <p className="cursor-pointer hover:underline sm:text-lg">Back</p>
      </Link>
      <div>
        <Gallery />
      </div>
      <div className="flex flex-col md:mx-10 md:max-w-screen-lg md:flex-row md:justify-between">
        <VenueInfo />
        <BookVenue />
      </div>
      <VenueManagerOwnPageView />
      <BookVenueNotLoggedIn />
    </section>
  );
};
