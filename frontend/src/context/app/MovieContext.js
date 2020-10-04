import React, { createContext, useContext, useReducer } from 'react';
import { movieState } from '../initialStates';
import movieReducer from '../reducers/movie';

export const MovieContext = createContext(null);
export const MovieConsumer = MovieContext.Consumer;

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, movieState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext);

export default MovieProvider;
