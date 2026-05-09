import {
  ArrowRight,
  BadgeDollarSign,
  Beaker,
  Briefcase,
  Building2,
  Calculator,
  CheckCircle2,
  Compass,
  FileText,
  FlaskConical,
  Landmark,
  LineChart,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const company = {
  name: "BrainTorch Bio",
  eyebrow: "Advancing Science. Empowering Minds.",
  primaryCta: "Apply to BrainTorch Launch",
  email: "braintorchbio@gmail.com",
  phone: "901-626-8178",
  location: "Serving students, professionals, schools, nonprofits, institutions, and organizations",
  heroTitle: "Igniting pathways from STEM to clinical research.",
  heroDescription:
    "BrainTorch Bio provides clinical research training, STEM workforce development, mentorship, and scientific consulting to help students, professionals, schools, and organizations bridge the gap between science education and clinical research careers.",
};

export const links = {
  application: "https://YOUR-APPLICATION-FORM-LINK-HERE",
  consultation: "https://YOUR-BOOKING-LINK-HERE",
  starterPayment: "https://YOUR-STARTER-WORKSHOP-PAYMENT-LINK-HERE",
  corePayment: "https://YOUR-CORE-PROGRAM-PAYMENT-LINK-HERE",
  mentorshipPayment: "https://YOUR-MENTORSHIP-PAYMENT-LINK-HERE",
  institutionalInquiry: "https://YOUR-INSTITUTIONAL-INQUIRY-FORM-HERE",
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
    value: "Clinical Research Training",
    label: "Foundations for learners exploring clinical trial roles, clinical research operations, and non-patient-facing industry paths.",
  },
  {
    value: "STEM Workforce Development",
    label: "Programs, curriculum support, and career pathway development for schools, workforce programs, nonprofits, and community partners.",
  },
  {
    value: "Scientific Consulting",
    label: "Scientific writing, clinical research strategy, program management, and translational neuroscience support.",
  },
];

export const clientTypes = [
  {
    title: "Students & graduates",
    description:
      "STEM learners, recent graduates, and early-career professionals preparing for clinical research careers, graduate school, fellowships, or industry transitions.",
    icon: Users,
  },
  {
    title: "Schools & workforce partners",
    description:
      "Schools, workforce programs, nonprofits, and community organizations building STEM and clinical research career pathways.",
    icon: Landmark,
  },
  {
    title: "Companies & institutions",
    description:
      "Companies, researchers, institutions, and nonprofits needing scientific writing, program support, clinical research strategy, or translational science consulting.",
    icon: Building2,
  },
];

export const servicePillars = [
  {
    title: "Scientific & Research Consulting",
    description:
      "Scientific, clinical research, and translational science support for companies, researchers, institutions, and nonprofits.",
    bullets: [
      "Grant writing and proposal development",
      "Scientific writing and editing",
      "Manuscripts, reports, and technical content",
      "Program and project management",
      "Clinical research strategy and operations",
      "Translational neuroscience and biomarker consulting",
    ],
    icon: Beaker,
  },
  {
    title: "STEM Education & Workforce Development",
    description:
      "Program and pathway support for schools, workforce programs, nonprofits, and community partners.",
    bullets: [
      "STEM program development",
      "Curriculum design",
      "Workforce training consulting",
      "Education partnerships",
      "Clinical research career pathway development",
    ],
    icon: FlaskConical,
  },
  {
    title: "Mentorship, Advising & Career Development",
    description:
      "Personalized support for students, graduates, and early-career professionals preparing for clinical research and STEM career transitions.",
    bullets: [
      "1:1 mentoring",
      "Career advising",
      "Resume and CV preparation",
      "LinkedIn optimization",
      "Interview preparation",
      "Graduate school and fellowship guidance",
    ],
    icon: Compass,
  },
  {
    title: "BrainTorch Launch",
    description:
      "A structured clinical research training program for STEM learners, career changers, and emerging professionals.",
    bullets: [
      "Clinical trial phases I–IV",
      "FDA, IRB, and ICH-GCP basics",
      "CRC, CTA, CRA, MSL, and Clinical Scientist pathways",
      "Bench-to-bedside translation",
      "Resume, LinkedIn, and interview preparation",
    ],
    icon: BadgeDollarSign,
  },
];

