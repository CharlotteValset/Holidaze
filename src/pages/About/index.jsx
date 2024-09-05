import HolidazeCrew from "../../assets/images/holidazeCrew.jpg";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";

export const About = () => {
  return (
    <section className="mt-[70px] md:mt-[110px] max-w-screen-lg mx-auto md:flex md:flex-row-reverse md:gap-6 mb-6">
      <div className="md:w-7/12">
        <img className="w-full md:h-full md:object-cover md:p-4" src={HolidazeCrew} alt="" />
      </div>
      <div className="flex flex-col items-center mb-4 md:w-5/12">
        <h1 className="w-11/12 text-center text-[22px] md:text-3xl pt-3 md:text-left md:ps-2">About us</h1>
        <p className="w-11/12 p-2 font-light">
          Welcome to <span className="font-medium">Holidaze</span>, your new destination for finding the perfect place
          to stay. We offer a wide range of accommodations, from cozy retreats to luxurious villas, catering to every
          budget and style.
        </p>
        <p className="w-11/12 p-2 mb-4 font-light">
          <span className="font-medium">Holidaze</span> is all about creating memorable travel experiences. Our platform
          is easy to use, with detailed listings, honest reviews, and a seamless booking process. Plus, our team is here
          to offer personalized support, ensuring your holiday is just as you envision.
        </p>
        <div className="bg-light-blue mx-2 p-3 max-w-xs rounded-lg flex flex-col items-center">
          <p className="text-center px-2 py-5 max-w-64 font-light">
            Join us at <span className="font-medium">Holidaze</span>, and let’s make your next getaway unforgettable.
          </p>
          <PrimaryButton className="mb-4">Find your stay</PrimaryButton>
        </div>
      </div>
    </section>
  );
};
