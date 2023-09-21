import {
  GET_MOVIES,
  SELECT_MOVIE_TIMING,
  SELECT_SEATS,
  REMOVE_SEAT,
} from "./actionTypes";

const selectSeats = (data) => {
  return {
    type: SELECT_SEATS,
    payload: {
      ...data,
    },
  };
};

const removeSeat = (data) => {
  return {
    type: REMOVE_SEAT,
    payload: data,
  };
};

const selectMovieTiming = (data) => {
  return {
    type: SELECT_MOVIE_TIMING,
    payload: {
      ...data,
    },
  };
};

const getMoviesList = (data) => {
  return {
    type: GET_MOVIES,
    payload: [...data],
  };
};

export { selectSeats, selectMovieTiming, getMoviesList, removeSeat };
