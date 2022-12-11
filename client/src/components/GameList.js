import React from 'react';
import { Link } from 'react-router-dom';

const GameList = ({ games }) => {
    if (!games.length) {
        return <h3>No games available yet!</h3>;
    }

    return (
        <div>
            {games && games.map((game) => (
                <div key={game._id}>
                    <p><a href="#">{games.title}</a></p>
                </div>
            ))}
        </div>
    )
}