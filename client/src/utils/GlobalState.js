import React, { createContext, useContext } from "react";
import { useGameReducer } from './reducers'

const GameContext = createContext();
const { Provider } = GameContext;

const GameProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useGameReducer({
    game: {},
    rooms: [],

    suspects: [],
    weapons: [],
    motives: [],
    
    correctSolution: {},

    weaponInteractions: [],
    motiveInteractions: [],

    gameInteractions: [],
    
    // solutions: {
    //   suspects: {
    //     object_id: '1',
    //     name: 'Laura'
    //   },
    //  weapons: {
    //   object_id: '2',
    //   name: 'Broom'
    //  },
    //  motives:{
    //   object_id: '3',
    //   description: `didn't finish coding project in time`
    //  }
    // }
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGameContext = () => {
  return useContext(GameContext);
};

export { GameProvider, useGameContext };
