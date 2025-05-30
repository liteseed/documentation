---
title: API Reference
description: Full REST API reference for Liteseed Network
---

Base URL: `https://api.liteseed.xyz`

# API Reference

## Payment

### GET `/price/{bytes}`  
Get the current Arweave fee (in wei) and the address to pay.

**Path Parameters**

| Name   | Type    | Required | Description            |
| ------ | ------- | -------- | ---------------------- |
| bytes  | integer | Yes      | Size of the data (1 – 2 147 483 647 bytes) |

**Responses**

- **200 OK**  
  ```json
  {
    "price": "1000000000000",
    "address": "Cbj95zDZBBhmyht6iFlEf7xmSCSVZGw436V6HWmm9Ek"
  }

Returns a `PriceGetResponse` object.

* **400 Bad Request**
* **424 Failed Dependency**
* **500 Internal Server Error**
  All error responses return an `HTTPError` object:

  ```json
  {
    "code": 400,
    "message": "Invalid byte size"
  }
  ```

---

## Upload

### POST `/tx`

Submit a signed ANS-104 data-item to Liteseed’s staging layer.

**Consumes:** `application/json`
**Produces:** `application/json`

**Request Body**
Raw binary payload of the data-item (ANS-104 format).
*Content-Type:* `application/octet-stream`
*Content-Length:* total byte length of the data-item.

**Responses**

* **200 OK**

  ```json
  {
    "id": "vclUklCqp6mTOoCZjkqcD2m06VRhnKtwVNSfMOPV7SM",
    "dataCaches": ["api.liteseed.xyz"],
    "fastFinalityIndexes": ["api.liteseed.xyz"],
    "deadlineHeight": 1460374,
    "owner": "your-arweave-address",
    "version": "1.0.0"
  }
  ```

  Returns a `PostResponse` object.

* **400 Bad Request**

* **424 Failed Dependency**

* **500 Internal Server Error**
  All error responses return an `HTTPError` object.

---

## Fetch

### GET `/tx/{id}/status`

Get the current status of a staged data-item.

**Path Parameters**

| Name | Type   | Required | Description              |
| ---- | ------ | -------- | ------------------------ |
| id   | string | Yes      | The data-item identifier |

**Response**

* **200 OK**
  A plain string status, one of:

  ```
  "created"  | "queued" | "sent"
  "confirmed"| "failed" | "invalid"
  ```

* **404 Not Found**

* **424 Failed Dependency**

* **500 Internal Server Error**
  All error responses return an `HTTPError` object.

### GET `/tx/{id}/{field}`

Retrieve a specific field (or the full data-item) from a staged upload.

**Path Parameters**

| Name  | Type   | Required | Description                      |
| ----- | ------ | -------- | -------------------------------- |
| id    | string | Yes      | The data-item identifier         |
| field | string | No       | The field to fetch (e.g. `data`) |

**Query Parameters**

| Name      | Type   | Required | Description                                        |
| --------- | ------ | -------- | -------------------------------------------------- |
| mime-type | string | No       | Override the returned MIME type (e.g. `image/png`) |

**Responses**

* **200 OK**

  * If `field` omitted: returns full data-item JSON.
  * If `field` is `data` or another supported field: returns raw bytes, auto-detecting MIME; defaults to `application/octet-stream`.
* **404 Not Found**
* **424 Failed Dependency**
* **500 Internal Server Error**
  All error responses return an `HTTPError` object.

---

## Payment Confirmation

### PUT `/tx/{id}/{paymentId}`

Notify Liteseed of an on-chain payment so your data-item is bundled and committed on Arweave.

**Path Parameters**

| Name      | Type   | Required | Description                                |
| --------- | ------ | -------- | ------------------------------------------ |
| id        | string | Yes      | The data-item identifier                   |
| paymentId | string | Yes      | The Arweave transaction ID of your payment |

**Responses**

* **200 OK**

  ```json
  {
    "id": "vclUklCqp6mTOoCZjkqcD2m06VRhnKtwVNSfMOPV7SM",
    "paymentId": "TxId123abc456..."
  }
  ```

  Returns a `DataItemPutResponse` object.

* **400 Bad Request**

* **404 Not Found**

* **424 Failed Dependency**

---

# Schemas

### `PriceGetResponse`

| Property | Type   | Description                     |
| -------- | ------ | ------------------------------- |
| price    | string | Upload fee in wei               |
| address  | string | Arweave address to send payment |

### `PostResponse`

| Property            | Type      | Description                                       |
| ------------------- | --------- | ------------------------------------------------- |
| id                  | string    | Data-item identifier                              |
| dataCaches          | string\[] | Liteseed cache endpoints where you can fetch data |
| fastFinalityIndexes | string\[] | Endpoints optimized for fast confirmation checks  |
| deadlineHeight      | integer   | Hard Arweave block height by which payment is due |
| owner               | string    | Arweave wallet address that signed the data-item  |
| version             | string    | API version (`"1.0.0"`)                           |

### `DataItemPutResponse`

| Property  | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| id        | string | Data-item identifier                   |
| paymentId | string | Arweave transaction ID for the payment |

### `HTTPError`

| Property | Type    | Description      |
| -------- | ------- | ---------------- |
| code     | integer | HTTP status code |
| message  | string  | Error details    |

