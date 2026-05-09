import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import InfoCard from '../components/InfoCard';
import CaseStudyCard from '../components/CaseStudyCard';
import ResourceCard from '../components/ResourceCard';
import { impactHighlights, caseStudies, resources, impactBanner } from '../data/siteData';

export default function ImpactPage() {
  const ImpactIcon = impactBanner.icon;

  return (
    <>
      <PageHero
        eyebrow="Clinical Research Training Program"
        title="BrainTorch Launch"
        description="BrainTorch Launch is a workforce training program designed to prepare participants for entry-level roles in clinical research."
        compact
      />

      <section className="section shell">
        <SectionIntro
          eyebrow="Program Overview"
          title="A 6–7 month hybrid training program"
          text="The program combines hybrid instruction and applied learning to prepare participants for entry-level clinical research and healthcare roles."
        />
        <div className="card-grid card-grid--three top-gap-lg">
          {impactHighlights.map((item) => (
            <InfoCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className="section section--contrast">
        <div className="shell banner-callout">
          <div>
            <p className="eyebrow">What You’ll Learn</p>
            <h2>{impactBanner.title}</h2>
            <p>{impactBanner.text}</p>
          </div>
          <div className="banner-callout__icon">
            <ImpactIcon size={28} />
          </div>
        </div>
      </section>

      <section className="section shell">
        <SectionIntro
          eyebrow="Training Experience"
          title="Applied learning, capstone experience, and career outcomes"
          text="Participants complete a simulated clinical trial project and build preparation for entry-level clinical research roles."
        />
        <div className="card-grid card-grid--three top-gap-lg">
          {caseStudies.map((item) => (
            <CaseStudyCard key={item.category} item={item} />
          ))}
        </div>
      </section>

      <section className="section shell section--tight-top">
        <SectionIntro
          eyebrow="Career Development & Partnerships"
          title="Support beyond training"
          text="BrainTorch Bio also supports career transitions and partner organizations building workforce pipelines."
        />
        <div className="card-grid card-grid--three top-gap-lg">
          {resources.slice(0, 2).concat(resources.slice(5, 6)).map((item) => (
            <ResourceCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
