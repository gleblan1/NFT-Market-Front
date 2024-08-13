import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Items } from '../../pages/CollectionPage/Items';
import { CustomTabPanel } from './CustomTabPanel';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box width={'100%'}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 5  }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Items" {...a11yProps(0)} />
          <Tab label="Offers" {...a11yProps(1)} />
          <Tab label="Analytics" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Items/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <></>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <></>
      </CustomTabPanel>
    </Box>
  );
}
