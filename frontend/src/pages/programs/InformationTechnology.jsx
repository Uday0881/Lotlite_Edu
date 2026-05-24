import ProgramPage from '../../components/shared/ProgramPage.jsx'

export default function InformationTechnology() {
  return (
    <ProgramPage
      theme="it"
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop"
      eyebrow="The Infrastructure Stack"
      title="MCA (PropTech & Engineering)"
      badge="Founding Cohort"
      subtitle="Master smart cloud architectures, software engineering with UML, and enterprise database systems driving the future of real estate tech infrastructures."
      ctaLabel="Apply for Founding Cohort"
      spiralSemesters={[
        { title: 'Semester 1', subtitle: 'Foundation Topics', courses: ['Principles and Practices of Management', 'Business Communication', 'Information Technology Concepts', 'Database Management Systems', 'Algorithms and Programming Concepts'] },
        { title: 'Semester 2', subtitle: 'Intermediate Topics', courses: ['Business Requirement Analysis', 'Project Management (IT)', 'Business Process Modeling', 'Software Engineering with UML', 'Software Testing & Agile Methodology'] },
        { title: 'Semester 3', subtitle: 'Advanced Topics', courses: ['Software Quality Management', 'Introduction to Data Science', 'Machine Learning and AI', 'E-Business', 'Information Security Management', 'Software Documentation'] },
        { title: 'Semester 4', subtitle: 'Super Advanced Capstone Topics', courses: ['Latest Trends in IT', 'Business Applications and ERP', 'Cloud Computing', 'Enterprise Infrastructure Capstone Project'] },
      ]}
    />
  )
}
