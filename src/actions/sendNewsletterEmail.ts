'use server';

import NewsletterEmailTemplate from '@/components/NewsletterEmailTemplate';
import { Resend } from 'resend';
import db from '@/db';
import { Subscribers } from '@/db/schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendNewsletterEmailToAll = async () => {
  const newsletterSubscribers: { email: string | null }[] = await db
    .select({ email: Subscribers.email })
    .from(Subscribers);

  if (!newsletterSubscribers.length) {
    return;
  }

  newsletterSubscribers.forEach((subscriber) => {
    if (!subscriber.email) {
      return;
    }

    resend.emails.send({
      from: 'antifraudism@julianhein.me',
      to: [subscriber.email],
      subject: 'Hello world',
      react: NewsletterEmailTemplate({ email: subscriber.email }),
    });
  });
};

export const sendNewsletterEmailToOne = async (email: string) => {
  resend.emails.send({
    from: 'antifraudism@julianhein.me',
    to: [email],
    subject: 'Hello world',
    react: NewsletterEmailTemplate({ email: email }),
  });
};
