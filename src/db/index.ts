// Drizzle example with the Neon serverless driver
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import dotenv from 'dotenv';

dotenv.config();

const sql = neon(process.env.DATABASE_URL as string);

const db = drizzle(sql);

export default db;
