import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams} from 'react-router-dom';
// import { QUERY_GAME_ROOMS, QUERY_GET_GAME } from '../utils/queries';
import { useGameContext } from '../utils/GlobalState';
import Leaderboard from '../components/Leaderboard';
// import solutionLetters from '../components/Leaderboard';

const EndGame = () => {
    
const [state, dispatch] = useGameContext();
const {correctFlag} = useParams();


return (
    <>
    <main id="game">
         <h1>{state.game.title}</h1>
         <div>
            {
             (correctFlag === "true")
            ? (state.solutionLetters[1].message)
            : (state.solutionLetters[0].message)
            }
         </div>
        <div >
            <Leaderboard/>
        </div>
    </main>
    </>
    );
}


export default EndGame;