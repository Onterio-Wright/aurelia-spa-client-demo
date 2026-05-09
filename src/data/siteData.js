import {
  ArrowRight,
  Beaker,
  BookOpenCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  FlaskConical,
  GraduationCap,
  Handshake,
  HeartPulse,
  Landmark,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const company = {
  name: "BrainTorch Bio",
  eyebrow: "Advancing Science. Empowering Minds.",
  primaryCta: "Apply to Program",
  email: "braintorchbio@gmail.com",
  phone: "(972) 914-8009",
  location: "Dallas/Ft Worth -based workforce training and consulting company",
  heroTitle: "Building the Clinical Research Workforce Pipeline",
  heroDescription:
    "BrainTorch Bio provides workforce training and technical expertise to design and implement STEM education and clinical research programs that prepare talent for high-demand healthcare careers.",
};

export const links = {
  application: "https://YOUR-APPLICATION-FORM-LINK-HERE",
  partnership: "https://YOUR-PARTNERSHIP-INQUIRY-LINK-HERE",
  consultation: "https://YOUR-BOOKING-LINK-HERE",
};

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "BrainTorch Launch", path: "/impact" },
  { label: "Contact", path: "/contact" },
];

export const homeStats = [
  {
    value: "Workforce-aligned training programs",
    label: "Clinical research training designed around real career pathways and applied learning.",
  },
  {
    value: "Career pathways into healthcare and research",
    label: "Structured support for learners preparing for high-demand clinical research and healthcare careers.",
  },
  {
    value: "Employer partnerships and job placement pipelines",
    label: "Partnership-focused programming that connects training, workforce outcomes, and placement opportunities.",
  },
];

export const clientTypes = [
  {
    title: "Individuals seeking clinical research careers",
    description:
      "Training and career support for participants preparing for entry-level clinical research and healthcare roles.",
    icon: Users,
  },
  {
    title: "Employers and workforce organizations",
    description:
      "Partnerships that help build clinical research workforce pipelines, internship pathways, and job placement connections.",
    icon: Handshake,
  },
  {
    title: "Schools and educational institutions",
    description:
      "STEM education programming and workforce training design for schools, organizations, and education partners.",
    icon: Landmark,
  },
];

export const servicePillars = [
  {
    title: "Workforce Training Programs",
    description: "Cohort-based training designed to prepare individuals for entry-level clinical research roles.",
    bullets: [
      "Clinical trial fundamentals",
      "GCP, IRB, and FDA training",
      "Patient assessment and recruitment",
      "Study operations and data systems",
      "Career readiness and job placement support",
    ],
    icon: GraduationCap,
  },
  {
    title: "STEM Education & Workforce Development",
    description: "Program design and consulting for schools, organizations, and workforce initiatives.",
    bullets: [
      "Curriculum design",
      "Workforce program development",
      "Training program implementation",
      "Education partnerships",
    ],
    icon: FlaskConical,
  },
  {
    title: "Scientific & Research Consulting",
    description:
      "Grant writing, scientific writing, and clinical research strategy support for research, education, and workforce initiatives.",
    bullets: [
      "Grant writing and proposal development",
      "Scientific writing and editing",
      "Clinical research strategy",
      "Program and project management",
    ],
    icon: Beaker,
  },
];

export const differentiators = [
  {
    title: "Industry-aligned curriculum",
    text: "BrainTorch Bio builds training around clinical research and healthcare workforce needs so participants can connect learning to career outcomes.",
    icon: BookOpenCheck,
  },
  {
    title: "Hands-on, applied learning model",
    text: "The training approach emphasizes applied learning, simulated trial work, and practical career readiness.",
    icon: ClipboardCheck,
  },
  {
    title: "Led by clinical neuroscience experience",
    text: "BrainTorch Bio is led by a clinical neuroscientist with real-world research experience.",
    icon: ShieldCheck,
  },
];

export const founderProfile = {
  name: "Dr. Keisha Smith Wade, PhD",
  role: "Founder, BrainTorch™ Bio",
  image: `${process.env.PUBLIC_URL}/images/about-dr-keisha-smith-wade.png`,
  bio: [
    "Dr. Keisha Smith Wade is a translational and clinical research neuroscientist professional with over a decade of experience spanning basic science, translational medicine, and clinical research operations in research environments.",
    "Her work has focused on neuropsychiatry, addiction neuroscience, mood disorders, women’s brain health, biomarker research, and clinical trial operations, with experience supporting multidisciplinary research initiatives at institutions including Yale School of Medicine.",
    "Throughout her career, Dr. Smith Wade has contributed to clinical and translational research programs involving neuroimaging, behavioral health, biomarker analysis, and FDA-regulated clinical research. Her expertise includes clinical trial coordination, regulatory compliance, participant engagement, scientific program management, translational science education, and cross-functional research collaboration.",
    "Dr. Smith Wade founded BrainTorch™ Bio to help bridge the gap between STEM education, translational science, and workforce readiness within the growing healthcare and clinical research industries. The initiative was created to provide accessible, industry-aligned training and career pathway exposure for individuals pursuing opportunities in clinical research, healthcare innovation, and life sciences.",
    "BrainTorch™ Bio reflects her passion for scientific advancement, education, mentorship, and expanding pathways into meaningful healthcare and research careers through experiential learning and workforce development.",
    "Dr. Smith Wade is committed to helping build the next generation of clinical research and healthcare professionals while supporting stronger connections between science, education, and community impact.",
  ],
};

