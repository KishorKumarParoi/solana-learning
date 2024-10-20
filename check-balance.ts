import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";

async function main() {
  try {
    const connection = new Connection(clusterApiUrl("devnet"));
    const publicKey = new PublicKey(
      "JDjsHewXMA68XcEc5QD7xJpazusS9WEcDUaap3ZjWs49"
    );
    const balance = await connection.getBalance(publicKey);
    console.log(`The balance of the account is: `, balance / LAMPORTS_PER_SOL);

    const suppliedKey = process.argv[2];
    if (!PublicKey.isOnCurve(suppliedKey)) {
      throw new Error("Invalid public key supplied.");
    }

    const suppliedKeyPair = new PublicKey(suppliedKey);
    const suppliedBalance = await connection.getBalance(suppliedKeyPair);
    console.log(
      `The balance of the supplied account is: `,
      suppliedBalance / LAMPORTS_PER_SOL
    );

    console.log(`✅ Finished! We've checked the balance of the account!`);
  } catch (error) {
    console.error("Error: ", error);
  }
}

main();
