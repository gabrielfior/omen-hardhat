import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";


const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const lockedAmount = hre.ethers.parseEther("0.01").toString();

  await deploy('WXDAI', {
    from: deployer,
    args: [],
    log: true,
  });
};
export default func;
func.id = "deploy_wxdai"; // id required to prevent reexecution
func.tags = ["await deploy('WXDAI"];
