export const programmesData = {
  navigation: [
    {
      title: 'UG Program',
      type: 'dropdown',
      items: [
        { label: 'BBA', path: '/programmes/ug/bba' },
        { label: 'BCA', path: '/programmes/ug/bca' },
      ],
    },
    {
      title: 'PG Program',
      type: 'dropdown',
      items: [
        { label: 'MBA', path: '/programmes/pg/mba' },
        { label: 'MSC in Data Science', path: '/programmes/pg/msc-data-science' },
        { label: 'MSC in Computer Applications', path: '/programmes/pg/msc-computer-applications' },
      ],
    },
    {
      title: 'Crash Course',
      type: 'link',
      path: '/programmes/crash-course',
    },
    {
      title: 'Startups',
      type: 'link',
      path: '/programmes/startups',
    },
  ],
  programs: {
    'bba': {
      id: 'bba',
      category: 'ug',
      title: 'Bachelor of Business Administration',
      shortTitle: 'BBA',
      description: 'Comprehensive business administration program focusing on modern enterprise management.',
      duration: '3 Years',
      curriculum: [
        { term: 'Semester 1', subjects: ['Business Basics', 'Accounting I', 'Microeconomics'] },
        { term: 'Semester 2', subjects: ['Marketing Management', 'Accounting II', 'Macroeconomics'] },
      ]
    },
    'bca': {
      id: 'bca',
      category: 'ug',
      title: 'Bachelor of Computer Applications',
      shortTitle: 'BCA',
      description: 'Foundational computer science program for software development.',
      duration: '3 Years',
      curriculum: [
        { term: 'Semester 1', subjects: ['Programming in C', 'Mathematics', 'Digital Electronics'] },
        { term: 'Semester 2', subjects: ['Data Structures', 'DBMS', 'Operating Systems'] },
      ]
    },
    'mba': {
      id: 'mba',
      category: 'pg',
      title: 'Master of Business Administration',
      shortTitle: 'MBA',
      description: 'Advanced business strategy and leadership program.',
      duration: '2 Years',
      curriculum: [
        { term: 'Semester 1', subjects: ['Strategic Management', 'Corporate Finance', 'Marketing Strategy'] },
        { term: 'Semester 2', subjects: ['Operations Management', 'Business Analytics', 'Leadership'] },
      ]
    },
    'msc-data-science': {
      id: 'msc-data-science',
      category: 'pg',
      title: 'MSc in Data Science',
      shortTitle: 'Data Science',
      description: 'Advanced analytics, machine learning, and statistical modeling.',
      duration: '2 Years',
      curriculum: [
        { term: 'Semester 1', subjects: ['Statistical Inference', 'Python for Data Science', 'Machine Learning I'] },
        { term: 'Semester 2', subjects: ['Deep Learning', 'Big Data Technologies', 'NLP'] },
      ]
    },
    'msc-computer-applications': {
      id: 'msc-computer-applications',
      category: 'pg',
      title: 'MSc in Computer Applications',
      shortTitle: 'MCA',
      description: 'Advanced computing systems, software engineering, and architecture.',
      duration: '2 Years',
      curriculum: [
        { term: 'Semester 1', subjects: ['Advanced Algorithm', 'Distributed Systems', 'Cloud Computing'] },
        { term: 'Semester 2', subjects: ['Software Engineering', 'IoT', 'Information Security'] },
      ]
    }
  }
}
