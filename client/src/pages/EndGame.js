import React from 'react';
import { useParams} from 'react-router-dom';
import { useGameContext } from '../utils/GlobalState';
import Leaderboard from '../components/Leaderboard';
import '../styles/Solution.css';

const EndGame = () => {
    
const [state] = useGameContext();
const {correctFlag} = useParams();

return (
    <>
    <main id="game">
        <div className='feed'>
            <h1 id='main-title'>{state.game.title}</h1>
            <div>
                {
                (correctFlag === "true")
                ? (state.solutionLetters[1].message)
                : (state.solutionLetters[0].message)
                }
            </div>
            <div className='leaderboard-container'>
                <Leaderboard/>
            </div>
        </div>
    </main>
    </>
    );
}


export default EndGame;