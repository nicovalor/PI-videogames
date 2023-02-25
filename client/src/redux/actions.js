import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";

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
