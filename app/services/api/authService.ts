import apiClient from "./apiClient";
import type { LoginResponse, User } from "../../types/auth/auth";

export const authService = {
  login: async (username: string, password: string) => {
    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    return apiClient.post<LoginResponse>("/api/auth/login", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  },

  signUp: async (username: string, password: string) =>
    apiClient.post<LoginResponse>("/api/auth/register", { username, password }),

  getMe: async () => apiClient.get<User>("/api/auth/me"),
};
