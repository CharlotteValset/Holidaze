import HeroImage from "../../../assets/images/heroImage.png";
import { SearchBar } from "../../forms/SearchBar";

export const Hero = ({ onSearch }) => {
  return (
    <section className="mt-16 max-w-screen-2xl rounded-bl-3xl bg-dark-blue pb-10 md:mt-20">
      <div className="mx-auto md:flex md:flex-row-reverse">
        <div className="w-full md:w-2/4">
          <img
            src={HeroImage}
            className="md:mx-auto md:my-12 md:w-5/6 lg:w-9/12"
            alt="Fantastic house"
          />
        </div>
        <div className="my-auto flex-col justify-center md:w-2/4">
          <h1 className="mx-auto w-36 py-4 text-center text-2xl text-light-blue xs:w-52 xs:text-3xl xs:font-light md:w-60 md:text-4xl lg:mb-10 lg:w-72 lg:text-5xl">
            Find your next adventure!
          </h1>
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
};
