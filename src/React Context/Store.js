import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { ArticleConst } from "./constants/Article";
import { ArticleReducer } from "./Reducer/ArticleReducer";

const url = "http://localhost:8000/simple_model_viewset/atricle";

export const ArticleContext = createContext();

const Store = ({ children }) => {
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
  const initialState = {
    article: [],
    loading: true,
    error: "",
    addArticles: async (value) => {
      const data = await axios.post(url, value);
      dispatch({
        type: ArticleConst.ADD_ARTICLE,
        payload: data,
      });
    },
    reset: () => {
      dispatch({
        type: ArticleConst.REST_ARTICLE,
      });
    },
  };
  const [{ article, loading, error, addArticles }, dispatch] = useReducer(
    ArticleReducer,
    initialState
  );
  return (
    <ArticleContext.Provider value={{ article, loading, error, addArticles }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default Store;
