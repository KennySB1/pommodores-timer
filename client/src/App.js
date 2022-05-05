import { useState } from 'react'
import {useAuth} from './contexts/AuthContext'
import Header from './components/Header'
import Timer from './components/Timer'
import Settings from './components/Settings'
import SettingsContext from './components/SettingsContext'


export default function App() {
  const {isLoggedIn} = useAuth()
  
  const [showSettings, setShowSettings] = useState(true)
  const [workMinutes, setWorkMinutes] = useState(25)
  const [breakMinutesShort, setBreakMinutesShort] = useState(5)
  const [breakMinutesLong, setBreakMinutesLong] = useState(15)
  
  return (
    <div className='App'>
      <Header />
      <main>
        <SettingsContext.Provider value = {{
          showSettings,
          setShowSettings,
          workMinutes,
          setWorkMinutes,
          breakMinutesShort,
          breakMinutesLong,
          setBreakMinutesShort,
          setBreakMinutesLong,
        }}>
          {showSettings ? <Settings /> : <Timer />}
        </SettingsContext.Provider>
        </main>
      {isLoggedIn ? <LoggedInText /> : <LoggedOutText />}
    </div>
  )
}

const LoggedInText = () => {
  const {account} = useAuth()

  return <p>Hey, {account.username}! I'm happy to let you know: you are authenticated!</p>
}

const LoggedOutText = () => (
  <p>Don't forget to start your backend server, then authenticate yourself.</p>
)
