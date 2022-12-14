import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams} from 'react-router-dom';
// import { QUERY_GAME_ROOMS, QUERY_GET_GAME } from '../utils/queries';
import { useGameContext } from '../utils/GlobalState';
import Leaderboard from '../components/Leaderboard';
// import solutionLetters from '../components/Leaderboard';

const EndGame = () => {
    
const [state, dispatch] = useGameContext();
const {correctSolution, incorrectSolution} = useParams();
  const {loading,  data } = useQuery(QUERY_GET_GAME, 
    {
      variables: 
        { gameId: parseInt(game_id) },
    }
  );

return (
    <>
    <main id="game">
         <h1>{game.title}</h1>
<div>
    <solutionLetters/>
</div>
<div >
    <Leaderboard/>
</div>
</main>
</>
);
}


export default EndGame;