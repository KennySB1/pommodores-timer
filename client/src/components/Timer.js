import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";
import {useContext, useState, useEffect} from "react";
import SettingsContext from "./SettingsContext";

const red = '#f54e4e';
const green = '#4aec8c';

export const Timer = (props) => {
  const settingsInfo = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(settingsInfo.workMinutes * 60);

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
  }, [isPaused, secondsLeft]);

  useEffect(() => {
      setSecondsLeft(totalSeconds)
  }, [props.mode]);

  const calculateSeconds = () => {
    if(props.mode === 'pomodoro') {
      return settingsInfo.workMinutes * 60;
    } else if(props.mode === 'shortBreak') {
      return settingsInfo.shortBreakMinutes * 60;
    } else {
      return settingsInfo.longBreakMinutes * 60;
    }
  }
  let totalSeconds = calculateSeconds();

  let percentage = Math.round(secondsLeft / totalSeconds * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if(seconds < 10) seconds = '0'+seconds;

  return (
    <>
    <CircularProgressbar
      value={percentage}
      text={minutes + ':' + seconds}
      styles={buildStyles({
      textColor:'#20 10 10',
      pathColor:props.mode !== 'pomodoro' ? green : red,
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
  </>
  )
}
