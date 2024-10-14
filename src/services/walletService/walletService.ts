import { create } from 'zustand'
import { getConfig } from '@helpers/getConfig'
import { ethers } from 'ethers'
import { Wallet } from './walletService.types'
import { Config } from '@types/config'

export const useWallet = create<Wallet>()((set) => ({
  address$: ethers.ZeroAddress,
  updateAddress: async () => {
    const config: Config = await getConfig();
    set((state) => ({ address$: config.address }));
  }
}))