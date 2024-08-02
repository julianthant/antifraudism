// Drizzle example with the Neon serverless driver
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

import dotenv from 'dotenv';

dotenv.config();

const sql = neon(
  'postgresql://neondb_owner:HE1Ba7hnivCY@ep-hidden-field-a6tejz9q.us-west-2.aws.neon.tech/neondb?sslmode=require'
);

const db = drizzle(sql, { schema });

export default db;
