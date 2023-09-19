const ethers = require('ethers');
const {factoryAbi,erc20Abi,routerAbi,pairAbi} = require('./ABIs');
const {factoryAddress, routerAddress, fromAddress, toAddress} = require('./Address');

const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");

const factoryInstance = new ethers.Contract(factoryAddress, factoryAbi, provider);

const routerInstance = new ethers.Contract(routerAddress, routerAbi, provider);

const priceFetch = async(humanFormat) =>{
    const token1 = new ethers.Contract(fromAddress, erc20Abi, provider);
    const token2 = new ethers.Contract(toAddress, erc20Abi, provider);

    const decimal1 = await token1.decimals();
    const decimal2= await token2.decimals();
    const amountIn = ethers.utils.parseUnits(humanFormat, decimal1).toString();
    const amountsOut = await routerInstance.getAmountsOut(amountIn, [fromAddress, toAddress]);
    const humanOutput = ethers.utils.formatUnits(
        amountsOut[1].toString(),
        decimal2
      )
    console.log(humanOutput);
}
humanFormat = "100";
priceFetch(humanFormat);