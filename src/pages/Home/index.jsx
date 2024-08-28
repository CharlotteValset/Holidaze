import { Hero } from "../../components/Hero";
import { Card } from "../../components/Card";

export const Home = () => {
  return (
    <>
      <Hero />
      <section className="pt-3 flex flex-wrap gap-3 sm:gap-5 mx-auto bg-almost-white">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
};
