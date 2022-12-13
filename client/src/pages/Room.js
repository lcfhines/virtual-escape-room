import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom';
import { QUERY_ROOM } from '../utils/queries';
import { Link } from 'react-router-dom';
import RoomList from '../components/RoomList'
import { useGameContext } from '../utils/GlobalState';
import Timer from '../components/Timer';
import Object from '../components/Object';

// import CommentList from '../components/CommentList';

const Room = () => {
    const [state] = useGameContext();
    const {room_id} = useParams();
    const room = state.rooms?.find(room => room.room_id === parseInt(room_id)) || {}; 
    console.log(room);
    console.log(room_id);

    return (
        <main>
        <div id="room">
             <div>
                  <h2>{room.title}</h2>
                  <RoomList/>
             </div>
             <h2>Timer</h2>
             <Timer />
        </div>
        {/* <div id="character">
             <a href="#"><img src="./assets/char.png"/></a>
        </div> */}
        <div id="room-desc">
             <h2>description</h2>
             <p> {room.description} </p>
        </div>
        {room.objects.map((object, idx) => {
          return <Object key={idx} object={object}/>
        })}
        {/* <div id="object">
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
        </div> */}
        {parseInt(room_id) === state.defaultRoomId 
          && (<div id="solve"><a href="#">I know who did it</a></div>)
          } 
   </main>
    )
}

export default Room;