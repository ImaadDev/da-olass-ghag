"use client";

import { useState } from "react";
import ScrollAnimation from "../../components/ScrollBasedAnimation"; // optional for scroll animation
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 md:px-16 py-20">
      <ScrollAnimation direction="up" delay={0}>
        <div className="max-w-md w-full text-black p-6 md:p-10 space-y-6">
          {/* Logo */}
<div className="text-center mb-8">
  <Image
    src="/logo.png" // 🖼️ replace with your actual logo path
    alt="Da Olass Ghag Logo"
    width={84}
    height={84}
    className="mx-auto w-32 h-auto object-contain"
  />
  <p className="text-gray-400 mt-3 text-sm tracking-wide">
    Sign in to access the latest videos, news, and podcasts.
  </p>
</div>


          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
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
                className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-red-600 outline-none transition"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-red-600 outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-600 transition text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-sm text-gray-400 hover:text-red-600 transition"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 font-bold text-white bg-red-600 hover:bg-red-700 transition text-lg"
            >
              Sign In
            </button>
          </form>


        
        </div>
      </ScrollAnimation>
    </main>
  );
}
