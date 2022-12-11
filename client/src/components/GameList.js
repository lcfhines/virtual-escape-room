import React from 'react';
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER , GET_ME } from '../utils/queries';
import Auth from '../utils/auth';

const GameList = ({ games }) => {
    const { _id: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : GET_ME, {
      variables: { _id: userParam },
    });
  
    const user = data?.me || data?.user || {};

    if (Auth.loggedIn() && Auth.getProfile().data._id === userParam) {
        // if (!games.length) {
        //     return <h3>No games available yet!</h3>;
        // }
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

      if (loading) {
        return <div>Loading...</div>;
      }

      if (!user?._id) {
        return (
          <h4>
            You need to be logged in to see this. Use the navigation links above to sign up or log in!
          </h4>
        );
      }
    


};

export default GameList;