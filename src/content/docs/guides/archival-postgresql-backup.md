---
title: Archive PostgreSQL Backups
description: Schedule nightly dumps of your PostgreSQL database to Liteseed using Python & cron
---

import { Steps, Code, Aside } from '@astrojs/starlight/components';

<Aside type="caution" title="4 GB File Limit">
  Split very large dumps or compress them before uploading.
</Aside>

## Overview

Automate your nightly Postgres dump, upload it to Liteseed, then pay-once for permanent archival.

---

<Steps>
1. **Dump** your database to a local file  
2. **Upload** the dump via Python & the Liteseed REST API  
3. **Fetch price** and **pay** the Arweave fee  
4. **Confirm** payment so the dump goes on-chain  
</Steps>

---

## 1. Install Dependencies

```bash
pip install psycopg2-binary requests arweave-python-client
````

---

## 2. Backup & Upload Script

```python
import os, subprocess, requests, json
from arweave import Wallet, Transaction

API = 'https://api.liteseed.xyz'
KEY = 'arweave-key.json'
DB_URL = os.environ['DATABASE_URL']
DUMP_FILE = '/tmp/db_dump.sql'

# 1️⃣ Dump
subprocess.run(['pg_dump', DB_URL, '-f', DUMP_FILE], check=True)

# 2️⃣ Stage on Liteseed
with open(DUMP_FILE, 'rb') as f:
    resp = requests.post(f"{API}/data", files={'file': f})
resp.raise_for_status()
upload_id = resp.json()['id']

# 3️⃣ Price & Pay
size = os.path.getsize(DUMP_FILE)
price_resp = requests.get(f"{API}/price/{size}").json()
wallet = Wallet(KEY)
tx = Transaction(wallet, target=price_resp['address'], quantity=str(price_resp['price']))
tx.sign(); tx.send()

# 4️⃣ Confirm
requests.put(f"{API}/tx/{upload_id}/{tx.id}").raise_for_status()
print("✅ Backup archived permanently!")
```

---

## 3. Schedule with cron

Add to your crontab (`crontab -e`):

```cron
0 2 * * * /usr/bin/python3 /path/to/backup_and_upload.py >> /var/log/pg_liteseed.log 2>&1
```

---

### Stream Kubernetes Logs to Liteseed via Fluentd

````md
---
title: Stream Kubernetes Logs
description: Capture pod logs and batch-upload them to Liteseed with Fluentd
---

import { Steps, Code, Aside } from '@astrojs/starlight/components';

<Aside type="tip" title="Compact Bundles">
  Buffer logs in 10 MB chunks before sending to reduce bundle overhead.
</Aside>

## 1. Install Fluentd & Plugins

```bash
gem install fluentd fluent-plugin-http
````

## 2. Fluentd Config

```xml
<source>
  @type tail
  path /var/log/containers/*.log
  tag k8s.logs
  <parse>
    @type json
  </parse>
</source>

<match k8s.logs>
  @type http
  endpoint https://api.liteseed.xyz/tx
  serializer json
  <format>
    json_key data
  </format>
  <buffer tag,time>
    @type memory
    flush_interval 60s
    chunk_limit_size 10m
  </buffer>
  <header>
    Content-Type application/octet-stream
  </header>
</match>
```

* Fluentd tails your pod logs, buffers 10 MB then POSTs raw JSON to `/tx`.
* In a second pipeline, you’d call `/price/:size`→Arweave pay→`PUT /tx/:id/:paymentId` via a small script or Lambda.

---

### Provision a Bundler Node with Terraform

````md
---
title: Provision a Liteseed Bundler with Terraform
description: Spin up an AO bundler node on AWS with Terraform
---

import { Steps, Code, Aside } from '@astrojs/starlight/components';

<Aside type="caution" title="Security">
  Store your Arweave JWK and AO credentials in AWS Secrets Manager.
</Aside>

<Steps>
1. **Define** your AWS provider and VPC  
2. **Create** an EC2 instance with Docker  
3. **Deploy** the bundler container  
4. **Auto-scale** with an ASG and health checks  
</Steps>

```hcl
provider "aws" { region = "us-east-1" }

resource "aws_instance" "bundler" {
  ami           = "ami-0abcdef1234567890"
  instance_type = "t3.small"
  user_data = <<-EOF
    #!/bin/bash
    yum install -y docker
    systemctl start docker
    docker run -d \
      -e AR_JWK_SECRET_NAME="arweave-key" \
      -e AO_CONTRACT="0xABCDEF..." \
      liteseed/bundler:latest
  EOF
  tags = { Name = "liteseed-bundler" }
}
````

* Hook up an **Auto Scaling Group** and **ALB** to handle load and failures.
* Use IAM roles to grant Secrets Manager access to your key.

---

### Monitor Uploads with Webhooks & Slack

````md
---
title: Monitor Upload Status
description: Get real-time Slack alerts when your Liteseed uploads change state
---

import { Steps, Code, Aside } from '@astrojs/starlight/components';

<Aside type="tip" title="Retry Logic">
  Use exponential backoff for webhook delivery retries.
</Aside>

<Steps>
1. **Expose** a public `/webhook` endpoint  
2. **Subscribe** via Liteseed Dashboard or API  
3. **Receive** JSON payloads for status changes  
4. **Post** alerts into Slack or Teams  
</Steps>

```js
// express-webhook.js
import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

const app = express();
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const { uploadId, status } = req.body;
  await fetch(process.env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    body: JSON.stringify({
      text: `Upload *${uploadId}* is now *${status}*`
    })
  });
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Webhook listener running on port 3000'));
````

* Configure your listener URL in Liteseed’s Dashboard under **Webhooks**.
* Now you’ll get a Slack message whenever any data-item is confirmed, fails, or becomes invalid.
