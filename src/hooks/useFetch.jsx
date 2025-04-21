import { useEffect, useState } from "react";

const useFetch = ({ api, method = "GET", condition = true }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (condition) {
      setIsLoading(true);
      fetch(`${import.meta.env.VITE_URL}${api}`, {
        method,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      })
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [api, condition, method]);
  return { isLoading, data,setData };
};
export default useFetch;
