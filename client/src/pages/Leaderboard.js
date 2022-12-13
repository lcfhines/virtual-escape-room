import React, { useState } from 'react';
import { useUserContext } from './UserContext';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_GET_LEADERBOARD } from '../utils/queries';
const Leaderboard = () => {

const { users } = useUserContext();
const { game_id } = useParams();
const {loading,  data } = useQuery(QUERY_GET_LEADERBOARD, 
  {
    variables: 
      { gameId: parseInt(game_id) },
  }
);
return(
     <>
     <main id="leaderboard">
          <h1>Global Leader board</h1>
          <div >
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
                 {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.rank}</td>
                    <td>{user.name}</td>
                    <td>{user.time}</td>
                    <td>{user.click}</td>
                  </tr>
                 ))}
                </tbody>
               </table>
          </div>
     </main>
     </>
     );
}
export default Leaderboard;