import { Box, Button, Stack, Typography } from "@mui/material";
import React, { FC, useCallback } from "react";
import { CollectionHeaderProps } from "./CollectionHeader.types";
import { useClasses } from "./CollectionHeader.style";
//alias
import Bg from '../../assets/coins_bg.jpg';
import { useNavigate } from "react-router-dom";
import BasicTabs from "../Tabs/BasicTabs";
import { Search } from "../Search/Search";
import colors from "../../theme/colors";

export const CollectionHeader: FC<CollectionHeaderProps> = ({ totalSupply, currentSupply, owner, name }) => {
  const { classes } = useClasses({ collection: Bg });
  const navigate = useNavigate();
  const countListed = useCallback(() => {
    return Math.floor(currentSupply * 100 / (totalSupply ?? 1));
  }, [currentSupply, totalSupply]);

  return (
    <>
      <Box className={classes.container}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h2" color={colors.white}>{name}</Typography>
            <Typography variant="h5" color={colors.primary}>{owner}</Typography>
          </Box>
          <Stack justifyContent={'space-between'} alignItems={'end'} sx={{ width: '15%' }}>
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
              <Typography variant="h6" color={colors.white}>Total supply</Typography>
              <Typography variant="h6" color={colors.primary}>{totalSupply}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
              <Typography variant="h6" color={colors.white}>Listed</Typography>
              <Typography variant="h6" color={colors.primary}>{countListed()}%</Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ width: '100%', padding: '0 5% 5% 5%' }}>
        <Typography variant="h5" color='secondary'>Description of NFT collection</Typography>
      </Box>
      <BasicTabs/>
    </>
  );  
};