import { Link } from 'react-router-dom'
import { HelixArt, Photo } from '../components/Art'
import { ContactCTA, SectionTitle, WorkStack } from '../components/Blocks'
import { DnaIcon } from '../components/Icons'
import { Divider, Frame } from '../components/Layout'
import { featuredWork, profile } from '../data/resume'

function Hero() {
  return (
    <Frame corners>
      <div className="hero">
        <div className="hero-copy">
          <h1 className="display hero-title">
            Mapping Genes
            <br />
            To Make Rare
            <br />
            Diseases Visible.
          </h1>
          <p className="lede">
            Hi, I'm {profile.firstName} - a high school researcher in human genetics, gene therapy, and precision medicine, with
            independent and co-authored publications, research placements at IIT Bombay and other research laboratories, and the
            creator of an integrated leukodystrophy knowledge atlas connecting genetic evidence, disease mechanisms, and therapeutic
            research.
          </p>
          <div className="hero-actions">
            <Link to="/research" className="btn btn-dark">
              View Research <DnaIcon width={17} height={17} />
            </Link>
            <Link to="/projects" className="btn btn-ghost">
              See Projects
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <Photo src={profile.photo} alt={profile.name} fallback={<HelixArt />} />
          <div className="hero-strips" aria-hidden="true">
            {[18, 14, 10, 7, 4, 2].map((b, i) => (
              <span key={i} style={{ backdropFilter: `blur(${b}px)`, WebkitBackdropFilter: `blur(${b}px)` }} />
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}


function Featured() {
  return (
    <Frame>
      <SectionTitle>
        <span className="gradient-text">Some Of My Featured Work</span>
      </SectionTitle>
      <WorkStack items={featuredWork} />
    </Frame>
  )
}


export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Featured />
      <Divider />
      <ContactCTA />
    </>
  )
}
