import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER , GET_ME } from '../utils/queries';
import Auth from '../utils/auth';

const GameList = ({ games }) => {
    const { _id: userParam } = useParams();

    const { data } = useQuery(userParam ? QUERY_USER : GET_ME, {
      variables: { _id: userParam },
    });
  
    const user = data?.me || data?.user || {};

    if (Auth.loggedIn() && Auth.getProfile().data._id === userParam) {
        // change link to go to the game page based on game._id
        return (
            <div>
            {games && games.map((game, idx) => (
                <div key={idx}>
                    <Link to={`/games/${game.gameId}`}>
                        <p>{games.title}</p>
                    </Link>
                </div>
            ))}
            </div>
        )
      }

      if (!user?._id) {
        return (
            <div>
                <h4>
                    You need to be logged in to see this. Use the navigation links above to sign up or log in!
                </h4>
                {games && games.map((game) => (
                <div key={game._id}>
                    <p>{games.title}</p>
                </div>
                ))}
            </div>
        );
      }
};

export default GameList;