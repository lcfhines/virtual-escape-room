import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import  { Link }  from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import { QUERY_GAME_ROOMS, QUERY_GET_GAME } from '../utils/queries';
import { useGameContext } from '../utils/GlobalState';
import Leaderboard from '../components/Leaderboard';
// import solutionLetters from '../components/Leaderboard';

const EndGame = () => {
    
const [state, dispatch] = useGameContext();
const { game_id } = useParams();
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