import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import  { Link }  from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { QUERY_GET_GAME } from '../utils/queries';
import Button from 'react-bootstrap/esm/Button';
import { useGameContext } from '../utils/GlobalState';
import { ADD_GAME } from '../utils/actions';
import '../styles/Game.css';
import Leaderboard from '../components/Leaderboard';

const Game = () => {
  const [state, dispatch] = useGameContext();
  const { game_id } = useParams();
  const {loading,  data } = useQuery(QUERY_GET_GAME, 
    {
      variables: 
        { gameId: parseInt(game_id) },
    }
  );
  
  const game = data?.game || {};
  const defaultRoom = game.rooms?.find(room => room.is_default) || {};

   useEffect(() => {
    if (!loading){
      dispatch({
        type: ADD_GAME,
        game,
      });
    }
   }, [loading, game, dispatch]);

  return (
     <>
     <main id="game">
      <div className='feed'>
          <h1 id='main-title'>{game.title}</h1>
          <div id="intro">
            <div className="storyline m-2">
               <h3>Storyline</h3>
               <p className='m-2'>{game.story_line}</p>
            </div>
            <div className="time m-2">
               <h4 className='m-2'>Time Limit</h4>
               <p id="time-limit">{game.time_limit} minutes</p>
            </div>
          </div>
          <div  id="start">
          <Link
               to={{
               pathname: `/room/${defaultRoom.room_id}`
               }}
          >
             <Button className='p-3' variant='danger'>START</Button>  
          </Link>
          </div>
          <div>
              <Leaderboard/>
          </div>
        <div className="drop"></div>
        <div id='wave-container'>
          <div className="wave"></div>
        </div>
        <div id='wave-background'></div>
      </div>
     </main>
     </>
     );
}

export default Game;