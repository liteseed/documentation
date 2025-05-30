---
title: Run a Liteseed Edge Bundler Node
description: Step-by-step guide to install, configure, and operate a Liteseed Edge Bundler on Linux
---

import { Steps, Code, Aside } from '@astrojs/starlight/components';

<Aside type="caution" title="System Requirements">
- **CPU:** 1 GHz  
- **Memory:** 1 GiB  
- **Storage:** 8 GiB  
- **OS:** Linux  
</Aside>

## Overview

This guide walks you through:

1. Installing Docker  
2. Cloning & building the Edge Bundler image  
3. Initializing storage & database  
4. Configuring your Arweave wallet  
5. Running the bundler service  
6. Mapping a custom domain  
7. Staking your node  

---

<Steps>
1. **Prepare Docker**  
2. **Clone the repo**  
3. **Build the Docker image**  
4. **Create storage volume**  
5. **Configure Arweave key**  
6. **Run database migrations**  
7. **Start your node**  
8. **Map a domain**  
9. **Stake your bundler**  
</Steps>

---

## 1. Prepare Docker

Install Docker if you haven’t already:

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
rm get-docker.sh

# Verify installation
sudo docker --version
````

---

## 2. Clone the Repository

```bash
mkdir -p ~/liteseed
git clone https://github.com/liteseed/edge ~/liteseed/edge
```

---

## 3. Build the Docker Image

```bash
cd ~/liteseed/edge
sudo docker build -t liteseed-edge .
```

---

## 4. Create a Docker Volume

```bash
sudo docker volume create liteseed-data
```

---

## 5. Configure Your Arweave Wallet

1. Generate or import a wallet at [arweave.app](https://arweave.app) and download your JWK JSON.

2. Securely copy it into the Docker volume:

   ```bash
   sudo nano /var/lib/docker/volumes/liteseed-data/_data/signer.json
   ```

   Paste the contents of your JWK and save (`Ctrl+X`, then `Y`).

3. Check your balance:

   ```bash
   sudo docker run -v liteseed-data:/data liteseed-edge balance
   ```

<Aside type="caution" title="Protect Your Key">
Store `signer.json` in a safe location. Losing it means losing control of your stake and uploads.
</Aside>

---

## 6. Run Database Migrations

```bash
sudo docker run -v liteseed-data:/data liteseed-edge migrate
```

---

## 7. Start Your Bundler Node

```bash
export EXTERNAL_PORT=8080   # change if needed
sudo docker run -d -p $EXTERNAL_PORT:8080 \
  -v liteseed-data:/data \
  liteseed-edge start
```

---

## 8. Map a Custom Domain

You can expose your node via **Nginx** or **Cloudflare**—choose one.

### 8.1 Nginx Reverse Proxy

1. Point your DNS A record (no proxy) to your server IP.

2. Install Nginx & Certbot:

   ```bash
   sudo apt update
   sudo apt install -y nginx certbot
   ```

3. Obtain a certificate:

   ```bash
   sudo certbot certonly --manual --preferred-challenges dns \
     --email you@example.com -d your-domain.com
   ```

4. Configure Nginx:

   ```bash
   sudo nano /etc/nginx/sites-available/default
   ```

   ```nginx
   server {
     listen 80;
     server_name your-domain.com;
     location / { return 301 https://$host$request_uri; }
   }

   server {
     listen 443 ssl;
     server_name your-domain.com;

     ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
     ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

     location / {
       proxy_pass http://localhost:8080;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
     }
   }
   ```

5. Test & reload:

   ```bash
   sudo nginx -t
   sudo systemctl restart nginx
   ```

### 8.2 Cloudflare Forwarding

1. Add an A record (proxied) to your server IP.

2. In **Rules → Origin Rules**, create a rule:

   * **Hostname** equals `your-domain.com`
   * **Rewrite to** `https://your-domain.com:8080`

3. Deploy the rule and verify your endpoint:

   ```bash
   curl https://your-domain.com/
   ```

   You should see a JSON object with your address, gateway, and version.

---

## 9. Stake Your Bundler

Once your node is reachable:

```bash
export URL="https://your-domain.com/"
sudo docker run -v liteseed-data:/data \
  liteseed-edge stake -u "$URL"
```

<Aside type="warning" title="Insufficient Balance">
Ensure you have enough AR before staking. Check with:

```bash
sudo docker run -v liteseed-data:/data liteseed-edge balance
```

</Aside>

Your bundler is now active in the Liteseed Network!
