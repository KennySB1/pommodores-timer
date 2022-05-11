import Suggestions from "./Suggestions"
import { useState } from "react";
import { SelectTimerType } from './SelectTimerType';
import { Timer } from "./Timer";
import TodoComponent from "./TodoList";

function TimerContainer() {
  const [mode, setMode] = useState('pomodoro');

  return (
      <div>
        <SelectTimerType mode={mode} setMode={setMode} />
        <div style={{marginTop:'20px'}}>
          <Timer mode={mode}/>
          {mode == "pomodoro" && <TodoComponent/>}
        </div>
          {mode !== "pomodoro" && <Suggestions/>}
          
      </div>
  );
}

export default TimerContainer;