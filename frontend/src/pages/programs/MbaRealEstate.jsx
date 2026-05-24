import ProgramPage from '../../components/shared/ProgramPage.jsx'

// ---- Edit MBA curriculum data here ----
const spiralSemesters = [
  {
    title: 'Semester 1', subtitle: 'Foundation Topics',
    leftTrack: {
      title: 'Followed by SPPU', description: 'Core Management Foundation',
      courses: [
        'Generic Core: Managerial Economics, Organizational Behaviour, Financial Accounting, Business Research Methods',
        'Subject Core: Marketing Management, Design Thinking',
      ],
    },
    rightTrack: {
      title: 'Followed by Lotlite', description: 'Core Management & Client Foundations',
      courses: [
        { title: 'Foundational Management Principles', description: 'Core concepts of organizational behavior and management tailored for modern property enterprises.' },
        { title: 'Real Estate Marketing Management', description: 'Strategic frameworks for positioning, branding, and promoting residential and commercial real estate assets.' },
        { title: 'Fundamentals of CRM', description: 'Introduction to building and sustaining long-term loyalty with property buyers, tenants, and institutional investors.' },
        { title: 'Property Buyer & Consumer Behavior', description: 'Understanding the psychological and economic drivers behind real estate investments and home-buying decisions.' },
      ],
    },
  },
  {
    title: 'Semester 2', subtitle: 'Intermediate Topics',
    leftTrack: {
      title: 'Followed by SPPU', description: 'Core Management Foundation',
      courses: [
        'Generic Core: Financial Management, Human Resource Management, Operations & Supply Chain Management',
        'Subject Core: Legal Aspects of Business',
        'Skill Lab: Desk Research, Field Projects, Selling & Negotiation Skills',
      ],
    },
    rightTrack: {
      title: 'Followed by Lotlite', description: 'Advanced Sales & Service Delivery',
      courses: [
        { title: 'Advanced CRM Strategies', description: 'A deep dive into client lifecycle management, personalized engagement, and retention tactics in a competitive housing market.' },
        { title: 'Sales & Channel Management', description: 'Effectively managing brokerage networks, channel partners, and direct property sales pipelines.' },
        { title: 'Property Services Marketing', description: 'Promoting intangible real estate services, including facility management, leasing, and advisory.' },
        { title: 'CRM in the Real Estate Service Sector', description: 'Tailoring client relationship frameworks specifically for property management and urban infrastructure services.' },
      ],
    },
  },
  {
    title: 'Semester 3', subtitle: 'Advanced Topics',
    leftTrack: {
      title: 'Followed by SPPU', description: 'Real Estate & Infrastructure Electives',
      courses: [
        'Project Management: Planning, scheduling, and executing complex projects',
        'Real Estate Economics & Finance: Real estate valuation, funding, and appraisal methods',
        'Legal Aspects in Real Estate: Regulatory frameworks, contract management, and land laws',
        'Summer Internship Project (SIP): Mandatory industry training (8-10 weeks)',
      ],
    },
    rightTrack: {
      title: 'Followed by Lotlite', description: 'Corporate Relations & Digital Integration',
      courses: [
        { title: 'Strategic Business Communication', description: 'Mastering stakeholder communication, negotiation, and high-stakes client pitching in real estate transactions.' },
        { title: 'B2B Markets & Commercial CRM', description: 'Managing complex relationships with corporate tenants, institutional investors, and B2B commercial leasing partners.' },
        { title: 'Real Estate Market Research', description: 'Data-driven approaches to analyzing property trends, demographic shifts, and evolving client needs.' },
        { title: 'E-Business & PropTech Ecosystems', description: 'Leveraging digital platforms, virtual tours, and tech-enabled sales processes to enhance the buyer journey.' },
      ],
    },
  },
  {
    title: 'Semester 4', subtitle: 'Super Advanced Capstone Topics',
    leftTrack: {
      title: 'Followed by SPPU', description: 'Real Estate & Infrastructure Electives',
      courses: [
        'Sustainable Real Estate & Urban Infrastructure: Green building norms and smart city development principles',
        'Facilities & Property Management: Operation, maintenance, and optimization of built assets',
        'Dissertation / Capstone Project: A research-based or practical implementation project on a real-world real estate problem',
      ],
    },
    rightTrack: {
      title: 'Followed by Lotlite', description: 'Strategy, Compliance & Execution',
      courses: [
        { title: 'Consumer Protection & Real Estate Law', description: 'Navigating legal frameworks, consumer rights, and RERA guidelines to ensure ethical and transparent client dealings.' },
        { title: 'Strategic Real Estate Marketing', description: 'High-level branding and go-to-market strategies for mega-projects, smart cities, and luxury developments.' },
        { title: 'Research Methodology', description: 'Frameworks for conducting deep dives into urban infrastructure data and buyer demographics.' },
        { title: 'Final Capstone Project', description: 'A hands-on, practical implementation or research project focused on solving a real-world CRM challenge within the real estate industry.' },
      ],
    },
  },
]

export default function MbaRealEstate() {
  return (
    <ProgramPage
      theme="crm"
      heroImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop"
      eyebrow="The Growth & Transaction Hub"
      title="Master of Business Administration in Real Estate"
      badge="Founding Cohort"
      subtitle="Master the intersection of business strategy, real estate economics, and modern property technology to lead the next generation of real estate enterprises."
      ctaLabel="Apply for Founding Cohort"
      spiralSemesters={spiralSemesters}
    />
  )
}
