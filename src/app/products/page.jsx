"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      console.log('resssss',res);
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      {products.length === 0 && <p>No products found.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="font-bold">Price: ${product.price}</p>
          
            <Link href={`products/${product._id}`}>
              <button className="btn bg-blue-800 text-white">Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
