import React from 'react';
import { Link } from 'react-router-dom';
import { useGameContext } from '../utils/GlobalState';

const RoomList = () => {
    const [state, dispatch] = useGameContext()
    return (
        <div>
         <div>
            {state.rooms && state.rooms.map((room) => (
                <div key={room._id}>
                    <Link to={`/room/${room.room_id}`}>
                        <p>{room.title}</p>
                    </Link>
                </div>
            ))}
            </div>
        </div>
    )
};

export default RoomList;