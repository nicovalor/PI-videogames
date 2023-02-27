import {
  FILTER_BY_GENRE,
  FILTER_BY_ORIGIN,
  GET_GENRES,
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_BY_NAME,
  ORDER_VIDEOGAMES_BY_NAME,
  ORDER_VIDEOGAMES_BY_RATING,
} from "./actions";

const initialState = {};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: payload,
        filter1: payload,
        filter2: payload,
        filter3: payload,
      };
    case GET_GENRES:
      return { ...state, genres: payload };
    case GET_VIDEOGAMES_BY_NAME:
      return {
        ...state,
        videogames: payload,
        filtered1: payload,
        filtered2: payload,
      };
    case ORDER_VIDEOGAMES_BY_NAME:
      return {
        ...state,
        videogames:
          payload === "A-Z"
            ? state.filter2.sort((a, b) => a.name.localeCompare(b.name))
            : state.filter2.sort((a, b) => b.name.localeCompare(a.name)),
      };
    case ORDER_VIDEOGAMES_BY_RATING:
      return {
        ...state,
        videogames:
          payload === "Ascendente"
            ? state.videogames.sort((a, b) => a.rating - b.rating)
            : state.videogames.sort((a, b) => b.rating - a.rating),
      };
    case FILTER_BY_ORIGIN:
      return {
        ...state,
        videogames:
          payload === "All"
            ? state.videogames
            : payload === "DB"
            ? state.filter1.filter((videogame) => videogame.created)
            : state.filter1.filter((videogame) => !videogame.created),
      };
    case FILTER_BY_GENRE:
      return {
        ...state,
        videogames:
          payload === "All"
            ? state.videogames
            : state.filter3.filter((videogame) =>
                videogame.genres.includes(payload)
              ),
      };
    default:
      return { ...state };
  }
};

export default reducer;
