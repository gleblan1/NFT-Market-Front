import { ethers } from "ethers"
import { MyToken } from "../contract-data/typechain-types"

export type Config ={
  contract: MyToken,
  provider: ethers.BrowserProvider,
  signer: ethers.Signer,
  address: string
}

export type Token = {
  id: number,
  uri: string
}