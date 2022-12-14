import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom';
import { QUERY_ROOM } from '../utils/queries';
import { Link } from 'react-router-dom';
import RoomList from '../components/RoomList'
import { useGameContext } from '../utils/GlobalState';
import Timer from '../components/Timer';
import Object from '../components/Object';
import Solution from '../components/Solution';
import SolutionForm from "../components/Solution";
import { Modal } from 'react-bootstrap';
import "../styles/Room.css"

// import CommentList from '../components/CommentList';

const Room = () => {
     const [state] = useGameContext();
     const [showModal, setShowModal] = useState(false)
     const { room_id } = useParams();
     const room = state.rooms?.find(room => room.room_id === parseInt(room_id)) || {};

     const [timeLeft, setTimeLeft] = useState(state.game.time_limit * 60);
     const [timerRunning, setTimerRunning] = useState(true);

     const timeHandler = () => {
          setTimeLeft(timeLeft - 1);
     }



     return (
          <main>
               <div id="room">
                    <div className ="map">
                         <img src="https://raw.githubusercontent.com/mikeyboxx/virtual-escape-room/main/assets/LM-Full.jpg" alt="manor map"/>
                         <svg width="2048" height="2048" xmlns="http://www.w3.org/2000/svg">
                              <path d="M 100 100 H 900 V 900 H 100 L 100 100" />

                              <circle cx="10" cy="10" r="2" fill="red" />
                              <circle cx="90" cy="90" r="2" fill="red" />
                              <circle cx="90" cy="10" r="2" fill="red" />
                              <circle cx="10" cy="90" r="2" fill="red" />
                         </svg>
                    </div>
                    <div>
                         <h2>{room.title}</h2>
                         <RoomList />
                    </div>
                    <h2>Timer</h2>
                    <Timer
                         timeLeft={timeLeft}
                         timerRunning={timerRunning}
                         timeHandler={timeHandler}
                    />
               </div>
               {/* <div id="character">
             <a href="#"><img src="./assets/char.png"/></a>
        </div> */}
               <div id="room-desc">
                    <h2>description</h2>
                    <p> {room.description} </p>
               </div>
               {room.objects.map((object, idx) => {
                    return <Object key={idx} object={object} />
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
                    && (
                         <div>
                              <Link onClick={() => {
                                   setShowModal(true);
                                   }}> I know who did it! </Link>
                              <Modal
                                   show={showModal}
                                   onHide={() => setShowModal(false)}
                                   size="lg"
                                   aria-labelledby="contained-modal-title-vcenter"
                                   centered>
                                   < SolutionForm
                                        setTimerRunning={setTimerRunning}
                                        timeLeft={timeLeft} />

                              </Modal>
                         </div>)
               }
          </main>
     )
}

export default Room;