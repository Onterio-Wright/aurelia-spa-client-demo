import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import FaqItem from '../components/FaqItem';
import { company, contactReasons, faqItems } from '../data/siteData';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact BrainTorch Bio"
        title="Apply, book a consultation, or start a partnership conversation"
        description="Interested in BrainTorch Launch, mentorship, consulting, or partnership opportunities? Connect with BrainTorch Bio to take the next step."
        compact
      />

      <section className="section shell">
        <div className="contact-grid">
          <div className="contact-card">
            <p className="eyebrow">Get in touch</p>
            <h2>Let’s connect.</h2>
            <p>
              Reach out about BrainTorch Launch, mentorship and career development, scientific and research consulting, STEM workforce development, or institutional partnership opportunities.
            </p>
            <div className="contact-details">
              <div>
                <strong>Phone</strong>
                <span>{company.phone}</span>
              </div>
              <div>
                <strong>Email</strong>
                <span>{company.email}</span>
              </div>
              <div>
                <strong>Service Area</strong>
                <span>{company.location}</span>
              </div>
            </div>
          </div>

          <ContactForm reasons={contactReasons} />
        </div>
      </section>

      <section className="section section--contrast">
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2>BrainTorch Launch and application details.</h2>
            <p className="lead-small">
              The application form should capture the learner’s contact information, background, program interest, goals, preferred start date, and how they heard about BrainTorch Bio.
            </p>
          </div>
          <div>
            {faqItems.map((item) => (
              <FaqItem key={item.question} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
