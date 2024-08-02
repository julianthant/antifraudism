import db from '@/db';
import { SubscriberCodes, Subscribers } from '@/db/schema';
import { emailSchema } from '@/utils/zodSchema';
import { and, eq } from 'drizzle-orm';
import { check } from 'drizzle-orm/mysql-core';

export const submitNewsletter = async (email: string, code: string) => {
  if (!email || !code) {
    return { error: 'Invalid request!' };
  }

  if (typeof email !== 'string' || typeof code !== 'string') {
    return { error: 'Invalid request!' };
  }

  const validateEmail = emailSchema.safeParse({ email });

  if (!validateEmail.success) {
    return { error: 'Invalid email!' };
  }

  if (code.length !== 6) {
    return { error: 'Invalid code!' };
  }

  const validateParms = await db
    .select()
    .from(SubscriberCodes)
    .where(
      and(eq(SubscriberCodes.email, email), eq(SubscriberCodes.code, code))
    );

  if (!validateParms.length) {
    return { error: 'Invalid parameters!' };
  }

  const checkExisting = await db
    .select()
    .from(Subscribers)
    .where(eq(Subscribers.email, email));

  if (checkExisting.length) {
    return { error: 'Email already subscribed!' };
  }

  try {
    await Promise.all([
      db.insert(Subscribers).values({ email: email }),
      db.delete(SubscriberCodes).where(eq(SubscriberCodes.email, email)),
    ]);
  } catch (error) {
    return { error: 'Failed to subscribe!' };
  }

  return { success: 'You have successfully subscribed!' };
};
