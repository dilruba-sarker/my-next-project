import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="p-4 bg-gray-800 text-white flex justify-between">
        <h1 className="text-xl font-bold">MyShop</h1>
        <div className="space-x-4">
          <Link href="/products">Products</Link>
          <Link href="/login">Login</Link>
        </div>
      </nav>

      {/* Hero Section with Banner */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/next.png"
          alt="Hero Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-4xl font-bold">Welcome to MyShop</h2>
          <p className="mt-4 text-lg">Discover amazing products with great deals</p>
          <Link
            href="/products"
            className="mt-6 bg-blue-500 px-6 py-2 rounded text-white"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="p-12 grid grid-cols-3 gap-6">
        <div className="p-6 border rounded shadow">⭐ Featured Product A</div>
        <div className="p-6 border rounded shadow">⭐ Featured Product B</div>
        <div className="p-6 border rounded shadow">⭐ Featured Product C</div>
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        © 2025 MyShop. All rights reserved.
      </footer>
    </div>
  );
}
