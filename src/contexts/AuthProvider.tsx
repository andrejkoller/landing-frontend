import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { PublicUser } from "@/models/PublicUser";
import { getAuthToken, removeAuthToken } from "@/services/tokenService";
import { useRouter } from "next/navigation";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [publicUser, setPublicUser] = useState<PublicUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      fetch("https://localhost:7291/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPublicUser(data);
        })
        .catch(() => {
          removeAuthToken();
          setPublicUser(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const logout = () => {
    removeAuthToken();
    setPublicUser(null);
    router.push(
      process.env.NEXT_PUBLIC_SIGNIN_REDIRECT_URL ||
        "http://localhost:3001/signin?redirect=http://localhost:3000/callback"
    );
  };

  return (
    <AuthContext.Provider value={{ publicUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
