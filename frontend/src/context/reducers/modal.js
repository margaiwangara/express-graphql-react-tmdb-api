import { TOGGLE_MODAL } from '../actionTypes';

function modalReducer(state, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}

export default modalReducer;
