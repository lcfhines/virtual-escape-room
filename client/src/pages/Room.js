import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom';
import { QUERY_ROOM } from '../utils/queries';
import { Link } from 'react-router-dom';

// import CommentList from '../components/CommentList';

const Room = ({rooms}) => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const [roomArray] = useState(rooms);
  const { roomId } = useParams();

  const { loading, data } = useQuery(QUERY_ROOM, {
    // pass URL parameter
    variables: { roomId: roomId },
  });

    const room = data?.room || {};
   
    return (
        <main>
        <div id="room">
             <div>
                  <h2>Room</h2>
                  <select name="rooms" id="rooms">
                    {rooms && rooms.map((room, idx) => (
                        <option key={idx}>
                        <Link to={`/Room/${room.roomId}`}>{room.title}</Link>
                        </option>          
                    ))}
                  </select>
             </div>
             <h2>Timer</h2>
        </div>
        <div id="character">
             <a href="#"><img src="./assets/char.png"/></a>
        </div>
        <div id="room-desc">
             <h2>Description of room</h2>
             <p></p>
        </div>
        <div id="object">
             <div className="row">
                  <a href="#" ><img src="assets/comingSoon.png" alt=""/></a>
                  <a href="#"><img src="assets/comingSoon.png" alt=""/></a>
                  <a href="#"><img src="assets/comingSoon.png" alt=""/></a>
             </div>
             <div  className="row">
                  <a href="#"><img src="assets/comingSoon.png" alt=""/></a>
                  <a href="#"><img src="assets/comingSoon.png" alt=""/></a>
                  <a href="#"><img src="assets/comingSoon.png" alt=""/></a>
             </div>
        </div>
        <div id="solve"><a href="#">I know who did it</a></div>
   </main>

    )
}

export default Room;