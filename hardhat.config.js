/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-ethers");

const dotenv = require("dotenv");
dotenv.config({path:__dirname+'/.env'});

console.log(__dirname);
//require('dotenv').config({path:__dirname+'/.env'})


const { API_URL, PRIVATE_KEY} = process.env;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
