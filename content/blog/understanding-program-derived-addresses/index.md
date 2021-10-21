---
title: Understanding Program Derived Addresses
date: "2021-10-21T01:22:04.168Z"
description: "A practical overview of how Solana programs read and write data."
featuredImage: ./monkeys.jpg
thumbnail: ./monkeys.jpg
---

_This is a follow up to my previous post [Learning How to Build on Solana](https://brianfriel.xyz/learning-how-to-build-on-solana/)._

> Check out the [live app](https://www.pbvote.com/) and its [updated code](https://github.com/bfriel/crunchy-vs-smooth-v2).

## Picking Up Where We Left Off

In my [last post](https://www.brianfriel.xyz/learning-how-to-build-on-solana/), we built a simple [app](https://www.pbvote.com/) that let [Solana](https://solana.com/) users vote for their favorite type of peanut butter: Crunchy or Smooth?

Working with [Anchor](https://project-serum.github.io/anchor/getting-started/introduction.html) made our lives a lot easier. In less than 50 lines of [Rust](https://www.rust-lang.org/), we could write our own program and have confidence that it would meet the demanding serialization and deserialization requirements set forth by its [BPF Loader](https://docs.solana.com/developing/on-chain-programs/overview#input-parameter-serialization).

We deployed our program and spun up a frontend to interact with it, but something was missing. Our app worked, but the [keypair](https://docs.solana.com/terminology#keypair) that held all our data was stored on some [Node](https://nodejs.org/en/) server maintained by [Heroku](https://www.heroku.com/). This didn't feel very web3. Furthermore, it created a lot of headaches around storing and securing our keypair. Anytime our server restarted, we'd generate a new keypair thus reset all our data.

How do production apps get around this issue? Instead of storing a keypair somewhere, most apps use something called a [Program Derived Address (PDA)](https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses). To understand how PDAs work, let's first take a step back and get a quick refresher on how Solana programs read and write data.

## How Solana Stores Data

As you may recall, Solana completely separates code from data. In Solana, all programs are stateless: any data that they work with must be passed in by reference from the outside.

In the case of our app, this means there is no way for our voting program to internally update its own vote count for crunchy or smooth. So where do these votes live? The answer is something called an [account](https://docs.solana.com/developing/programming-model/accounts).

### Accounts

Accounts can be thought of as collections of related information, similar to a file in an operating system. Accounts are both used by and owned by programs, and a single program can own many different accounts.

If you're familiar with [Ethereum](https://ethereum.org/en/developers/docs/accounts/), this terminology may confuse you. To quote [hana](https://2501babe.github.io/posts/solana101.html):

> accounts are buffers. i dont know why they call them accounts it confuses the shit out of everyone.

Like a file, accounts can store arbitrary kinds of data (e.g. integers, strings, pubkeys) as well as SOL. Accounts also have metadata which describes who is allowed to access its data and [how long the account can live for](https://docs.solana.com/developing/programming-model/accounts#rent). Anyone can read or credit an account, but only the account owner can debit it or modify its data.

Accounts are created by simply generating a new keypair and registering its public key with the [System Program](https://docs.solana.com/developing/programming-model/accounts#creating). Each account is identified by its unique address (aka public key), the same kind which is used to identify your [Phantom](https://phantom.app/) wallet. In our case, we can lookup our vote account at [`9pKBrUtJU9GNmct6T2BQtiKqvubtjS9D2if2bm1P8TQd`](https://explorer.solana.com/address/9pKBrUtJU9GNmct6T2BQtiKqvubtjS9D2if2bm1P8TQd). This begs the question: if our vote account can be looked up with what looks like a public key, who holds the private key for this account? The answer is nobody! How then is our program able to record votes as they occur? Enter: PDAs.

### Program Derived Addresses (PDAs)

A Program Derived Address (PDA) is home to an account that's designed to be controlled by a specific program. With PDAs, programs can programatically sign for certain addresses without needing a private key. At the same time, PDAs ensure that no external user could also generate a valid signature for the same address. These addresses serve as the foundation for [Cross-Program Invocation](https://docs.solana.com/developing/programming-model/calling-between-programs), which allows Solana apps to be compossible with one another.

The secret sauce behind PDAs is that while they look like standard public keys, they don't actually lie on the ed25519 elliptic curve at all. This means they have no associated private key. You might be asking yourself, "How can a program sign for an account that has no private key?" The answer lies in how PDAs are derived.

#### Seeds and Bumps

PDAs are derived from a program id (in our case, [`6a2GdmttJdanBkoHt7f4Kon4hfadx4UTUgJeRkCaiL3U`](https://explorer.solana.com/address/6a2GdmttJdanBkoHt7f4Kon4hfadx4UTUgJeRkCaiL3U)) and a collection of seeds such as the string `"vote_account"`. This combination of seeds and a program id is then run through a sha256 hash function to see whether or not they generate a public key that lies on the elliptic curve.

It may be helpful to consider that PDAs are not technically _created_, but rather _found_. In running our program id and seeds through a hash function, there is a ~50% chance that we actually end up with a valid public key that does lie on the elliptic curve. In this case, we simply add something to fudge our input a little bit and try again. The technical term for this fudge factor is a `bump`. In Solana, we start with `bump = 255` and simply iterate down through `bump = 254`, `bump = 253`, etc. until we get an address that is not on the elliptic curve. This may seem rudimentary, but once found it gives us a deterministic way of deriving the same PDA over and over again. This also allows our program to now sign for an account using [Solana's `invoke_signed` function](https://docs.solana.com/developing/programming-model/calling-between-programs#program-signed-accounts).

It's important to note that our seed does not have to be static. In fact, a common practice is to generate PDAs using the public key of an end user, allowing our program to store information about that user in its own standalone account.

## Refactoring Our Program

Armed with this knowledge, we can now go about refactoring [our original Anchor program](https://github.com/bfriel/crunchy-vs-smooth) to make use of PDAs. We'll retain the same structure of having an `Initialize` instruction and a `Vote` instruction, but modify them to record votes on a PDA owned by our program rather than a standard account generated by a keypair.

Starting off with the `initialize` method, we'll now pass in a second parameter `vote_account_bump` and record that on the account itself. This will make it easy for Anchor to handle all future account validations. Check out the diff between our first version and this updated version below:

```diff
-    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
-        let vote_account = &mut ctx.accounts.vote_account;
-       vote_account.crunchy = 0;
-        vote_account.smooth = 0;
-        Ok(())
-    }
+    pub fn initialize(ctx: Context<Initialize>, vote_account_bump: u8) -> ProgramResult {
+        ctx.accounts.vote_account.bump = vote_account_bump;
+        Ok(())
+    }
```

You'll notice that we're also no longer manually setting both `crunchy = 0` and `smooth = 0`. We can skip this by using Rust's [`#[derive(Default)]` macro](https://doc.rust-lang.org/std/default/trait.Default.html) on the struct that defines what our `vote_account` looks like. If you're following along from my last example, I renamed this struct from `VoteAccount` to `VotingState`.

```rust
#[account]
#[derive(Default)]
pub struct VotingState {
    crunchy: u64,
    smooth: u64,
    bump: u8,
}
```

We'll also update our `Initialize` instruction to make use of our PDA. Here, we're deriving a PDA from the static seed `"vote_account"` and the `vote_account_bump` passed in by whoever first calls `initialize`. I've added comments that explain what each line is doing below.

```rust
#[derive(Accounts)]
#[instruction(vote_account_bump: u8)]
pub struct Initialize<'info> {

    /// The #[account(...)] macro enforces that our `vote_account` is owned by the currently executing program.
    ///
    /// We mark `vote_account` with the `init` attribute, which creates a new account owned by the program
    /// When using `init`, we must also provide:
    /// `payer`, which funds the account creation
    /// and the `system_program` which is required by the runtime
    ///
    /// If our account were to use variable length types like String or Vec we would also need to allocate `space` to our account
    /// Since we are only dealing with fixed-sized integers, we can leave out `space` and Anchor will calculate this for us automatically
    ///
    /// `seeds` and `bump` tell us that our `vote_account` is a PDA that can be derived from their respective values
    /// Account<'info, VotingState> tells us that it should be deserialized to the VotingState struct defined below at #[account]
    #[account(init, seeds = [b"vote_account".as_ref()], bump = vote_account_bump, payer = user)]
    vote_account: Account<'info, VotingState>,
    user: Signer<'info>,
    system_program: Program<'info, System>,
}
```

We'll then repeat a similar pattern for our `Vote` instruction and its two methods, `vote_crunchy` and `vote_smooth`. I've pasted my entire program below, complete with comments. Take note of how we can now access `bump = vote_account.bump` thanks to our new `initialize` method.

```rust
use anchor_lang::prelude::*;

declare_id!("6a2GdmttJdanBkoHt7f4Kon4hfadx4UTUgJeRkCaiL3U");
/// The Program ID can be found in /target/idl/[your_project_name].json
//
/// This is where the magic happens. We define our program!
/// Each method inside here defines an RPC request handler (aka instruction handler) which can be invoked by clients
#[program]
mod crunchy_vs_smooth {
    use super::*;

    /// The first parameter for every RPC handler is the Context struct. We define Initialize and Vote below at #[derive(Accounts)]
    /// When `initialize` is called, we'll store the `vote_account_bump` that was used to derive our PDA so that others can easily derive it on their clients
    /// We no longer have to manually set both `crunchy` and `smooth` to 0 because we opted to use the `default` trait on our VotingState struct at the bottom of this file
    /// This a Rust trait that is used via #[derive(Default)]. More info on that here: https://doc.rust-lang.org/std/default/trait.Default.html
    pub fn initialize(ctx: Context<Initialize>, vote_account_bump: u8) -> ProgramResult {
        ctx.accounts.vote_account.bump = vote_account_bump;
        Ok(())
    }

    /// All our account validation logic is handled below at the #[account(...)] macros, letting us just focus our business logic
    pub fn vote_crunchy(ctx: Context<Vote>) -> ProgramResult {
        ctx.accounts.vote_account.crunchy += 1;
        Ok(())
    }

    pub fn vote_smooth(ctx: Context<Vote>) -> ProgramResult {
        ctx.accounts.vote_account.smooth += 1;
        Ok(())
    }
}

/// The #[derive(Accounts)] macro specifies all the accounts that are required for a given instruction
/// Here, we define two structs: Initialize and Vote
#[derive(Accounts)]
#[instruction(vote_account_bump: u8)]
pub struct Initialize<'info> {

    /// The #[account(...)] macro enforces that our `vote_account` is owned by the currently executing program.
    ///
    /// We mark `vote_account` with the `init` attribute, which creates a new account owned by the program
    /// When using `init`, we must also provide:
    /// `payer`, which funds the account creation
    /// and the `system_program` which is required by the runtime
    ///
    /// If our account were to use variable length types like String or Vec we would also need to allocate `space` to our account
    /// Since we are only dealing with fixed-sized integers, we can leave out `space` and Anchor will calculate this for us automatically
    ///
    /// `seeds` and `bump` tell us that our `vote_account` is a PDA that can be derived from their respective values
    /// Account<'info, VotingState> tells us that it should be deserialized to the VotingState struct defined below at #[account]
    #[account(init, seeds = [b"vote_account".as_ref()], bump = vote_account_bump, payer = user)]
    vote_account: Account<'info, VotingState>,
    user: Signer<'info>,
    system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Vote<'info> {
    #[account(mut, seeds = [b"vote_account".as_ref()], bump = vote_account.bump)]
    vote_account: Account<'info, VotingState>,
}

/// Here we define what what the state of our `vote_account` looks like
/// We define a struct with three public properties: crunchy, smooth, and bump
/// The `crunchy` and `smooth` properties will keep track of their respective votes as unsigned 64-bit integers
/// `bump` will store the `vote_account_bump` we passed in when we initialized our program
/// This `bump` combined with our static "vote_account" seed will make it easy for anyone to derive the same PDA we use use to keep track of our state
/// All of this will be passed inside each Transaction Instruction to record votes as they occur
#[account]
#[derive(Default)]
pub struct VotingState {
    crunchy: u64,
    smooth: u64,
    bump: u8,
}
```

#### Updating our Frontend

With our program now making use of a PDA, it's time to hook up our frontend. If you're following along in your own repo, make sure to follow the necessary steps involved with rebuilding and deploying your program locally. I outlined the steps I use my [last post](https://www.brianfriel.xyz/learning-how-to-build-on-solana/), which are:

1. Set your Solana configuration

```bash
# replace devnet with your desired network (i.e. localhost, testnet, mainnet-beta)
solana config set --url devnet
```

2. Copy this network to your `Anchor.toml` file

3. Rebuild your Anchor program and make sure your program ID matches what's in `Anchor.toml` (it usually does)

```bash
anchor build
```

4. Deploy your program

```
anchor deploy
```

5. In our frontend directory, update the network url to your desired network (i.e. `clusterApiUrl("devnet")`)

6. Update network settings in your Phantom wallet

I won't be going through every update to my React app, but you are welcome to copy the entire directory from [my Github](https://github.com/bfriel/crunchy-vs-smooth-v2/tree/master/app). I will however go over a few PDA-specific updates that should drive home how one can work with these addresses.

The biggest update is to our `getVoteAccount()` function. In our previous app, we stored the keypair to our account on our Node server and requested this keypair anytime we needed it (bad!). Now, we're deriving a PDA ourselves from our `"vote_account"` seed, our `programID`, and an `accountBump`. To find this bump, we'll use [Solana web3js's `findProgramAddress`](https://solana-labs.github.io/solana-web3.js/classes/PublicKey.html#findProgramAddress) to iterate through all possibilities.

```javascript
// In src/App.js

useEffect(() => {
  const getVoteAccount = async () => {
    let account,
      accountBump = null
    ;[account, accountBump] = await web3.PublicKey.findProgramAddress(
      [Buffer.from("vote_account")],
      programID
    )
    setVoteAccount({ account, accountBump })
  }
  getVoteAccount()
}, [])
```

Once we find a `voteAccountBump` that kicks us off the elliptic curve, we can then pass it as an argument to the `initialize` method we created earlier.

```javascript
// In src/components/Main.jsx

async function initializeVoting() {
  const provider = await getProvider()
  const program = new Program(idl, programID, provider)
  try {
    await program.rpc.initialize(new BN(voteAccountBump), {
      accounts: {
        user: provider.wallet.publicKey,
        voteAccount: voteAccount,
        systemProgram: web3.SystemProgram.programId,
      },
    })
    const account = await program.account.votingState.fetch(voteAccount)
    setVotes({
      crunchy: account.crunchy?.toNumber(),
      smooth: account.smooth?.toNumber(),
    })
    enqueueSnackbar("Vote account initialized", { variant: "success" })
  } catch (error) {
    console.log("Transaction error: ", error)
    console.log(error.toString())
    enqueueSnackbar(`Error: ${error.toString()}`, { variant: "error" })
  }
}
```

Once `initialize` is called, we'll be all set up with PDA to handle our crunchy and smooth voting needs. The rest of our frontend should be straightforward if you've read through my [previous walkthrough]([last post](https://www.brianfriel.xyz/learning-how-to-build-on-solana/)).

### Wrapping Up

If you're new to Solana, I hope this walkthrough helped shed a little light on what PDAs are and how you can go about implementing them in your own projects. If you have questions or feedback on this post, please reach out to me via [Twitter](https://twitter.com/bfriel_). Special thanks to everyone in the Anchor discord who helped me gain a better understanding of PDAs, especially @cqfd (Alan) and @donderper.
