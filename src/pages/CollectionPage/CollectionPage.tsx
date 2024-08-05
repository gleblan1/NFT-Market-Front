import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ImgMediaCard } from "../../components/Card/Card";
import { getAllTokens, getConfig } from "../../helpers";
import { Config, Token } from "../../types";
import { useLoading } from "../../services/loadingService/loadingService";
import { CollectionHeader } from "../../components/CollectionHeader";
import { Items } from "./Items";
import { Search } from "../../components/Search/Search";

export const CollectionPage: React.FC = () => {
    const [tokens, setTokens] = useState<Token[]>([]);
    const [currentSupply, setCurrentSupply] = useState<number>(0);
    const { setIsLoading } = useLoading();

    useEffect(() => {
        setIsLoading(true, 'Loading tokens...');
        getConfig().then((config: Config) => 
        {
            getAllTokens(config.contract, config.signer, config.address).then((tokens: Token[]) => {
                setCurrentSupply(tokens.length);
                if (tokens.length === 0) {
                    setIsLoading(false, '');
                }
                setTokens(tokens);
            })
        }
        );
    }, []);

    useEffect(() => {
        if (tokens.length !== 0) {
            setIsLoading(false, '');
        }
    }, [tokens]);

    return (
        <>
            <CollectionHeader image={'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'} name={'Heads or Tails'} owner={''} totalSupply={60} currentSupply={currentSupply}/>
        </>
    );
};
