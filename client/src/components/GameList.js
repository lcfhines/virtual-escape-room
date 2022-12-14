import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_GAMES } from '../utils/queries';
import '../styles/Gamelist.css'

const GameList = () => {
    const { data } = useQuery(QUERY_GAMES);
    const games = data?.games || [];

    return (
        <div>
            {games.map((game, idx) => (
                <div className='card' key={idx}>
                        <img src="assets/c870x524.jpg" className="card-img-top" alt="Maginfying-glass looking over evidence"></img>
                    <Link className='gamelink' to={`/game/${game.game_id}`}>
                        {game.title}
                    </Link>
                </div>
                ))}
        </div>
    )
};

export default GameList;