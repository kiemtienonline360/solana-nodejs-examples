const web3 = require('@solana/web3.js');

// Constants
const SOLANA_DECIMAL = 9;
const commitment = "confirmed";
const accountAddress = "Y2akr3bXHRsqyP1QJtbm9G9N88ZV4t1KfaFeDzKRTfr";
const nodeType = "mainnet-beta";

// Global variables
let connection = null;

// Get solana Web3 connection
function getConnection() {
    if (!connection) {
        connection = new web3.Connection(
            web3.clusterApiUrl(nodeType),
            commitment,
        );
    }
    return connection;
}

// Show solana balance
async function showSolBalance() {
    let connection = getConnection();
    let accountAddr = accountAddress;
    let account = new web3.PublicKey(accountAddr);
    let accountBalance = await connection.getBalance(account);
    let balance = (accountBalance/10**SOLANA_DECIMAL).toFixed(6);
    console.log(`Balance of ${accountAddr}: ${balance} SOL`);
}

async function main() {
    console.log("NodeType:", nodeType);
    await showSolBalance();
    process.exit(0);
}

main();