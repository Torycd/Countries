import { useEffect, useState } from "react";

export const useApi = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch countries.");
        }

        const result = await response.json();

        // Only keep the array of countries
        setOriginalData(result.data.objects);
        setData(result.data.objects);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);

  return {
    isLoading,
    error,
    originalData,
    data,
    setData,
  };
};
