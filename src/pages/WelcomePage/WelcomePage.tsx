import { Box, Typography } from "@mui/material";
import React from "react";
import MintButton from "../../components/MintButton/MintButton";
import { useClasses } from "./Welcome.types";

export function WelcomePage() {
    const {classes} = useClasses();
    return <Box className={classes.container}>
        <Typography variant="h1" color={"secondary"}>Welcome to NFT project</Typography>
        <MintButton/>
    </Box>;
}