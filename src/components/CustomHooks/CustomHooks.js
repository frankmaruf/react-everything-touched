import useFetch from "./useFetch";

const url = "http://localhost:8000/viewset/article";

const CustomHooks = () => {
  const { data, loading, error } = useFetch(url);
  console.log(data);
  return (
    <>
      <h1>hello from CustomHooks</h1>
      <h2>
        {loading ? (
          "loading..."
        ) : error ? (
          "Error"
        ) : (
          <>
            {data.map((dam) => {
              return (
                <div key={dam.id}>
                  <h2>{dam.title}</h2>
                  <h3>{dam.author}</h3>
                  <h4>{dam.email}</h4>
                </div>
              );
            })}
          </>
        )}
      </h2>
    </>
  );
};

export default CustomHooks;
