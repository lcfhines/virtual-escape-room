import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GAMES } from '../utils/queries';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

// import GameList from '../components/GameList';

const Home = () => {
    const { loading, data } = useQuery(QUERY_GAMES);
    const games = data?.games || [];

    if (Auth.loggedIn()){
      
      return (
        <div>
          {games.map((game, idx) => (
            <div key={idx}>
                <Link to={`/game/${game.game_id}`}>
                    {game.title}
                </Link>
            </div>
            ))}
          <p>The above should be in a GameList component</p>
        </div>
      )
    } else {
      return (
        <div>
          <p>Intro</p>
          <p>Leaderboard</p>
          <p>How to play rules</p>
          <p>The above should be in an Intro component</p>
        </div>
      )
    }

    
    // return (
      
    //     // <main>
    //     //     <h1>Available Games</h1>
    //     //     <div id="challenges">
    //     //         {loading ? (
    //     //             <div>Loading...</div>
    //     //         ) : (
    //     //             <GameList 
    //     //                 games={games}
    //     //             />
    //     //         )}
    //     //     </div>
    //     // </main>
    // );
}

export default Home;