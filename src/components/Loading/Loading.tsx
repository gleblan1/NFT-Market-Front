import { Box, Typography, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { useClasses } from './Loading.style';

export const Loading: FC<LoadingProps> = ({ text }) => {
  const { classes } = useClasses();
  return (
    <>
      <Box className={classes.container}>
        <Typography variant='h3'>
          {text}
        </Typography>
      </Box>
    </>
  );
}
