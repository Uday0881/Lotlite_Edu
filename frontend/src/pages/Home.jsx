import { useEffect } from 'react'
import { usePageTheme } from '../hooks/usePageTheme.js'
import HeroSection from '../components/home/HeroSection.jsx'
import PartnersMarquee from '../components/home/PartnersMarquee.jsx'
import StatsBand from '../components/home/StatsBand.jsx'
import LifeCarousel from '../components/home/LifeCarousel.jsx'
import DemoDay from '../components/home/DemoDay.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import GenericCurriculum from '../components/home/GenericCurriculum.jsx'
import DailySchedule from '../components/home/DailySchedule.jsx'
import PillarsSection from '../components/home/PillarsSection.jsx'
import OutcomesSection from '../components/home/OutcomesSection.jsx'
import TestimonialsSection from '../components/home/TestimonialsSection.jsx'
import AdmissionsProcess from '../components/shared/AdmissionsProcess.jsx'
import BlogSection from '../components/shared/BlogSection.jsx'
import FAQ from '../components/shared/FAQ.jsx'

/**
 * Home page — assembles all home sections.
 * To add/remove/reorder sections, just add/remove/move component lines here.
 * All section content is in src/data/homeData.js
 */
export default function Home() {
  usePageTheme('home')

  useEffect(() => {
    document.title = 'Lotlite School of Real Estate — The New Era of Real Estate Leadership'
  }, [])

  return (
    <>
      <HeroSection />
      <PartnersMarquee />
      <StatsBand />
      <LifeCarousel />
      <DemoDay />
      <FeaturedProjects />
      <GenericCurriculum />
      <DailySchedule />
      <PillarsSection />
      <OutcomesSection />
      <TestimonialsSection />
      <AdmissionsProcess />
      <BlogSection />
      <FAQ />
    </>
  )
}
