import { Link } from 'react-router-dom'
import { NextPage, PageHeader, SectionTitle, WorkStack } from '../components/Blocks'
import { ArrowRight } from '../components/Icons'
import { Divider, Frame } from '../components/Layout'
import { publications, research } from '../data/resume'

export default function Research() {
  return (
    <>
      <PageHeader
        title={
          <>
            From Bench To
            <br />
            Bioinformatics.
          </>
        }
        intro="Research placements across IIT Bombay, BARC and IIT—spanning rare-disease atlases, cancer genetics, single-cell genomics and gene therapy."
      />
      <Divider />
      <Frame>
        <SectionTitle>
          <span className="gradient-text">Research Experience</span>
        </SectionTitle>
        <WorkStack items={research} />
      </Frame>
      <Divider />
      <Frame>
        <SectionTitle>
          <span className="gradient-text">Publications & Submissions</span>
        </SectionTitle>
        <div className="pubs">
          {publications.map((p, i) => (
            <Link key={p.title} to={`/work/${p.slug}`} className={`pub tone-${(['green', 'amber', 'blue'] as const)[i]}`}>
              <div className="stack-top">
                <span>{p.role}</span>
                <span className="pub-status">{p.status}</span>
              </div>
              <div className="stack-head">
                <h3 className="h3">{p.title}</h3>
                <ArrowRight className="stack-arrow" width={20} height={20} />
              </div>
              <p className="muted small">
                <em className="serif">{p.venue}</em> · {p.detail}
              </p>
            </Link>
          ))}
        </div>
      </Frame>
      <NextPage to="/projects" label="Projects" />
    </>
  )
}
