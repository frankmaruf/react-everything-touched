import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PeopleList from "./Article";
import AddPerson from "./AddArticle";
import useFetch from "../components/CustomHooks/useFetch";
import { AddArticle } from "./Reducer/ArticleReducer";
import { useReducer } from "react";
import { Article } from "./ArticleContext";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { ArticleConst } from "./constants/Article";
const url = "http://localhost:8000/simple_model_viewset/atricle";
const Home = () => {
  const initialState = {
    article: [],
    loading: true,
    error: "",
  };
  const [{ article, loading, error }, dispatch] = useReducer(
    AddArticle,
    initialState
  );
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        dispatch({
          type: ArticleConst.ON_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: ArticleConst.ON_FAIL });
      });
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Article.Provider value={{ article, articleDispatch: dispatch }}>
            <Route exact path="/" component={PeopleList} />
            <Route path="/add" component={AddPerson} />
          </Article.Provider>
        </Switch>
      </Router>
    </>
  );
};

export default Home;
