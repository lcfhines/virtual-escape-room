import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GAMES } from '../utils/queries';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Rules from '../components/Rules';

import GameList from '../components/GameList';

const Home = () => {
    // const { loading, data } = useQuery(QUERY_GAMES);
    // const games = data?.games || [];

    if (Auth.loggedIn()){
      
      return (
        <div>
          {/* Intro */}
          <h1 className="intro">Solve a murder mystery or escape from a psycho killer all from the comfort of your couch.</h1>
          <h2>Available Games</h2>
          {/* {games.map((game, idx) => (
            <div key={idx}>
                <Link to={`/game/${game.game_id}`}>
                    {game.title}
                </Link>
            </div>
            ))} */}
          <GameList />
        </div>
      )
    } else {
      return (
        <div>
          {/* Intro */}
          <h1 className="intro">Solve a murder mystery or escape from a psycho killer all from the comfort of your couch.</h1>
         {/* <p>How to play rules</p> */}
          <Rules />
        </div>
      )
    }
}

export default Home;