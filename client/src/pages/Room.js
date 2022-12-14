import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RoomList from '../components/RoomList'
import { useGameContext } from '../utils/GlobalState';
import Timer from '../components/Timer';
import Object from '../components/Object';
import SolutionForm from "../components/Solution";
import { Modal } from 'react-bootstrap';
import "../styles/Room.css"
import bathroom from '../assets/LM-Bathroom.jpg';
import entrance from '../assets/LM-Entrance.jpg';
import parlor from '../assets/LM-Parlor.jpg';
import dining from '../assets/LM-Dining.jpg';
import garden from '../assets/LM-Garden.jpg';
import kitchen from '../assets/LM-Kitchen.jpg';
import secret from '../assets/LM-Secret.jpg';
import study from '../assets/LM-Study.jpg';
import full from '../assets/LM-Full.jpg';

const Room = () => {
     const [state] = useGameContext();
     const [showModal, setShowModal] = useState(false)
     const { room_id } = useParams();
     const room = state.rooms?.find(room => room.room_id === parseInt(room_id)) || {};



     const [timeLeft, setTimeLeft] = useState(state.game.time_limit * 60);
     const [timerRunning, setTimerRunning] = useState(true);

     let img;

     switch (room.room_id) {
          case 1:
               img = entrance;
               break;
          case 2:
               img = study;
               break;
          case 3:
               img = kitchen;
               break;
          case 4:
               img = parlor;
               break;
          case 5:
               img = dining;
               break;
          case 6:
               img = garden;
               break;
          case 8:
               img = bathroom;
               break;
          case 9:
               img = secret;
               break;
          default:
               img = full;
     }

     const timeHandler = () => {
          setTimeLeft(timeLeft - 1);
     }

     const roomMap = `../assets/${room.image}`

     return (
          <main>
               <div id="room">
                    {/* <div className ="map">
                         <img src="https://raw.githubusercontent.com/mikeyboxx/virtual-escape-room/main/assets/LM-Full.jpg" alt="manor map"/>
                         <svg width="2048" height="2048" xmlns="http://www.w3.org/2000/svg">
                              <path d="M 100 100 H 900 V 900 H 100 L 100 100" />

                              <circle cx="10" cy="10" r="2" fill="red" />
                              <circle cx="90" cy="90" r="2" fill="red" />
                              <circle cx="90" cy="10" r="2" fill="red" />
                              <circle cx="10" cy="90" r="2" fill="red" />
                         </svg>
                    </div> */}

                    <div id="titleTimer">
                         <div>
                              <RoomList />
                         </div>
                         <div>
                              <h2 id="timer">Time Remaining</h2>
                              <Timer
                                   timeLeft={timeLeft}
                                   timerRunning={timerRunning}
                                   timeHandler={timeHandler}
                              />
                         </div>
                    </div>
               </div>
               <div id="roomBody">
                    <h2>{room.title}</h2>
                    <div className="imgContainer">
                         <img src={img} alt="room map" className="mapImage" />
                    </div>
                    <div id="room-desc">
                         <h3>Description of the {room.title}</h3>
                         <p> {room.description} </p>
                    </div>
                    <div className="room-objects">
                         {room.objects.map((object, idx) => {
                              return <div className="object p-1 "><Object key={idx} object={object} /></div>
                         })}
                    </div>
               </div>
               {parseInt(room_id) === state.defaultRoomId
                    && (
                         <div>
                              <Link onClick={() => {
                                   setShowModal(true);
                              }}> I know who did it! Report to the constable your findings to escape the Llewellyn Manor </Link>
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
               <div id="filler"/>
          </main>
     )
}

export default Room;