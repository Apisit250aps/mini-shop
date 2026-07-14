// Make sure to install the 'pg' package
import { drizzle } from 'drizzle-orm/node-postgres';
import { authRelations } from './relations';

const url = process.env.DATABASE_URL;
if (!url) {
  throw new Error('DATABASE_URL environment variable is not set');
}

export default drizzle(url, { relations: { ...authRelations }, logger: true });
