import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function SwitchesComponent() {
  return (
    <div>
      <Switch {...label} defaultChecked />
    </div>
  );
}