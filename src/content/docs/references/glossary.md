---

title: Glossary
description: Key terms and definitions for Liteseed and Arweave
---

## AO

A decentralized compute platform built on Arweave that uses an actor-oriented model and holographic state to execute parallel processes.

## Actor

A self-contained process in AO that maintains its own state and communicates with other actors via asynchronous message passing.

## AR

The native token of the Arweave network, used to pay for data storage transactions and miner rewards.

## Arweave

A blockchain protocol designed for permanent data storage, where a one-time fee ensures data remains accessible indefinitely.

## Bundle

A standardized container that groups multiple Data Items into a single Arweave transaction, reducing overhead and fees.

## Bundler

A service or node that accepts Data Items, packages them into a Bundle, and submits the Bundle transaction to Arweave.

## Data Item

A standardized unit of file data and metadata defined by ANS-104, representing one piece of content to be stored on Arweave.

## Holographic State

AO’s consensus mechanism where all actor interactions are logged on Arweave and each node reconstructs state locally from those logs.

## Liteseed Network

A decentralized network of bundlers coordinated via an AO governance contract, designed to distribute upload load and ensure reliability.

## Liteseed Token

A native incentive token awarded to bundlers in the Liteseed Network for successful uploads and used for staking and governance.

## Permaweb

A global, permanent web of data and applications built on Arweave, where content is immutable and censorship resistant.

## SDK

Software Development Kit provided by Liteseed (e.g., liteseed-sdk) that simplifies interacting with the network programmatically.

## Slash

A penalty mechanism where part of a bundler’s stake is seized if it fails to upload a Bundle within the agreed timeframe.

## Stake

Tokens deposited by a bundler into an AO smart contract as collateral to participate in the Liteseed Network; higher stakes increase selection probability.

## Storage Endowment

Arweave’s economic model that uses long-term hardware cost projections to fund perpetual storage rewards for miners.

## Upload ID

A unique identifier returned by the Liteseed API upon uploading a file, used to fetch or finalize (pay for) the file transaction. Same as the Arweave ID.
