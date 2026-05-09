import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import InfoCard from '../components/InfoCard';
import TeamCard from '../components/TeamCard';
import { aboutSections, differentiators, leadership, homeImages } from '../data/siteData';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BrainTorch Bio"
        title="Expanding access to clinical research, STEM career pathways, and translational science training"
        description="BrainTorch Bio was founded to help learners and organizations navigate the path from basic science to clinical research and workforce readiness."
        image={homeImages.about}
        compact
      />

      <section className="section shell">
        <SectionIntro
          eyebrow="Our Approach"
          title="Science education, career development, and clinical research readiness in one platform"
          text="BrainTorch Bio combines training, mentorship, program development, and scientific consulting so learners and organizations can move with clarity."
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
          eyebrow="Founder & Programs"
          title="Led by Keisha Smith Wade"
          text="Keisha Smith Wade is a PhD-trained neuroscientist, clinical researcher, and educator. BrainTorch Bio helps learners and organizations connect science training to clinical research and workforce opportunities."
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
