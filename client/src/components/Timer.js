import React, { useState, useRef } from 'react';

const Timer = () => {
    const Ref = useRef(null);

    const [timer, setTimer] = useState('00:10');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const seconds = Math.floor((total / 1000) % 60);
        return {
            total, minutes, seconds
        };
    };

    function startTimer(e) {
        const id = setInterval(() => {
            let { total, minutes, seconds } = getTimeRemaining(e);
            if (total >= 0) {
                setTimer(
                    (minutes > 9 ? minutes : '0' + minutes) + ':' +
                    (seconds > 9 ? seconds : '0' + seconds)
                )
            }   
        }, 1000);
        Ref.current = id;
    };

    const stopTimer = (e) => {
        if (Ref.current) {
            let { total, minutes, seconds } = getTimeRemaining(e);
            if (total >= 0) {
                setTimer(
                    (minutes > 9 ? minutes : '0' + minutes) + ':' +
                    (seconds > 9 ? seconds : '0' + seconds)
                )
            };
            clearInterval(Ref.current);
        }
    };

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    };

    const onClickStart = () => {
        startTimer(getDeadTime());
    }

    return (
        <div className='timer'>
            <h2>{timer}</h2>
            <button onClick={onClickStart}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
}

export default Timer;