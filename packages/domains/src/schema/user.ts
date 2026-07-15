import { z } from "zod";
import { BaseEntity, BooleanField, DateField, EmailField, StringField } from "../lib/entity";

const userSchema = BaseEntity({
  name: StringField({
    required: true,
  }),
  email: EmailField({
    required: true,
  }),
  emailVerified: BooleanField({
    default: () => false,
  }),
  image: StringField(),
  firstName: StringField(),
  lastName: StringField(),
  isActive: BooleanField({
    default: true,
  }),
  lastLogin: DateField({ nullable: true }),
});

const createUserSchema = userSchema.omit({
  id: true,
  isActive: true,
  lastLogin: true,
  createdAt: true,
  updatedAt: true,
});

const updateUserSchema = userSchema.partial().omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

type UserEntity = z.infer<typeof userSchema>;
type CreateUserEntity = z.infer<typeof createUserSchema>;
type UpdateUserEntity = z.infer<typeof updateUserSchema>;

export {
  userSchema,
  createUserSchema,
  updateUserSchema,
};

export type { UserEntity, CreateUserEntity, UpdateUserEntity };