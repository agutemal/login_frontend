import type { User } from "./User";
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: User; // el DTO "envuelve" al modelo
}

export interface RegisterRequest {
  email: string;
  password: string;
  fullName: string;
}