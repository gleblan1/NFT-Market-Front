import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useClasses } from "./Welcome.types";
import { useNavigate } from "react-router-dom";

export function WelcomePage() {
    const {classes} = useClasses();
    const navigate = useNavigate();
    const mintToken = () => {
        navigate('/mint-page')
     };
    return <Box className={classes.container}>
        <Typography variant="h1" color={"secondary"}>Welcome to NFT project</Typography>
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <Button variant="outlined" onClick={mintToken}> Mint Token</Button>
        </Box>
    </Box>;
}