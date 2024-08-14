import React, { useEffect, useState } from "react";
import { getAllTokens, getConfig } from "@helpers/index";
import { Config, Token } from "@types/index";
import { useLoading } from "@services/loadingService/loadingService";
import { CollectionHeader } from "@components/CollectionHeader";

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
                setTokens(tokens);
                if (tokens.length === 0) {
                    setIsLoading(false, '');
                }
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
            <CollectionHeader name={'Heads or Tails'} owner={''} totalSupply={60} currentSupply={currentSupply}/>
        </>
    );
};
