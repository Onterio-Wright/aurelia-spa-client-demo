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
      <p className="eyebrow">Interest Form</p>
      <h2>Tell us how BrainTorch Bio can help.</h2>
      <p>
        This demo form uses the recommended BrainTorch Bio application fields and is ready to connect to Google Forms,
        Jotform, Typeform, Tally, Airtable, a CRM, or an email workflow.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="field-grid">
          <input type="text" placeholder="Full name" required />
          <input type="email" placeholder="Email address" required />
        </div>
        <div className="field-grid">
          <input type="tel" placeholder="Phone number" />
          <input type="text" placeholder="Current role or student status" />
        </div>
        <div className="field-grid">
          <input type="text" placeholder="Highest degree completed" />
          <select defaultValue="">
            <option value="" disabled>
              Which option are you interested in?
            </option>
            {reasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>
        <textarea placeholder="STEM/clinical research background" rows="3" />
        <textarea placeholder="What are your goals for joining BrainTorch Launch?" rows="4" />
        <div className="field-grid">
          <select defaultValue="">
            <option value="" disabled>
              Are you seeking career transition support?
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
          <input type="text" placeholder="Preferred start date" />
        </div>
        <input type="text" placeholder="How did you hear about BrainTorch Bio?" />
        <Button type="submit">Complete Interest Form</Button>
        {submitted ? <div className="form-success">Your BrainTorch Bio inquiry has been captured in the demo interface.</div> : null}
      </form>
    </div>
  );
}
