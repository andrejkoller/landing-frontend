import { PublicUser } from "@/models/PublicUser";
import { createContext } from "react";

interface AuthContextType {
  publicUser: PublicUser | null;
  loading: boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
