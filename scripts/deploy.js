async function main(){
  // Hardhat always runs the compile task when running scripts through it.
  // If this runs in a standalone fashion you may want to call compile manually
  // to make sure everything is compiled
  // await run("compile");
  // We get the contract to deploy
  const TestTokenFactory = await ethers.getContractFactory(
    'TestToken',
  );
  const testToken = await TestTokenFactory.deploy();
  await testToken.deployed();
  console.log('TestToken deployed to: ', testToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
