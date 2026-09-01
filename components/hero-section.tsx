'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowUpRight, Check } from 'lucide-react'

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
    </svg>
  )
}

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

const metrics = [
  { value: '0', label: 'Active Backlogs' },
  { value: '4th', label: 'Year B.E.' },
  { value: '4', label: 'Projects' },
  { value: '2', label: 'Certifications' },
]

const contacts = [
  { icon: Mail, label: 'sahilshinde1881@gmail.com', href: 'mailto:sahilshinde1881@gmail.com', copyable: 'sahilshinde1881@gmail.com' },
  { icon: Phone, label: '+91 93214 62205', href: 'tel:+919321462205', copyable: '+91 93214 62205' },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sahil-shinde-48b06237b',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/SahilNShinde',
  },
  { icon: MapPin, label: 'Mumbai, Maharashtra', href: null },
]

export function HeroSection() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string, e: React.MouseEvent) => {
    // Only intercept on desktop to copy text cleanly
    if (window.innerWidth > 768) {
      e.preventDefault()
      navigator.clipboard.writeText(text)
      setCopied(text)
      setTimeout(() => setCopied(null), 2000)
    }
  }

  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:pt-28">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          Aspiring Data Analyst & Data Scientist
        </p>
        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
          Sahil Nandkumar Shinde
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Analytical and results-driven Computer Engineering student with a strong foundation in
          Data Science, Machine Learning, and Data Analytics. Proficient in Python, SQL, Power BI,
          Excel, and ML libraries — turning raw data into clear, decision-ready insights.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          {contacts.map((c) => {
            const Icon = c.icon
            const isExternal = c.href?.startsWith('http')
            const isCopied = c.copyable && copied === c.copyable
            const content = isExternal ? (
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3.5 py-2 font-mono text-xs font-medium text-foreground shadow-xs transition-all group-hover:border-primary group-hover:bg-accent group-hover:text-primary">
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>{c.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </span>
            ) : (
              <span className={`inline-flex items-center gap-2 font-mono text-xs transition-colors ${c.href ? 'text-foreground hover:text-primary' : 'text-muted-foreground'}`}>
                {isCopied ? (
                  <Check className="h-4 w-4 text-green-500" aria-hidden="true" />
                ) : (
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                )}
                <span className={c.href ? 'underline decoration-primary/40 underline-offset-4 hover:decoration-primary' : ''}>
                  {isCopied ? 'Copied to clipboard!' : c.label}
                </span>
              </span>
            )
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                onClick={c.copyable ? (e) => handleCopy(c.copyable!, e) : undefined}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                title={c.copyable ? `Click to copy ${c.label}` : isExternal ? `Visit ${c.label}` : c.label}
                className="group cursor-pointer"
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
