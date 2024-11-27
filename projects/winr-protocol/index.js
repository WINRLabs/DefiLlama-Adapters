const { abi } = require("./abi");

const usdcTokenContract = "0x59edbB343991D30f77dcdBad94003777e9B09BA9";
const usdtTokenContract = "0x0381132632E9E27A8f37F1bc56bd5a62d21a382B";
const winrTokenContract = "0xBF6FA9d2BF9f681E7b6521b49Cf8ecCF9ad8d31d";
const wethTokenContract = "0xE60256921AE414D7B35d6e881e47931f45E027cf";
const arbTokenContract = "0xF2857668777135E22f8CD53C97aBf8821b7F0bdf";
const btcTokenContract = "0x83c2A33b985ec85205Da0B6d40FC8aAD51354046";
const boopTokenContract = "0x80ff76cc453C6d8C52092Bdd8b69144DCd64fE73";
const spxTokenContract = "0x503C33E8074A579F5d607BA8a36aE54A6cC6F1A9";
const brettTokenContract = "0xA817eeb2e2e6830521595272464399b7Ace58586";
const toshiTokenContract = "0x3A3e8F73C51B5AE1697587058f0C1Da0D3a37024";
const mogTokenContract = "0x157E083590a2dA16742b0FFc1C9c689147e00E8d";
const shibTokenContract = "0xaF58D898FB995b5B5988A5e63De721Ca76535aC2";
const pepeTokenContract = "0xB198549884cE8a45891466c5B30411124e89e57F";
const klausTokenContract = "0xA3AcD262E0313d21C101e6A927d8d87d4C7e5A14";

const contracts = [
  usdcTokenContract,
  usdtTokenContract,
  winrTokenContract,
  wethTokenContract,
  arbTokenContract,
  btcTokenContract,
  boopTokenContract,
  spxTokenContract,
  brettTokenContract,
  toshiTokenContract,
  mogTokenContract,
  shibTokenContract,
  pepeTokenContract,
  klausTokenContract,
];

async function tvl(api) {
  const results = await api.multiCall({
    abi: "erc20:totalSupply",
    calls: contracts,
  });

  console.log(results);

  return results.outputs.reduce((acc, cur, i) => {
    acc[contracts[i]] = cur.output;
    return acc;
  }, {});
}

module.exports = {
  start: 67057671,
  winr: {
    tvl,
  },
};
