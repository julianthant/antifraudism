'use server';

import db from '@/db';
import { Subscribers } from '@/db/schema';
import { emailSchema } from '@/utils/zodSchema';
import { eq } from 'drizzle-orm';
import { sendNewsletterEmailToOne } from './sendNewsletterEmail';

export const submitNewsletter = async (email: string) => {
  const validateEmail = emailSchema.safeParse({ email });

  if (!validateEmail.success) {
    return { error: 'Invalid email!' };
  }

  const emailExists = await db
    .select()
    .from(Subscribers)
    .where(eq(Subscribers.email, email));

  if (emailExists.length) {
    return { error: 'Email already subscribed!' };
  }

  try {
    await Promise.all([
      db.insert(Subscribers).values({ email: email }),
      sendNewsletterEmailToOne(email),
    ]);
  } catch (error) {
    return { error: 'Failed to subscribe!' };
  }

  return { success: 'The confirmation email has been sent.' };
};
