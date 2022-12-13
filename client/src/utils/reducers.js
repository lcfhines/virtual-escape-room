import { useReducer } from 'react';
import {
  UPDATE_USER_INTERACTION,
  UPDATE_GAME
} from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case UPDATE_GAME: 
      return {
        ...state, 
        game: action.game
      }
    // case UPDATE_USER_INTERACTION:
    // This saves us from a crash.
    default:
      return state;
  }
};

export function useGameReducer(initialState) {
  return useReducer(reducer, initialState);
}
