import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { Hero } from "../../components/ui_elements/Hero";
import { Card } from "../../components/ui_elements/Card";
import { Loader } from "../../components/ui_elements/Loader";

import { useFetch } from "../../hooks/useFetch";

import { all_Venues, API_Url } from "../../js/api/constants";

export const Home = () => {
  const { data, isLoading, hasError } = useFetch(API_Url + all_Venues);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreData = async () => {
    try {
      const response = await fetch(`${API_Url + all_Venues}?page=${page + 1}`);
      const result = await response.json();

      const newData = result.data;
      setAllData((prevData) => [...prevData, ...newData]);
      setPage(result.meta.currentPage);

      if (result.meta.isLastPage) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
      setHasMore(false);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      setAllData(data);
    }
  }, [data]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredResults = allData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setSearchResults(filteredResults);
    }
  }, [searchTerm, allData]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const resultsToDisplay = searchResults.length > 0 ? searchResults : allData;

  return (
    <>
      <Hero searchTerm={searchTerm} onSearch={handleSearch} />
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <section className="my-5 flex justify-center text-red-600">
          Error fetching data. Please try again later.
        </section>
      ) : searchTerm.trim() !== "" && searchResults.length === 0 ? (
        <section className="mx-auto my-4 w-96 rounded-lg bg-light-blue p-4 xs:w-80">
          <p className="break-all p-3 text-center text-dark-blue">
            Hmm... No matches for{" "}
          </p>
          <span className="block break-words text-center font-medium">
            "{searchTerm}"
          </span>
          .
          <p className="p-3 text-center text-dark-blue">
            Don't give up! Try searching for something else.
          </p>
        </section>
      ) : (
        <InfiniteScroll
          dataLength={resultsToDisplay.length}
          next={loadMoreData}
          hasMore={hasMore}
          loader={<Loader />}
        >
          <section className="mx-auto grid w-11/12 grid-cols-1 gap-3 bg-almost-white py-3 sm:grid-cols-2 lg:max-w-screen-2xl lg:grid-cols-3 xl:grid-cols-4">
            {resultsToDisplay.map((item, index) => (
              <Card data={item} key={`${item.id}-${index}`} />
            ))}
          </section>
        </InfiniteScroll>
      )}
    </>
  );
};
