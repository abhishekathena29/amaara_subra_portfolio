import type { ReactNode } from 'react'
import { DocIcon } from '../components/Icons'
import { Divider, Frame } from '../components/Layout'
import type { Role } from '../data/resume'
import { activities, appliedProjects, education, honors, profile, publications, research, skills, training } from '../data/resume'

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="cv-section">
      <h2 className="cv-label">{title}</h2>
      <div className="cv-body">{children}</div>
    </section>
  )
}

function Entry({ role }: { role: Role }) {
  return (
    <div className="cv-entry">
      <p className="cv-line">
        <strong>{role.title}</strong> · {role.org}
        {role.meta && <span className="cv-meta"> · {role.meta}</span>}
      </p>
      {role.mentors && <p className="cv-sub">Mentors: {role.mentors}</p>}
      {role.points.length > 0 && (
        <ul className="list">
          {role.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

export default function Resume() {
  return (
    <>
      <Frame corners>
        <div className="cv-head">
          <div>
            <h1 className="display cv-name">{profile.name}</h1>
            <p className="cv-school">{profile.school}</p>
            <p className="lede">{profile.tagline}</p>
          </div>
          <div className="cv-actions no-print">
            <a className="btn btn-dark btn-sm" href={profile.resumePdf} download>
              Download PDF <DocIcon width={15} height={15} />
            </a>
            <button className="btn btn-ghost btn-sm" onClick={() => window.print()}>
              Print
            </button>
          </div>
        </div>
      </Frame>
      <Divider />
      <Frame className="cv">
        <Section title="Education">
          <p className="cv-line">
            <strong>{education.school}</strong> · {education.meta}
          </p>
          <Bullets items={[...education.grades.map((g) => `${g.grade}: ${g.subjects.join(', ')}`), education.note]} />
        </Section>

        <Section title="Research Experience">
          {research.map((r) => (
            <Entry key={r.title} role={r} />
          ))}
        </Section>

        <Section title="Publications & Submissions">
          <ul className="list">
            {publications.map((p) => (
              <li key={p.title}>
                <strong className="cv-strong">{p.role}</strong>, “{p.title},” {p.venue} — {p.status.toLowerCase()}. {p.detail}.
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Applied Projects">
          {appliedProjects.map((p) => (
            <Entry key={p.slug} role={p} />
          ))}
        </Section>

        <Section title="Clinical & Laboratory Training">
          {training.map((r) => (
            <Entry key={r.title} role={r} />
          ))}
        </Section>

        <Section title="Honors & Awards">
          <p className="cv-line">
            <strong>Research and national</strong>
          </p>
          <Bullets items={honors.national.map((h) => `${h.title}, ${h.note}, ${h.year}`)} />
          <p className="cv-line">
            <strong>World Scholar's Cup, Bangkok Global Round</strong> <span className="cv-meta">· Aug 21, 2024</span>
          </p>
          <div className="table-wrap cv-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Award</th>
                  <th>Event</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {honors.wscGlobal.map((r) => (
                  <tr key={r.event}>
                    <td>{r.award}</td>
                    <td>{r.event}</td>
                    <td>{r.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cv-line">
            <strong>World Scholar's Cup, Mumbai Regional Round</strong>
          </p>
          <Bullets items={honors.wscRegional} />
          <p className="cv-line">
            <strong>School honors, ABWA</strong>
          </p>
          <Bullets items={honors.school} />
        </Section>

        <Section title="Leadership, Service & Activities">
          {activities.map((a) => (
            <Entry key={a.title} role={a} />
          ))}
        </Section>

        <Section title="Coursework & Skills">
          <ul className="list">
            {skills.map((s) => (
              <li key={s.key}>
                <strong className="cv-strong">
                  {s.lead} {s.accent.toLowerCase()}:
                </strong>{' '}
                {s.items.join('; ')}
              </li>
            ))}
            <li>
              <strong className="cv-strong">Languages:</strong> {profile.languages}
            </li>
          </ul>
        </Section>
      </Frame>
    </>
  )
}
