import { Mail, Phone, Globe, MapPin, ArrowUpRight } from 'lucide-react'

const metrics = [
  { value: '7.13', label: 'Sem 4 SGPI' },
  { value: '4th', label: 'Year B.E.' },
  { value: '4+', label: 'Data Projects' },
  { value: '2', label: 'Certifications' },
]

const contacts = [
  { icon: Mail, label: 'sahilshinde1881@gmail.com', href: 'mailto:sahilshinde1881@gmail.com' },
  { icon: Phone, label: '+91 93214 62205', href: 'tel:+919321462205' },
  {
    icon: Globe,
    label: 'linkedin.com/in/sahil-shinde',
    href: 'https://www.linkedin.com/in/sahil-shinde-48b06237b',
  },
  { icon: MapPin, label: 'Mumbai, Maharashtra', href: null },
]

export function HeroSection() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:pt-28">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          Aspiring Data Analyst
        </p>
        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Sahil Nandkumar Shinde
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Analytical and result-driven Computer Engineering student with a strong foundation in
          Data Structures and Data Analytics. Proficient in SQL, Power BI, and Excel — turning raw
          data into clear, decision-ready business insights.
        </p>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {contacts.map((c) => {
            const Icon = c.icon
            const content = (
              <span className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                {c.label}
              </span>
            )
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group"
              >
                {content}
              </a>
            ) : (
              <span key={c.label} className="group">
                {content}
              </span>
            )
          })}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-card px-6 py-6">
              <div className="font-mono text-3xl font-semibold tracking-tight text-foreground">
                {m.value}
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 font-mono text-sm font-medium text-foreground"
          >
            View selected work
            <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
