import { Link, Navigate, useParams } from 'react-router-dom'
import { NextPage } from '../components/Blocks'
import { ArrowRight } from '../components/Icons'
import { Divider, Frame } from '../components/Layout'
import { research, works } from '../data/resume'

export default function WorkDetail() {
  const { slug } = useParams()
  const index = works.findIndex((w) => w.slug === slug)
  if (index === -1) return <Navigate to="/" replace />

  const work = works[index]
  const next = works[(index + 1) % works.length]
  // Work that appears in both lists (GeneMap) goes back to Research, where the resume places it
  const back = research.some((w) => w.slug === work.slug)
    ? { to: '/research', label: 'Research' }
    : { to: '/projects', label: 'Projects' }

  return (
    <>
      <Frame corners>
        <div className="page-header">
          <Link to={back.to} className="back-link">
            <ArrowRight width={16} height={16} className="flip" /> {back.label}
          </Link>
          <p className="work-kicker">
            {work.when} · {work.kind}
          </p>
          <h1 className="display work-title">{work.headline}</h1>
          <p className="lede">
            <strong className="work-role">{work.title}</strong> · {work.org}
          </p>
          {work.mentors && (
            <p className="role-mentors">
              <span>Mentors</span> {work.mentors}
            </p>
          )}
        </div>
      </Frame>
      <Divider />
      <Frame>
        <div className="work-body">
          <div className={`work-stats tone-${work.tone}`}>
            {work.stats.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <h2 className="h3 work-sub">What I Did</h2>
          <ul className="list work-points">
            {work.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <h2 className="h3 work-sub">Skills & Methods</h2>
          <p className="muted">{work.skills}</p>
          {work.tags && (
            <div className="chips">
              {work.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </Frame>
      <NextPage to={`/work/${next.slug}`} label={next.headline.split(' — ')[0]} />
    </>
  )
}
