---
title: Learning How to Build on Solana
date: "2021-09-26T13:46:37.121Z"
description: "An introductory tour to writing applications on Solana, built with the Anchor framework and React."
featuredImage: ./shipbuilder.jpeg
---

> Check out the [live app](https://www.pbvote.com/) and its [code](https://github.com/bfriel/crunchy-vs-smooth).

## Introduction

About a week ago I was scrolling through Twitter when I came across the following tweet from Armani Ferrante, a software engineer at [Alameda Research](https://www.alameda-research.com/).

[![Armani Ferrante Tweet](tweet.jpeg)](https://twitter.com/armaniferrante/status/1434554725093949452)

Armani is the creator of [Anchor](https://project-serum.github.io/anchor/getting-started/introduction.html), a framework for developing smart contracts on [Solana](https://solana.com/). Anchor can be thought of like the [Ruby on Rails](https://rubyonrails.org/) of Solana development: It's an opinionated way of writing programs that abstracts away a lot of repetitive, low-level code and lets developers focus on just building their apps.

Up until stumbling upon Armani's tweet, I had been interested in learning how to build on Solana, but had largely put it off due to its perceived time commitment. Unlike most other smart contract platforms, Solana is not natively [EVM](https://ethereum.org/en/developers/docs/evm/)-compatible, meaning the vast majority of Web 3 applications that exist today cannot be easily copied over to Solana. Over the last six years, a huge developer ecosystem has emerged around [Ethereum](https://ethereum.org/en/) that supports writing, testing, and deploying smart contracts written in [Solidity](https://docs.soliditylang.org/en/v0.8.7/). Solana, which launched its mainnet-beta back in March 2020, must build its [Rust](https://www.rust-lang.org/)-based developer ecosystem entirely from scratch.

While Solana is considered new, Anchor is even newer. The framework is still in its infancy and has yet to publish its official v1.0.0 release. The source code is currently unaudited and its APIs change regularly, but its productivity and security enhancements are such that it is quickly becoming the go-to foundation for the majority of Solana developers.

Upon seeing Armani's tweet, I decided it was time for me to learn how to build on Solana. Specifically, I wanted to learn how to build a program using Anchor that I could then interact with via a [React](https://reactjs.org/) application. Having no prior experience with Rust, I set a goal of building a simple voting app that lets the world vote for its favorite type of peanut butter. The live version of this app can be found at [www.pbvote.com](https://www.pbvote.com/) and its source code can be found on [my GitHub](https://github.com/bfriel/crunchy-vs-smooth).

What follows is a walkthrough of my experience and a simple guide for others to follow when building their first Anchor-based application.

## Overview

This walkthrough covers three main sections:

1. Writing our Rust-based Solana program using Anchor
2. Creating our React application to interface with our Solana program
3. Deploying our completed work for the rest of the world to see

## Writing our Rust-based Solana program using Anchor

### Prerequisites

Before we can build anything, we first have to install the necessary command line tools. Chief amongst these are [Solana](https://docs.solana.com/cli/install-solana-cli-tools), [Anchor](https://project-serum.github.io/anchor/getting-started/installation.html#install-rust), and [NodeJS](https://nodejs.org/en/). I've linked to guides on how to install Solana and Anchor which include installing their necessary dependencies such as Rust. If you don't have Node yet, I recommend installing it via [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm).

Before proceeding, you should be able to run the following commands in your terminal:

```
solana --version
anchor --version
node -v
```

I developed my app with the following versions:

```
solana-cli 1.7.11
anchor-cli 0.16.0
node v16.7.0
```

At the time of this writing, my setup runs on MacOS 11.5.2. For the purposes of this walkthrough, I won't be covering anything related to other operating systems such as Linux or Windows.

#### Getting Started with Anchor

With the necessary tools installed, we can initialize our project by calling `anchor init` and then changing into our project directory.

```
anchor init crunchy-vs-smooth
cd crunchy-vs-smooth
```

Opening up our project, the first thing you'll notice is that Anchor already created a bunch of files to get us started. The majority of these files are organized into five main folders:

**app** - Where our react app will go

**migrations** - Home to a single deploy script

**programs** - Where we will write our Solana program

**target** - The output for when we build our code

**test** - Where we can write JavaScript tests for our program

It's worth reiterating that Anchor is an _opinionated_ framework. This means that it makes makes assumptions about how code should be structured and makes tradeoffs surrounding low-level things like serialization and deserialization. For the vast majority of new developers entering Solana, these opinions shouldn't get in your way. Anchor's goal is to become a true zero-cost abstraction in the sense that there is no performance penalty adopting the framework.

Diving into our `programs` folder, you'll notice a basic program that Anchor has written on our behalf:

```rust
use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod exampleanchor {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

```

This is the basic program from the [official Anchor tutorial](https://project-serum.github.io/anchor/tutorials/tutorial-0.html#defining-a-program).

#### Writing our Program

```
solana address -k target/deploy/crunchy_vs_smooth-keypair.json

```

I my case it returns `7Ntd1GePKvSSYseiHqdk88k3mRLaQrMxmGnnoVpn8QQd`

```rust
use anchor_lang::prelude::*;

declare_id!("7Ntd1GePKvSSYseiHqdk88k3mRLaQrMxmGnnoVpn8QQd");
/// The Program ID can be found in /programs/[your-project-name]/target/idl/[your_project_name].json

/// This is where the magic happens. We define our program!
/// Each method inside here defines an RPC request handler (aka instruction handler) which can be invoked by clients
#[program]
pub mod crunchy_vs_smooth {
    use super::*;
    /// The first parameter for every RPC handler is the Context struct. We define Initialize and Vote below at #[derive(Accounts)]
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        let vote_account = &mut ctx.accounts.vote_account;
        vote_account.crunchy = 0;
        vote_account.smooth = 0;
        Ok(())
    }
    /// Allow account validation logic is hanlded below at the #[account(...)] macros, letting us just focus on the business logic
    pub fn vote_crunchy(ctx: Context<Vote>) -> ProgramResult {
        let vote_account = &mut ctx.accounts.vote_account;
        vote_account.crunchy += 1;
        Ok(())
    }
    pub fn vote_smooth(ctx: Context<Vote>) -> ProgramResult {
        let vote_account = &mut ctx.accounts.vote_account;
        vote_account.smooth += 1;
        Ok(())
    }
}

/// The #[derive(Accounts)] macro specifies all the accounts that are required for a given instruction
/// Here, we define two structs: Initialize and Vote
#[derive(Accounts)]
pub struct Initialize<'info> {
    /// We mark vote_account with the init attribute, which creates a new account owned by the program
    /// When using init, we must also provide:
    /// payer, which funds the account creation
    /// space, which defines how large the account should be
    /// and the system_program which is required by the runtime

    /// This enforces that our vote_account be owned by the currently executing program, and that it should be deserialized to the VoteAccount struct below at #[account]
    #[account(init, payer = user, space = 16 + 16)]
    pub vote_account: Account<'info, VoteAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program <'info, System>,
}

#[derive(Accounts)]
pub struct Vote<'info> {
    /// Marking accounts as mut persists any changes made upon exiting the program, allowing our votes to be recorded
    #[account(mut)]
    pub vote_account: Account<'info, VoteAccount>,
}

/// Here we define what our VoteAccount looks like
/// We define a struct with two public properties: crunchy and smooth
/// These properties will keep track of their respective votes as unsigned 64-bit integers
/// This VoteAccount will be passed inside each Transaction Instruction to record votes as they occur
#[account]
pub struct VoteAccount {
    pub crunchy: u64,
    pub smooth: u64,
}
```

#### Testing and Deploying to Devnet

## Creating our React application to interface with our Solana program

#### Scaffolding our React app

#### Interacting with the Anchor IDL

#### Working with Phantom

## Deploying our completed work for the rest of the world to see

#### Serving our React app with Node

#### Deploying to Heroku

## Potential Improvements

## Acknowledgements

If you found this helpful please let me know via [Twitter](https://twitter.com/bfriel_)!
