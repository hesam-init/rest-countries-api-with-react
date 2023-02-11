import { getCountryList } from "@api/getApi";
import NoData from "@component/no-data";
import { useState } from "react";
import { useQuery } from "react-query";
import { uid } from "uid";

import CountryCard from "./components/country-card";
import Filter from "./components/filter";
import Search from "./components/search";
import SkeletonCard from "./components/skeleton-card";

function HomePage() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [filterSelect, setFilterSelect] = useState<string>("");

  const { data: countriesList, isLoading } = useQuery(
    "countries-list",
    getCountryList
  );

  const searchedCountriesList = countriesList?.filter(
    (country) =>
      // eslint-disable-next-line implicit-arrow-linebreak, operator-linebreak
      country.name.toLowerCase().indexOf(searchInput.toLowerCase()) >= 0 &&
      country.region.toLowerCase().indexOf(filterSelect.toLowerCase()) >= 0
  );

  return (
    <>
      {/* search and filter */}
      <section className="flex flex-col items-center justify-between gap-y-9 md:flex-row">
        <Search
          isLoading={isLoading}
          name="Search for a Country"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <Filter onFilter={setFilterSelect} />
      </section>

      {/* country list */}
      <section className="mt-12 mb-6 grid gap-[4.7rem] px-12 sm:grid-cols-2 sm:px-0 md:px-0 lg:grid-cols-3 xl:grid-cols-4">
        {/* eslint-disable-next-line operator-linebreak */}
        {isLoading &&
          new Array(8).fill(0).map(() => <SkeletonCard key={`${uid()}`} />)}

        {searchedCountriesList?.map((country) => (
          <CountryCard
            key={country.name}
            code={country.alpha2Code}
            img={country.flags.png}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </section>

      {searchInput.length > 1 && searchedCountriesList?.length === 0 ? (
        <NoData />
      ) : (
        ""
      )}
    </>
  );
}

export default HomePage;
