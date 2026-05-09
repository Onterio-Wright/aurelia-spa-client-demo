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
        title="Clinical research training, STEM workforce development, mentorship, and scientific consulting"
        description="BrainTorch Bio serves companies, researchers, institutions, nonprofits, schools, workforce programs, community partners, students, graduates, and early-career professionals."
        image={homeImages.services}
        compact
      />

      <section className="section shell">
        <SectionIntro
          eyebrow="Service Lines"
          title="What BrainTorch Bio offers"
          text="The service lines are organized around scientific and research consulting, STEM education and workforce development, and mentorship, advising, and career development."
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
            title="A clear path from interest to training, mentorship, partnership, or consulting support"
            text="The process keeps the current site structure while replacing the content with BrainTorch Bio program and service information."
          />
          <ProcessList steps={processSteps} />
        </div>
      </section>
    </>
  );
}
