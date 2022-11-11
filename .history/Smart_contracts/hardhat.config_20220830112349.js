// https://eth-rinkeby.alchemyapi.io/v2/eXBozXtPx9vIzX1CJ_g7gz87UOQOiP70

require('@nomiclabs/hardhat-waffle');
// require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.9",
  networks:{
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/eXBozXtPx9vIzX1CJ_g7gz87UOQOiP70',
      accounts : ['719d0b990233498d856b105c77acae74c6cd858f2a41ac9be8a805f708ec2275']
    }
  }
};
