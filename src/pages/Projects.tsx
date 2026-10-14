import { NextPage, PageHeader, WorkStack } from '../components/Blocks'
import { Divider, Frame } from '../components/Layout'
import { projectWork } from '../data/resume'

export default function Projects() {
  return (
    <>
      <PageHeader
        title={
          <>
            Building Tools
            <br />
            That Help People.
          </>
        }
        intro="Turning research into something people can use day to day."
      />
      <Divider />
      <Frame>
        <WorkStack items={projectWork} />
      </Frame>
      <NextPage to="/training" label="Clinical & Lab Training" />
    </>
  )
}
