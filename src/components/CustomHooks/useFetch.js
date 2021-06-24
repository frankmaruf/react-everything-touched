import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: false,
  });
  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({ data: data, loading: false });
    } catch (error) {
      setState({ loading: false, error: true });
    }
  };
  useEffect(() => {
    getData();
  }, [url]);
  return state;
};

export default useFetch;
