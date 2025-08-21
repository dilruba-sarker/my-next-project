// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="p-4 bg-gray-800 text-white flex justify-between">
//         <h1 className="text-xl font-bold">MyShop</h1>
//         <div className="space-x-4">
//           <Link href="/products">Products</Link>
//           <Link href="/dashboard/add-product"> Add Products</Link>
//           <Link href="/login">Login</Link>
//         </div>
//       </nav>

//       {/* Hero Section with Banner */}
//       <section className="relative w-full h-[400px]">
//         <Image
//           src="/next.png"
//           alt="Hero Banner"
//           fill
//           priority
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
//           <h2 className="text-4xl font-bold">Welcome to MyShop</h2>
//           <p className="mt-4 text-lg">Discover amazing products with great deals</p>
//           <Link
//             href="/products"
//             className="mt-6 bg-blue-500 px-6 py-2 rounded text-white"
//           >
//             Shop Now
//           </Link>
//         </div>
//       </section>

//       {/* Product Highlights */}
//       <section className="p-12 grid grid-cols-3 gap-6">
//         <div className="p-6 border rounded shadow">⭐ Featured Product A</div>
//         <div className="p-6 border rounded shadow">⭐ Featured Product B</div>
//         <div className="p-6 border rounded shadow">⭐ Featured Product C</div>
//       </section>

//       {/* Footer */}
//       <footer className="p-4 bg-gray-800 text-white text-center">
//         © 2025 MyShop. All rights reserved.
//       </footer>
//     </div>
//   );
// }
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
          <Link href="/dashboard/add-product"> Add Products</Link>
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

      {/* Features & Benefits Section */}
      <section className="p-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <span className="text-4xl">🚚</span>
            <h3 className="mt-4 text-xl font-semibold">Fast Delivery</h3>
            <p className="mt-2 text-gray-600">
              Get your favorite products delivered quickly to your doorstep.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <span className="text-4xl">💳</span>
            <h3 className="mt-4 text-xl font-semibold">Secure Payment</h3>
            <p className="mt-2 text-gray-600">
              We provide safe and easy checkout with multiple payment options.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <span className="text-4xl">⭐</span>
            <h3 className="mt-4 text-xl font-semibold">Quality Products</h3>
            <p className="mt-2 text-gray-600">
              Shop only top-rated, high-quality items with trusted reviews.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        © 2025 MyShop. All rights reserved.
      </footer>
    </div>
  );
}
