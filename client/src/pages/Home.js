import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GAMES } from '../utils/queries';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Rules from '../components/Rules';
import Container from 'react-bootstrap/Container';

import GameList from '../components/GameList';

const Home = () => {
    // const { loading, data } = useQuery(QUERY_GAMES);
    // const games = data?.games || [];

    if (Auth.loggedIn()){
      
      return (
        <Container>
        <div>
          {/* Intro */}
          <h1 className="intro">Solve a murder mystery or escape from a psycho killer all from the comfort of your couch.</h1>
          <h3>Available Games</h3>
          {/* {games.map((game, idx) => (
            <div key={idx}>
                <Link to={`/game/${game.game_id}`}>
                    {game.title}
                </Link>
            </div>
            ))} */}
          <GameList />
        </div>
        </Container>
      )
    } else {
      return (
        <Container>
        <div>
          {/* Intro */}
          <h1 className="intro">Solve a murder mystery or escape from a psycho killer all from the comfort of your couch.</h1>
         {/* <p>How to play rules</p> */}
          <Rules />
        </div>
        </Container>
      )
    }
}

export default Home;