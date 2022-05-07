import {Fragment, useState} from 'react'
import {Dialog, DialogTitle, Button, TextField} from '@mui/material'
import Preferences from './Preferences'

const textFieldSx = {mx: 2, my: 0.5}

export default function PreferencesModal({open, close}) {



  const handleChange = (e) => {
    const {name, value} = e.target
  
  }

  return(
    <Dialog open={open} onClose={close}>
      <PreferencesForm handleChange={handleChange} />
    </Dialog>

  )
  
  function PreferencesForm({handleChange}) {
return(
  <Fragment>

    <DialogTitle>Select your favourite break categories</DialogTitle>
    <Preferences />
    </Fragment>
)
  }
}