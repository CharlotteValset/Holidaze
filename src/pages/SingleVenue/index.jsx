import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { API_Url, all_Venues } from "../../js/api/constants";
import { Gallery } from "../../components/ui_elements/Gallery";
import { VenueInfo } from "../../components/venues/VenueInfo";
import { BookVenue } from "../../components/forms/BookVenue";
import { VenueManagerOwnPageView } from "../../components/venues/VenueManagerOwnPageView";
import { load } from "../../js/storage/load";

export const SingleVenue = () => {
  let { id } = useParams();
  const {
    data: singleVenue,
    isLoading,
    hasError,
  } = useFetch(`${API_Url}${all_Venues}/${id}?_owner=true`);

  const userProfile = load("profile");
  const userEmail = userProfile?.email;
  const venueOwner = singleVenue?.owner?.email;

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (hasError) {
    content = <div>Error when trying to load the page</div>;
  } else if (!singleVenue) {
    content = <div>Venue not found</div>;
  } else {
    content = (
      <>
        <Link
          to="/"
          aria-label="Home"
          className="ms-6 mt-20 flex flex-row items-center gap-1 hover:text-soft-pink md:ms-10"
        >
          <i className="fa-solid fa-chevron-left"></i>
          <p className="cursor-pointer hover:underline sm:text-lg">Back</p>
        </Link>
        <div>
          <Gallery data={singleVenue} key={singleVenue.id} />
        </div>
        <div className="flex flex-col md:mx-5 md:max-w-screen-lg md:flex-row md:justify-between">
          <VenueInfo data={singleVenue} key={singleVenue.id} />
          {userEmail && venueOwner && userEmail === venueOwner ? (
            <VenueManagerOwnPageView venue={singleVenue} />
          ) : (
            <BookVenue data={singleVenue} />
          )}
        </div>
      </>
    );
  }

  return (
    <section className="mx-auto mt-[10px] max-w-screen-lg md:mt-[40px] lg:mt-[30px]">
      {content}
    </section>
  );
};
