import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { ArticleContext } from "./Store";

const AddArticle = () => {
  const { addArticles } = useContext(ArticleContext);
  const [article, setArticle] = useState({
    title: "",
    author: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (article.title && article.author && article.email) {
      const value = {
        author: article.author,
        email: article.email,
        title: article.title,
      };
      addArticles(value);
      setArticle({
        title: "",
        author: "",
        email: "",
      });
    }
  };
  return (
    <div>
      <h1>Add Article</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={article.title}
          name="title"
          placeholder="type title"
        />
        <input
          onChange={handleChange}
          value={article.author}
          name="author"
          placeholder="type author"
        />
        <input
          onChange={handleChange}
          name="email"
          value={article.email}
          placeholder="type email"
        />
        <button type="submit">Add Article</button>
      </form>
    </div>
  );
};

export default AddArticle;
