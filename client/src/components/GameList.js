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
                    <div key={idx}>
                        <Link className='gamelink' to={`/game/${game.game_id}`}>
                            {game.title}
                        </Link>
                    </div>
                    ))}
            </div>
        )
      };

export default GameList;