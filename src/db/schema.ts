import { serial, text, pgTable } from 'drizzle-orm/pg-core';

export const Subscribers = pgTable('subscribers', {
  id: serial('id').primaryKey(),
  email: text('email'),
});

export const SubscriberCodes = pgTable('subscriber_codes', {
  id: serial('id').primaryKey(),
  email: text('email'),
  code: text('code'),
});
