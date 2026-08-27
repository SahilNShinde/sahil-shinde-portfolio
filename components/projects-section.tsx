import { SectionHeading } from '@/components/section-heading'

const projects = [
  {
    title: 'BMW Sales & Performance Dashboard',
    period: 'Oct 2025 – Nov 2025',
    tools: ['Power BI', 'DAX', 'Slicers'],
    points: [
      'Designed a high-contrast, interactive Power BI dashboard to analyze global sales performance.',
      'Visualized critical KPIs, tracking volume metrics across M, X, I and Number car series.',
      'Built dynamic slicers for Fuel Type and Year to compare Hybrid, Electric, and Petrol trends instantly.',
    ],
  },
  {
    title: 'Library Management System',
    period: 'Sep 2025 – Oct 2025',
    tools: ['SQL', 'Schema Design', 'Joins'],
    points: [
      'Architected a normalized relational schema with 5+ connected tables (Books, Members, Loans, Fines).',
      'Wrote complex queries using CASE statements to automate availability and LEFT JOINs for borrowing history.',
      'Ensured 100% data integrity and enabled efficient tracking of overdue books and member fines.',
    ],
  },
  {
    title: 'Hospital Management System',
    period: 'Jan 2025 – Apr 2025',
    tools: ['Java', 'Swing & AWT', 'SQL'],
    points: [
      'Developed a desktop management application in Java (Swing & AWT) with a user-friendly frontend.',
      'Integrated a SQL backend for real-time CRUD operations on patient records.',
      'Streamlined patient registration and reduced manual data-entry errors.',
    ],
  },
  {
    title: 'Project Title',
    period: 'Coming soon',
    tools: ['Tool', 'Tool', 'Tool'],
    points: [
      'Add a one-line summary describing what you built and the problem it solved.',
      'Highlight the key techniques, libraries, or models you applied.',
      'State the measurable result or outcome you achieved.',
    ],
  },
  {
    title: 'Project Title',
    period: 'Coming soon',
    tools: ['Tool', 'Tool', 'Tool'],
    points: [
      'Add a one-line summary describing what you built and the problem it solved.',
      'Highlight the key techniques, libraries, or models you applied.',
      'State the measurable result or outcome you achieved.',
    ],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading
          index="02 / Projects"
          title="Selected work"
          description="Hands-on projects spanning dashboard design, database engineering, and full application development."
        />
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group grid gap-6 border-t border-border py-10 md:grid-cols-[1fr_1.6fr] last:border-b"
            >
              <div>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-balance">
                  {project.title}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {project.period}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-sm bg-accent px-2.5 py-1 font-mono text-xs text-accent-foreground"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="space-y-3">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
