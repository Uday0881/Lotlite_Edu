import ProgramPage from '../../components/shared/ProgramPage.jsx'

export default function DataScience() {
  return (
    <ProgramPage
      theme="ds"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop"
      eyebrow="The Analytics Engine"
      title="Post Graduate Program in Data Science for Real Estate Analytics"
      badge="Founding Cohort"
      subtitle="Leverage predictive modeling, big data warehousing, and spatial data structures to automate property valuations and forecast regional growth trends."
      ctaLabel="Apply for Founding Cohort"
      spiralSemesters={[
        { title: 'Semester 1', subtitle: 'Foundation Topics', courses: ['Basics of Statistics', 'Introduction to Data Science', 'Data Structures and Algorithms', 'Introduction to R Programming'] },
        { title: 'Semester 2', subtitle: 'Intermediate Topics', courses: ['Python Programming', 'Advanced Statistics', 'Big Data with Data Warehousing and Data Mining', 'Submission I'] },
        { title: 'Semester 3', subtitle: 'Advanced Topics', courses: ['No SQL Database', 'Data Visualisation', 'Machine Learning with R and Python', 'Ethical and Legal Issues in Data Science'] },
        { title: 'Semester 4', subtitle: 'Super Advanced Capstone Topics', courses: ['Emerging Trends in Data Science', 'Submission II', 'Predictive Land Value Modelling Capstone Project'] },
      ]}
    />
  )
}
