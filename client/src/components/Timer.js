import React, { useState, useEffect, useRef } from 'react';
import { useGameContext } from '../utils/GlobalState';
import '../styles/Timer.css'

const Timer = () => {
    const [state] = useGameContext();
    const time_limit = state.game.time_limit;

    const timeoutRef = useRef(null);
    const [timeLeft2, setTimeLeft] = useState(timeLeft);
    const [timerRunning, setTimerRunning] = useState(true);
    const [timeLeft, setTimeLeft] = useState(time_limit * 60);
    const [timerRunning, setTimerRunning] = useState(true);

    let timer = '';
    let minutes = Math.floor((timeLeft / 60) % 60);
    let seconds = Math.floor(timeLeft % 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer = `${minutes}:${seconds}`

    useEffect(() => {
        if (timeLeft > 0 && timerRunning) {
            timeoutRef.current = setTimeout(() => {
                timerRunning
                ? setTimeLeft(timeLeft - 1)
                : clearTimeout(timeoutRef);
            }, 1000);
        }
    }, [timeLeft, timerRunning]);

    return (
        <div>
            <h2 id = "timerEl">{timer}</h2>
            <button onClick={() => setTimerRunning(true)}>Start</button>
            <button onClick={() => {
                clearTimeout(timeoutRef.current);
                setTimerRunning(false)}}>Stop</button>
        </div>
    )
}

export default Timer;