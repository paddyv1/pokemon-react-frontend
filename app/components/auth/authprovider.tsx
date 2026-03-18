import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import api from "~/services/api";

// ---------- Types ----------

interface User {
  id: number;
  username: string;
  password: string;
  profile_picture?: string;
  // add any other fields your /auth/me endpoint returns
}

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

    api
      .get<User>("/auth/me")
      .then((res) => setUser(res))
      .catch(() => {
        localStorage.removeItem("access_token");
        setUser(false);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (username: string, password: string): Promise<void> => {
    const form = new URLSearchParams();
    form.set("username", username);
    form.set("password", password); // optional unless your backend enforces it

    const res = await api.postForm<{ access_token: string; user: User }>(
      "/auth/login",
      form,
    );

    localStorage.setItem("access_token", res.access_token);
    setUser(res.user);
  };

  const signup = async (username: string, password: string): Promise<void> => {
    const res = await api.post<{ access_token: string; user: User }>(
      "/auth/register",
      { username, password },
    );
    localStorage.setItem("access_token", res.access_token);
    setUser(res.user);
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
