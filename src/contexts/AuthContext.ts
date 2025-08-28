import { PublicUser } from "@/models/PublicUser";
import { createContext } from "react";

interface AuthContextType {
  publicUser: PublicUser | null;
  loading: boolean;
  refreshing: boolean;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
