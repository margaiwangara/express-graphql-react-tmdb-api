import { GET_MOVIE_DETAILS } from '../actionTypes';

function movieReducer(state, action) {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.movie,
      };
    default:
      return state;
  }
}

export default movieReducer;
