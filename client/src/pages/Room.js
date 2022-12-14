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
     console.log(room);
     console.log(room_id);
     console.log(room.map)

     return (
          <main>
               <div id="room">
                    {/* {<div className ="map">
                         <img src="https://raw.githubusercontent.com/mikeyboxx/virtual-escape-room/main/assets/LM-Full.jpg" className="mapimg" alt="manor map"/>
                         <svg viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg">
                              <path d="M 125 250 h 800 v 550 h -800 L 125 250" />
                              <path d="M 125 850 h 800 v 550 h -175 v 650 h -625 L 125 850" />
                         </svg>
                    </div>} */}
                    <div id="titleTimer">
                         <div>
                              <h1>{room.title}</h1>
                              <RoomList />
                         </div>
                         <div>
                              <h2 id="timer">Time Remaining</h2>
                              <Timer />
                         </div>
                    </div>

               </div>
               <div id="room-desc">
                    <h2>Description of the {room.title}</h2>
                    <p> {room.description} </p>
               </div>
               <div className="room-objects">
                    {room.objects.map((object, idx) => {
                         return <div className="object p-1 "><Object key={idx} object={object} /></div>
                    })}
               </div>
               {parseInt(room_id) === state.defaultRoomId
                    && (
                         <div>
                              <Link onClick={() => setShowModal(true)}> I know who did it! </Link>
                              <Modal
                                   show={showModal}
                                   onHide={() => setShowModal(false)}
                                   size="lg"
                                   aria-labelledby="contained-modal-title-vcenter"
                                   centered>
                                   < SolutionForm />

                              </Modal>
                         </div>)
               }
          </main>
     )
}

export default Room;