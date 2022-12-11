import React, { useState } from 'react';
import { useUserContext } from './UserContext';

export default function Leaderboard(){
const { users } = useUserContext();

return(
     <>
     <header>
          <div id="logo">Name/Logo</div>
          <ul id="links">
               <li><a href="#">Leader Board</a></li>
               <li><a href="#">Rules</a></li>
               <li><a href="#">Logout</a></li>
          </ul>
     </header>
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
     <footer>footer content</footer>
     </>
     );
}
