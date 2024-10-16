import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ImgMediaCard } from "@components/Card/Card";
import { getConfig, getTokens } from "@helpers/index";
import { Config, Token } from "@types/index";
import { useLoading } from "@services/loadingService/loadingService";
import { useEffect, useState } from "react";

export const OwnTokensPage: React.FC = () => {
    const [tokens, setTokens] = useState<Token[]>([]);
    const { setIsLoading } = useLoading();

    useEffect(() => {
        setIsLoading(true, 'Loading tokens...');
        getConfig().then((config: Config) =>
            getTokens(config.contract, config.signer, config.address).then((tokens: Token[]) => {
                if (tokens.length === 0) {
                    setIsLoading(false, '');
                }
                setTokens(tokens);
            })
        );
    }, []);

    useEffect(() => {
        if (tokens.length !== 0) {
            setIsLoading(false, '');
        }
    }, [tokens]);

    return (
        <>
            <Grid container spacing={2} sx={{width: '90%', marginTop: '13vh'}}>
                {tokens.length === 0 ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '30vh', flexDirection: 'column', gap: 5 }}>
                        <Typography color='secondary'>
                            No minted tokens yet
                        </Typography>
                    </Box>
                ) : (
                    tokens.map((token) => (
                        <Grid key={token.id} item xs={12} sm={6} md={4} lg={3}>
                            <ImgMediaCard picture={token.uri} tokenId={token.id} isClickable={true} />
                        </Grid>
                    ))
                )}
            </Grid>
        </>
    );
};
