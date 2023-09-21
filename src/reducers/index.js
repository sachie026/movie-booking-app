const initialState = {
  movies: [],
  selectedMovieId: null,
  selectedTime: null,
  selectedSeats: [],
  ticketCost: null,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "SELECT_SEATS":
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, action.payload.selectedSeats],
      };
    case "SELECT_MOVIE_TIMING":
      return {
        ...state,
        selectedTime: action.payload.selectedTime,
        selectedMovieId: action.payload.selectedMovieId,
        ticketCost: action.payload.ticketCost,
      };
    default:
      return state;
  }
}

export default appReducer;
