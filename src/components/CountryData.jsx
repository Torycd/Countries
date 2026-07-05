import { useNavigate } from "react-router";
import "../index.css";
import { memo } from "react";

const CountryData = ({ data }) => {
  const navigate = useNavigate();
  if (!data?.length) return null;
  console.log(data);

  function handleSelectCountry(country) {
    navigate(`/${country.names.common}`, {
      state: country,
    });
  }
  return (
    <div className="grid md:grid-cols-4 py-8 px-4 sm:px-20 gap-10 sm:gap-20">
      {data.map((country) => (
        <div
          key={country.names.common}
          className="element shadow-xl h-full rounded-md transform transition duration-300 hover:scale-105 cursor-pointer"
          onClick={() => handleSelectCountry(country)}
        >
          <img
            className="w-full rounded-t-md"
            src={`https://flags.restcountries.com/v5/w320/${country.codes.alpha_2.toLowerCase()}.png`}
            alt={country.names.common}
          />
          <div className="p-3">
            <h2 className="font-bold mb-3 text-xl">{country.names.official}</h2>

            <div className="font-semibold space-y-2 text-[12px]">
              <h3>
                Population:
                <span className="ml-1 opacity-50">
                  {country.population.toLocaleString()}
                </span>
              </h3>

              <h3>
                Region:
                <span className="ml-1 opacity-50">{country.region}</span>
              </h3>

              <h3>
                Capital:
                <span className="ml-1 opacity-50">
                  {country.capitals?.name?.join(", ") || "N/A"}
                </span>
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(CountryData);
