// services/authService.ts
import { httpClient } from '../api/httpClient';
import type { LoginRequest, LoginResponse,RegisterRequest  } from '../types/models/Loguin';

export const authService = {
  login: (credentials: LoginRequest) =>
    httpClient.post<LoginResponse>('/api/auth/login', credentials),

  register: (data: RegisterRequest) =>
    httpClient.post<void>('/api/auth/register', data),
};