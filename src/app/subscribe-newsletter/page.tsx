'use client';

import { submitNewsletter } from '@/actions/submitNewsletter';
import { useEffect, useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';

const NewsletterConfirmation = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const code = searchParams.get('code');

  const subscribe = () => {
    startTransition(() => {
      submitNewsletter(email || '', code || '').then((response) => {
        if (response.error) {
          setError(response.error);
        } else {
          setSuccess(response.success || '');
        }
      });
    });
  };

  useEffect(() => {
    subscribe();
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      {isPending && <p>Subscribing...</p>}
      {!isPending && <p>{error || success}</p>}
    </div>
  );
};

export default NewsletterConfirmation;
