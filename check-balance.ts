import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const publicKey = new PublicKey("JDjsHewXMA68XcEc5QD7xJpazusS9WEcDUaap3ZjWs49");
const balance = await connection.getBalance(publicKey);
console.log(`The balance of the account is: `, balance / LAMPORTS_PER_SOL);

const suppliedKey = process.argv[2];
const suppliedKeyPair = new PublicKey(suppliedKey);
const suppliedBalance = await connection.getBalance(suppliedKeyPair);
console.log(
  `The balance of the supplied account is: `,
  suppliedBalance / LAMPORTS_PER_SOL
);

console.log(`✅ Finished! We've checked the balance of the account!`);
