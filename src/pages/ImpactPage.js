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
        eyebrow="Flagship Program"
        title="BrainTorch Launch"
        description="A structured clinical research training program designed to help STEM students, graduates, career changers, and early-career professionals transition into clinical research, translational science, and non-patient-facing industry roles."
        compact
      />

      <section className="section shell">
        <div className="card-grid card-grid--three">
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
          eyebrow="Program Pricing"
          title="BrainTorch Launch program options"
          text="The uploaded starter listed these program tiers for the BrainTorch Bio site. Replace the placeholder payment links when the live payment pages are ready."
        />
        <div className="card-grid card-grid--three top-gap-lg">
          {caseStudies.map((item) => (
            <CaseStudyCard key={item.category} item={item} />
          ))}
        </div>
      </section>

      <section className="section shell section--tight-top">
        <SectionIntro
          eyebrow="Mentorship & Application Setup"
          title="Career support, institutional programs, and QR placeholder details"
          text="These cards capture the mentorship pricing, institutional program starting point, and QR setup notes from the BrainTorch Bio starter document."
        />
        <div className="card-grid card-grid--three top-gap-lg">
          {resources.map((item) => (
            <ResourceCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
