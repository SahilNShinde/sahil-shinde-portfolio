import { Mail, Globe, Phone } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            Let&apos;s work together
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance">
            Open to Data Analyst roles.
          </h2>
          <a
            href="mailto:sahilshinde1881@gmail.com"
            className="mt-4 inline-block font-mono text-lg text-foreground underline decoration-primary underline-offset-4"
          >
            sahilshinde1881@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/sahil-shinde-48b06237b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Globe className="h-4 w-4" />
          </a>
          <a
            href="tel:+919321462205"
            aria-label="Phone"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href="mailto:sahilshinde1881@gmail.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Sahil Nandkumar Shinde</span>
          <span>Mumbai, Maharashtra · India</span>
        </div>
      </div>
    </footer>
  )
}
