import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Card, CardMedia, Typography } from '@mui/material';
import { FC, useState } from 'react';
import coinflip from '@assets/coinflip.gif';
import coinflip_disabled from '@assets/coinflip_disabled.gif';
import { BasicModal } from '@components/BasicModal';
import { getConfig } from '@helpers/getConfig';
import { useClasses } from './MintPage.style';
import { api } from '@axios/api';

export const MintPage: FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tokenId, setTokenId] = useState(1);
  const [loading, setLoading] = useState(false);

  const { classes } = useClasses();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  async function mint() {
    setIsEnabled(true);
    setLoading(true); 
    try {
      const { contract, signer, address } = await getConfig();

      const mintRoute = process.env.MINT_ROUTE;

      const response = await api.post(`${mintRoute}`, { address });
      console.log(response);
      const data = response.data;
      console.log(data);

      if (data.data === 1) {
        console.log('Your place in queue is', data.data);
      }

      const tx = await contract.connect(signer).safeMint(address, data.data);
      await tx.wait();

      const totalSupply = await contract.connect(signer).totalSupply();
      const id = Number(await contract.connect(signer).tokenByIndex(BigInt(Number(totalSupply) - 1)));
      setTokenId(id);

      tx.wait().then(() => {
        setLoading(false);
        setIsEnabled(false);
        setTimeout(() => {
          setIsModalOpen(true);
        }, 700);
      });
    } catch (error) {
      setLoading(false);
      setIsEnabled(false);
      console.error(error);
    }
  }

  return (
    <Box className={classes.container}>
      <Typography variant="h1" color="secondary">Mint NFT</Typography>
      {isEnabled && <Typography variant="h4" color="primary">Minting...</Typography>}
      <Card sx={{ maxWidth: 345, borderRadius: 10, height: 200, width: 300 }}>
        <CardMedia
          component="img"
          alt="picture"
          height="200"
          image={isEnabled ? coinflip : coinflip_disabled}
        />
      </Card>
      <BasicModal open={isModalOpen} handleClose={handleClose} text="NFT minted" openseaLink="" tokenId={tokenId} />
      <Button
        variant="outlined"
        sx={{ width: '20%', height: 50}}
        onClick={mint}
        disabled={loading}
      >
        Mint
      </Button>
    </Box>
  );
}
