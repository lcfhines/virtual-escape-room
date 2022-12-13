import React, { useState,useEffect } from 'react';
// import { useUserContext } from './UserContext';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_GET_LEADERBOARD } from '../utils/queries';
import { useGameContext } from '../utils/GlobalState';
const Leaderboard = () => {

// const { users } = useUserContext();
// const [state, dispatch] = useGameContext();
// const { game_id } = useParams();

const {loading,  data } = useQuery(QUERY_GET_LEADERBOARD, 
  {
    variables: 
      { gameId:1 },
  }
);
const leaderBoard = data?.leaderBoard || {};
console.log(leaderBoard);


return(
     <>
     <main id="leaderboard">
          <h3>Global Leader board</h3>
          <div >
               <table>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Number of Attempts</th>
                    <th>Final Solution Time</th>
                  </tr>
                </thead>  
                <tbody>
                {leaderBoard.map((user) => (
                  <tr key={user.id}>
                    <td>{user.rank}</td>
                    <td>{user.name}</td>
                    <td>{user.number_of_attempts}</td>
                    <td>{user.final_solution_time}</td>
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