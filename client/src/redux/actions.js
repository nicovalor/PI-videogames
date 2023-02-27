import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_VIDEOGAMES_BY_NAME = "GET_VIDEOGAMES_BY_NAME";
export const ORDER_VIDEOGAMES_BY_NAME = "ORDER_VIDEOGAMES";
export const ORDER_VIDEOGAMES_BY_RATING = "ORDER_VIDEOGAMES_BY_RATING";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";

export const getVideogames = () => {
  return async (dispatch) => {
    const apiData = await axios.get("http://localhost:3001/videogames");
    const videogames = apiData.data;

    dispatch({ type: GET_VIDEOGAMES, payload: videogames });
  };
};
export const getGenres = () => {
  return async (dispatch) => {
    const apiData = await axios.get("http://localhost:3001/genre");
    const genres = apiData.data;

    dispatch({ type: GET_GENRES, payload: genres });
  };
};

export const getVideogamesByName = (name) => {
  return async (dispatch) => {
    const apiData = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    const videogames = apiData.data;
    dispatch({ type: GET_VIDEOGAMES_BY_NAME, payload: videogames });
  };
};

export const orderVideogamesByName = (name) => {
  return { type: ORDER_VIDEOGAMES_BY_NAME, payload: name };
};

export const orderVideogamesByRating = (rating) => {
  return { type: ORDER_VIDEOGAMES_BY_RATING, payload: rating };
};

export const filterByOrigin = (origin) => {
  return { type: FILTER_BY_ORIGIN, payload: origin };
};

export const filterByGenre = (genre) => {
  return { type: FILTER_BY_GENRE, payload: genre };
};
