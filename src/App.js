import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, autoStart: false, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook </h1>
      <p>Pomodoro</p>
      <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={() => {
        // Restarts to 25 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 1500);
        restart(time, false)
      }}>Stop</button>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1500); // 25 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}