const main =async()=>{
    const Transaction= await hre.ethers.getContractFactory("Transaction");
    const transaction = await Transaction.deploy();
    await transaction.deployed();

    console.log("deployed to", transaction.address);

}


const runMain= async()=>{
    try {
       await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();