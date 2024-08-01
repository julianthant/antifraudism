import { serial, text, pgTable, pgSchema } from 'drizzle-orm/pg-core';

export const mySchema = pgSchema('my_schema');

export const Subscribers = mySchema.table('subscribers', {
  id: serial('id').primaryKey(),
  email: text('email'),
});
