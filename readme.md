# Solana Keypair Generator

This project demonstrates how to generate a Solana keypair, store the secret key in an environment file, and securely load and print the keypair using Node.js.

## Prerequisites

- Node.js installed
- npm installed
- A `.env` file with your secret key

## Setup

1. Clone the repository.
2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your secret key:

   ```env
   SECRET_KEY=your_secret_key_here
   ```

## Running the Script

To run the script and print the keypair information, use the following command:

```sh
npx esrun generate-keypair.ts
```
