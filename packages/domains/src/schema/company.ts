import { BaseEntity, StringField, UUIDField } from '../lib/entity';
import { z } from 'zod';

const companySchema = BaseEntity({
  name: StringField({ required: true }),
  description: StringField({ required: true }),
  // relations
  ownerId: UUIDField({ required: true }),
});

const branchSchema = BaseEntity({
  name: StringField({ required: true }),
  description: StringField({ required: true }),
  address: StringField({ required: true }),
  // relations
  companyId: UUIDField({ required: true }),
});

const departmentSchema = BaseEntity({
  name: StringField({ required: true }),
  description: StringField({ required: true }),
  // relations
  companyId: UUIDField({ required: true }),
});

const userBranchSchema = BaseEntity({
  userId: UUIDField({ required: true }),
  branchId: UUIDField({ required: true }),
});

const userDepartmentSchema = BaseEntity({
  userId: UUIDField({ required: true }),
  departmentId: UUIDField({ required: true }),
});

type CompanyEntity = z.infer<typeof companySchema>;
type BranchEntity = z.infer<typeof branchSchema>;
type DepartmentEntity = z.infer<typeof departmentSchema>;
type UserBranchEntity = z.infer<typeof userBranchSchema>;
type UserDepartmentEntity = z.infer<typeof userDepartmentSchema>;

export {
  companySchema,
  branchSchema,
  departmentSchema,
  userBranchSchema,
  userDepartmentSchema,
};
export type {
  CompanyEntity,
  BranchEntity,
  DepartmentEntity,
  UserBranchEntity,
  UserDepartmentEntity,
};
