import { useState } from 'react';
import Button from './Button';

export default function ContactForm({ reasons }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-card contact-card--form">
      <p className="eyebrow">Start the conversation</p>
      <h2>Tell us what your team needs.</h2>
      <p>
        This form is styled for demo use and ready to be connected to your CRM, scheduling workflow, or email service.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="field-grid">
          <input type="text" placeholder="Full name" required />
          <input type="email" placeholder="Email address" required />
        </div>
        <div className="field-grid">
          <input type="text" placeholder="Organization" />
          <select defaultValue="">
            <option value="" disabled>
              Reason for inquiry
            </option>
            {reasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>
        <textarea placeholder="Share a few details about your team, stage, or project." rows="6" />
        <Button type="submit">Submit inquiry</Button>
        {submitted ? <div className="form-success">Your inquiry has been captured in the demo interface.</div> : null}
      </form>
    </div>
  );
}
