import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import InfoCard from '../components/InfoCard';
import TeamCard from '../components/TeamCard';
import { aboutSections, differentiators, leadership, homeImages } from '../data/siteData';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A science-first advisory firm built around funding strategy, financial discipline, and practical growth support"
        description="Our work is designed to help technical organizations communicate more clearly, operate more confidently, and pursue funding with better alignment between vision and execution."
        image={homeImages.about}
        compact
      />

      <section className="section shell">
        <SectionIntro
          eyebrow="Our Approach"
          title="What makes the firm credible"
          text="Instead of generic marketing language, the site uses category-specific positioning grounded in how scientific funding and grant-backed organizations actually work."
        />
        <div className="card-grid card-grid--three top-gap-lg">
          {differentiators.map((item) => (
            <InfoCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className="section section--contrast">
        <div className="shell narrative-grid">
          {aboutSections.map((item) => (
            <article key={item.title} className="narrative-block">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <SectionIntro
          eyebrow="Our Professionals"
          title="Leadership and advisory capability"
          text="This page mirrors the category expectation that visitors can quickly understand who is behind the work and what perspective they bring."
        />
        <div className="card-grid card-grid--three top-gap-lg">
          {leadership.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
