'use server';

import {
  EmailTemplateConfirmation,
  EmailTemplateToAll,
} from '@/components/NewsletterEmailTemplate';
import { Resend } from 'resend';
import db from '@/db';
import { Subscribers } from '@/db/schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendNewsletterEmailToAll = async () => {
  const newsletterSubscribers: { email: string | null }[] = await db
    .select({ email: Subscribers.email })
    .from(Subscribers);

  if (!newsletterSubscribers.length) {
    throw new Error();
  }

  newsletterSubscribers.forEach(async (subscriber) => {
    if (!subscriber.email) {
      throw new Error();
    }

    resend.emails.send({
      from: 'antifraudism@julianhein.me',
      to: [subscriber.email],
      subject: 'Hello world',
      react: EmailTemplateToAll(subscriber.email),
    });
  });
};

export const sendNewsletterEmailToOne = async (email: string, code: string) => {
  resend.emails.send({
    from: 'antifraudism@julianhein.me',
    to: [email],
    subject: 'Hello world',
    react: EmailTemplateConfirmation({ email: email, code: code }),
  });
};
