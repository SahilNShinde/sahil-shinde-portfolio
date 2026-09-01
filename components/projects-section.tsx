import { SectionHeading } from '@/components/section-heading'
import { ArrowUpRight, Video } from 'lucide-react'

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

const projects = [
  {
    title: 'Smart Urban Operations Platform',
    period: 'Coming Soon',
    github: null,
    videoUrl: null,
    tools: ['Python', 'Machine Learning', 'AI', 'FastAPI', 'React'],
    points: [
      'Building an AI-powered urban operations platform to simulate city conditions and support smarter decisions across traffic, weather, flooding, hospitals, and emergency response.',
      'Leveraging Machine Learning, multi-agent AI, predictive analytics, FastAPI, PostgreSQL/PostGIS, React, and LLM-based decision support.',
      'Aiming to enable real-time urban monitoring, what-if scenario simulation, and AI-driven recommendations for more efficient city management.',
    ],
  },
  {
    title: 'Avasplot – Real Estate Platform',
    period: 'Jan 2026 – Apr 2026',
    github: 'https://github.com/Pradyumna922/avasplot-app',
    videoUrl: null,
    tools: ['JavaScript', 'Appwrite', 'Groq API'],
    points: [
      'Built an AI-powered real estate platform where one can buy, sell or rent a property that streamlines property discovery, comparison, valuation.',
      'Architected Appwrite document schemas, storage buckets for document/photo verification, and dynamic JavaScript validation logic.',
      'Achieved seamless property discovery and onboarding across verified listings with sub-second querying and client-side error handling.',
    ],
  },
  {
    title: 'Automotive Sales Dashboard using PowerBI BMW Dataset',
    period: 'Oct 2025 – Nov 2025',
    github: 'https://github.com/SahilNShinde/Automotive-Sales-Dashboard-using-PowerBI-BMW-Dataset-',
    videoUrl: '/videos/bmw-dashboard-demo.mp4',
    tools: ['Power BI', 'DAX', 'Slicers'],
    points: [
      'Designed a high-contrast, interactive Power BI dashboard to analyze global sales performance.',
      'Visualized critical KPIs, tracking volume metrics across M, X, I and Number car series.',
      'Built dynamic slicers for Fuel Type and Year to compare Hybrid, Electric, and Petrol trends instantly.',
    ],
  },
  {
    title: 'Hospital Operations and Resource Management System',
    period: 'Feb 2025 – Mar 2025',
    github: 'https://github.com/SahilNShinde/Hospital-Operations-and-Resource-Management-System',
    videoUrl: '/videos/hospital-system-demo.mp4',
    tools: ['Java', 'Java Swing', 'JDBC', 'MySQL'],
    points: [
      'Built a desktop hospital operations system with role-based authentication to streamline patient intake, department directories, and real-time room/ambulance availability.',
      'Developed interactive GUI workflows using Java Swing/AWT and integrated JDBC for CRUD operations, handling patient admissions, automatic pending bill calculations, and discharge management.',
      'Eliminated manual paper records across patient intake and room tracking, reducing check-in administrative overhead and enabling instant patient record retrieval.',
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

                {project.github && (
                  <div className="mt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      <GithubIcon className="h-3.5 w-3.5 text-primary" />
                      View Repository
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-6">
                <ul className="space-y-3">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span className="text-pretty">{point}</span>
                    </li>
                  ))}
                </ul>

                {project.videoUrl && (
                  <div className="overflow-hidden rounded-md border border-border bg-card p-3">
                    <div className="mb-2 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      <Video className="h-3.5 w-3.5 text-primary" />
                      <span>Demo Walkthrough Video</span>
                    </div>
                    <video
                      controls
                      preload="metadata"
                      className="w-full rounded border border-border bg-black/40 aspect-video object-contain"
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
