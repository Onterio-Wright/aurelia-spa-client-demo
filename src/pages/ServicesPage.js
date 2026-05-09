import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import InfoCard from '../components/InfoCard';
import ProcessList from '../components/ProcessList';
import { servicesPageSections, processSteps, resources, homeImages } from '../data/siteData';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Workforce training, STEM education, and scientific consulting"
        description="BrainTorch Bio supports participants, schools, workforce programs, organizations, employers, and education partners with training, program design, and clinical research expertise."
        image={homeImages.services}
        compact
      />

      <section className="section shell">
        <SectionIntro
          eyebrow="Service Lines"
          title="What BrainTorch Bio offers"
          text="Services are organized around workforce training programs, STEM education and workforce development, and scientific and research consulting."
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
            eyebrow="Partnerships"
            title="Partner with BrainTorch Bio"
            text="BrainTorch Bio collaborates with employers, workforce organizations, and educational institutions to build workforce pipelines, including employer partnerships, internship and training placements, workforce program collaborations, and grant or funding partnerships."
          />
          <ProcessList steps={processSteps} />
        </div>
      </section>

      <section className="section shell section--tight-top">
        <SectionIntro
          eyebrow="Consulting Packages"
          title="Research, education, and workforce initiative support"
          text="The website document lists optional consulting package ranges for organizations that need program development or full workforce program design support."
        />
        <div className="card-grid card-grid--three top-gap-lg">
          {resources.slice(2, 5).map((item) => (
            <InfoCard key={item.title} title={item.title} text={item.summary} />
          ))}
        </div>
      </section>
    </>
  );
}
