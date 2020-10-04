import React from 'react';
import ModalProvider from './app/ModalContext';

function ContextStore({ children }) {
  return <ModalProvider>{children}</ModalProvider>;
}

export default ContextStore;
