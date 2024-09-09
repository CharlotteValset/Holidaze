import { Link } from "react-router-dom";
import HolidazeCrew from "../../assets/images/holidazeCrew.jpg";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";

export const About = () => {
  return (
    <section className="mx-auto mb-6 mt-[70px] max-w-screen-lg md:mt-[110px] md:flex md:flex-row-reverse md:gap-6">
      <div className="md:w-7/12">
        <img
          className="w-full md:h-full md:object-cover md:p-4"
          src={HolidazeCrew}
          alt=""
        />
      </div>
      <div className="mb-4 flex flex-col items-center md:w-5/12">
        <h1 className="w-11/12 pt-3 text-center text-[22px] md:ps-2 md:text-left md:text-3xl">
          About us
        </h1>
        <p className="w-11/12 p-2 font-light">
          Welcome to <span className="font-medium">Holidaze</span>, your new
          destination for finding the perfect place to stay. We offer a wide
          range of accommodations, from cozy retreats to luxurious villas,
          catering to every budget and style.
        </p>
        <p className="mb-4 w-11/12 p-2 font-light">
          <span className="font-medium">Holidaze</span> is all about creating
          memorable travel experiences. Our platform is easy to use, with
          detailed listings, honest reviews, and a seamless booking process.
          Plus, our team is here to offer personalized support, ensuring your
          holiday is just as you envision.
        </p>
        <div className="mx-2 flex max-w-xs flex-col items-center rounded-lg bg-light-blue p-3">
          <p className="max-w-64 px-2 py-5 text-center font-light">
            Join us at <span className="font-medium">Holidaze</span>, and let’s
            make your next getaway unforgettable.
          </p>
          <Link to="/" aria-label="Home">
            {" "}
            <PrimaryButton className="mb-4">Find your stay</PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
