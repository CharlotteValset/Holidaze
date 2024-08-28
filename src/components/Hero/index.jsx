import HeroImage from "../../assets/images/heroImage.png";
import { SearchBar } from "../SearchBar";

export const Hero = () => {
  return (
    <section className="bg-dark-blue rounded-bl-3xl mt-16 md:mt-20">
      <div className="mx-auto md:flex md:flex-row-reverse">
        <div className="w-full md:w-2/4">
          <img src={HeroImage} className="md:w-4/5 md:mx-auto md:my-12" alt="Fantastic house" />
        </div>
        <div className="flex-col justify-center md:w-2/4 my-auto">
          <h1 className="w-36 xs:w-52 md:w-60 lg:w-72 mx-auto py-4 text-2xl xs:text-3xl md:text-4xl lg:text-5xl xs:font-light text-light-blue text-center lg:mb-10">
            Find your next adventure!
          </h1>
          <SearchBar />
        </div>
      </div>
    </section>
  );
};