export const differentiators = [
  {
    title: "Science education connected to career pathways",
    text:
      "BrainTorch Bio helps learners and organizations connect STEM education to clinical research, translational science, and workforce readiness.",
    icon: Sparkles,
  },
  {
    title: "Clinical research and translational science perspective",
    text:
      "The firm brings clinical research strategy, scientific writing, program support, and translational neuroscience knowledge into practical training and consulting engagements.",
    icon: Briefcase,
  },
  {
    title: "Mentorship built for emerging professionals",
    text:
      "Students, graduates, and early-career professionals can receive targeted support for resumes, LinkedIn, interviews, graduate school, fellowships, and career transitions.",
    icon: ShieldCheck,
  },
];

export const leadership = [
  {
    name: "Keisha Smith Wade",
    role: "Founder · Neuroscientist · Clinical Researcher · Educator",
    bio:
      "A PhD-trained neuroscientist, clinical researcher, and educator helping learners and organizations navigate the path from basic science to clinical research and workforce readiness.",
    image: `${process.env.PUBLIC_URL}/images/braintorch-logo.png`,
  },
  {
    name: "BrainTorch Launch",
    role: "Clinical Research Training Program",
    bio:
      "A structured training pathway designed for STEM students, graduates, career changers, and early-career professionals transitioning into clinical research and industry roles.",
    image: `${process.env.PUBLIC_URL}/images/braintorch-logo.png`,
  },
  {
    name: "Mentorship & Career Development",
    role: "Career Support Services",
    bio:
      "Personalized advising for resumes, CVs, LinkedIn optimization, interview preparation, graduate school planning, fellowships, and STEM career transitions.",
    image: `${process.env.PUBLIC_URL}/images/braintorch-logo.png`,
  },
];

export const aboutSections = [
  {
    title: "What we do",
    copy:
      "BrainTorch Bio was created to expand access to clinical research, STEM career pathways, and translational science training.",
  },
  {
    title: "Who we support",
    copy:
      "The firm supports students, graduates, early-career professionals, schools, workforce programs, nonprofits, community partners, companies, researchers, and institutions.",
  },
  {
    title: "Why it matters",
    copy:
      "BrainTorch Bio helps learners and organizations bridge the gap between science education and clinical research careers through training, mentorship, program development, and scientific consulting.",
  },
];

export const servicesPageSections = [
  {
    heading: "Scientific & Research Consulting",
    text: "Support for companies, researchers, institutions, and nonprofits that need scientific communication, program support, or clinical research strategy.",
    checklist: [
      "Grant writing and proposal development",
      "Scientific writing and editing",
      "Manuscripts, reports, and technical content",
      "Program and project management",
      "Clinical research strategy and operations",
      "Translational neuroscience and biomarker consulting",
    ],
    icon: FileText,
  },
  {
    heading: "STEM Education & Workforce Development",
    text: "Consulting and program development for schools, workforce programs, nonprofits, and community partners building STEM and clinical research pathways.",
    checklist: [
      "STEM program development",
      "Curriculum design",
      "Workforce training consulting",
      "Education partnerships",
      "Clinical research career pathway development",
    ],
    icon: ShieldCheck,
  },
  {
    heading: "Mentorship, Advising & Career Development",
    text: "One-on-one and packaged support for students, graduates, and early-career professionals preparing for clinical research, graduate school, fellowships, or STEM career transitions.",
    checklist: [
      "1:1 mentoring",
      "Career advising",
      "Resume and CV preparation",
      "LinkedIn optimization",
      "Interview preparation",
      "Graduate school and fellowship guidance",
    ],
    icon: LineChart,
  },
];

export const processSteps = [
  "Start with an interest form or consultation so BrainTorch Bio can understand the learner, organization, or project need.",
  "Match the inquiry to the right service path: BrainTorch Launch, mentorship, consulting, or institutional partnership.",
  "Confirm the program, workshop, mentorship package, or consulting scope with clear next steps and payment or inquiry links.",
  "Deliver training, advising, program support, or consulting with practical career and scientific outcomes in mind.",
];

