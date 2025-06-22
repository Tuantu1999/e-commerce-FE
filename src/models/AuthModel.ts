import type { UserModel } from './UserModel';

export interface AuthModel {
  token: string;
  refreshToken?: string;
  user: UserModel;
  password: string;
}
