import { ArticleConst } from "../constants/Article";

export const AddArticle = (state, { type, payload }) => {
  switch (type) {
    case ArticleConst.ON_SUCCESS:
      return { ...state, article: payload, loading: false, error: false };
    case ArticleConst.ARTICLE_LOADING:
      return { ...state, article: {}, loading: true, error: false };
    case ArticleConst.ADD_ARTICLE:
      return {
        ...state,
        payload,
      };
    case ArticleConst.REMOVE_ARTICLE:
      const new_People = state.peoples.filter(
        (person) => person.id !== payload
      );
      return {
        ...state,
        peoples: new_People,
      };
    case ArticleConst.REST_ARTICLE:
      return {};
    default:
      return state;
  }
};
