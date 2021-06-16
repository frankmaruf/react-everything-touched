import { useEffect, useState } from "react";
const url = "http://localhost:8000/viewset/article";

const FetchData = () => {
  const [articles, setArticles] = useState([]);

  const getDjangoData = async () => {
    try {
      const response = await fetch(url);
      const articles = await response.json();
      console.log(articles);
      setArticles(articles);
    } catch (error) {
      console.log("my error is " + error);
    }
  };
  useEffect(() => {
    getDjangoData();
  }, []);
  return (
    <>
      <p>Let's get start with api</p>
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
  );
};

export default FetchData;
