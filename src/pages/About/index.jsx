import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import HolidazeCrew from "../../assets/images/holidazeCrew.jpg";

import { PrimaryButton } from "../../components/ui_elements/Buttons/PrimaryButton";

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About us | Holidaze</title>
        <meta
          name="description"
          content="Learn more about Holidaze and our mission to help you find the perfect place to stay."
        />
      </Helmet>
      <section className="mx-auto mb-6 mt-[70px] max-w-screen-lg md:mt-[110px] md:flex md:flex-row-reverse md:gap-6">
        <div className="md:w-7/12">
          <img
            className="w-full md:h-full md:object-cover md:p-4"
            src={HolidazeCrew}
            alt="Holidaze crew hiking in nature"
          />
        </div>

        <article className="mb-4 flex flex-col items-center md:w-5/12">
          <header className="w-11/12 pt-3">
            <h1 className="text-center text-2xl md:ps-2 md:text-left md:text-3xl">
              About us
            </h1>
          </header>

          <p className="w-11/12 p-2 text-lg font-light">
            Welcome to <span className="font-medium">Holidaze</span>, your new
            destination for finding the perfect place to stay. We offer a wide
            range of accommodations, from cozy retreats to luxurious villas,
            catering to every budget and style.
          </p>
          <p className="mb-4 w-11/12 p-2 text-lg font-light">
            <span className="font-medium">Holidaze</span> is all about creating
            memorable travel experiences. Our platform is easy to use, with
            detailed listings, honest reviews, and a seamless booking process.
            Plus, our team is here to offer personalized support, ensuring your
            holiday is just as you envision.
          </p>

          <aside className="mx-2 flex w-64 flex-col items-center rounded-lg bg-light-blue p-3 md:max-w-sm lg:w-80">
            <p className="w-56 px-2 py-5 text-center text-lg font-light lg:w-72">
              Join us at <span className="font-medium">Holidaze</span>, and
              let’s make your next getaway unforgettable.
            </p>
            <Link to="/" aria-label="Home">
              <PrimaryButton className="mb-4">Find your stay</PrimaryButton>
            </Link>
          </aside>
        </article>
      </section>
    </>
  );
};
