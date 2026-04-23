import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import FaqItem from '../components/FaqItem';
import { company, contactReasons, faqItems } from '../data/siteData';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s discuss your funding, accounting, or commercialization needs"
        description="The contact experience is designed to feel simple, premium, and client-ready, with the right language for a discovery call rather than a generic template form."
        compact
      />

      <section className="section shell">
        <div className="contact-grid">
          <div className="contact-card">
            <p className="eyebrow">Get in touch</p>
            <h2>Reach the firm directly.</h2>
            <p>
              Whether your team is evaluating a funding strategy, strengthening grant operations, or preparing for a more sophisticated growth plan, we would be glad to connect.
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
                <strong>Office</strong>
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
            <h2>Answers that help the client understand what they are seeing.</h2>
            <p className="lead-small">
              The FAQ reinforces category fit and makes the demo easier to present in a live conversation.
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
