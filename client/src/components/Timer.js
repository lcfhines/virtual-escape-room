import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
    const timeoutRef = useRef(null);
    const [timeLeft, setTimeLeft] = useState(60);
    const [timerRunning, setTimerRunning] = useState(true);

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
            <h2>{timeLeft}</h2>
            <button onClick={() => setTimerRunning(true)}>Start</button>
            <button onClick={() => {
                clearTimeout(timeoutRef.current);
                setTimerRunning(false)}}>Stop</button>
        </div>
    )
}

export default Timer;