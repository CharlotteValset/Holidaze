import { Hero } from "../../components/Hero";
import { Card } from "../../components/Card";

export const Home = () => {
  return (
    <>
      <Hero />
      <section className="mx-auto flex flex-wrap gap-3 bg-almost-white pt-3 sm:gap-5">
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
