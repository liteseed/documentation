---
title: What is a Bundler?
description: A decentralized network of bundlers powered by AO.
---

Uploading a large amount of data onto Arweave is a challenge.
Throughput is the amount of data uploaded per second for a network.

![An arweave tranasaction](https://ucarecdn.com/ffe24af7-4b6c-4bcf-85e7-dfc4c52f0036/arweavetransaction6.png)

[ANS-104: Bundled Data](https://github.com/ArweaveTeam/arweave-standards/blob/master/ans/ANS-104.md) describes a solution to the problem. It introduces the concept of wrapping multiple data items together into a bundle. Bundles are then posted to Arweave by an aptly named software called Bundler.

Bundlers are the solution to the throughput problem.
They make it possible to upload a large amount of data onto Arweave.
You get the additional benefits of cheaper uploads and faster indexing.

![A bundled transaction](https://ucarecdn.com/4e17c0c6-4a74-4337-b38e-b9bcc3a24a81/bundledarweavetransaction3.png)

### Bundling - A High-Level Overview

Traditionally, to send data to Arweave, you sign and send data using an Arweave or other supported wallet.
A bundler is an intermediary service. Instead of data, bundlers expect Data Items. Data Item is a fancy way of saying signed data with additional metadata.
It is then wrapped into a single arweave transaction called a bundle and posted onto arweave.

This approach can be beneficial if you're trying to upload a lot of data. Think of an NFT marketplace, Transaction histories, or any data you want permanent.
