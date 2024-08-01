import * as React from 'react';

interface EmailTemplateProps {
  email: string;
}

const EmailTemplate = ({ email }: EmailTemplateProps) => (
  <div>
    <h1>Welcome, {email}!</h1>
    <p>You have been added to our newsletter list.</p>
  </div>
);

export default EmailTemplate;
