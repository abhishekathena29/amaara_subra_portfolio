import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Role, Work } from '../data/resume'
import { profile } from '../data/resume'
import { ArrowRight, ArrowUpRight } from './Icons'
import { Divider, Frame } from './Layout'

export function PageHeader({ title, intro, children }: { title: ReactNode; intro: ReactNode; children?: ReactNode }) {
  return (
    <Frame corners>
      <div className="page-header">
        <h1 className="display">{title}</h1>
        <p className="lede">{intro}</p>
        {children}
      </div>
    </Frame>
  )
}

export function SectionTitle({ children, sub }: { children: ReactNode; sub?: ReactNode }) {
  return (
    <div className="section-title">
      <h2 className="h2">{children}</h2>
      {sub && <p className="muted">{sub}</p>}
    </div>
  )
}

export function RoleCard({ role, index }: { role: Role; index?: number }) {
  return (
    <article className="role">
      <div className="role-side">
        {index !== undefined && <span className="role-index">{String(index + 1).padStart(2, '0')}</span>}
        {role.meta && <span className="role-meta">{role.meta}</span>}
      </div>
      <div className="role-body">
        <h3 className="h3">{role.title}</h3>
        <p className="role-org">{role.org}</p>
        {role.mentors && (
          <p className="role-mentors">
            <span>Mentors</span> {role.mentors}
          </p>
        )}
        {role.points.length > 0 && (
          <ul className="list">
            {role.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
        {role.tags && (
          <div className="chips">
            {role.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export function NextPage({ to, label }: { to: string; label: string }) {
  return (
    <>
      <Divider />
      <Frame>
        <Link to={to} className="next-page">
          <span className="muted">Next</span>
          <span className="next-label">
            {label} <ArrowRight width={28} height={28} />
          </span>
        </Link>
      </Frame>
    </>
  )
}

export function ContactCTA() {
  return (
    <Frame>
      <div className="cta">
        <div className="cta-head">
          <h2 className="h2 gradient-text">
            Curious About The Work?
            <br />
            Let's Talk Science.
          </h2>
          <div className="cta-avatar" aria-hidden="true">
            {profile.firstName[0]}
          </div>
        </div>
        <p className="muted">
          I'm always glad to hear from researchers, mentors and teams working on rare disease, genomics or accessible mental-health
          tools.
        </p>
        <h3 className="h3 cta-sub">
          Looking For <em className="serif">Collaboration?</em>
          <br />
          Feel Free To <em className="serif">Reach Out!</em>
        </h3>
        <div className="cta-actions">
          {profile.email ? (
            <a className="btn btn-dark btn-wide" href={`mailto:${profile.email}`}>
              Drop me an email at {profile.email} <ArrowUpRight width={16} height={16} />
            </a>
          ) : (
            <Link className="btn btn-dark btn-wide" to="/resume">
              View the full academic resume <ArrowUpRight width={16} height={16} />
            </Link>
          )}
        </div>
      </div>
    </Frame>
  )
}

/** Sticky stacked cards; each opens the work's own page. */
export function WorkStack({ items }: { items: Work[] }) {
  return (
    <div className="stack">
      {items.map((w, i) => (
        <Link key={w.slug} to={`/work/${w.slug}`} className={`stack-card tone-${w.tone}`} style={{ top: `${96 + i * 64}px` }}>
          <div className="stack-top">
            <span>{w.when}</span>
            <span>{w.kind}</span>
          </div>
          <div className="stack-head">
            <h3 className="h3">{w.headline}</h3>
            <ArrowRight className="stack-arrow" width={22} height={22} />
          </div>
          <div className="stack-stats">
            {w.stats.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <p className="stack-skills">Skills — {w.skills}</p>
        </Link>
      ))}
    </div>
  )
}
