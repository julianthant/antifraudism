'use server';

import db from '@/db';
import { SubscriberCodes, Subscribers } from '@/db/schema';
import { emailSchema } from '@/utils/zodSchema';
import { eq } from 'drizzle-orm';
import { sendNewsletterEmailToOne } from './sendNewsletterEmail';

export const sendNewsletterConfirmation = async (email: string) => {
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

  function codeGenerate(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }

  try {
    const code = codeGenerate(6);

    await Promise.all([
      db.insert(SubscriberCodes).values({ email: email, code: code }),
      sendNewsletterEmailToOne(email, code),
    ]);
  } catch (error) {
    return { error: 'Failed to subscribe!' };
  }

  return { success: 'The confirmation email has been sent.' };
};
