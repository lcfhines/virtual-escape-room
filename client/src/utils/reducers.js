import { useReducer } from 'react';
import {
  UPDATE_USER_INTERACTION,
  ADD_GAME
} from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_GAME:
      const 
        {
          game_id,
          title,
          story_line,
          time_limit,
          rooms,
          solution
        } = action.game;

      
      const {room_id: defaultRoomId} = rooms.find(room => room.is_default); 
     
      const suspects = [];
      const weapons = [];
      const motives = [];
      rooms.forEach(room => {
        room.objects.forEach(object => {
          if (object.type === 'character') {
            suspects.push({
              object_id: object.object_id, 
              name: object.name
            })
          } else if (object.type === 'thing' && object.isWeapon){
            weapons.push({
              object_id: object.object_id, 
              name: object.name
            })
          }
          object.interactions.forEach(interaction => {
            interaction.motives.forEach(motive => {
              motives.push({
                motive_id: motive.motive_id, 
                description: motive.description
              })
            })
          })
            
        })
      })

      return {
        ...state, 
        game: {
          game_id,
          title,
          story_line,
          time_limit
        },
        rooms,
        defaultRoomId,
        correctSolution: solution,
        suspects,
        weapons,
        motives
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
