import { SectionHeading } from '@/components/section-heading'
import { Award } from 'lucide-react'

const certs = [
  {
    title: 'Data Structures & Algorithms for Campus Placements',
    issuer: 'ExcelR',
    date: 'Aug – Sep 2024',
    points: [
      'Completed a rigorous 30-hour live training program.',
      'Mastered algorithmic efficiency, time complexity, and core data structures for optimized code.',
    ],
  },
  {
    title: 'Master in Data Science, Analytics & AI',
    issuer: 'Itvedant · NSDC (Govt. of India) Certified',
    date: 'Industry-aligned',
    points: [
      'Completed an intensive industry-aligned curriculum across Data Analytics, Data Science, and Machine Learning.',
      'Covered end-to-end tracks from data preparation to modeling and applied AI.',
    ],
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading index="03 / Certifications" title="Training & credentials" />
        <div className="grid gap-6 md:grid-cols-2">
          {certs.map((cert) => (
            <div key={cert.title} className="rounded-sm border border-border bg-card p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                  <Award className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {cert.date}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-balance">
                {cert.title}
              </h3>
              <p className="mt-1 font-mono text-sm text-primary">{cert.issuer}</p>
              <ul className="mt-4 space-y-2">
                {cert.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
