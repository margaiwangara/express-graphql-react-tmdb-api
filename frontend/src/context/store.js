import React from 'react';
import ModalProvider from './app/ModalContext';
import MovieProvider from './app/MovieContext';

function ContextStore({ children }) {
  return (
    <MovieProvider>
      <ModalProvider>{children}</ModalProvider>;
    </MovieProvider>
  );
}

export default ContextStore;
