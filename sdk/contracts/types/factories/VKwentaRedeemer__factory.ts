/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  VKwentaRedeemer,
  VKwentaRedeemerInterface,
} from "../VKwentaRedeemer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "redeemer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "redeemedAmount",
        type: "uint256",
      },
    ],
    name: "Redeemed",
    type: "event",
  },
  {
    inputs: [],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class VKwentaRedeemer__factory {
  static readonly abi = _abi;
  static createInterface(): VKwentaRedeemerInterface {
    return new utils.Interface(_abi) as VKwentaRedeemerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VKwentaRedeemer {
    return new Contract(address, _abi, signerOrProvider) as VKwentaRedeemer;
  }
}
