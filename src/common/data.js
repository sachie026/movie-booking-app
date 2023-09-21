import { MOVIES_URL, SEATS_URL } from "./shared";

export const fetchMoviesList = async () => {
  const data = await fetch(MOVIES_URL);
  const movies = await data.json();

  return movies;
};

export const fetchSeats = async () => {
  const data = await fetch(SEATS_URL);
  const seats = await data.json();

  console.log("seats", seats);
  return seats;
};