export const aboutSections = [
  {
    title: "Our Mission",
    copy: "To expand access to careers in clinical research and healthcare by delivering workforce-aligned training programs that bridge the gap between education and employment.",
  },
  {
    title: "Our Vision",
    copy: "To build a scalable workforce pipeline that prepares individuals for high-demand healthcare careers while strengthening the clinical research ecosystem.",
  },
  {
    title: "Who We Are",
    copy: "BrainTorch Bio is a Dallas/Ft Worth -based workforce training and consulting company focused on STEM education, clinical research training, and professional development. We partner with employers, workforce organizations, and educational institutions to create pathways into meaningful careers.",
  },
];

export const servicesPageSections = [
  {
    heading: "Workforce Training Programs",
    text: "BrainTorch Launch is a 6–7 month cohort-based training program that prepares participants for entry-level roles in clinical research and healthcare.",
    checklist: [
      "Clinical trial fundamentals",
      "GCP, IRB, and FDA training",
      "Patient assessment and recruitment",
      "Study operations and data systems",
      "Career readiness and job placement support",
    ],
    icon: GraduationCap,
  },
  {
    heading: "STEM Education & Workforce Development",
    text: "BrainTorch Bio partners with schools, workforce programs, and organizations to design and implement STEM education and workforce training programs.",
    checklist: [
      "Curriculum design",
      "Workforce program development",
      "Training program implementation",
      "Education partnerships",
    ],
    icon: Network,
  },
  {
    heading: "Scientific & Research Consulting",
    text: "Consulting services that support research, education, and workforce initiatives.",
    checklist: [
      "Grant writing and proposal development",
      "Scientific writing and editing",
      "Clinical research strategy",
      "Program and project management",
    ],
    icon: FileText,
  },
];

export const processSteps = [
  "Select the right path: training program, partnership inquiry, or consulting engagement.",
  "Review the participant, employer, workforce, education, or organization need.",
  "Align the program model, training timeline, partnership scope, or consulting support.",
  "Implement workforce training, STEM programming, clinical research support, or career development services.",
];

export const impactHighlights = [
  {
    title: "Duration",
    text: "BrainTorch Launch is designed as a 6–7 month cohort-based clinical research training program.",
    icon: Target,
  },
  {
    title: "Schedule",
    text: "Program schedule: 9:00 AM – 2:30 PM.",
    icon: CheckCircle2,
  },
  {
    title: "Format",
    text: "Hybrid instruction plus applied learning.",
    icon: Building2,
  },
];

export const caseStudies = [
  {
    category: "Clinical Trial Skills",
    title: "What You’ll Learn",
    description:
      "Clinical trial fundamentals, regulatory compliance, patient assessments, recruitment, retention, study operations, and data systems.",
    result: "Participants build applied knowledge for entry-level clinical research and healthcare roles.",
  },
  {
    category: "Capstone Experience",
    title: "Simulated Clinical Trial Project",
    description:
      "Participants complete a simulated clinical trial project including recruitment, assessment, documentation, and presentation.",
    result: "The capstone connects program learning to practical trial operations.",
  },
  {
    category: "Career Outcomes",
    title: "Entry-Level Research Roles",
    description:
      "Graduates are prepared for roles such as Clinical Research Coordinator, Clinical Trial Assistant, and Research Assistant.",
    result: "The program is built around workforce readiness and job placement support.",
  },
];

export const resources = [
  {
    tag: "Career Support",
    title: "Mentorship & Career Development",
    summary:
      "Individualized support for resume and CV development, interview preparation, career pathway guidance, and graduate school advising.",
  },
  {
    tag: "Partnerships",
    title: "Partner With BrainTorch Bio",
    summary:
      "Employer partnerships, internship and training placements, workforce program collaborations, and grant or funding partnerships.",
  },
  {
    tag: "Consulting Packages",
    title: "Starter: $1,500–$3,000",
    summary: "Starter consulting support for research, education, workforce, or program development needs.",
  },
  {
    tag: "Consulting Packages",
    title: "Program Development: $5,000–$15,000",
    summary:
      "Program development support for organizations designing STEM, clinical research, or workforce initiatives.",
  },
  {
    tag: "Consulting Packages",
    title: "Full Workforce Program Design: $15,000+",
    summary: "Comprehensive workforce program design for larger training and partnership initiatives.",
  },
  {
    tag: "Why Partner With Us",
    title: "Access to Trained Talent",
    summary:
      "Partners can connect with workforce-aligned training programs and customized program development support.",
  },
];

export const contactReasons = ["Training Program", "Partnership", "Consulting"];

export const faqItems = [
  {
    question: "What is BrainTorch Launch?",
    answer:
      "BrainTorch Launch is a workforce training program designed to prepare participants for entry-level roles in clinical research.",
  },
  {
    question: "What roles can graduates prepare for?",
    answer:
      "Graduates are prepared for roles such as Clinical Research Coordinator, Clinical Trial Assistant, and Research Assistant.",
  },
  {
    question: "What partnership opportunities are available?",
    answer:
      "BrainTorch Bio collaborates on employer partnerships, internship and training placements, workforce program collaborations, and grant or funding partnerships.",
  },
];

export const footerNote =
  "BrainTorch Bio provides workforce training and technical expertise for STEM education and clinical research programs that prepare talent for high-demand healthcare careers.";

export const impactBanner = {
  title: "A cohort-based clinical research training program built for workforce readiness.",
  text: "BrainTorch Launch prepares participants through clinical trial fundamentals, regulatory compliance, patient assessments, recruitment and retention strategies, study operations, data systems, and a simulated clinical trial capstone.",
  icon: ArrowRight,
};

export const homeImages = {
  hero: `${process.env.PUBLIC_URL}/images/braintorch-logo.png`,
  about: `${process.env.PUBLIC_URL}/images/braintorch-logo.png`,
  services: `${process.env.PUBLIC_URL}/images/braintorch-logo.png`,
};
