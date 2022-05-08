import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import Suggestions from "./Suggestions"
import SettingsButton from "./SettingsButton";
import {useContext, useState, useEffect} from "react";
import SettingsContext from "./SettingsContext";
import { SelectTimerType } from './SelectTimerType';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {
  const settingsInfo = useContext(SettingsContext);
  
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('pomodoro'); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(settingsInfo.workMinutes * 60); //should set the initial seconds in here

  function tick() {
    setSecondsLeft(secondsLeft - 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused) {
        return;
      }
      if (secondsLeft === 0) {
        return;
        // return switchMode();
      }

      tick();
    },1);

    return () => clearInterval(interval);
  }, [isPaused, secondsLeft, mode]);

  const totalSeconds = mode === 'pomodoro'
    ? settingsInfo.workMinutes * 60
    : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if(seconds < 10) seconds = '0'+seconds;

  return (
    <div>
    <SelectTimerType mode={mode} setMode={setMode}/>
      <CircularProgressbar
        value={percentage}
        text={minutes + ':' + seconds}
        styles={buildStyles({
        textColor:'#20 10 10',
        pathColor:mode !== 'pomodoro' ? green : red,
        tailColor:'rgba(255,255,255,.2)',
      })} />
      <div style={{marginTop:'20px'}}>
        {isPaused
          ? <PlayButton onClick={() => { setIsPaused(false)}} />
          : <PauseButton onClick={() => { setIsPaused(true)}} />}
      </div>
      <div style={{marginTop:'20px'}}>
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>

      {mode !== "pomodoro" && <Suggestions />}
    </div>
  );
}

export default Timer;