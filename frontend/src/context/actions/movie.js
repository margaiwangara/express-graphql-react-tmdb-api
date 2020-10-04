import { GET_MOVIE_DETAILS } from '../actionTypes';

export const getMovieDetails = (movie) => ({
  type: GET_MOVIE_DETAILS,
  movie,
});
