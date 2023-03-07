import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import RoomList from '../components/RoomList'
import { useGameContext } from '../utils/GlobalState';
import Timer from '../components/Timer';
import Object from '../components/Object';
import SolutionForm from "../components/Solution";
import { Modal, Button } from 'react-bootstrap';
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

     return (
          <main>
               <div id="room">
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
                              return <div key={idx} className="object p-1 "><Object key={idx} object={object} /></div>
                         })}
                    </div>
               </div>
               {parseInt(room_id) === state.defaultRoomId
                    && (
                         <div className="solutionLink">
                              <p>Report your findings to the constable to escape the Llewellyn Manor!</p>
                              <Button 
                                   size="lg"
                                   variant="success"
                                   onClick={() => {
                                   setShowModal(true);
                              }}> I know who did it!</Button>
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