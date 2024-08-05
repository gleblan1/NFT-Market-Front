import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialUISwitch } from './Switch.style';
import { useTheme } from '../../services/themeService/themeService';

export default function MUISwitch() {
  const {isLight, setTheme} = useTheme();
  function changeHandler(){
    setTheme(!isLight)
  }
  return (
    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label=""
        onChange={changeHandler}
      />
    </FormGroup>
  );
}