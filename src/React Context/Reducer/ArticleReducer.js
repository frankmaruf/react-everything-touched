import { ArticleConst } from "../constants/Article";

export const ArticleReducer = (state, { type, payload }) => {
  switch (type) {
    case ArticleConst.ON_SUCCESS:
      return { ...state, article: payload, loading: false, error: false };
    case ArticleConst.ARTICLE_LOADING:
      return { ...state, article: {}, loading: true, error: false };
    case ArticleConst.ADD_ARTICLE:
      return {
        ...state,
        article: payload,
      };
    case ArticleConst.REST_ARTICLE:
      return {};
    default:
      return state;
  }
};
