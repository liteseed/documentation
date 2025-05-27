---

title: What is Liteseed?
description: A decentralized bundler network for efficient Arweave uploads
---

## Data Items & Bundles

Arweave supports two transaction types:

* **AR Transfers**: Sending AR tokens between wallets
* **Data Uploads**: Storing files on the network

Uploading many small files individually creates separate transactions for each, which increases fees and network congestion. The Arweave ecosystem addresses this with **Data Items** and **Bundles**:

* **Data Item**: A standardized unit containing file data and metadata
* **Bundle**: A container that groups multiple Data Items into a single transaction

![Arweave transaction](https://ucarecdn.com/ffe24af7-4b6c-4bcf-85e7-dfc4c52f0036/arweavetransaction6.png)

Bundling cuts per-file overhead and reduces total gas costs. For the full specification, see [ANS-104: Bundled Data](https://github.com/ArweaveTeam/arweave-standards/blob/master/ans/ANS-104.md).

![Bundled transaction](https://ucarecdn.com/4e17c0c6-4a74-4337-b38e-b9bcc3a24a81/bundledarweavetransaction3.png)

## Liteseed Network

Running your own bundler can be complex, and relying on a single service creates centralization and scaling risks. The **Liteseed Network** solves this by coordinating a decentralized mesh of bundlers powered by AO.

### Governance & Incentives

1. **Stake**: Operators deposit tokens into an AO smart contract to join the network
2. **Assign**: Bundlers are selected based on stake weight and uptime when you submit a bundle
3. **Reward**: Successful uploads earn the bundler the transaction fee plus a Liteseed token bonus
4. **Slash**: Bundlers that miss deadlines lose a portion of their stake, enforcing reliability

![Liteseed Network architecture](https://ucarecdn.com/d91f67cb-7d4c-4903-a06a-5d11da7571ce/liteseedarweavetransaction1.png)

By decentralizing bundler services, Liteseed ensures high availability, competitive pricing, and trustless operation.
