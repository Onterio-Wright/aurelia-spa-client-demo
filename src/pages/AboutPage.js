import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import InfoCard from '../components/InfoCard';
import { aboutSections, differentiators, founderProfile, homeImages } from '../data/siteData';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BrainTorch Bio"
        title="Building a scalable clinical research workforce pipeline"
        description="BrainTorch Bio is a Dallas-based workforce training and consulting company focused on STEM education, clinical research training, and professional development."
        image={homeImages.about}
        compact
      />

      <section className="section shell">
        <SectionIntro
          eyebrow="Mission & Vision"
          title="Bridging the gap between education and employment"
          text="BrainTorch Bio works to expand access to careers in clinical research and healthcare while strengthening the clinical research ecosystem."
        />
        <div className="card-grid card-grid--three top-gap-lg">
          {aboutSections.map((item) => (
            <InfoCard key={item.title} title={item.title} text={item.copy} />
          ))}
        </div>
      </section>

      <section className="section section--contrast">
        <div className="shell narrative-grid">
          {differentiators.map((item) => (
            <article key={item.title} className="narrative-block">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell founder-section">
        <div className="founder-profile">
          <div className="founder-profile__image-wrap">
            <img src={founderProfile.image} alt={founderProfile.name} className="founder-profile__image" />
          </div>
          <div className="founder-profile__content">
            <p className="eyebrow">Founder</p>
            <h2>{founderProfile.name}</h2>
            <p className="founder-profile__role">{founderProfile.role}</p>
            {founderProfile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
