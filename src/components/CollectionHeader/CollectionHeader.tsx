import { Box, Button, Stack, Typography } from "@mui/material";
import React, { FC, useCallback } from "react";
import { CollectionHeaderProps } from "./CollectionHeader.types";
import { useClasses } from "./CollectionHeader.style";

import Bg from '../../assets/coins_bg.jpg';
import { useNavigate } from "react-router-dom";
import BasicTabs from "../Tabs/BasicTabs";
import { Search } from "../Search/Search";

export const CollectionHeader: FC<CollectionHeaderProps> = ({ image, totalSupply, currentSupply, owner, name }) => {
  const { classes } = useClasses({ collection: Bg });
  const navigate = useNavigate();
  const countListed = useCallback(() => {
    return Math.floor((currentSupply ?? 0) * 100 / (totalSupply ?? 1));
  }, [currentSupply, totalSupply]);

  return (
    <>
      <Box className={classes.container}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h2" color="white">{name}</Typography>
            <Typography variant="h5" color="#b2dfdb">{owner}</Typography>
          </Box>
          <Box sx={{ width: '15%', display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexDirection: 'column' }}>
            <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="h6" color="white">Total supply</Typography>
              <Typography variant="h6" color="#b2dfdb">{totalSupply}</Typography>
            </Box>
            <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="h6" color="white">Listed</Typography>
              <Typography variant="h6" color="#b2dfdb">{countListed()}%</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{width: '100%', padding: '0 5% 5% 5%'}}>
        <Typography variant="h5" color='secondary'>Description of NFT collection</Typography>
      </Box>
      <BasicTabs/>
    </>
  );
};