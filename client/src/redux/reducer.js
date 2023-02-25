import { GET_GENRES, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME } from "./actions";

const initialState = {};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEOGAMES:
      return { ...state, videogames: payload };
    case GET_GENRES:
      return { ...state, genres: payload };
    case GET_VIDEOGAMES_BY_NAME:
      return { ...state, videogames: payload };
    default:
      return { ...state };
  }
};

export default reducer;
