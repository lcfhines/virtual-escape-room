import React, { createContext, useContext } from "react";
import { useGameReducer } from './reducers'

const GameContext = createContext();
const { Provider } = GameContext;

const GameProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useGameReducer({
    game: {},
    rooms: [],
    solutions: {
      suspects: {
        object_id: '',
        name: ''
      }
    }
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGameContext = () => {
  return useContext(GameContext);
};

export { GameProvider, useGameContext };
