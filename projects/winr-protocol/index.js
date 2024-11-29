// Arbitrum ------------------
const { gmxExports } = require("../helper/gmx");
const WINR_VAULT_CONTRACT = "0x8c50528F4624551Aad1e7A265d6242C3b06c9Fca";
// ----------------------------

const TOKEN_CONTRACTS = {
  USDC: "0x59edbB343991D30f77dcdBad94003777e9B09BA9",
  USDT: "0x0381132632E9E27A8f37F1bc56bd5a62d21a382B",
  WINR: "0xBF6FA9d2BF9f681E7b6521b49Cf8ecCF9ad8d31d",
  WETH: "0xE60256921AE414D7B35d6e881e47931f45E027cf",
  ARB: "0xF2857668777135E22f8CD53C97aBf8821b7F0bdf",
  BOOP: "0x80ff76cc453C6d8C52092Bdd8b69144DCd64fE73",
  BRETT: "0xA817eeb2e2e6830521595272464399b7Ace58586",
  KLAUS: "0xA3AcD262E0313d21C101e6A927d8d87d4C7e5A14",
};

const VAULT_CONTRACTS = {
  USDC: "0xB014186504565e9F6417D8998680B60C450878d8",
  USDT: "0xdE75850DAdedd22faFaa027E5dd33e10f2ec2349",
  WINR: "0x0Ac0b05Ce719ED22de0bAc96a97724A1A8247A23",
  WETH: "0xd9691CE9406E8c04dF56E3c621A254eb368ccD50",
  ARB: "0xA778d316740c51eEa83Bf15250C5f802FA65a04B",
  BOOP: "0x1a0a2e5c0beF085A4aCcd49A5D94B89f4142E71F",
  BRETT: "0xA085997399e8b2BAE89fa896024BE895c7564b96",
  KLAUS: "0x957E36c8FdA5Ce9c866E276ef29Ad13F52a5472a",
};

async function main(api) {
  const owners = Object.values(VAULT_CONTRACTS);
  const tokens = Object.values(TOKEN_CONTRACTS);
  const balances = [];

  for (const i in owners) {
    const owner = owners[i];
    const token = tokens[i];

    balances.push(
      await api.call({
        abi: "erc20:balanceOf",
        target: token,
        params: [owner],
      }),
    );
  }

  api.addTokens(tokens, balances);
}

module.exports = {
  winr: {
    tvl: main,
  },
  arbitrum: {
    tvl: gmxExports({ vault: WINR_VAULT_CONTRACT }),
  },
};
