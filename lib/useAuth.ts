// lib/useAuth.ts
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "./supabaseClient";

export const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login"); // redirect to login if not logged in
      } else {
        setUser(session.user);
      }
      setLoading(false);
    };

    checkSession();

    // Listen to auth changes (logout, token refresh)
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.push("/login");
      else setUser(session.user);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [router]);

  return { user, loading };
};
