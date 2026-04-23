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
        eyebrow="Our Impact"
        title="Showing clients what your work actually helps make possible"
        description="A stronger impact page combines representative outcomes, category-fit case studies, and thought leadership that reinforces expertise."
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
            <p className="eyebrow">Impact Narrative</p>
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
          eyebrow="Client Highlights"
          title="Representative case studies"
          text="These are framed to feel useful and credible in a demo without fabricating named client endorsements."
        />
        <div className="card-grid card-grid--three top-gap-lg">
          {caseStudies.map((item) => (
            <CaseStudyCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="section shell section--tight-top">
        <SectionIntro
          eyebrow="Resources"
          title="Thought leadership that supports the brand"
          text="The live reference site prominently features trending content, newsletters, and practical guidance. This version mirrors that expectation with a cleaner editorial layout."
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
