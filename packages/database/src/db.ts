// Make sure to install the 'pg' package
import { drizzle } from 'drizzle-orm/node-postgres';

const url = process.env.DATABASE_URL;
if (!url) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const db = drizzle(url);

export default db;
