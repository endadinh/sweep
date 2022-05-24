import { toast } from "react-toastify";
import axios from "axios";
import { approve } from "./Wallet";
import { Load, unLoad } from "./Loader";
import Web3 from "web3";


const Config = JSON.parse(localStorage.getItem('Config'));
const preSaleContractAddress = Config ? Config.preSaleContractAddress : null;
const preSaleContractABI = Config ? Config.preSaleContractABI : null;
const SQFSmartContractABI = Config ? Config.SQFSmartContractABI : null;
const SQFSmartContractAddress = Config ? Config.SQFSmartContractAddress : null;
const BUSDSmartContractAddress = Config ? Config.BUSDSmartContractAddress : null;
const BUSDSmartContractABI = Config ? Config.BUSDSmartContractABI : null;
const NFTSmartContractAddress = Config ? Config.NFTSmartContractAddress : null;
const NFTSmartContractABI = Config ? Config.NFTSmartContractABI : null;
const FactorySmartContractAddress = Config ? Config.FactorySmartContractAddress : null;
const FactorySmartContractABI = Config ? Config.FactorySmartContractABI : null;
const MarketplaceSmartContractAddress = Config ? Config.BUSDSmartContractAddress : null;
const MarketplaceSmartContractABI = Config ? Config.BUSDSmartContractABI : null;
const rpcUrl = Config ? Config.rpcUrl : null;
const web3 = Config ? new Web3(rpcUrl) : null;


export async function preSaleContract() {
    const contractPreSale = new web3.eth.Contract(
        JSON.parse(preSaleContractABI),
        preSaleContractAddress,
        {}
    );
    return contractPreSale;
}

export async function SQFContract() {
    const contractSQF = await new web3.eth.Contract(
        JSON.parse(SQFSmartContractABI),
        SQFSmartContractAddress,
        {}
    );
    return contractSQF;
}

export async function BUSDContract() {
    const contractBUSD = await new web3.eth.Contract(
        JSON.parse(BUSDSmartContractABI),
        BUSDSmartContractAddress,
        {}
    );
    return contractBUSD;
}

export async function NFTContract() { 
    const contractNFT = await new web3.eth.Contract( 
        JSON.parse(NFTSmartContractABI),
        NFTSmartContractAddress,
        {}
    );
    return contractNFT;
}

export async function FactoryContract() { 
    const contractFactory = await new web3.eth.Contract( 
        JSON.parse(FactorySmartContractABI),
        FactorySmartContractAddress,
        {}
    );
    return contractFactory;
}

export async function MarketplaceContract() { 
    const contractMarketplace = await new web3.eth.Contract( 
        JSON.parse(MarketplaceSmartContractABI),
        MarketplaceSmartContractAddress,
        {}
    );
    return contractMarketplace;
}


