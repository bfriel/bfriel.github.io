---
title: Creating Tokens on Solana
date: "2021-11-17T01:22:04.168Z"
description: "An introduction to the SPL Token Program and how to create a token on Solana."
featuredImage: ./creation.png
thumbnail: ./creation.png
---

## Introduction

For many newcomers, the Solana ecosystem can at first appear confusing. Terms like accounts, programs, mints, and authorities 

Terms like accounts, programs, mints, and addresses can be thrown around haphazardly. 

Many unsure how to understand their own wallets or navigate a [block explorer](https://explorer.solana.com/address/FriELggez2Dy3phZeHHAdpcoEXkKQVkv6tx3zDtCVP8T).

If you're coming from Ethereum, looking at the ERC-20 standard. If you're a user of Solana, join a DAO, Social Token

can get confusing, and many are left entirely unsure how to validate official navigate a block explorer.

My goal is to help shed light on how Solana tokens work. I do so 

Solana is fast and cheap. Creating a Solana token and minting myself 1 billion units cost me a grand total of 0.0035 SOL, or $0.75 at today's prices.

Much of what we cover is also applicable to creating NFTs, but I will save that for a future tutorial. 

To gain a better understanding of how these tokens work, I created my own token named [BUG](https://explorer.solana.com/address/BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf).

![BugLogo](logo.png)

## Overview

This walkthrough covers three main sections:

1. Creating our token via the SPL-Token Library
2. Adding an official name and logo to our token for the rest of the world to see
3. Interacting with our token via transfers, burns, and account freezes.

In each section, we'll go over the concepts behind what is happening under the hood.

## Creating a Token

As you may recall, smart contracts on Solana are called **programs**. The Solana Labs team has created a few key programs that serve as building blocks for the rest of the ecosystem to use freely. These programs are known as the Solana Program Library or SPL. If you're familiar with ERC-20 standard on Ethereum. [SPL Token](https://spl.solana.com/token). We can interact with the SPL program via [Rust crates](https://crates.io/crates/spl-token)

### Prerequisites

Before we can create anything, we first have to install the necessary command line tools. Namely: [Solana](https://docs.solana.com/cli/install-solana-cli-tools) and the [SPL-Token Library](https://spl.solana.com/token#command-line-utility). I've linked to guides on how to install them which include installing their necessary dependencies such as Rust.

You'll also need to setup a [command line wallet](https://docs.solana.com/wallet-guide/cli) and fund it with SOL in order to pay for the creation of your token. For the purposes of this demonstration, I used a simple [file system wallet](https://docs.solana.com/wallet-guide/file-system-wallet). Make sure you properly back up your recovery phrase.

> 🚨 WARNING: This tutorial covers using real funds on mainnet. Do not fund your wallet with more SOL than you are willing to lose.

If you are not already familiar with the command line or wallet recoveries, I recommend following along using fake money on Solana's devnet. I'll cover how you can switch to devnet later on in the tutorial. 

Before proceeding, you should be able to run the following commands in your terminal:

```bash
solana --version
spl-token --version
```

I created my token with the following versions:

```bash
solana-cli 1.7.14
spl-token-cli 2.0.15
```

You should also have already set up a command line wallet, whose address you can verify by running:

```bash
solana address
```

At the time of this writing, my setup runs on MacOS 12.0.1. For the purposes of this walkthrough, I won't be covering anything related to other operating systems such as Linux or Windows.

### Understanding our Addresses

### Funding our Wallet

### Creating our Token

In Solana, token balances are typically stored in unique accounts where the storage account address is derived from the address of the owner account.

## Naming and Logos

## Transferring, Burning, and Freezing

Associated Token Account Program

A user may own arbitrarily many token accounts belonging to the same mint which makes it difficult for other users to know which account they should send tokens to and introduces friction into many other aspects of token management. This program introduces a way to deterministically derive a token account key from a user's main System account address and a token mint address, allowing the user to create a main token account for each token he owns. We call these accounts Associated Token Accounts.

In addition, it allows a user to send tokens to another user even if the beneficiary does not yet have a token account for that mint. Unlike a system transfer, for a token transfer to succeed the recipient must have a token account with the compatible mint already, and somebody needs to fund that token account. If the recipient must fund it first, it makes things like airdrop campaigns difficult and just generally increases the friction of token transfers. AToken allows the sender to create the associated token account for the receiver, so the token transfer just works.


## Further Integrations
