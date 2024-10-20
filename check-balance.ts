import { resolve } from "@bonfida/spl-name-service";
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

async function getPublicKeyFromDomain(connection: Connection, domain: string) {
  const publicKey = await resolve(connection, domain);
  return publicKey;
}
async function main() {
  try {
    const connection = new Connection(clusterApiUrl("mainnet-beta"));
    const famousDomains = ["toly.sol", "shaq.sol", "mccann.sol", "bonfida.sol"];

    for (const domain of famousDomains) {
      const publicKey = await getPublicKeyFromDomain(connection, domain);
      console.log(`The public key for ${domain} is: `, publicKey);

      const balance = await connection.getBalance(publicKey);
      console.log(
        `The balance of the account is: `,
        balance / LAMPORTS_PER_SOL
      );
    }

    console.log(`✅ Finished! We've checked the balance of the account!`);
  } catch (error) {
    console.error("Error: ", error);
  }
}

main();
