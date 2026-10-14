import { NextPage, PageHeader, RoleCard, SectionTitle } from '../components/Blocks'
import { Divider, Frame } from '../components/Layout'
import { training } from '../data/resume'

export default function Training() {
  return (
    <>
      <PageHeader
        title={
          <>
            Learning Where
            <br />
            Genetics Meets Care.
          </>
        }
        intro="Hands-on genomics training and clinical observation—from GC-MS metabolic testing to live prenatal genetic counselling."
      />
      <Divider />
      <Frame>
        <SectionTitle>
          <span className="gradient-text">Placements</span>
        </SectionTitle>
        <div className="roles">
          {training.map((r, i) => (
            <RoleCard key={r.title} role={r} index={i} />
          ))}
        </div>
      </Frame>
      <NextPage to="/honors" label="Honors & Awards" />
    </>
  )
}
