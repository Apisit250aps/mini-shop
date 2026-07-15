import { uuid } from 'drizzle-orm/pg-core';
import { generateUUID } from './uuid'; // สมมติว่านี่คือฟังก์ชันเจน UUIDv7 ของคุณ

export function primaryKeyUuid7<T extends string>(columnName: T) {
  return uuid(columnName)
    .primaryKey()
    .$defaultFn(() => generateUUID());
}