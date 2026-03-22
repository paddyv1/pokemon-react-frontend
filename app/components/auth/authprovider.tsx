import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import apiClient from "~/services/api/apiClient";
import { authService } from "~/services/api/authService";
import { type User } from "~/types/auth/auth";
// ---------- Types ----------

//interface User {
//id: number;
//username: string;
//password: string;
//profile_picture?: string;
// add any other fields your /auth/me endpoint returns
//}

interface AuthContextType {
  user: User | false | null; // null = unknown, false = logged out, User = logged in
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

// ---------- Context ----------

const AuthContext = createContext<AuthContextType | null>(null);

// ---------- Provider ----------

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | false | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      setUser(false);
      setLoading(false);
      return;
    }

    authService
      .getMe()
      .then((response) => setUser(response.data))
      .catch(() => {
        localStorage.removeItem("access_token");
        setUser(false);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (username: string, password: string): Promise<void> => {
    await authService
      .login(username, password)
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("access_token", res.data.access_token);
      })
      .finally(() => setLoading(false));
  };

  const signup = async (username: string, password: string): Promise<void> => {
    await authService.signUp(username, password).then((res) => {
      setUser(res.data.user);
      localStorage.setItem("access_token", res.data.access_token);
    });
  };

  const logout = (): void => {
    localStorage.removeItem("access_token");
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// ---------- Hook ----------

export default function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an <AuthProvider>");
  }
  return context;
}
