"use client";

import { setAuthToken } from "@/services/tokenService";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      setAuthToken(token);
      router.push("/account");
    } else {
      router.push(
        "http://localhost:3001/signin?redirect=http://localhost:3000/callback"
      );
    }
  }, [router]);

  return <p>Redirecting...</p>;
}
