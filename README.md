# 🛒 Next.js Product App with MongoDB

A simple **Next.js 15 (App Router)** project that connects to **MongoDB** for storing and displaying products.  
Users can view all products, navigate to product details, and (optionally) add new products.  
This project is a learning-friendly boilerplate for **Next.js + MongoDB integration**.

---

## 🚀 Features
- Next.js 15 App Router
- Fetch products from MongoDB
- Dynamic product detail pages (`/products/[id]`)
- API routes for products (`/api/products`)
- Tailwind CSS styling

---

## ⚙️ Setup & Installation

### 1️⃣ Clone repository
```bash
git clone https://github.com/your-username/nextjs-mongodb-products.git
cd nextjs-mongodb-products
| Route                | Type         | Description                                                                               |
| -------------------- | ------------ | ----------------------------------------------------------------------------------------- |
| `/`                  | Page         | Landing page (Navbar, Hero, Product Highlights, Footer)                                   |
| `/products`          | Page         | List all products (fetched from MongoDB)                                                  |
| `/products/[id]`     | Dynamic Page | Show single product details based on product ID                                           |
| `/api/products`      | API Route    | `GET` → Fetch all products<br>`POST` → Add a new product                                  |
| `/api/products/[id]` | API Route    | `GET` → Fetch single product by ID<br>`PUT` → Update product<br>`DELETE` → Remove product |
