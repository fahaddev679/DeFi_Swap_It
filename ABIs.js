const erc20Abi = ["function decimals() public view returns (uint8)"];

const factoryAbi = ["function getPair(address tokenA, address tokenB) external view returns (address pair)"];

const pairAbi = [
    "function token0() external view returns (address)",
    "function token1() external view returns (address)",
    "function getReserves() public view returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast)"
];

const routerAbi = ["function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)"];

module.exports = {
    erc20Abi,
    factoryAbi,
    pairAbi,
    routerAbi
}