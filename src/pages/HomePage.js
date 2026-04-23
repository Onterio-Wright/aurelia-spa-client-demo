import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import StatStrip from '../components/StatStrip';
import InfoCard from '../components/InfoCard';
import Button from '../components/Button';
import { company, homeStats, clientTypes, servicePillars, homeImages } from '../data/siteData';

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Scientific Funding & Grant Management"
        title={company.heroTitle}
        description={company.heroDescription}
        image={homeImages.hero}
        primary={{ to: '/contact', label: company.primaryCta }}
        secondary={{ to: '/services', label: 'Explore Services' }}
      />

      <StatStrip items={homeStats} />

      <section className="section shell">
        <SectionIntro
          eyebrow="Who We Serve"
          title="Working with innovative companies, universities, incubators, and government-aligned programs"
          text="The site is positioned to speak credibly to the scientific community while still feeling polished enough for executive, institutional, and investor-facing audiences."
        />
        <div className="card-grid card-grid--three top-gap-lg">
          {clientTypes.map((item) => (
            <InfoCard key={item.title} icon={item.icon} title={item.title} text={item.description} />
          ))}
        </div>
      </section>

      <section className="section section--contrast">
        <div className="shell split-layout split-layout--balanced">
          <div>
            <SectionIntro
              eyebrow="Core Services"
              title="Advisory services that match the way scientific organizations actually grow"
              text="The homepage introduces the full service platform with language that feels specific to the category: funding, accounting and compliance, commercialization, and strategic finance."
            />
            <div className="button-row top-gap-md">
              <Button to="/services">View all services</Button>
              <Button to="/impact" variant="secondary">
                See impact <ArrowRight size={16} />
              </Button>
            </div>
          </div>
          <div className="stack-grid">
            {servicePillars.slice(0, 3).map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} text={item.description} bullets={item.bullets} />
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="feature-banner">
          <div>
            <p className="eyebrow">Why this design works</p>
            <h2>It feels like a real advisory firm, not a generic template.</h2>
            <p>
              The layout uses cleaner hierarchy, more credible category wording, editorial spacing, and real service framing modeled after how science advisory firms present themselves online.
            </p>
          </div>
          <img src={homeImages.about} alt="Advisory team in discussion" className="feature-banner__image" />
        </div>
      </section>
    </>
  );
}
