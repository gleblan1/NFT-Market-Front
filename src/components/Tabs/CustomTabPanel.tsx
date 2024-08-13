import React, { FC } from 'react';
import { TabPanelProps } from './BasicTabs.types';
import { useClasses } from './BasicTabs.style';
import { Box } from '@mui/material';

export const CustomTabPanel: FC<TabPanelProps> = ({ children, value, index, ...other } ) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>{children}</Box>}
    </div>
  );
}