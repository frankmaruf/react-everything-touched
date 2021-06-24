import React from "react";
import { useContext } from "react";
import { Button, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { ArticleContext } from "./Store";

const ArticleList = () => {
  const { article } = useContext(ArticleContext);
  console.log(article);
  return (
    <>
      <h1>Article List</h1>

      {article.map((dam) => {
        return (
          <div key={dam.id}>
            <h2>{dam.title}</h2>
            <h3>{dam.author}</h3>
            <h4>{dam.email}</h4>
          </div>
        );
      })}
    </>
  );
};

export default ArticleList;
