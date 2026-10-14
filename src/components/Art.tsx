import { useState, type ReactNode } from 'react'

/** Monochrome double helix used when no portrait photo is provided. */
export function HelixArt() {
  const rungs = Array.from({ length: 15 }, (_, i) => i)
  return (
    <svg className="art" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="helix-bg" cx="70%" cy="30%" r="90%">
          <stop offset="0" stopColor="var(--art-bg-1)" />
          <stop offset="1" stopColor="var(--art-bg-2)" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#helix-bg)" />
      <g transform="rotate(-24 230 200)">
        {rungs.map((i) => {
          const y = -20 + i * 30
          const phase = i * 0.55
          const a = 230 + Math.sin(phase) * 70
          const b = 230 - Math.sin(phase) * 70
          const depth = (Math.cos(phase) + 1) / 2
          return (
            <g key={i} opacity={0.35 + depth * 0.65}>
              <line x1={a} y1={y} x2={b} y2={y} stroke="var(--art-ink)" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
              <circle cx={a} cy={y} r={7 + depth * 6} fill="var(--art-ink)" />
              <circle cx={b} cy={y} r={7 + (1 - depth) * 6} fill="var(--art-ink)" />
            </g>
          )
        })}
      </g>
    </svg>
  )
}

/** Microscopy-style cell field for polaroids. */
export function CellsArt({ seed = 1 }: { seed?: number }) {
  const cells = Array.from({ length: 14 }, (_, i) => {
    const r = (n: number) => {
      const x = Math.sin(seed * 97 + i * 13.37 + n * 7.1) * 10000
      return x - Math.floor(x)
    }
    return { x: r(1) * 300, y: r(2) * 300, s: 18 + r(3) * 34, o: 0.4 + r(4) * 0.6 }
  })
  return (
    <svg className="art" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="300" height="300" fill="#141414" />
      {cells.map((c, i) => (
        <g key={i} opacity={c.o}>
          <circle cx={c.x} cy={c.y} r={c.s} fill="none" stroke="#e9e9e9" strokeWidth="1.4" />
          <circle cx={c.x + c.s * 0.15} cy={c.y - c.s * 0.1} r={c.s * 0.32} fill="#d4d4d4" opacity="0.65" />
        </g>
      ))}
      <circle cx="150" cy="150" r="148" fill="none" stroke="#000" strokeWidth="60" opacity="0.55" />
    </svg>
  )
}

/** UMAP-like scatter of clusters — nods to the single-cell work. */
export function ClusterArt() {
  const clusters = [
    { cx: 90, cy: 110, n: 40, sp: 32 },
    { cx: 200, cy: 90, n: 30, sp: 26 },
    { cx: 170, cy: 210, n: 46, sp: 36 },
    { cx: 70, cy: 230, n: 22, sp: 20 },
  ]
  let k = 0
  const rand = () => {
    const x = Math.sin(++k * 12.9898) * 43758.5453
    return x - Math.floor(x)
  }
  return (
    <svg className="art" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="300" height="300" fill="#efefef" />
      {clusters.map((c, ci) =>
        Array.from({ length: c.n }, (_, i) => {
          const a = rand() * Math.PI * 2
          const d = Math.sqrt(rand()) * c.sp
          return (
            <circle
              key={`${ci}-${i}`}
              cx={c.cx + Math.cos(a) * d}
              cy={c.cy + Math.sin(a) * d}
              r={2.6}
              fill="#111"
              opacity={0.25 + ci * 0.2}
            />
          )
        }),
      )}
    </svg>
  )
}

/** Shows a photo from /public/photos when present, otherwise falls back to the given art. */
export function Photo({ src, alt, fallback }: { src: string; alt: string; fallback: ReactNode }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <>{fallback}</>
  return <img className="art photo" src={src} alt={alt} onError={() => setFailed(true)} />
}
