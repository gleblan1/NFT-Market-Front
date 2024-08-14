import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ImgMediaCard } from "@components/Card/Card";
import { getAllTokens } from "@helpers/getPictures";
import { Config, Token } from "@types/index";
import { useLoading } from "@services/loadingService/loadingService";
import { Search } from "@components/Search/Search";
import { getConfig } from "@helpers/getConfig";

export const Items: React.FC = () => {
    const [tokens, setTokens] = useState<Token[]>([]);
    const [originalTokens, setOriginalTokens] = useState<Token[]>([]);
    const { setIsLoading } = useLoading();

    useEffect(() => {
        setIsLoading(true, 'Loading tokens...');
        getConfig().then((config: Config) => {
            getAllTokens(config.contract, config.signer, config.address).then((tokens: Token[]) => {
                setIsLoading(false, '');
                setTokens(tokens);
                setOriginalTokens(tokens);
            });
        });
    }, []);

    useEffect(() => {
        if (tokens.length !== 0) {
            setIsLoading(false, '');
        }
    }, [tokens]);

    function handleSearch(text: string) {
        const filteredTokens = originalTokens.filter((token) => String(token.id).includes(text));
        setTokens(filteredTokens.length > 0 ? filteredTokens : []);
    }

    return (
        <Box sx={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
           
                <Grid container spacing={2}>
                    <Search searchHandler={handleSearch} />
                    {tokens.map((token) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={token.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <ImgMediaCard picture={token.uri} tokenId={token.id} isClickable={true} />
                        </Grid>
                    ))}
                </Grid>
            
        </Box>
    );
};
