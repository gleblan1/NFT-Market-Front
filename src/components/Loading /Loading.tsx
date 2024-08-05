import { Box, Typography, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { useClasses } from './Loading.style';



export const Loading: FC<LoadingProps> = ({text}) => {
  const styles = useClasses();
  return (
    <>
      <Box className={styles.classes.root}>
        <Typography variant='h3' className={styles.classes.loadingText}>
          {text}<span className="dots"></span>
        </Typography>
      </Box>
    </>
  );
}
