import useFetch from "../CustomHooks/useFetch";
import Article from "./Article";
const url = "http://localhost:8000/viewset/article";

const PropsTypes = () => {
  const { data, loading, error } = useFetch(url);
  console.log(data);
  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : error ? (
        <h2>Error</h2>
      ) : (
        <>
          {data.map((data) => (
            <Article key={data.id} {...data} />
          ))}
        </>
      )}
    </>
  );
};

export default PropsTypes;
