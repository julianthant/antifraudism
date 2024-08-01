'use server';

import db from '@/db';
import { Subscribers } from '@/db/schema';
import { emailSchema } from '@/utils/zodSchema';
import { eq } from 'drizzle-orm';
import { sendNewsletterEmailToOne } from './sendNewsletterEmail';

export const submitNewsletter = async (email: string) => {
  const validateEmail = emailSchema.safeParse({ email });

  if (!validateEmail.success) {
    throw new Error('Invalid email!');
  }

  const emailExists = await db
    .select()
    .from(Subscribers)
    .where(eq(Subscribers.email, email));

  if (emailExists.length) {
    throw new Error('Email already exists!');
  }

  try {
    await Promise.all([
      db.insert(Subscribers).values({ email: email }),
      sendNewsletterEmailToOne(email),
    ]);
  } catch (error) {
    throw new Error('Failed to subscribe!');
  }

  return { success: true };
};
