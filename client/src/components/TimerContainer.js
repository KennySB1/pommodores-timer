import Suggestions from "./Suggestions"
import {useContext, useState, useEffect} from "react";
import SettingsContext from "./SettingsContext";
import { SelectTimerType } from './SelectTimerType';
import { Timer } from "./Timer";

function TimerContainer() {
  const [mode, setMode] = useState('pomodoro');

  return (
      <div>
        <SelectTimerType mode={mode} setMode={setMode} />
        <div style={{marginTop:'20px'}}>
          <Timer mode={mode}/>
        </div>
          {mode !== "pomodoro" && <Suggestions />}
      </div>
  );
}

export default TimerContainer;