import React, { useState, useEffect } from 'react';
// import { useUserContext } from '../leaderboard/UserContext';
import { useQuery } from '@apollo/client';
import  { Link }  from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { QUERY_GAME_ROOMS, QUERY_GET_GAME } from '../utils/queries';

import { useGameContext } from '../utils/GlobalState';
import {
  ADD_GAME,
} from '../utils/actions';
import Leaderboard from '../components/Leaderboard';
const Game = () => {
  // const [defaultRoom, setDefaultRoom] = useState({});
  const [state, dispatch] = useGameContext();
  const { game_id } = useParams();
  const {loading,  data } = useQuery(QUERY_GET_GAME, 
    {
      variables: 
        { gameId: parseInt(game_id) },
    }
  );
  
  
  const game = data?.game || {};
  const defaultRoom = game.rooms?.find(room => room.is_default) || {};

   useEffect(() => {
    if (!loading){
      dispatch({
        type: ADD_GAME,
        game,
      });
    }
   }, [loading, game, dispatch]);

     
  return (
     <>
     <main id="game">
          <h1>{game.title}</h1>
          <div id="intro">
               {/* <p>SCENERIO + PROMPT  HOW LONG YOU HAVE</p> */}
               <h3>Short Description:</h3><p>{game.title}</p>
               <h3>Story line Descriptions:</h3><p>{game.story_line}</p>
               <h3>Time limit for game:</h3><p>{game.time_limit}</p>
          </div>
          <div  id="start">
          <Link
               to={{
               pathname: `/room/${defaultRoom.room_id}`
               // state: {game.rooms.title}
               }}
          >
               START
          </Link>
          </div>
          <div >
          {/* <h3>Global Leader board</h3> */}
              <Leaderboard/>
          </div>
     </main>
     </>
     );
}

export default Game;