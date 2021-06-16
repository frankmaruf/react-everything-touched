import { useEffect, useState } from "react";

const url = "http://localhost:8000/viewset/article";

const TernaryOperator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [eRRor, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    try {
      const response = await fetch(url);
      const articles = await response.json();
      setArticles(articles);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setError(`${error}`);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getArticles();
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <h3>Loading.....</h3>
      ) : isError ? (
        <h4>Error {eRRor}</h4>
      ) : (
        <>
          <h5 style={{ textAlign: "center", marginTop: "2rem" }}>
            Multiple Returns
          </h5>
          <ul>
            {articles.map((article) => {
              const { id, title, author, email } = article;
              return (
                <li className="container" key={id}>
                  <h4>{title}</h4>
                  <h6 className="fw-bold">{author}</h6>
                  <p className="lead">{email}</p>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default TernaryOperator;
