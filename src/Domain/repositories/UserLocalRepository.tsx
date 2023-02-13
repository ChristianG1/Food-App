import { User } from "../entities/User";

export interface UserLocalRepository {
  save(user: User): Promise<void>;
  getUser(): Promise<void>;
  remove(): Promise<void>;
}