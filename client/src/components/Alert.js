import audio from '../sounds/alarm.mp3'

import React from 'react'

class AudioPlayer extends React.Component {
  playAudio = ()=> {
    new Audio(audio).play()
  }
}
export default AudioPlayer