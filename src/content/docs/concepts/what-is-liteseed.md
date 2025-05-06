---
title: What is Liteseed?
description: A decentralized network of bundlers powered by AO.
---
## Data Items & Bundles

Arweave supports transactions of two types transfer of AR and data uploads.

![An arweave transaction](https://ucarecdn.com/ffe24af7-4b6c-4bcf-85e7-dfc4c52f0036/arweavetransaction6.png)


When you need to upload a large amount of files onto Arweave, separate transactions increase number of transactions
which increase gas cost for everyone.
A natural solution is to wrap multiple files into a single transaction.
The Arweave ecosystem has a special standardised formats which is a data-item and a bundle.
Each file is converted into a data-item, and many data-items are joined together to form a bundle.
To post data-items to arweave an intermediary software is required which is called a bundler.

[ANS-104: Bundled Data](https://github.com/ArweaveTeam/arweave-standards/blob/master/ans/ANS-104.md) describes data-items & bundles in detail.

![A bundled transaction](https://ucarecdn.com/4e17c0c6-4a74-4337-b38e-b9bcc3a24a81/bundledarweavetransaction3.png)

##  Liteseed Network - A Network of bundlers

The requirement of bundlers introduced a requirement of services to upload bundles.
However, relying on a single bundler service introduces centralization with the additional challenge of scale.
Liteseed Network addresses these issues by creating a network of bundlers to upload data onto Arweave.

### How does it work?

The network works by creating a governance structure.
Each bundler in the network is required to stake tokens on an ao smart contract.
When an upload is sent to the network a bundler is selected.
If the bundler posts the data on time it receives the upload reward and some additional liteseed tokens.
In case the bundler fails to post the data it can lose its token stake.

![Liteseed Network](https://ucarecdn.com/d91f67cb-7d4c-4903-a06a-5d11da7571ce/liteseedarweavetransaction1.png)