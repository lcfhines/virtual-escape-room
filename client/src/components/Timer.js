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
                if (timerRunning) {
                    timeHandler();
                } else {
                    clearTimeout(timeoutRef);
                }
            }, 1000)
        }
    }, [timeLeft, timerRunning, timeHandler])
    return (
        <div>
            <h2>{timer}</h2>
        </div>
    )
}












