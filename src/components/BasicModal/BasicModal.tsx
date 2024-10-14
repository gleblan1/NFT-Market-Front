import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { BasicModalProps } from './BasicModal.types';
import { useClasses } from './BasicModal.style';
import { Stack } from '@mui/material';

export const BasicModal: FC<BasicModalProps> = ({open, handleClose, text, tokenId}) => {

  const navigate = useNavigate();
  const {classes} = useClasses();
//TODO: поставить руты в енаме
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.container}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Congratulations
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {text}
          </Typography>
        <Stack justifyContent={"end"} alignItems={"end"} flexDirection={"column"} gap={2}>
          <Button className={classes.button} onClick={() => navigate(`/token/${tokenId}`)}>View NFT</Button>
        </Stack>
        </Box>
      </Modal>
    </div>
  );
}
