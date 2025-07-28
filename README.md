# 📦 CoreCommerce — Headless B2B E-Commerce & Warehouse Inventory Engine

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?style=flat&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=flat&logo=docker&logoColor=white)](https://docker.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**CoreCommerce** is a high-throughput, headless B2B e-commerce and real-time warehouse inventory management engine. Designed for industrial wholesale distributors, CoreCommerce eliminates overselling, optimizes multi-location warehouse allocation, and speeds up fulfillment with wave-picking algorithms.

## 🌟 Core Architectural Features
- **Atomic Stock Ledgers:** Append-only stock movements with FIFO reservation guards
- **Multi-Facility Allocation:** Real-time stock visibility across bulk storage, pick faces, and transit bins
- **Wholesale Tier Pricing:** Dynamic customer price schedules based on order volume
- **Wave-Picking Optimization:** Automated batching of orders into unified picker walk routes
- **Zero-Downtime Containerization:** Multi-stage Docker Compose orchestration with health probes

## 🚀 API Endpoint Reference
| Method | Endpoint | Description | Auth |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/products` | Retrieve catalog with wholesale pricing tiers | Bearer JWT |
| `POST` | `/api/v1/products` | Create new SKU with volume pricing schedule | Bearer JWT |
| `POST` | `/api/v1/inventory/adjust` | Record atomic stock intake or cycle count change | Bearer JWT |
| `POST` | `/api/v1/orders` | Submit B2B wholesale order with FIFO allocation | Bearer JWT |
| `POST` | `/api/v1/transfers` | Initiate stock transfer between physical facilities | Bearer JWT |
| `POST` | `/api/v1/fulfillment/waves` | Generate optimized wave-picking batch | Bearer JWT |
| `GET` | `/health` | Cluster health and database connectivity probe | Public |

## ⚡ Quickstart with Docker Compose
```bash
docker-compose up --build -d
```
CoreCommerce API will be live on `http://localhost:5002`.

## 📄 License
Distributed under the **MIT License**.
