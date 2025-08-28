import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { PublicUser } from "@/models/PublicUser";
import {
  getAuthToken,
  removeAuthToken,
  isTokenValid,
} from "@/services/tokenService";
import { useRouter } from "next/navigation";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [publicUser, setPublicUser] = useState<PublicUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const token = getAuthToken();

    if (token && isTokenValid()) {
      fetch(`${API_BASE_URL}/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setPublicUser(data);
        })
        .catch((error) => {
          console.error("AuthProvider: Failed to fetch user data:", error);
          removeAuthToken();
          setPublicUser(null);
        })
        .finally(() => setLoading(false));
    } else {
      if (token && !isTokenValid()) {
        removeAuthToken();
      }
      setPublicUser(null);
      setLoading(false);
    }
  }, [API_BASE_URL]);

  const logout = () => {
    removeAuthToken();
    setPublicUser(null);
    router.push(
      process.env.NEXT_PUBLIC_SIGNIN_REDIRECT_URL ||
        "http://localhost:3001/signin?redirect=http://localhost:3000/callback"
    );
  };

  const refreshUser = async () => {
    const token = getAuthToken();

    if (!token) {
      throw new Error("No auth token found");
    }

    setRefreshing(true);
    try {
      const res = await fetch(`${API_BASE_URL}/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setPublicUser(data);
    } catch (error) {
      console.error("AuthProvider: Failed to refresh user data:", error);
      removeAuthToken();
      setPublicUser(null);
      throw error;
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ publicUser, loading, refreshing, logout, refreshUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
