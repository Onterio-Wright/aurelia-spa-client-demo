import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import InfoCard from "../components/InfoCard";
import TeamCard from "../components/TeamCard";
import { aboutSections, differentiators, leadership, homeImages } from "../data/siteData";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BrainTorch Bio"
        title="Building a scalable clinical research workforce pipeline"
        description="BrainTorch Bio is a Dallas/Ft Worth -based workforce training and consulting company focused on STEM education, clinical research training, and professional development."
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
          {aboutSections.map(item => (
            <InfoCard key={item.title} title={item.title} text={item.copy} />
          ))}
        </div>
      </section>

      <section className="section section--contrast">
        <div className="shell narrative-grid">
          {differentiators.map(item => (
            <article key={item.title} className="narrative-block">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <SectionIntro
          eyebrow="Founder & Partnerships"
          title="Led by clinical neuroscience and real-world research experience"
          text="BrainTorch Bio partners with employers, workforce organizations, and educational institutions to create pathways into meaningful careers."
        />
        <div className="card-grid card-grid--three top-gap-lg">
          {leadership.map(member => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
