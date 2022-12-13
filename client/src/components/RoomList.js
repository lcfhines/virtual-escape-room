import React from 'react';
import { Link } from 'react-router-dom';
import { useGameContext } from '../utils/GlobalState';

const RoomList = () => {
    const [state, dispatch] = useGameContext()
    return (
        <div>
         <select name="rooms" id="rooms">
            {state.rooms && state.rooms.map((room) => (
                <option key={room._id}>
                    <Link to={`/room/${room.room_id}`}>
                        {room.title}
                    </Link>
                </option>
            ))}
        </select>
        </div>
    )
};

export default RoomList;