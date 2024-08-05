import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';



const MintButton = () => {
    const navigate = useNavigate();
    
    
    const mintToken = () => {
       navigate('/mint-page')
    };
    
    return (
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <Button variant="outlined" onClick={mintToken}> Mint Token</Button>
        </Box>
    );
};

export default MintButton;
