import { SectionHeading } from '@/components/section-heading'

const education = [
  {
    school: 'Universal College of Engineering — Mumbai University',
    degree: 'B.E. in Computer Engineering',
    period: 'Pursuing (7th Semester)',
    stat: 'All Semesters Cleared',
    points: [
      'Currently in 4th year (7th Semester) — all semesters cleared with 0 active backlogs.',
      'Relevant coursework: DBMS, Data Structures & Algorithms, OOPs, Applied Mathematics.',
    ],
  },
  {
    school: 'Nirmala Memorial Foundation Junior College',
    degree: 'HSC — Science',
    period: 'Feb 2023',
    stat: '64.83% (First Class)',
    points: ['Focused on Computer Science (149/200), Mathematics, and Physics.'],
  },
  {
    school: 'Oxford Public School',
    degree: 'SSC',
    period: 'Mar 2021',
    stat: '82.80% (Distinction)',
    points: ['Excelled in Mathematics (89/100) and Science (84/100).'],
  },
]

export function EducationSection() {
  return (
    <section id="education">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading index="04 / Education" title="Academic background" />
        <div className="flex flex-col">
          {education.map((item) => (
            <div
              key={item.school}
              className="grid gap-4 border-t border-border py-8 md:grid-cols-[1fr_2fr] last:border-b"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {item.period}
                </p>
                <span className="mt-3 inline-block rounded-sm bg-accent px-2.5 py-1 font-mono text-xs text-accent-foreground">
                  {item.stat}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-balance">{item.degree}</h3>
                <p className="mt-1 text-muted-foreground">{item.school}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm leading-relaxed text-muted-foreground text-pretty"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
