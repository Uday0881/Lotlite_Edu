import ProgramPage from '../../components/shared/ProgramPage.jsx'

export default function Crm() {
  return (
    <ProgramPage
      theme="crm"
      heroImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop"
      eyebrow="Ecosystems & CRM"
      title="MCA (Ecosystems & CRM)"
      badge="Founding Cohort"
      subtitle="Build the client intelligence stack — CRM platforms, lead scoring engines, and lifecycle automation systems powering India's fastest growing real estate enterprises."
      ctaLabel="Apply for Founding Cohort"
      spiralSemesters={[
        { title: 'Semester 1', subtitle: 'Foundation Topics', courses: ['Introduction to CRM Systems', 'Business Communication & Stakeholder Management', 'Database Design for CRM', 'Real Estate Fundamentals', 'Customer Psychology & Behavior'] },
        { title: 'Semester 2', subtitle: 'Intermediate Topics', courses: ['CRM Platform Implementation', 'Sales Pipeline Architecture', 'Lead Scoring & Automation', 'Digital Marketing for Real Estate', 'Analytics & Reporting Dashboards'] },
        { title: 'Semester 3', subtitle: 'Advanced Topics', courses: ['AI-Powered CRM & Personalization', 'Multi-Channel Client Engagement', 'RERA Compliance & Client Data', 'B2B Relationship Management', 'CRM Integration with PropTech Systems'] },
        { title: 'Semester 4', subtitle: 'Super Advanced Capstone Topics', courses: ['Enterprise CRM Strategy', 'Predictive Client Lifetime Value Modeling', 'CRM Capstone Project', 'Live Developer Client Campaign'] },
      ]}
    />
  )
}
