import React from 'react';
// import { Link } from 'react-router-dom';

const RoomList = ({ rooms }) => {
    

    return (
        <div>
         <div>
            {rooms && rooms.map((room) => (
                <div key={room._id}>
                    <Link to={`/room`}>
                        <p>{rooms.title}</p>
                    </Link>
                </div>
            ))}
            </div>
        </div>
    )
};

export default RoomList;