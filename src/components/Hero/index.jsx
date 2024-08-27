import HeroImage from "../../assets/images/heroImage.png";
import { SearchBar } from "../SearchBar";

export const Hero = () => {
  return (
    <section className="bg-dark-blue rounded-bl-3xl">
      <img src={HeroImage} className="w-full " alt="Fantastic house" />
      <div className=" w-32 mx-auto py-4">
        <h1 className="text-xl text-light-blue text-center">Find your next adventure!</h1>
      </div>
      <SearchBar />
    </section>
  );
};
