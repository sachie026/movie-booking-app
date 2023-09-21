import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMoviesList } from "../actions";
import { fetchMoviesList } from "../common/data";

function useData() {
  const dispatch = useDispatch();
  const [loadingMovies, setLoadingMovies] = useState(false);

  const allMovies = useSelector((state) => state.appReducer.movies);
  const selectedTime = useSelector((state) => state.appReducer.selectedTime);
  const selectedMovieId = useSelector(
    (state) => state.appReducer.selectedMovieId
  );
  const selectedSeats = useSelector((state) => state.appReducer.selectedSeats);
  const ticketCost = useSelector((state) => state.appReducer.ticketCost);

  const getMovies = async () => {
    try {
      if (!allMovies || allMovies?.length === 0) {
        setLoadingMovies(true);
        const movies = await fetchMoviesList();
        dispatch(getMoviesList(movies));
        setLoadingMovies(false);
      }
    } catch (e) {
      console.log("error while fetching movie data", e);
    }
  };

  const getMovieDetails = (id) => {
    return allMovies?.find((movie) => movie.id === id) || {};
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    movies: allMovies,
    getMovieDetails: getMovieDetails,
    selectedTime: selectedTime,
    selectedMovieId: selectedMovieId,
    selectedSeats: selectedSeats,
    ticketCost: ticketCost,
    loadingMovies: loadingMovies,
  };
}

export default useData;
