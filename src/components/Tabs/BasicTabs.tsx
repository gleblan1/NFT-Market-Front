import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Items } from '../../pages/CollectionPage/Items';
import { useClasses } from './BasicTabs.style';
import { Search } from '../Search/Search';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  const {classes} = useClasses();

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
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 5  }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Items" {...a11yProps(0)} />
          <Tab label="Offers" {...a11yProps(1)} />
          <Tab label="Analytics" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Items></Items>
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
