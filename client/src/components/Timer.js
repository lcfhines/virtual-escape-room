import React, { useState } from 'react';

const Timer = () => {
    const [timer, setTimer] = useState({ m: '10', s:'00'});

    const getTime = () => {
        let m = timer.m > 9 ? timer.m : '0' + timer.m;
        let s = timer.s > 9 ? timer.s : '0' + timer.s;
        setTimer(`${m}:${s}`);
    };

    const startTimer = (e) => {
        setInterval(getTime, 1000);
    }

    const stopTimer = () => {
        clearInterval(startTimer);
        // if correct answer, leaderboard user's best time for that game
        // if incorrect answer, don't log time
        // if time runs out, end game
        // regardless, all 3 options add 1 attempt to user
    };

    // above functions as onClicks

    return (
        <div className='timer'>
            <p>{timer}</p>
        </div>
    )
}

export default Timer;