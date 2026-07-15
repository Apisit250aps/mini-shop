import { BaseEntity, StringField, UUIDField } from "../lib/entity";
import { z } from "zod";

const permissionSchema = BaseEntity({
  code: StringField({ required: true, }),
  module: StringField({ required: true, }),
});

const roleSchema = BaseEntity({
  companyId: UUIDField({ required: true, }),
  name: StringField({ required: true, }),
  description: StringField({ required: true, }),
});

const rolePermissionSchema = BaseEntity({
  roleId: UUIDField({ required: true, }),
  permissionId: UUIDField({ required: true, }),
});

const userRoleSchema = BaseEntity({
  userId: UUIDField({ required: true, }),
  roleId: UUIDField({ required: true, }),
});

type PermissionEntity = z.infer<typeof permissionSchema>;
type RoleEntity = z.infer<typeof roleSchema>;
type RolePermissionEntity = z.infer<typeof rolePermissionSchema>;
type UserRoleEntity = z.infer<typeof userRoleSchema>;

export { permissionSchema, roleSchema, rolePermissionSchema, userRoleSchema };
export type { PermissionEntity, RoleEntity, RolePermissionEntity, UserRoleEntity };