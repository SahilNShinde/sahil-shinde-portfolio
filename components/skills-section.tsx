import { SectionHeading } from '@/components/section-heading'
import { BarChart3, Database, Code2, Layers } from 'lucide-react'

const groups = [
  {
    icon: BarChart3,
    title: 'Data Analysis & Visualization',
    items: ['Power BI', 'DAX', 'Interactive Dashboards', 'Slicers', 'Excel (Advanced)'],
  },
  {
    icon: Database,
    title: 'Databases & Querying',
    items: ['SQL', 'Complex Joins', 'Subqueries', 'Stored Procedures'],
  },
  {
    icon: Code2,
    title: 'Programming',
    items: ['Python', 'C Programming', 'Data Structures & Algorithms'],
  },
  {
    icon: Layers,
    title: 'Core Competencies',
    items: ['Schema Design', 'Data Cleaning', 'ETL Fundamentals', 'GenAI for Analytics'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading
          index="01 / Skills"
          title="Technical toolkit"
          description="A focused stack for the full analytics workflow — from querying and cleaning raw data to modeling and building dashboards that communicate insight."
        />
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
          {groups.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.title} className="bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-semibold tracking-tight">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
