import React, { useState } from 'react';
import { useUserContext } from '../leaderboard/UserContext';
import { useQuery } from '@apollo/client';
import  { Link }  from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { QUERY_GAME_ROOMS } from '../../utils/queries';

const Game = () => {

// const { users } = useUserContext();
// const { loading, data } = useQuery(QUERY_GAME_ROOMS);
// const rooms = data?.rooms || [];
     const { gameId } = useParams();

     const { loading, data } = useQuery(QUERY_GAME_ROOMS, {
     // pass URL parameter
     variables: { gameId: gameId },

     });
     const game = data?.game || {};
return(
     <>
     {/* <header>
          <div id="logo">Name/Logo</div>
          <ul id="links">
               <li><a href="#">Leader Board</a></li>
               <li><a href="#">Rules</a></li>
               <li><a href="#">Logout</a></li>
          </ul>
     </header> */}
     <main id="leaderboard">
          <h1>Virtual Escape Room</h1>
          <div id="intro">
               {/* <p>SCENERIO + PROMPT  HOW LONG YOU HAVE</p> */}
               <h2>Short Description:</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsam deleniti facere excepturi nemo molestiae laborum, aliquam cumque alias voluptates vero fugit laboriosam iusto corporis?</p>
               <h2>Story line Descriptions:</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsam deleniti facere excepturi nemo molestiae laborum, aliquam cumque alias voluptates vero fugit laboriosam iusto corporis?</p>
               <h2>Time limit for game:</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsam deleniti facere excepturi nemo molestiae laborum, aliquam cumque alias voluptates vero fugit laboriosam iusto corporis?</p>
          </div>
          <div  id="start">
          {/* <Link
               to={{
               pathname: "/room",
               state: rooms
               }}
          >
               START
          </Link> */}
          </div>
          <div >
          <h2>Global Leader board</h2>
               <table>
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
                 ))} */}
                </tbody>
               </table>
          </div>
     </main>
     <footer>footer content</footer>
     </>
     );
}
export default Game;