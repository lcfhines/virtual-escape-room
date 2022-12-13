import React, { useState, useEffect } from 'react';
// import { useUserContext } from '../leaderboard/UserContext';
import { useQuery } from '@apollo/client';
import  { Link }  from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { QUERY_GAME_ROOMS, QUERY_GET_GAME } from '../utils/queries';
import Button from 'react-bootstrap/esm/Button';

import { useGameContext } from '../utils/GlobalState';
import {
  ADD_GAME,
} from '../utils/actions';

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

  // console.log(game);
  
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
      <div className='feed'>
          <h1>{game.title}</h1>
          <div id="intro">
               {/* <p>SCENERIO + PROMPT  HOW LONG YOU HAVE</p> */}
               {/* <h3>Short Description:</h3><p>{game.title}</p> */}
               <h5>About the story:</h5><p>{game.story_line}</p>
               <h5>Time-limit:<span id="time-limit" > {game.time_limit} minutes</span></h5>
          </div>
          <div  id="start">
          <Link
               to={{
               pathname: `/room/${defaultRoom.room_id}`
               // state: {game.rooms.title}
               }}
          >
             <Button variant='danger'>START</Button>  
          </Link>
          </div>
          <div >
          <h5>Global Leaderboard</h5>
               {/* <table>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Clicks</th>
                  </tr>
                </thead>  
                <tbody>
                 {/* {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.rank}</td>
                    <td>{user.name}</td>
                    <td>{user.time}</td>
                    <td>{user.click}</td>
                  </tr>
                 ))} *
                </tbody>
               </table> */}
          </div>
      </div>
     </main>
     </>
     );
}

export default Game;