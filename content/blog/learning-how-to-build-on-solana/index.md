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

What follows is a walkthrough of my experience and a simple guide for others to follow when building their first Solana application.

## Overview

This walkthrough covers three main sections:

1. Writing our Rust-based Solana program using Anchor
2. Creating our React application to interface with our Solana program
3. Deploying our completed work for the rest of the world to see

## Writing our Rust-based Solana program using Anchor

### Prerequisites

Before we can build anything, we first have to install the necessary command line tools. Chief amongst these are [Solana](https://docs.solana.com/cli/install-solana-cli-tools), [Anchor](https://project-serum.github.io/anchor/getting-started/installation.html#install-rust), and [NodeJS](https://nodejs.org/en/). I've linked to guides on how to install Solana and Anchor which include installing their necessary dependencies such as Rust. If you don't have Node yet, I recommend installing it via [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm).

Before proceeding, you should be able to run the following commands in your terminal:

```bash
solana --version
anchor --version
node -v
```

I developed my app with the following versions:

```bash
solana-cli 1.7.11
anchor-cli 0.16.0
node v16.7.0
```

At the time of this writing, my setup runs on MacOS 11.5.2. For the purposes of this walkthrough, I won't be covering anything related to other operating systems such as Linux or Windows.

#### Getting Started with Anchor

With the necessary tools installed, we can initialize our project by calling `anchor init` and then changing into our project directory.

```bash
anchor init crunchy-vs-smooth
cd crunchy-vs-smooth
```

Opening up our project, the first thing you'll notice is that Anchor already created a bunch of files to get us started. The majority of these files are organized into four main folders (outside of `node_modules` which you can ignore):

- **app** - Where our react app will go

- **migrations** - Home to a single deploy script

- **programs** - Where we will write our Solana program

- **test** - Where we can write JavaScript tests for our program

It's worth reiterating that Anchor is an _opinionated_ framework. This means that it makes makes assumptions about how code should be structured and makes tradeoffs surrounding low-level things like serialization and deserialization. For the vast majority of new developers entering Solana, these opinions shouldn't get in your way. Anchor's goal is to become a true zero-cost abstraction in the sense that there is no performance penalty for adopting the framework.

Diving into our `programs` folder, you'll notice a basic program that Anchor has written on our behalf:

```rust
use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod crunchy_vs_smooth {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

```

This is the basic program from the [official Anchor docs](https://project-serum.github.io/anchor/tutorials/tutorial-0.html#defining-a-program). Not much is happening here, we define a program named after our project with a single method `initialize`. When `initialize` is invoked, it returns out of the program successfully without touching any data. Despite the lack of functionality, this example highlights a few key aspects of Anchor:

- Right off the bat, you should notice `declare_id!("your-program-id-here")`. What this does is statically define your program address and embed it into the program. This is one of many ways in which Anchor makes it easy for us to build more-secure applications.
- Macros such as `#[program]` and `#[derive(Accounts)]` are the cornerstones of the Anchor framework. These macros abstract away lots of low level Rust code that would otherwise slow down developers and create room for more errors. With `#[program]` we're able to easily define our program and set up inner methods such as `initialize` that will automatically be recognized by our clients as valid [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call) endpoints they can call. In the case of `#[derive(Accounts)]` we're able to define transaction instructions and handle our validation logic outside of our main program. We'll cover this in more detail later.
- `Context` is always the first parameter passed in any method we create with Anchor. In this case, `ctx: Context<Initialize>`, Context is a simple container over the `Initialize` struct at the bottom of our program. This struct is empty for now, but the relationship will make more sense in the next example.

#### Writing our Program

Let's go ahead and look at our finished program. To recap: We're looking to create an app that let's the world vote for its favorite type of peanut butter. Specifically, we're writing a program that lets users vote for crunchy or smooth and keeps track of each vote overtime.

Below is my basic implementation, filled with comments explaining what each section is doing. Give it a read, and if you're following along go ahead and copy-paste the code below in `programs/crunchy-vs-smooth/src/lib.rs`.

```rust
use anchor_lang::prelude::*;
declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");
/// We'll update our declare_id! later. Once you run `anchor build`, your Program ID can be found in /target/idl/[your_project_name].json
/// Moving on to the #[program] macro below, this is where we define our program.
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
    /// All account validation logic is handled below at the #[account(...)] macros, letting us just focus on the business logic
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

There are two things I want to highlight here. The first is the way that Solana programs handle data. If you're familiar with Solidity, you're used to the idea of code and data living in the same place. In Ethereum, smart contracts own data and can update their data within their own functions. In Solana, data and code live separately. If you take a look at our updated `initialize` function, you'll see that we are reading and writing data from a vote account that is being passed into our program via the Context parameter `ctx`. Our vote account is defined at the bottom of our file as a simple struct with two fields, crunchy and smooth, that hold unsigned 64-bit integers.

This idea of code and data separation can be a bit unintuitive at first, but Anchor makes it a bit easier with this `#[derive(Accounts)]` macro. This is the second thing I want to highlight. With `#[derive(Accounts)]`, we can specify all the accounts that are required for a given transaction instruction and let Anchor deal with all the serialization and deserialization required to tie everything together. The big take away here is that with Anchor, we're able to separate our account validation logic and focus on the business logic in our main program. This leads to less boilerplate and less code to reason about. More information on how accounts work with programs, I recommend reading the aptly named [ok so what the fuck is the deal with solana anyway](https://2501babe.github.io/posts/solana101.html).

With our program newly updated, lets build our code by running the following command:

```bash
anchor build
```

Once complete, you'll see a new folder named `target` full of a bunch of files and folders. When we build our code, one of the things that Anchor creates for us is an [Interface Description Language (IDL)](https://en.wikipedia.org/wiki/Interface_description_language). This IDL serves as a common interface for interacting with our Rust program. Go ahead and open this file at `target/idl/crunch_vs_smooth.json`. In here, you should see a list of the three methods we defined earlier (`initialize`, `voteCrunchy`, `voteSmooth`) as well as the accounts that are required to be passed in for each transaction. With this IDL, we now have a standardized way of communicating with our program from any other programming language, be it JavaScript, Go, C#, etc.

#### Testing and Deploying to Devnet

With our Anchor program now built, we can move on to testing and deploying our program. In our `tests` folder we should already a file named `crunchy-vs-smooth.js` go ahead and replace its contents with the following:

```javascript
const assert = require("assert")
const anchor = require("@project-serum/anchor")
const { SystemProgram } = anchor.web3

describe("crunchy-vs-smooth", () => {
  // Configure the client
  const provider = anchor.Provider.env()
  anchor.setProvider(provider)

  const program = anchor.workspace.CrunchyVsSmooth
  const voteAccount = anchor.web3.Keypair.generate()

  it("Initializes with 0 votes for crunchy and smooth", async () => {
    console.log("Testing Initialize...")
    // The last element passed to RPC methods is always the transaction options
    // Because voteAccount is being created here, we are required to pass it as a signers array
    await program.rpc.initialize({
      accounts: {
        voteAccount: voteAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [voteAccount],
    })

    const account = await program.account.voteAccount.fetch(
      voteAccount.publicKey
    )
    console.log("Crunchy: ", account.crunchy.toString())
    console.log("Smooth: ", account.smooth.toString())
    assert.ok(account.crunchy.toString() == 0 && account.smooth.toString() == 0)
  })
  it("Votes correctly for crunchy", async () => {
    console.log("Testing voteCrunchy...")
    await program.rpc.voteCrunchy({
      accounts: {
        voteAccount: voteAccount.publicKey,
      },
    })

    const account = await program.account.voteAccount.fetch(
      voteAccount.publicKey
    )
    console.log("Crunchy: ", account.crunchy.toString())
    console.log("Smooth: ", account.smooth.toString())

    assert.ok(account.crunchy.toString() == 1 && account.smooth.toString() == 0)
  })
  it("Votes correctly for smooth", async () => {
    console.log("Testing voteSmooth...")
    await program.rpc.voteSmooth({
      accounts: {
        voteAccount: voteAccount.publicKey,
      },
    })

    const account = await program.account.voteAccount.fetch(
      voteAccount.publicKey
    )
    console.log("Crunchy: ", account.crunchy.toString())
    console.log("Smooth: ", account.smooth.toString())

    assert.ok(account.crunchy.toString() == 1 && account.smooth.toString() == 1)
  })
})
```

Here we can see our IDL in action, as we're now using JavaScript to interact with our program's RPC endpoints. Interacting with an Anchor program requires two key building blocks: a **provider** and a **program**. The provider is an abstraction of our connection to Solana, while program is an abstraction that combines our provider, IDL, and program ID. In testing, Anchor provides convenient methods for us to create these variables based on our environment.

```javascript
const provider = anchor.Provider.env()
anchor.setProvider(provider)

const program = anchor.workspace.CrunchyVsSmooth
```

Later on, when we develop our client, we will have to construct the these ourselves using the user's Solana wallet.

With these two building blocks, we can start now start calling functions and accounts in our program using the convenient patterns `program.rpc.functionName` and `program.account.accountName`.

```javascript
await program.rpc.initialize({
  accounts: {
    voteAccount: voteAccount.publicKey,
    user: provider.wallet.publicKey,
    systemProgram: SystemProgram.programId,
  },
  signers: [voteAccount],
})

const account = await program.account.voteAccount.fetch(voteAccount.publicKey)
```

```
solana address -k target/deploy/crunchy_vs_smooth-keypair.json

```

I my case it returns `7Ntd1GePKvSSYseiHqdk88k3mRLaQrMxmGnnoVpn8QQd`

## Creating our React application to interface with our Solana program

#### Scaffolding our React app

create-react-app
remove or rename git folder automatically created

#### Working with Phantom

#### Interacting with the Anchor IDL

In `tests` we defined our vote account as the following:

```javascript
const voteAccount = anchor.web3.Keypair.generate()
```

This is fine for testing and local development, but you'll notice that each time we refresh our page, we generate a new keypair and thus start our voting back at 0.

## Deploying our completed work for the rest of the world to see

#### Serving our React app with Node

#### Deploying to Heroku

## Potential Improvements

## Acknowledgements

Special thanks to everyone who wrote early guides on Solana development. In particular I'd like to thank [Nader Dabit](https://twitter.com/dabit3) for [The Complete Guide to Full Stack Solana Development with React, Anchor, Rust, and Phantom](https://dev.to/dabit3/the-complete-guide-to-full-stack-solana-development-with-react-anchor-rust-and-phantom-3291) and [Paulx](https://twitter.com/paulxpaulxpaulx) for [Programming on Solana - An Introduction](https://paulx.dev/blog/2021/01/14/programming-on-solana-an-introduction/). I'd also like to thank all those who are active in the Anchor Discord, especially [Armani Ferrante](https://twitter.com/armaniferrante) and [@xjcaa](https://twitter.com/0xjcaa) who answered my questions.

If you found this helpful please let me know via [Twitter](https://twitter.com/bfriel_)!
