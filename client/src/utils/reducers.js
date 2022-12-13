import { useReducer } from 'react';
import {
  UPDATE_USER_INTERACTION,
} from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    // case UPDATE_USER_INTERACTION:
    // This saves us from a crash.
    default:
      return state;
  }
};

export function useGameReducer(initialState) {
  return useReducer(reducer, initialState);
}
