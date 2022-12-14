import React, { useEffect, useRef } from 'react';

export default function Timer ({ timeLeft, timerRunning, timeHandler }) {
    const timeoutRef = useRef(null);

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
