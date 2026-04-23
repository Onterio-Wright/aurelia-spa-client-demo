import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import InfoCard from '../components/InfoCard';
import ProcessList from '../components/ProcessList';
import { servicesPageSections, processSteps, homeImages } from '../data/siteData';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Funding your science, managing your grants, and preparing your organization to scale responsibly"
        description="The service page is built around the same core pillars seen across the category: proposal support, accounting and compliance, and commercialization-focused strategy."
        image={homeImages.services}
        compact
      />

      <section className="section shell">
        <SectionIntro
          eyebrow="Service Lines"
          title="A more complete and believable service architecture"
          text="Instead of vague consulting language, the page is organized around the exact types of work scientific teams expect to find when they visit a firm in this category."
        />
        <div className="stack-grid top-gap-lg">
          {servicesPageSections.map((item) => (
            <InfoCard key={item.heading} icon={item.icon} title={item.heading} text={item.text} bullets={item.checklist} />
          ))}
        </div>
      </section>

      <section className="section section--contrast">
        <div className="shell split-layout">
          <SectionIntro
            eyebrow="How Engagements Work"
            title="A structured process from discovery to delivery"
            text="This gives a potential client confidence that the engagement will be well-run, scoped clearly, and easy for leadership to navigate."
          />
          <ProcessList steps={processSteps} />
        </div>
      </section>
    </>
  );
}
