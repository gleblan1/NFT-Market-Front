import { Avatar, Box, Button, Paper, Menu, MenuItem, Switch, FormControlLabel } from "@mui/material";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import { useWallet } from "../../services/walletService";
import React from "react";
import { useClasses } from "./Header.style";
import { getConfig } from "../../helpers";
import { Config } from "../../types";
import { Search } from "../Search/Search";
import MUISwitch from "../Switch/Switch";

export function Header() {
    const { address, updateAddress } = useWallet();
    const navigate = useNavigate();
    const [localAddress, setLocalAddress] = useState<string>(ethers.ZeroAddress);
    const [isScrolledToTop, setIsScrolledToTop] = useState<boolean>(true);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const { classes } = useClasses({ isScrolledToTop });

    useEffect(() => {
        if (address) setLocalAddress(address);
    }, [address]);

    useEffect(() => {
        const handleAccountsChanged = (accounts: string[]) => {
            if (accounts.length > 0) {
                updateAddress(accounts[0]);
            } else {
                updateAddress('');
            }
        };

        if ((window as any).ethereum) {
            (window as any).ethereum.on('accountsChanged', handleAccountsChanged);

            return () => {
                (window as any).ethereum.removeListener('accountsChanged', handleAccountsChanged);
            };
        }
    }, [updateAddress]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolledToTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    async function connectWallet() {
        const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
        updateAddress(accounts[0]);
    }

    function stringToColor(string: string) {
        let hash = 0;
        for (let i = 0; i < string.length; i++) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = '#';
        for (let i = 0; i < 3; i++) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        return color;
    }

    function stringAvatar(name: string) {
        if (!name || name.length < 2) {
            return { sx: { bgcolor: stringToColor('Default') }, children: 'NN' };
        }
        const initials = name.slice(0, 2).toUpperCase();
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: initials,
        };
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleDisconnect() {
        getConfig().then((config: Config) => {
            (window as any).ethereum.request({
                method: 'wallet_dis',
            });
        });
    }

    return (
        <Paper elevation={3} className={classes.header}>
            <Box>
                <Button sx={{ height: 50 }} onClick={() => navigate("/")}>Home</Button>
                <Button sx={{ height: 50 }} onClick={() => navigate("/collection")}>Collection</Button>
                <Button sx={{ height: 50 }} onClick={() => navigate("/own-tokens")}>My tokens</Button>
            </Box>
            <Box sx ={{display: 'flex'}}>
                <MUISwitch/>
                <Button sx={{ height: 50, width: "auto" }} onClick={handleClick}>
                    <Avatar {...stringAvatar(address.slice(2))} />
                </Button>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose} className={classes.text} sx={{ borderBottom: "1px solid #E0E0E0" }}>{localAddress}</MenuItem>
                <MenuItem onClick={handleDisconnect} className={classes.text}>Logout</MenuItem>
            </Menu>

        </Paper>
    );
}
