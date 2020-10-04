import React, { useContext, createContext, useReducer } from 'react';
import { modalState } from '../initialStates';
import modalReducer from '../reducers/modal';

export const ModalContext = createContext(null);
export const ModalConsumer = ModalContext.Consumer;

const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, modalState);
  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
