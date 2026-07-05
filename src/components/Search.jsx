// import React from "react";

import { FaSearch } from "react-icons/fa";

const Search = ({ setRegionSelect, setSearchInput, searchInput }) => {
  function handleChange (e) {
    setRegionSelect(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row py-4 px-4 sm:px-20 justify-between">
      <div className="flex element rounded-sm shadow-xl gap-10 justify-between items-center py-3 px-8">
        <span>
          <FaSearch className="" />
        </span>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => setSearchInput(e.target.value)}
          className="element focus:outline-none sm:w-[300px]"
          value={searchInput}
        />
      </div>

      <div>
        <select
          id="options"
          name="options"
          className="element text-left shadow-xl py-3 px-8 rounded-sm font-semibold focus:outline-0 "
          onChange={handleChange}
        >
          <option value="" hidden>
            Filter by region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