export const impactHighlights = [
  {
    title: "BrainTorch Launch",
    text: "Clinical research career training for STEM learners and emerging professionals.",
    icon: Target,
  },
  {
    title: "Career pathway support",
    text: "Guidance for CRC, CTA, CRA, MSL, Clinical Scientist, and other clinical research pathway exploration.",
    icon: Users,
  },
  {
    title: "Workforce readiness",
    text: "Training and support that connects science education, clinical research foundations, and professional preparation.",
    icon: CheckCircle2,
  },
];

export const caseStudies = [
  {
    category: "Starter Workshop",
    title: "$97",
    description: "Introductory 60–90 minute live session for beginners exploring clinical research careers.",
    result: "Payment placeholder: YOUR-STARTER-WORKSHOP-PAYMENT-LINK-HERE",
  },
  {
    category: "Core Training Program",
    title: "$597",
    description: "Multi-session clinical research foundations program with career pathway guidance.",
    result: "Payment placeholder: YOUR-CORE-PROGRAM-PAYMENT-LINK-HERE",
  },
  {
    category: "Premium Mentorship Track",
    title: "$1,500",
    description: "Training plus 1:1 mentoring, resume support, LinkedIn optimization, and interview preparation.",
    result: "Payment placeholder: YOUR-MENTORSHIP-PAYMENT-LINK-HERE",
  },
];

export const resources = [
  {
    tag: "Institutional Programs",
    title: "Starting at $3,500",
    summary: "Custom training for schools, nonprofits, workforce boards, and organizations. Inquiry/deposit placeholder: YOUR-INSTITUTIONAL-INQUIRY-FORM-HERE.",
  },
  {
    tag: "Mentorship Option",
    title: "Resume/CV Review · $125",
    summary: "Focused resume or CV support for students, graduates, and early-career professionals.",
  },
  {
    tag: "Mentorship Option",
    title: "Career Strategy Session · $150",
    summary: "Personalized career strategy support for clinical research, graduate school, fellowship, or STEM career transition planning.",
  },
  {
    tag: "Mentorship Package",
    title: "3-Session Mentorship Package · $399",
    summary: "Multi-session advising for career development, applications, and interview preparation.",
  },
  {
    tag: "Mentorship Package",
    title: "Premium Career Package · $750",
    summary: "Higher-touch career support including resume/CV guidance, LinkedIn optimization, and interview preparation.",
  },
  {
    tag: "QR Setup",
    title: "Application QR Code Placeholder",
    summary: "Create the application form, generate a QR code in Canva, and replace the website placeholder with the QR image when ready.",
  },
];

export const contactReasons = [
  "Starter Workshop",
  "Core Training Program",
  "Premium Mentorship Track",
  "Institutional Partnership",
  "Scientific & Research Consulting",
  "STEM Education & Workforce Development",
  "Mentorship, Advising & Career Development",
];

export const faqItems = [
  {
    question: "Who is BrainTorch Launch designed for?",
    answer:
      "BrainTorch Launch is designed for STEM students, graduates, career changers, and early-career professionals transitioning into clinical research, translational science, and non-patient-facing industry roles.",
  },
  {
    question: "What does BrainTorch Launch cover?",
    answer:
      "The program covers clinical trial phases I–IV, FDA, IRB, and ICH-GCP basics, CRC, CTA, CRA, MSL, and Clinical Scientist pathways, bench-to-bedside translation, and resume, LinkedIn, and interview preparation.",
  },
  {
    question: "What form fields should the application include?",
    answer:
      "Recommended fields include full name, email, phone, current role or student status, highest degree completed, STEM or clinical research background, selected program option, goals for joining, career transition support needs, preferred start date, and referral source.",
  },
];

export const footerNote =
  "BrainTorch Bio provides clinical research training, STEM workforce development, mentorship, and scientific consulting.";

export const homeImages = {
  hero: `${process.env.PUBLIC_URL}/images/home-hero.jpg`,
  about: `${process.env.PUBLIC_URL}/images/about.jpg`,
  services: `${process.env.PUBLIC_URL}/images/services.jpg`,
};

export const impactBanner = {
  title: "A structured clinical research training pathway from STEM learning to career readiness.",
  text: "BrainTorch Launch helps STEM students, graduates, career changers, and early-career professionals build clinical research foundations and prepare for non-patient-facing roles in clinical research and translational science.",
  icon: ArrowRight,
};
