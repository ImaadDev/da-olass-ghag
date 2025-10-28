"use client";

import { useState, useEffect } from "react";
import ScrollAnimation from "../../../components/ScrollBasedAnimation"; // optional
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // Redirect logged-in users
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) router.push("/admin/news");
    };
    checkSession();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(`Login failed: ${error.message}`);
      console.error("Login error:", error);
    } else {
      alert("Login successful!");
      router.push("/admin");
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 md:px-16 py-20">
      <ScrollAnimation direction="up" delay={0}>
        <div className="max-w-md w-full text-black p-6 md:p-10 space-y-6">
          {/* Logo */}
          <div className="text-center mb-8">
            <Image
              src="/logo.png" // replace with your logo path
              alt="Logo"
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
              disabled={loading}
              className="w-full py-3 font-bold text-white bg-red-600 hover:bg-red-700 transition text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </ScrollAnimation>
    </main>
  );
}
