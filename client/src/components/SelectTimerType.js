import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const SelectTimerType = () => {
  const [alignment, setAlignment] = React.useState('Pomodoro');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      color="error"
      value={alignment}
      exclusive
      onChange={handleChange}
      size='small'
      fullWidth
    >
      <ToggleButton value="Pomodoro">Pomodoro</ToggleButton>
      <ToggleButton value="Short Break">Short Break</ToggleButton>
      <ToggleButton value="Long Break">Long Break</ToggleButton>
    </ToggleButtonGroup>
  )

}
