import { useReducer } from 'react';
import {
  UPDATE_USER_INTERACTION,
  ADD_GAME
} from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_GAME:
      console.log('ADD_GAME');
      const 
        {
          title,
          story_line,
          time_limit,
          rooms,
          solution
        } = action.game;

      
      const {room_id: defaultRoomId} = rooms.find(room => room.is_default); 
     
      const characters = [];
      rooms.forEach(room => {
        room.objects.forEach(object => {
          if (object.type === 'character') {
            characters.push({
              character_id: object.object_id, 
              name: object.name
            })
          }
        })
      })

      return {
        ...state, 
        game: {
          title,
          story_line,
          time_limit
        },
        rooms,
        defaultRoomId,
        characters,
        correctSolution: solution
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
