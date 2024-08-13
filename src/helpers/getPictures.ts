import { ethers } from "ethers";
import { MyToken } from "../contract-data/typechain-types";
import axios from "axios";
import { Token } from "../types";

export async function getTokens(contract: MyToken, signer: ethers.Signer, address: string) {
  const allTokens = await contract.connect(signer).getAllTokensOfOwner(address)
  let tokens: Token[] = []
  for (let i = 0; i < allTokens.length; i++) {
    const res = await axios.get(allTokens[i].uri)
    tokens[i] = {
      id: Number(allTokens[i].id),
      uri: res.data.image
    }
  }
  return tokens
}

export async function getAllTokens(contract: MyToken, signer: ethers.Signer, address: string) {
  const allTokens = await contract.connect(signer).getAllTOkens()
  let tokens: Token[] = []
  for (let i = 0; i < allTokens.length; i++) {
    const res = await axios.get(allTokens[i].uri)
    tokens[i] = {
      id: Number(allTokens[i].id),
      uri: res.data.image
    }
  }
  return tokens
}