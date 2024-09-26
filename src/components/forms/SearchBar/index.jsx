import { useState } from "react";

export const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const term = event.target.value;
    setInputValue(term);
    onSearch(term);
  };

  return (
    <>
      <div className="mx-auto mt-4 flex w-11/12 max-w-xs items-center justify-center">
        <label htmlFor="simple-search" className="sr-only text-white">
          Search
        </label>
        <div className="flex w-72 flex-row xs:w-96">
          <input
            type="text"
            id="simple-search"
            className="block w-full rounded-l-xl border-gray-300 bg-gray-50 p-2.5 ps-3 text-gray-900"
            placeholder="Search"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className="rounded-r-xl bg-soft-pink p-2.5 px-3 py-2 text-center text-sm font-medium text-dark-blue hover:bg-dark-blue hover:text-soft-pink"
          >
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </>
  );
};
