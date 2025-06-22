import type { UserModel } from '@/models/UserModel';
import type { AxiosInstance } from 'axios';

export class AuthService {
  constructor (protected axios: AxiosInstance) {}

  async login (
    userName: string,
    password: string,
  ): Promise<{ jwt: string; jwtRefresh: string; user: UserModel }> {
    const res = await this.axios.post('/auth', { userName, password });
    return res.data;
  }
}
