import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GAMES } from '../utils/queries';
import GameList from '../components/GameList';

const Home = () => {
    const { loading, data } = useQuery(QUERY_GAMES);
    const games = data?.games || [];

    return (
        <main>
            <h1>Available Games</h1>
            {/* <div id="challenges">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <GameList 
                        games={games}
                    />
                )}
            </div> */}
        </main>
    );
}

export default Home;