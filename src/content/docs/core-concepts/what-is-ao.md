---
title: What is ao?
description: Decentralized data is decentralized compute
---

The ao is a decentralized computing system built on top of Arweave.
It hosted on a set of nodes in a distributed network.
ao is designed to offer an environment in which an arbitrary number of parallel processes can execute together.

## Modular Architecture

At a high level ao follows an actor-oriented model similar to Erlang.
In an actor-oriented model, each process is described as an "actor" that can make local decisions, create more actors, send messages, and respond to messages.
This means no memory is shared between processes and instead rely on a native message-passing standard to communicate.
Therefore, processes no longer memory constrained and can use as much compute as required.
With this modular architecture ao can easily scale.

## Holographic State & Consensus
Unlike a traditional blockchain, ao uses a novel holographic state mechanism. 
Instead of coming to consensus on the state of blockchain itself, ao focuses on ensuring that logs of interactions are written to and available on Arweave.
This circumvents lot of the computation required to scale a traditional blockchain.

:::note[Understand technical details of ao]
Visit the ao documentation [here](https://5z7leszqicjtb6bjtij34ipnwjcwk3owtp7szjirboxmwudpd2tq.arweave.net/7n6ySzBAkzD4KZoTviHtskVlbdab_yylEQuuy1BvHqc)
:::