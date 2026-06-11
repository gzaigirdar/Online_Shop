[🔗 Live Demo](https://eshop-demo-app.vercel.app/)
[🔗 Demo Dashboard](https://eshop-demo-app.vercel.app/DashBoard)

# Online Shop — Full Stack E-Commerce Platform

**Overview** A full stack e-commerce application built with Next.js 14 (App Router) and Express.js — features JWT authentication, product/order management, customer reviews, and an admin analytics dashboard. Designed as a turnkey digital storefront for any local business.

## Goal
*A flexible e-commerce solution that helps small local businesses establish an online presence — handling everything from product catalog and shopping cart to order fulfillment and business analytics, all in one platform.*

## Core Features
- **Product Catalog** — Browse/CRUD with image support, inventory tracking, type classification
- **Shopping Cart** — Add/remove, quantity updates, auto tax/total via React Context
- **Order Management** — Full checkout (address + payment forms), status tracking (Pending/Fulfilled/Canceled)
- **Customer Reviews** — Submit, view, delete with star ratings and aggregated stats
- **Authentication** — Register/login, two-tier JWT, password reset flow via email
- **Admin Dashboard** — Weekly sales charts, product analytics, user management, order/review/inquiry moderation
- **Admin Controls** — Full product CRUD (add/edit/delete with images), user account management (status, password reset, deletion), review and inquiry moderation

## Key Highlights
- Full shopping cart → checkout → order fulfillment flow
- Admin dashboard with weekly sales aggregation, inventory breakdown, User accounts, reviews, inquires management, and order analytics
- Two-tier JWT auth (access + refresh tokens), bcrypt password hashing, password reset via email
- MongoDB aggregation pipelines for weekly revenue stats and product-type distribution

## Tech Stack
| Category       | Backend                          | Frontend                          |
|----------------|----------------------------------|-----------------------------------|
| Runtime/FW     | Node.js, Express 4.19            | Next.js 14 (App Router), React 18 |
| Database       | MongoDB, Mongoose 8.4            | —                                 |
| Auth           | JWT + bcrypt + httpOnly cookies  | React Context (Login Context)     |
| Styling        | —                                | Tailwind CSS 4 + DaisyUI 5        |
| Charts         | MongoDB aggregation pipeline     | ApexCharts + Recharts             |
| Validation     | validator.js                     | Zod + React Hook Form             |
| Email          | Nodemailer (Send Grid SMTP)      | —                                 |

## Architecture
```
[Browser] ←→ [Next.js App Router (src/app/)] ←→ [Express API (/log, /product, /order, /review, /inquiry)] ←→ [MongoDB]
```
