import { useState } from "react";
import { useLoaderData, useNavigation } from "react-router";

import Search from "./Search";
import CountryData from "./CountryData";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [regionSelect, setRegionSelect] = useState("");
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  const data = useLoaderData();

  const filteredData = data
    .filter((country) =>
      regionSelect
        ? country.region.toLowerCase() === regionSelect.toLowerCase()
        : true,
    )
    .filter((country) =>
      searchInput
        ? country.names.common.toLowerCase().includes(searchInput.toLowerCase())
        : true,
    );

  return (
    <>
      <Search
        setRegionSelect={setRegionSelect}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      <CountryData data={filteredData} />

      {isLoading && <LoadingComp />}
    </>
  );
};

export default Home;

export async function loader() {
  const response = await fetch("https://api.restcountries.com/countries/v5", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch countries.");
  }
  const result = await response.json();
  const data = result.data.objects;
  return data;
}
