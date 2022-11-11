// https://eth-rinkeby.alchemyapi.io/v2/eXBozXtPx9vIzX1CJ_g7gz87UOQOiP70

require('@nomiclabs/hardhat-waffle');
// require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.9",
  networks:{
    goerli: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/eXBozXtPx9vIzX1CJ_g7gz87UOQOiP70',
      accounts : ['ee83f979f97f33c79d45e3dc0ff236fb45e628e69b98f976041911cb34bada08']
    }
  }
};
