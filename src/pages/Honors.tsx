import { NextPage, PageHeader, SectionTitle } from '../components/Blocks'
import { TrophyIcon } from '../components/Icons'
import { Divider, Frame } from '../components/Layout'
import { honors } from '../data/resume'

export default function Honors() {
  return (
    <>
      <PageHeader
        title={
          <>
            Recognition For
            <br />
            Research & Scholarship.
          </>
        }
        intro="National research awards, a Global Round finish at the World Scholar's Cup, and school honours across three years at ABWA."
      />
      <Divider />
      <Frame>
        <SectionTitle>
          <span className="gradient-text">Research & National</span>
        </SectionTitle>
        <div className="award-grid">
          {honors.national.map((h) => (
            <article key={h.title} className="award">
              <TrophyIcon width={22} height={22} />
              <span className="muted tiny">{h.year}</span>
              <h3 className="h3">{h.title}</h3>
              <p className="muted small">{h.note}</p>
            </article>
          ))}
        </div>
      </Frame>
      <Divider />
      <Frame>
        <SectionTitle sub="Bangkok Global Round · Aug 21, 2024 · Team Captain">
          <span className="gradient-text">World Scholar's Cup</span>
        </SectionTitle>
        <div className="table-wrap">
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
                  <td>
                    <span className={`medal medal-${r.award.toLowerCase()}`}>{r.award}</span>
                  </td>
                  <td>{r.event}</td>
                  <td>{r.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="two-col">
          <article className="panel">
            <h3 className="h3">
              Mumbai <em className="serif">Regional Round</em>
            </h3>
            <ul className="list">
              {honors.wscRegional.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
          <article className="panel">
            <h3 className="h3">
              School Honors, <em className="serif">ABWA</em>
            </h3>
            <ul className="list">
              {honors.school.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        </div>
      </Frame>
      <NextPage to="/activities" label="Activities" />
    </>
  )
}
