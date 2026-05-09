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
        eyebrow="Clinical Research Training | STEM Workforce Development | Scientific Consulting"
        title={company.heroTitle}
        description={company.heroDescription}
        image={homeImages.hero}
        primary={{ to: "/contact", label: company.primaryCta }}
        secondary={{ to: "/services", label: "Explore Services" }}
      />

      <StatStrip items={homeStats} />

      <section className="section shell">
        <SectionIntro
          eyebrow="Who We Serve"
          title="Helping learners, schools, workforce partners, and organizations move science forward"
          text="BrainTorch Bio supports individual career development, institutional STEM pathway building, and scientific or clinical research consulting needs."
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
              eyebrow="Core Services"
              title="Training, mentorship, and consulting built around clinical research readiness"
              text="The service platform includes scientific and research consulting, STEM education and workforce development, mentorship and career advising, and the BrainTorch Launch clinical research training program."
            />
            <div className="button-row top-gap-md">
              <Button to="/services">View all services</Button>
              <Button to="/impact" variant="secondary">
                BrainTorch Launch <ArrowRight size={16} />
              </Button>
            </div>
          </div>
          <div className="stack-grid">
            {servicePillars.slice(0, 3).map(item => (
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
            <p className="eyebrow">BrainTorch Launch</p>
            <h2>Clinical research career training for STEM learners and emerging professionals.</h2>
            <p>
              BrainTorch Launch is a structured program designed to help STEM students, graduates, career changers,
              and early-career professionals transition into clinical research, translational science, and non-patient-facing industry roles.
            </p>
          </div>

          {!bannerImageFailed ? (
            <img
              src={homeImages.about}
              alt="BrainTorch Bio logo"
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
