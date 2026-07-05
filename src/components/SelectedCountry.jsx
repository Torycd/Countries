import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";

const SelectedCountry = () => {
  const { state: country } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!country) return;
    document.title = `${country.names.official}`;
    return () => {
      document.title = "Countries Info";
    };
  }, [country]);

  function handleBack() {
    navigate(-1);
  }

  // Safely get native name
  const nativeName = country.names?.nativeName
    ? Object.values(country.names.nativeName)[0]?.common
    : country.name?.common;

  // Get currencies
  const currencies = country.currencies
    ? Object.values(country.currencies)
    : [];

  // Get languages
  const languages = country.languages ? Object.values(country.languages) : [];

  return (
    <div className="background py-6 px-4 sm:px-20">
      <div className="mb-[100px]">
        <button
          className="flex justify-center items-center px-8 py-2 border-4 border-gray-300 rounded-sm"
          onClick={handleBack}
        >
          <span className="mr-2">
            <FaArrowLeft />
          </span>
          Back
        </button>
      </div>

      {/* selected country image and info */}
      <div className="grid sm:grid-cols-2 space-y-5 sm:space-x-20">
        <div>
          <img src={country.flags?.svg} alt={country.flags?.alt || "Flag"} />
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            {country.names?.official}
          </h2>

          <div className="grid sm:grid-cols-2 gap-20 mb-5">
            <ul className="space-y-3">
              <li>
                <strong>Native Name:</strong> {nativeName}
              </li>
              <li>
                <strong>Population:</strong>{" "}
                {country.population?.toLocaleString()}
              </li>
              <li>
                <strong>Region:</strong> {country.region}
              </li>
              <li>
                <strong>Sub Region:</strong> {country.subregion}
              </li>
              <li>
                <strong>Capital:</strong> {country.capital?.[0]}
              </li>
            </ul>

            <ul className="space-y-3">
              <li>
                <strong>Top Level Domain:</strong> {country.tld?.join(", ")}
              </li>

              <li>
                <strong>Currencies:</strong>{" "}
                {currencies.map((cur, idx) => (
                  <span key={idx}>
                    {cur.name} ({cur.symbol})
                    {idx !== currencies.length - 1 && ", "}
                  </span>
                ))}
              </li>

              <li>
                <strong>Languages:</strong>{" "}
                {languages.map((lang, idx) => (
                  <span key={idx}>
                    {lang.name}
                    {idx !== languages.length - 1 && ", "}
                  </span>
                ))}
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap items-start gap-2">
            <strong>Border Countries:</strong>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 items-center">
              {country.borders?.length > 0 ? (
                country.borders.map((bd) => (
                  <span
                    key={bd}
                    className="border-2 px-3 text-[10px] py-[2px] rounded-sm border-gray-400"
                  >
                    {bd}
                  </span>
                ))
              ) : (
                <span className="text-sm opacity-60">None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCountry;
