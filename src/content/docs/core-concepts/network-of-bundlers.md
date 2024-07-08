---
title: A Network of bundlers
description: A decentralized network of bundlers powered by AO.
---

At a high-level the liteseed network transactional flow looks something like the image below.

![Liteseed Network Transaction Flow](https://ucarecdn.com/d91f67cb-7d4c-4903-a06a-5d11da7571ce/liteseedarweavetransaction1.png)

1. A user sends the token and checksum with the AO process is assigned a bundler
2. The user than sends the data to the bundler
3. The bundler verifies the checksum of the data with AO process
4. It then posts the bundles and updates the status on the AO contract.
5. Bundler can then send the request to receive the reward for uploading data onto Arweave, with an additional staking reward.
6. The AO contract verifies the bundlers' claim and releases the reward to the bundler.

This removes the need for trust between the user and the bundler by creating an escrow on AO.
It also creates a very scalable system since large files can be broken down into
chunks and uploaded by separate bundlers.

Essentially, solving the problem of transparency and scale together.
