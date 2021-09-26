---
title: Learning How to Build on Solana
date: "2021-09-25T13:46:37.121Z"
description: "An introductory tour to writing applications on Solana, built with the Anchor framework and React."
featuredImage: ./shipbuilder.jpeg
---

> Check out the [live app](https://www.pbvote.com/) and its [code](https://github.com/bfriel/crunchy-vs-smooth).

## Introduction

About a week ago I was scrolling Twitter when I came across the following tweet from Armani Ferrante, a software engineer at [Alameda Research](https://www.alameda-research.com/).

[![Armani Ferrante Tweet](tweet.jpeg)](https://twitter.com/armaniferrante/status/1434554725093949452)

Armani is the creator of [Anchor](https://project-serum.github.io/anchor/getting-started/introduction.html), a framework for developing smart contracts on [Solana](https://solana.com/). Anchor can be thought of like the [Ruby on Rails](https://rubyonrails.org/) of Solana development: It's an opinionated way of writing programs that abstracts away a lot of repetitive, low-level code and lets developers focus on just building their apps.

Up until stumbling upon Armani's tweet, I had been interested in learning how to build on Solana, but had largely put it off due to its perceived time commitment. Unlike most other smart contract platforms, Solana is not natively [EVM](https://ethereum.org/en/developers/docs/evm/)-compatible, meaning the vast majority of Web 3 applications that exist today cannot be easily copied over to Solana. Over the last six years, a huge developer ecosystem has emerged around [Ethereum](https://ethereum.org/en/) that supports writing, testing, and deploying smart contracts written in [Solidity](https://docs.soliditylang.org/en/v0.8.7/). Solana, which launched its mainnet-beta back in March 2020, must build its [Rust](https://www.rust-lang.org/)-based developer ecosystem entirely from scratch.

While Solana is considered new, Anchor is even newer. The framework is still in its infancy and has yet to publish its official v1.0.0 release. The source code is currently unaudited and its APIs change regularly, but its productivity and security enhancements are such that it is quickly becoming the go-to foundation for all Solana development.

Upon seeing Armani's tweet, I decided it was time for me to learn how to build on Solana. Specifically, I wanted to learn how to build a program using Anchor that I could then interact with via a [React](https://reactjs.org/) application. Having no prior experience with Rust, I set a goal of building a simple voting app that lets the world vote for its favorite type of peanut butter. The live version of this app can be found at [www.pbvote.com](https://www.pbvote.com/) and its source code can be found on [my GitHub](https://github.com/bfriel/crunchy-vs-smooth).

What follows is a walkthrough of my experience and a simple guide for others to follow when building their first Anchor-based application.

## Overview

This walkthrough covers three main sections:

1. Writing our Rust-based Solana program using Anchor
2. Creating our React application to interface with our Solana program
3. Deploying our completed work for the rest of the world to see

## 1. Writing our Rust-based Solana program using Anchor

#### Getting Started with Anchor

#### Writing our Program

#### Testing and Deploying to Devnet

## 2. Creating our React application to interface with our Solana program

#### Scaffolding our React app

#### Interacting with the Anchor IDL

#### Working with Phantom

## 3. Deploying our completed work for the rest of the world to see

#### Serving our React app with Node

#### Deploying to Heroku

## Potential Improvements

## Acknowledgements
