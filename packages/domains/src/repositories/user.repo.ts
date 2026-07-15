import { BaseRepository } from '..';
import { User } from '../entities/user';

interface IUserRepository extends BaseRepository<User> {
  findByEmail(email: string): Promise<User | null>;
}

export type { IUserRepository };
