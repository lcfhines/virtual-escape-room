import React, { useState, useEffect, useRef } from 'react';
import { useGameContext } from '../utils/GlobalState';

export default function Timer ({ timeLeft, timerRunning, timeHandler }) {
    // console.log(timeLeft, timerRunning);
    // const [state] = useGameContext();
    // const time_limit = state.game.time_limit;

    const timeoutRef = useRef(null);
    // const [timeLeft2, setTimeLeft] = useState(timeLeft);
    // const [timerRunning, setTimerRunning] = useState(true);

    let timer = '';
    let minutes = Math.floor((timeLeft / 60) % 60);
    let seconds = Math.floor(timeLeft % 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer = `${minutes}:${seconds}`

    // useEffect(() => {
    //     if (timeLeft > 0 && timerRunning) {
    //         timeoutRef.current = setTimeout(() => {
    //             timerRunning
    //             ? {setTimeLeft(timeLeft2 - 1)
    //                 timeHandler()}
    //             : clearTimeout(timeoutRef);
    //         }, 1000);
    //     }
    // }, [timeLeft, timerRunning, timeHandler]);

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