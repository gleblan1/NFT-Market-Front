import { ethers } from "ethers";
import {abi} from '@contract-data/MyToken.json';
import { MyToken } from '@contract-data/typechain-types';
import { Config } from "@types/config";


export async function getConfig(): Promise<Config> {
    const contract = new ethers.Contract(
      "0x87c95844179E2011b49E8CD2Efb8C034099c6739",
      abi
  ) as unknown as MyToken;

  const provider = new ethers.BrowserProvider((window as any).ethereum);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();

  return {contract, provider, signer, address}
}