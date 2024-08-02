import * as React from 'react';
import { buttonVariants } from './ui/button';

interface EmailTemplateProps {
  email: string;
  code: string;
}

export const EmailTemplateConfirmation = ({
  email,
  code,
}: EmailTemplateProps) => (
  <div>
    <h1>Welcome,!</h1>
    <p>Please click on the button below to confirm your subscription.</p>
    <a
      href={
        process.env.APP_URL +
        '/subscribe-newsletter?email=' +
        email +
        '&code=' +
        code
      }
      className={buttonVariants()}
    >
      Confirm Subscription
    </a>
  </div>
);

export const EmailTemplateToAll = (email: string) => (
  <div>
    <h1>Welcome, {email}!</h1>
    <p>Please click on the button below to confirm your subscription.</p>
  </div>
);
