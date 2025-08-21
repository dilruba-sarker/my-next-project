
// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import toast, { Toaster } from "react-hot-toast";

// export default function AddProductPage() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Check if user is authenticated (client-side)
//   useEffect(() => {
//     const checkSession = async () => {
//       const res = await fetch("/api/auth/session");
//       const data = await res.json();
//       if (!data?.user) {
//         router.push("/login"); // redirect if not logged in
//       } else {
//         setLoading(false);
//       }
//     };
//     checkSession();
//   }, [router]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("/api/products", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, description, price }),
//     });
//     const data = await res.json();

//     if (res.ok) {
//       toast.success("✅ Product added successfully!");
//       setName("");
//       setDescription("");
//       setPrice("");
//       router.push("/products"); // redirect after success
//     } else {
//       toast.error("❌ Error: " + data.error);
//     }
//   };

//   if (loading) return <p className="p-12 text-center">Loading...</p>;

//   return (
//     <div className="p-12 max-w-md mx-auto">
//       <Toaster position="top-right" />
//       <h1 className="text-3xl font-bold mb-6">Add Product</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function AddProductPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);

  // Check if user is authenticated (client-side)
  useEffect(() => {
    const checkSession = async () => {
      const res = await fetch("/api/auth/session");
      const data = await res.json();
      if (!data?.user) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };
    checkSession();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price }),
    });
    const data = await res.json();

    if (res.ok) {
      toast.success("✅ Product added successfully!");
      setName("");
      setDescription("");
      setPrice("");
      router.push("/products");
    } else {
      toast.error("❌ Error: " + data.error);
    }
  };

  if (loading) return <p className="p-12 text-center text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-6">
      <Toaster position="top-right" />
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
          Add New Product
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
            rows={4}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-md transition transform hover:-translate-y-1"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
