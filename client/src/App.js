import {useAuth} from './contexts/AuthContext'
import Header from './components/Header'
import { Suggestions } from './components/Suggestions'
import TimerContainer from "./components/TimerContainer";
import Settings from "./components/Settings";
import {useState} from "react";
import SettingsContext from "./components/SettingsContext";


export default function App() {
  const {isLoggedIn} = useAuth()
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <div className='App'>
      <Header />
      <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <TimerContainer />}
      </SettingsContext.Provider>
      
      </main>

    </div>
  )
}

