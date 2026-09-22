// services/authService.ts
import { httpClient } from '../api/httpClient';
import type { LoginRequest, LoginResponse,RegisterRequest  } from '../types/models/Loguin';

export const authService = {
  login: (credentials: LoginRequest) =>
    httpClient.post<LoginResponse>('login', credentials),

  register: (data: RegisterRequest) =>
    httpClient.post<void>('register', data),
};