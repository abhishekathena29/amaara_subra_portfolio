import { useState } from 'react'
import { NextPage, PageHeader, RoleCard } from '../components/Blocks'
import { SparkIcon } from '../components/Icons'
import { Divider, Frame } from '../components/Layout'
import { activities } from '../data/resume'

const categories = ['All', ...Array.from(new Set(activities.map((a) => a.category)))]

export default function Activities() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? activities : activities.filter((a) => a.category === filter)

  return (
    <>
      <PageHeader
        title={
          <>
            Showing Up
            <br />
            Beyond The Lab.
          </>
        }
        intro="Service programs, writing, music, sport and robotics—the work that keeps me close to people and communities."
      />
      <Divider />
      <Frame>
        <div className="tabs" role="tablist">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={c === filter}
              className={`tab ${c === filter ? 'is-active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c} {c === filter && <SparkIcon width={13} height={13} />}
            </button>
          ))}
        </div>
        <div className="roles">
          {shown.map((a, i) => (
            <RoleCard key={a.title} role={{ ...a, meta: [a.category, a.meta].filter(Boolean).join(' · ') }} index={i} />
          ))}
        </div>
      </Frame>
      <NextPage to="/" label="Back Home" />
    </>
  )
}
