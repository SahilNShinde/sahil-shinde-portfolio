import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { CertificationsSection } from '@/components/certifications-section'
import { EducationSection } from '@/components/education-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
      </main>
      <SiteFooter />
    </div>
  )
}
