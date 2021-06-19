import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, seState] = useState({
    data: [],
    loading: true,
    error: false,
  });
  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      seState({ data: data, loading: false });
    } catch (error) {
      seState({ loading: false, error: true });
    }
  };
  useEffect(() => {
    getData();
  }, [url]);
  return state;
};

export default useFetch;
