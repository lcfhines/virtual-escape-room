import React, { useState } from 'react';
import { useUserContext } from './UserContext';

const Leaderboard = () => {

const { users } = useUserContext();

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