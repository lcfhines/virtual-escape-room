import React from 'react';
import { Link } from 'react-router-dom';
import { useGameContext } from '../utils/GlobalState';
import  { DropdownButton, Dropdown }  from 'react-bootstrap';

const RoomList = () => {
    const [state] = useGameContext()
    return (
        <div>
         <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            {state.rooms && state.rooms.map((room, idx) => (
                <Dropdown.Item key={idx} href={`/room/${room.room_id}`}>
                        {room.title}
                </Dropdown.Item>
            ))}
        </DropdownButton>
        </div>
    )
};

export default RoomList;