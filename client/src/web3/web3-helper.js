const Web3 = require("web3");

var getContractAddress = function(network = "mainnet") {
  if (network === "rinkeby") {
    return "0x696Ba64bD47Db0e51323aEf20803903be7a71F3a";
  }
  return "";
};

var getContractAbi = function() {
  return [{"constant": true,"inputs": [{"name": "interfaceId","type": "bytes4"}],"name": "supportsInterface","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "name","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "tokenId","type": "uint256"}],"name": "getApproved","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "to","type": "address"},{"name": "tokenId","type": "uint256"}],"name": "approve","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "totalSupply","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "specialAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "owner","type": "address"},{"name": "index","type": "uint256"}],"name": "tokenOfOwnerByIndex","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "unpause","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "account","type": "address"}],"name": "isPauser","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "index","type": "uint256"}],"name": "tokenByIndex","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "tokenOfInfectionAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "paused","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "tokenId","type": "uint256"}],"name": "ownerOf","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "renouncePauser","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "owner","type": "address"}],"name": "balanceOf","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "renounceOwnership","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "account","type": "address"}],"name": "addPauser","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "pause","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "owner","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "isOwner","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "symbol","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "account","type": "address"}],"name": "addMinter","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "renounceMinter","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "zombieCounter","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "to","type": "address"},{"name": "approved","type": "bool"}],"name": "setApprovalForAll","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "account","type": "address"}],"name": "isMinter","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "walletGlarbs","outputs": [{"name": "","type": "uint8"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "proxyRegistryAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "antidoteAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"inputs": [{"name": "tokenName","type": "string"},{"name": "tokenSymbol","type": "string"},{"name": "_proxyRegistryAddress","type": "address"},{"name": "_antidoteAddress","type": "address"},{"name": "_tokenOfInfectionAddress","type": "address"}],"payable": false,"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": false,"name": "_addr","type": "address"},{"indexed": false,"name": "_tokenId","type": "uint256"}],"name": "NewZombie","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "_addr","type": "address"},{"indexed": false,"name": "_tokenId","type": "uint256"}],"name": "NewHuman","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "_addr","type": "address"},{"indexed": false,"name": "_tokenId","type": "uint256"}],"name": "LoveInTheAir","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "_from","type": "address"},{"indexed": false,"name": "_to","type": "address"}],"name": "TurnedZombie","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "_from","type": "address"},{"indexed": false,"name": "_to","type": "address"}],"name": "CuredHuman","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "previousOwner","type": "address"},{"indexed": true,"name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "account","type": "address"}],"name": "MinterAdded","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "account","type": "address"}],"name": "MinterRemoved","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "account","type": "address"}],"name": "Paused","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "account","type": "address"}],"name": "Unpaused","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "account","type": "address"}],"name": "PauserAdded","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "account","type": "address"}],"name": "PauserRemoved","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "from","type": "address"},{"indexed": true,"name": "to","type": "address"},{"indexed": true,"name": "tokenId","type": "uint256"}],"name": "Transfer","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "owner","type": "address"},{"indexed": true,"name": "approved","type": "address"},{"indexed": true,"name": "tokenId","type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "owner","type": "address"},{"indexed": true,"name": "operator","type": "address"},{"indexed": false,"name": "approved","type": "bool"}],"name": "ApprovalForAll","type": "event"},{"constant": false,"inputs": [{"name": "antidote","type": "address"}],"name": "setAntidoteAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "tokenOfInfection","type": "address"}],"name": "setTokenOfInfectionAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "to","type": "address"},{"name": "glarbType","type": "uint256"}],"name": "mint","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "tokenId","type": "uint256"}],"name": "glarbs","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "humanCount","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "zombieCount","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "addr","type": "address"}],"name": "setSpecialAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "addr","type": "address"}],"name": "_checkHasAntidote","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "from","type": "address"},{"name": "to","type": "address"}],"name": "handleAntidote","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "from","type": "address"},{"name": "to","type": "address"},{"name": "tokenId","type": "uint256"}],"name": "transferFrom","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "from","type": "address"},{"name": "to","type": "address"},{"name": "tokenId","type": "uint256"}],"name": "safeTransferFrom","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "from","type": "address"},{"name": "to","type": "address"},{"name": "tokenId","type": "uint256"},{"name": "","type": "bytes"}],"name": "safeTransferFrom","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "_tokenId","type": "uint256"}],"name": "tokenURI","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "proxyRegistry","type": "address"}],"name": "setProxyRegistryAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "tokenOwner","type": "address"},{"name": "tokenOperator","type": "address"}],"name": "isApprovedForAll","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"}];
};

// Detect the user's Web3 provider
var web3, contract;
if (typeof window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
} else {
  //web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/JnSpp0aGRIKmiCScdtOQ"));
  web3 = new Web3(
    new Web3.providers.HttpProvider(
      "https://rinkeby.infura.io/JnSpp0aGRIKmiCScdtOQ"
    )
  );
}

contract = new web3.eth.Contract(
  getContractAbi(),
  getContractAddress("rinkeby")
);

var humanCount = async function() {
  return await contract.methods.humanCount().call();
};

var zombieCount = async function() {
  return await contract.methods.zombieCount().call();
};

export default {
  web3: web3,
  humanCount: humanCount,
  zombieCount: zombieCount
};
