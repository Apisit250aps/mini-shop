import { uuid, timestamp } from 'drizzle-orm/pg-core';
import { generateUUID } from './uuid'; // สมมติว่านี่คือฟังก์ชันเจน UUIDv7 ของคุณ

export function primaryKeyUuid7<T extends string>(columnName: T) {
  return uuid(columnName)
    .primaryKey()
    .$defaultFn(() => generateUUID());
}

export function updatedAtTimestamp<T extends string>(columnName: T) {
  return timestamp(columnName)
    .$onUpdate(() => new Date())
    .notNull();
}

export function createdAtTimestamp<T extends string>(columnName: T) {
  return timestamp(columnName)
    .defaultNow()
    .notNull();
}