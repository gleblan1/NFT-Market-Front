import * as React from 'react';
import {Card} from '@mui/material';
import {CardMedia} from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { ImgMediaCardProps } from './Card.types';
import { useClasses } from './Card.style';
import { Box, Typography } from '@mui/material';

export const ImgMediaCard: FC<ImgMediaCardProps> = ({ picture, tokenId, isClickable }) => {
    const navigate = useNavigate();
    const { classes } = useClasses();

    return (
        isClickable ?
            <Button 
                sx={{ borderRadius: 10 }} 
                onClick={() => navigate('/token/' + tokenId) }
            >
                <Box className={classes.card}>
                    <Card sx={{borderRadius: 10 }}>
                        <CardMedia
                            component="img"
                            alt="picture"
                            height="300"
                            image={picture}
                            className={classes.cardMedia}
                        />
                        <Box className={classes.overlay}>
                            <Typography variant="h5" color="white">{`NFT #${tokenId}`}</Typography>
                            <Button 
                                variant="contained" 
                                className={classes.button}
                            >
                                View
                            </Button>
                        </Box>
                    </Card>
                </Box>
            </Button> :
            <Card sx={{borderRadius: 10 }}>
                <CardMedia
                    component="img"
                    alt="picture"
                    height="300"
                    image={picture}
                />
            </Card>
    );
}
