import { useState } from "react";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import StatStrip from "../components/StatStrip";
import InfoCard from "../components/InfoCard";
import Button from "../components/Button";
import { company, homeStats, clientTypes, servicePillars, homeImages } from "../data/siteData";

export default function HomePage() {
  const [bannerImageFailed, setBannerImageFailed] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Workforce Training | STEM Education | Clinical Research Consulting"
        title={company.heroTitle}
        description={company.heroDescription}
        image={homeImages.hero}
        primary={{ to: "/contact", label: "Apply to Program" }}
        secondary={{ to: "/services", label: "Partner With Us" }}
        tertiary={{ to: "/contact", label: "Book a Consultation" }}
      />

      <StatStrip items={homeStats} />

      <section className="section shell">
        <SectionIntro
          eyebrow="What We Do"
          title="Expanding access to careers in clinical research and healthcare"
          text="BrainTorch Bio is a workforce development company focused on expanding access to careers in clinical research and healthcare. We deliver industry-aligned training, STEM education programming, and consulting services that bridge the gap between education and employment."
        />
        <div className="card-grid card-grid--three top-gap-lg">
          {clientTypes.map(item => (
            <InfoCard key={item.title} icon={item.icon} title={item.title} text={item.description} />
          ))}
        </div>
      </section>

      <section className="section section--contrast">
        <div className="shell split-layout split-layout--balanced">
          <div>
            <SectionIntro
              eyebrow="Our Core Services"
              title="Training, STEM workforce development, and research consulting"
              text="BrainTorch Bio provides cohort-based workforce training, STEM education and workforce development, and scientific and research consulting for participants, schools, organizations, workforce initiatives, and partners."
            />
            <div className="button-row top-gap-md">
              <Button to="/contact">Book a Consultation</Button>
              <Button to="/impact" variant="secondary">
                BrainTorch Launch <ArrowRight size={16} />
              </Button>
            </div>
          </div>
          <div className="stack-grid">
            {servicePillars.map(item => (
              <InfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                text={item.description}
                bullets={item.bullets}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="feature-banner">
          <div>
            <p className="eyebrow">Why BrainTorch Bio</p>
            <h2>Industry-aligned curriculum, applied learning, and workforce outcomes.</h2>
            <p>
              BrainTorch Bio focuses on workforce outcomes and job placement, with programs designed around clinical research and healthcare career pathways.
              Join us in building the next generation of clinical research professionals.
            </p>
            <div className="button-row top-gap-md">
              <Button to="/contact">Apply Now</Button>
              <Button to="/contact" variant="secondary">Partner With Us</Button>
            </div>
          </div>

          {!bannerImageFailed ? (
            <img
              src={homeImages.about}
              alt="BrainTorch Bio trademark logo"
              className="feature-banner__image"
              onError={() => setBannerImageFailed(true)}
            />
          ) : (
            <div className="feature-banner__image feature-banner__image--placeholder" aria-hidden="true" />
          )}
        </div>
      </section>
    </>
  );
}
