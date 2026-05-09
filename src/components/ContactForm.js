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
      <p className="eyebrow">Contact Form</p>
      <h2>Tell us how BrainTorch Bio can help.</h2>
      <p>
        This demo form uses the contact fields from the BrainTorch Bio website document and is ready to connect to a live form, CRM, or email workflow.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="field-grid">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
        </div>
        <input type="text" placeholder="Organization" />
        <select defaultValue="" required>
          <option value="" disabled>
            Inquiry Type
          </option>
          {reasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
        <textarea placeholder="Message" rows="5" />
        <Button type="submit">Submit Inquiry</Button>
        {submitted ? <div className="form-success">Your BrainTorch Bio inquiry has been captured in the demo interface.</div> : null}
      </form>
    </div>
  );
}
