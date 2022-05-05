import { useContext } from 'react'
import ReactSlider from 'react-slider'
import SettingsContext from './SettingsContext'
import '../styles/slider.css'
import BackButton from './buttons/BackButton'

const Settings = () => {
  const settingsInfo = useContext(SettingsContext)
  return(
    <><><>
      <><label>Pomodoro: {settingsInfo.workMinutes}:00</label>
        <ReactSlider
          className={'slider-red'}
          thumbClassName={'thumb-red'}
          trackClassName={'track'}
          value={settingsInfo.workMinutes}
          onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
          min={25}
          max={45} />
      </>
      <><label>Short Break: {settingsInfo.breakMinutesShort}:00</label>
        <ReactSlider
          className={'slider-green'}
          thumbClassName={'thumb-green'}
          trackClassName={'track'}
          value={settingsInfo.breakMinutesShort}
          onChange={newValue => settingsInfo.setBreakMinutesShort(newValue)}
          min={1}
          max={15} />
      </>
    </><><label>Long Break: {settingsInfo.breakMinutesLong}:00</label>
        <ReactSlider
          className={'slider-blue'}
          thumbClassName={'thumb-blue'}
          trackClassName={'track'}
          value={settingsInfo.breakMinutesLong}
          onChange={newValue => settingsInfo.setBreakMinutesLong(newValue)}
          min={15}
          max={30} />
      </></><BackButton onClick={() => settingsInfo.setShowSettings(false)}/></>
  )
}

export default Settings
