import { useState, useEffect } from "react";
import { Hero } from "../../components/ui_elements/Hero";
import { Card } from "../../components/ui_elements/Card";
import { useFetch } from "../../hooks/useFetch";
import { all_Venues, API_Url } from "../../js/api/constants";
import { Loader } from "../../components/ui_elements/Loader";

export const Home = () => {
  const { data, isLoading, hasError } = useFetch(API_Url + all_Venues);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else if (data) {
      const filteredResults = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setSearchResults(filteredResults);
    }
  }, [searchTerm, data]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  let content;

  if (isLoading) {
    content = (
      <div className="">
        <Loader />
      </div>
    );
  } else if (hasError) {
    content = <div>Error when trying to load the page</div>;
  } else {
    const resultsToDisplay = searchResults.length > 0 ? searchResults : data;

    content = resultsToDisplay.map((item) => (
      <Card data={item} key={item.id} />
    ));
  }

  return (
    <>
      <Hero searchTerm={searchTerm} onSearch={handleSearch} />
      {searchTerm.trim() !== "" && searchResults.length === 0 ? (
        <div className="mx-auto my-4 w-96 rounded-lg bg-light-blue p-4 xs:w-80">
          <p className="p-3 text-center font-semibold text-dark-blue">
            Hmm... No matches for "{searchTerm}".
          </p>
          <p className="p-3 text-center text-dark-blue">
            Don't give up! Try searching for something else.
          </p>
        </div>
      ) : (
        <section className="mx-auto grid w-11/12 grid-cols-1 gap-3 bg-almost-white py-3 sm:grid-cols-2 lg:max-w-screen-2xl lg:grid-cols-3 xl:grid-cols-4">
          {content}
        </section>
      )}
    </>
  );
};
