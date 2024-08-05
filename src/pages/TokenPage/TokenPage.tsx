import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImgMediaCard } from "../../components/Card/Card";
import { BigNumberish } from "ethers";
import { getConfig } from "../../helpers";
import { Config } from "../../types";
import { useLoading } from "../../services/loadingService/loadingService";
import { useClasses } from "./TokenPage.style";

export const TokenPage: React.FC = () => {
    const {id} = useParams()
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [picture, setPicture] = useState('')
    const [isOwner, setIsOwner] = useState<boolean>(false)
    const { setIsLoading} = useLoading();
    const navigate = useNavigate();
    const {classes} = useClasses();

    function handleBack(){
        navigate('/')
    }
    async function handleBurn() {
        setIsLoading(true, 'Burning token...')
        try {
            const {contract, signer} = await getConfig();
            const tokenId = id as BigNumberish;            
            const tx = await contract.connect(signer).burn(tokenId);
            await tx.wait();
            handleBack();
        } catch (err) {
            console.error('Error burning token:', err);
        } finally {
            setIsLoading(false, '')
        }
    }

    useEffect(()=>{
        setIsLoading(true, 'Loading token...')
        getConfig().then((config: Config) => {return config}).then((config)=>{
            config.contract.connect(config.signer).tokenURI(id as BigNumberish).then(uri =>{
                axios.get(uri).then(response=>response.data).then(data=>{
                    setDescription(data.description)
                    setTitle(data.name)
                    setPicture(data.image)
                }).catch(err=>console.log(err))
            });
            config.contract.connect(config.signer).ownerOf(id as BigNumberish).then(owner =>{
                if(owner === config.address){
                    setIsOwner(true)
                }
            })
        }).catch(()=>{
            setIsLoading(false, '')
        })
    }, [])

    useEffect(()=>{
        if(picture){
            setIsLoading(false, '')
        }
    }, [picture])
    
    return (
        <>
            <Box className={classes.container}>
                <Box className={classes.article}>
                    <ImgMediaCard picture={picture} clickable={false} tokenId={Number(id)}></ImgMediaCard>
                    <Box sx={{width: "50%"}}>
                        <Typography variant="h2" color={"secondary"}>{title}</Typography>
                        <Typography variant="h6" color={"secondary"}>{description}</Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", gap: 2}}>
                    <Button variant="outlined" onClick={handleBack}>Back</Button>
                    {isOwner ? <Button variant="outlined" onClick={handleBurn}>Burn</Button> : null}
                </Box>
            </Box>
        </>
        );
}