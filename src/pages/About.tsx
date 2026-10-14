import { useState } from 'react'
import { CellsArt, ClusterArt, Photo } from '../components/Art'
import { NextPage, PageHeader, SectionTitle } from '../components/Blocks'
import { BookIcon, CodeIcon, DnaIcon, FlaskIcon, SparkIcon } from '../components/Icons'
import { Divider, Frame } from '../components/Layout'
import { education, profile, skills } from '../data/resume'

const skillIcons = { computational: CodeIcon, lab: FlaskIcon, domain: DnaIcon, courses: BookIcon }

function Skills() {
  const [active, setActive] = useState(skills[0].key)
  const idx = skills.findIndex((s) => s.key === active)
  const current = skills[idx]
  const Icon = skillIcons[current.key as keyof typeof skillIcons]

  return (
    <Frame>
      <SectionTitle>
        <span className="gradient-text">What I Bring To The Lab</span>
      </SectionTitle>
      <div className="tabs" role="tablist">
        {skills.map((s) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={s.key === active}
            className={`tab ${s.key === active ? 'is-active' : ''}`}
            onClick={() => setActive(s.key)}
          >
            {s.label} {s.key === active && <SparkIcon width={13} height={13} />}
          </button>
        ))}
      </div>
      <article key={current.key} className="offer offer-single">
        <Icon width={26} height={26} />
        <h3 className="h3">
          {current.lead} <em className="serif">{current.accent}</em>
        </h3>
        <p className="muted small">{current.blurb}</p>
        <ul className="offer-list">
          {current.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </article>
    </Frame>
  )
}

export default function About() {
  return (
    <>
      <PageHeader
        title={
          <>
            Curious By Nature,
            <br />
            Rigorous By Training.
          </>
        }
        intro={`A student at ${profile.school}, ${profile.city}, working at the intersection of computational biology and human genetics.`}
      />
      <Divider />
      <Frame>
        <div className="story">
          <SectionTitle>My Story</SectionTitle>
          <p className="story-text">
            <strong>My Interest In Genetics Started With A Simple Question: Why Are Rare Diseases So Hard To Diagnose?</strong>{' '}
            Answering It Has Taken Me From Metabolic Testing In A Genomics Lab To Gene-Therapy Benches And Single-Cell Data Pipelines.
          </p>
          <div className="polaroids">
            <figure className="polaroid p-left">
              <i className="pin" />
              <Photo src="/photos/story-1.jpg" alt="" fallback={<CellsArt seed={7} />} />
              <figcaption>Gene therapy · BARC</figcaption>
            </figure>
            <figure className="polaroid p-right">
              <i className="pin" />
              <Photo src="/photos/story-2.jpg" alt="" fallback={<ClusterArt />} />
              <figcaption>Single-cell · IIT</figcaption>
            </figure>
          </div>
          <p className="story-text">
            <strong>What Drives Me Is Making Fragmented Science Usable</strong>—For Clinicians, For Families, And For Anyone Searching
            For Answers. Outside The Lab, Service, Writing And Music Keep Me Close To People.
          </p>
        </div>
      </Frame>
      <Divider />
      <Frame>
        <SectionTitle sub={`${education.school} · ${education.meta}`}>
          <span className="gradient-text">Education</span>
        </SectionTitle>
        <div className="grade-grid">
          {education.grades.map((g) => (
            <article key={g.grade} className="grade">
              <h3 className="h3">{g.grade}</h3>
              <div className="chips">
                {g.subjects.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Frame>
      <Divider />
      <Skills />
      <NextPage to="/research" label="Research" />
    </>
  )
}
