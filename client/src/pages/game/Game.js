import React, { useState } from 'react';
// import { useUserContext } from '../leaderboard/UserContext';
import { useQuery } from '@apollo/client';
import  { Link }  from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { QUERY_GAME_ROOMS } from '../../utils/queries';

const Game = () => {

     const { gameId } = useParams();
     const { loading, data } = useQuery(QUERY_GAME_ROOMS, {
          variables: { gameId: 1 },
     });

     const game = data?.game || {};
     
return(
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
               pathname: "/room",
               // state: {game.rooms.title}
               }}
          >
               START
          </Link>
          </div>
          <div >
          <h3>Global Leader board</h3>
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
     </main>
     </>
     );
}
export default Game;