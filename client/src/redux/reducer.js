import { GET_VIDEOGAMES } from "./actions";

const initialState = {};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEOGAMES:
      return { ...state, videogames: payload };
    default:
      return { ...state };
  }
};

export default reducer;
