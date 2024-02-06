---
title: Install the SDK
description: Installation Guide
---

Ready to install `@liteseed/sdk` ? Follow this guide to get started with the SDK in **Node.js**.

## Prerequisites

**Node.js** - `v18.14.1` or higher.
**Package Manager** - `npm`, `yarn`, `pnpm`, or `bun`.

## Installation

Install the SDK using your package manager.

```zsh
  npm install @liteseed/sdk
```

## Import into your project

Import the sdk into your project and start uploading data to Arweave.

```ts title="liteseed.ts"
    import { upload } from "@liteseed/sdk";
    import fs from "fs";

    const file = fs.readFileSync("your-file-path");
    
    upload(file).then(console.log);
```

## Using other programming language?

We provide a REST API that lets you interact with the Liteseed Network.
The full API reference is here:
