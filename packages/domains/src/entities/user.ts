import type { UserEntity } from '../schema/user';

class User implements UserEntity {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  lastLogin: Date | null;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: UserEntity) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.emailVerified = data.emailVerified;
    this.image = data.image;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.isActive = data.isActive;
    this.lastLogin = data.lastLogin;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

export { User };
