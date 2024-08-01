'use server';

import db from '@/db';
import { Subscribers } from '@/db/schema';
import { emailSchema } from '@/utils/zodSchema';
import { eq } from 'drizzle-orm';
import {
  sendNewsletterEmailToAll,
  sendNewsletterEmailToOne,
} from './sendNewsletterEmail';

export const submitNewsletter = async (email: string) => {
  const validateEmail = emailSchema.safeParse({ email });

  if (!validateEmail.success) {
    console.error(validateEmail.error);
    return;
  }

  const emailExists = await db
    .select()
    .from(Subscribers)
    .where(eq(Subscribers.email, email));

  if (emailExists.length) {
    console.log('Email already exists');
    return;
  }

  try {
    await Promise.all([
      db.insert(Subscribers).values({ email: email }),
      sendNewsletterEmailToOne(email),
    ]);
    console.log('Newsletter submission successful');
  } catch (error) {
    console.error('Error submitting newsletter:', error);
    return;
  }

  return Response.json({ success: true });
};
