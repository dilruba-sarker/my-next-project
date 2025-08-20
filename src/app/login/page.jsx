"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Login</h1>

      {/* Google Login */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="bg-blue-500 text-white px-4 py-2 rounded"
           
      >
        Login with Google
      </button>

     
    </div>
  );
}
