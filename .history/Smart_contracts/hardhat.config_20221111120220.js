// https://eth-rinkeby.alchemyapi.io/v2/eXBozXtPx9vIzX1CJ_g7gz87UOQOiP70

require('@nomiclabs/hardhat-waffle');
// require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.9",
  networks:{
    goerli: {
      url:  import.meta.env.ALCHEMY_GOERLI_WEB3,
      accounts : [import.meta.env.PRIVATE_KEY]
    }
  }
};
