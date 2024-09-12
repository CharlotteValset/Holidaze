import { Hero } from "../../components/ui_elements/Hero";
import { Card } from "../../components/ui_elements/Card";
import { useFetch } from "../../hooks/useFetch";
import { all_Venues, API_Url } from "../../js/api/constants";

export const Home = () => {
  const { data, isLoading, hasError } = useFetch(API_Url + all_Venues);

  console.log(data);

  let content;

  if (isLoading) {
    content = <div>Hellooo loading</div>;
  } else if (hasError) {
    content = <div>Error when trying to load the page</div>;
  } else {
    content = data.map((item) => <Card data={item} key={item.id} />);
  }

  return (
    <>
      <Hero />
      <section className="mx-auto flex max-w-screen-xl flex-wrap gap-3 bg-almost-white pt-3 sm:gap-5">
        {content}
      </section>
    </>
  );
};
