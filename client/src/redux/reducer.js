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
        videogamesCopy: payload,
        videogamesCopy2: payload,
      };
    case GET_GENRES:
      return { ...state, genres: payload };
    case GET_VIDEOGAMES_BY_NAME:
      return {
        ...state,
        videogames: payload,
        videogamesCopy: payload,
        videogamesCopy2: payload,
      };
    case ORDER_VIDEOGAMES_BY_NAME:
      if (payload === "A-Z") {
        const orderedAlf = state.videogames.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return {
          ...state,
          videogames: orderedAlf,
          videogamesCopy: orderedAlf,
          videogamesCopy2: state.videogamesCopy2,
        };
      }
      if (payload === "Z-A") {
        const orderZtoA = state.videogames.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        return {
          ...state,
          videogames: orderZtoA,
          videogamesCopy: orderZtoA,
          videogamesCopy2: state.videogamesCopy2,
        };
      }
      break;

    case ORDER_VIDEOGAMES_BY_RATING:
      if (payload === "Ascendente") {
        const orderedVideogames = state.videogamesCopy.sort(
          (a, b) => a.rating - b.rating
        );
        return {
          ...state,
          videogames: orderedVideogames,
          videogamesCopy: orderedVideogames,
          videogamesCopy2: state.videogamesCopy2,
        };
      } else {
        const orderedVideogames = state.videogamesCopy.sort(
          (a, b) => b.rating - a.rating
        );
        return {
          ...state,
          videogames: orderedVideogames,
          videogamesCopy: orderedVideogames,
          videogamesCopy2: state.videogamesCopy2,
        };
      }
    case FILTER_BY_ORIGIN:
      return {
        ...state,
        videogames:
          payload === "All"
            ? state.videogames
            : payload === "DB"
            ? state.videogames.filter((game) => game.created)
            : state.videogames.filter((game) => !game.created),
      };
    // if (payload === "All") {
    //   return {
    //     ...state,
    //     videogames: state.videogames,
    //     videogamesCopy: state.videogamesCopy,
    //   };
    // } else if (payload === "DB") {
    //   state.videogames = state.videogames.filter(
    //     (videogame) => videogame.created
    //   );
    //   return {
    //     ...state,
    //     videogames: state.videogames,
    //     videogamesCopy: state.videogames,
    //   };
    // } else {
    //   state.videogames = state.videogames.filter(
    //     (videogame) => !videogame.created
    //   );
    //   return {
    //     ...state,
    //     videogames: state.videogames,
    //     videogamesCopy: state.videogames,
    //   };
    // }

    case FILTER_BY_GENRE:
      if (payload === "All") {
        return {
          ...state,
          videogames: state.videogamesCopy2,
          videogamesCopy: state.videogamesCopy2,
        };
      }
      const filteredVideogames = state.videogamesCopy2.filter((game) =>
        game.genres.find((genre) => genre === payload)
      );
      return {
        ...state,
        videogames: filteredVideogames,
        videogamesCopy: filteredVideogames,
      };
    default:
      return { ...state };
  }
};

export default reducer;
