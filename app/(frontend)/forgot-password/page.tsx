"use client";

import { useState } from "react";
import ScrollAnimation from "../../components/ScrollBasedAnimation";
import Image from "next/image";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add reset password logic here (e.g., API call)
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 md:px-16 py-20">
      <ScrollAnimation direction="up" delay={0}>
        <div className="max-w-md w-full text-black p-10 space-y-6">
          
          {/* Logo */}
          <div className="text-center mb-8">
            <Image
              src="/logo.png" // 🖼️ Replace with your actual logo path
              alt="Da Olass Ghag Logo"
              width={98}
              height={98}
              className="mx-auto object-contain"
              priority
            />
            <p className="text-gray-500 mt-4 text-sm tracking-wide">
              Reset your password to regain access to your account.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-gray-100 text-black placeholder-gray-400 border border-gray-700 focus:border-green-600 outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-bold text-white bg-red-600 hover:bg-red-700 transition text-lg"
            >
              Send Reset Link
            </button>
          </form>

          {/* Back to login */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Remember your password?{" "}
            <a href="/login" className="text-red-600 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </ScrollAnimation>
    </main>
  );
}
