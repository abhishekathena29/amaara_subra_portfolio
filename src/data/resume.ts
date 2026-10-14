export const profile = {
  name: 'Amaara Subramaniam',
  firstName: 'Amaara',
  school: 'Aditya Birla World Academy (ABWA)',
  city: 'Mumbai',
  graduating: '2027',
  tagline:
    'High-school researcher in computational biology and human genetics, with a published co-authored paper, research placements at IIT Bombay and IIT, and an independent genomics platform in development.',
  resumePdf: '/Academic_Resume.pdf',
  languages: 'English; Spanish (DELE A2, 93%)',
  // Add an email address to show a mail link on the contact CTA
  email: '',
}

export type Role = {
  title: string
  org: string
  meta?: string
  mentors?: string
  points: string[]
  tags?: string[]
}

export type Tone = 'blue' | 'violet' | 'green' | 'amber'

/** A piece of work with its own detail page at /work/:slug. */
export type Work = Role & {
  slug: string
  when: string
  kind: string
  headline: string
  tone: Tone
  stats: { value: string; label: string }[]
  skills: string
}

const genemap: Work = {
  slug: 'genemap',
  when: 'Jan 2026 – present',
  kind: 'Genomics platform · Research',
  headline: 'GeneMap — an interactive digital atlas of genetic leukodystrophies',
  tone: 'blue',
  stats: [
    { value: '8', label: 'Disorders covered with literature-based dossiers' },
    { value: '1', label: 'Searchable platform for genetic, diagnostic and therapeutic data' },
  ],
  skills: 'Literature review, biomedical databases, evidence classification, platform design',
  title: 'Founder & Lead Researcher, GeneMap',
  org: 'Independent capstone',
  meta: 'Jan 2026 – present',
  mentors: 'Louis (Oxford); Dr. Mayuri Bandekar (IIT Bombay)',
  points: [
    'Building an interactive digital atlas of genetic leukodystrophies that consolidates fragmented genetic, molecular, diagnostic, biomarker and therapeutic data into one searchable platform',
    'Authored literature-based dossiers on eight disorders: Canavan, Krabbe, metachromatic leukodystrophy, X-linked adrenoleukodystrophy, Pelizaeus–Merzbacher, vanishing white matter, Alexander, and POLR3-related leukodystrophy',
    'Each dossier links primary literature, biomedical databases, clinical-trial records, standardized identifiers and evidence classifications across disease biology, genotype–phenotype relationships, biomarkers, diagnostics and therapeutic pipelines',
  ],
  tags: ['Leukodystrophies', 'Data curation', 'Platform'],
}

const mannpakad: Work = {
  slug: 'mannpakad',
  when: 'Grade 11',
  kind: 'AI app · Mental health',
  headline: 'MannPakad — clinically grounded OCD therapy for teens',
  tone: 'violet',
  stats: [
    { value: 'INSEF', label: 'Qualified round one; advanced to INSEF Regionals' },
    { value: '2', label: 'Clinical validation partners: Dr. Nikita & Muskaan Foundation' },
  ],
  skills: 'AI development, adaptive therapy flows, clinical validation',
  title: 'Founder & AI Developer, MannPakad',
  org: 'AI therapy app for teens with OCD',
  points: [
    'Built an app that delivers clinically grounded OCD therapy to teens who cannot access a therapist, adapting to each user',
    'Clinical validation in progress with a psychologist, Dr. Nikita, and the Muskaan Foundation',
    'Qualified the first round of INSEF; advanced to INSEF Regionals (Grade 11)',
  ],
  tags: ['AI', 'Mental health', 'Clinical validation'],
}

const canavan: Work = {
  slug: 'canavan-diagnosis',
  when: 'Oct 2025 – Jan 2026',
  kind: 'Publication · Diagnostics',
  headline: 'Urine-Based Diagnosis of Canavan Disease',
  tone: 'green',
  stats: [
    { value: 'Pub.', label: 'Co-authored, published in ER Publications' },
    { value: 'CREST', label: 'Also submitted to the CREST Award' },
  ],
  skills: 'Metabolic testing, GC-MS, Canavan disease biology',
  title: 'Co-author, Urine-Based Diagnosis of Canavan Disease',
  org: 'ER Publications · Mentor: Dr. Usha Dave',
  meta: 'Oct 2025 – Jan 2026',
  points: [
    'Co-authored paper on urine-based diagnosis of Canavan disease, published in ER Publications',
    'Grew out of the genomics internship with Dr. Usha Dave at Labassure Advanced Genomics Institute',
    'Also submitted to the CREST Award',
  ],
  tags: ['Canavan disease', 'Diagnostics', 'Published'],
}

const cancerGene: Work = {
  slug: 'cancer-gene',
  when: 'IIT Bombay · BARC',
  kind: 'Cancer genetics · Research',
  headline: 'A novel gene in cancer progression',
  tone: 'amber',
  stats: [
    { value: 'OJSS', label: 'Manuscript published' },
    { value: 'IITB', label: 'Mentored by Dr. Mayuri Bandekar' },
  ],
  skills: 'Cancer biology, research writing',
  title: 'Research Assistant',
  org: 'Dr. Mayuri Bandekar, IIT Bombay and BARC',
  points: ['Investigating a novel gene in cancer progression', 'Manuscript published to OJSS'],
  tags: ['Cancer biology', 'Published'],
}

const singleCell: Work = {
  slug: 'single-cell-atlas',
  when: 'June 15 – July 25',
  kind: 'Computational biology · IIT',
  headline: 'Single-cell reference atlas of healthy cells',
  tone: 'green',
  stats: [
    { value: '~300', label: 'Scientific papers reviewed and curated into a database' },
    { value: 'R', label: 'Full Seurat workflow from QC to cell-type annotation' },
  ],
  skills: 'R, Seurat, PCA, clustering, UMAP, differential expression',
  title: 'Research Intern, Single-Cell Genomics & Computational Biology',
  org: 'Saket Chaudhary, IIT',
  meta: 'June 15 – July 25',
  points: [
    'Sole high-school intern in the research group',
    'Worked independently through the full Seurat workflow in R: QC, normalization, highly variable gene selection, PCA, clustering, UMAP, differential expression and cell-type annotation',
    'Reviewed about 300 scientific papers and built a structured Excel database to support curation of a healthy reference cell atlas',
    'Attended research seminars on current genomics work; findings expected to be published',
  ],
  tags: ['R', 'Seurat', 'scRNA-seq'],
}

const geneTherapy: Work = {
  slug: 'gene-therapy',
  when: '4 weeks',
  kind: 'Gene therapy · BARC Hospital',
  headline: 'AAV gene therapy for Canavan disease',
  tone: 'violet',
  stats: [
    { value: 'AAV', label: 'Vectors, capsid engineering and targeted delivery' },
    { value: 'LOR', label: 'Letter of recommendation from Dr. Rahul Checker' },
  ],
  skills: 'Plasmid design, PCR, gel electrophoresis, transfection, protein validation',
  title: 'Research Intern, Gene Therapy',
  org: 'BARC Hospital, under Dr. Rahul Checker',
  meta: '4 weeks',
  points: [
    'Studied plasmid design, bacterial transformation, PCR and gel electrophoresis, transfection, and protein expression and validation',
    'Covered AAV vectors, capsid engineering and oligodendrocyte-targeted delivery, applied to Canavan disease (ASPA/NAA biology) and its preclinical and clinical gene-therapy development',
    'Wrote a research report; letter of recommendation received from Dr. Checker',
  ],
  tags: ['AAV', 'Wet lab', 'Canavan'],
}

export const works = [genemap, mannpakad, canavan, cancerGene, singleCell, geneTherapy]

/** Landing-page highlights. */
export const featuredWork = [genemap, mannpakad, canavan, singleCell]
/** Research Experience, in resume order. */
export const research = [genemap, cancerGene, singleCell, geneTherapy]
/** Projects page — GeneMap is both research and a build. */
export const projectWork = [mannpakad, genemap]
/** Applied Projects as listed in the resume. */
export const appliedProjects = [mannpakad]

export const publications = [
  {
    role: 'Co-author',
    title: 'Urine-Based Diagnosis of Canavan Disease',
    venue: 'ER Publications',
    status: 'Published',
    detail: 'Mentor: Dr. Usha Dave · Oct 2025 – Jan 2026 · Also submitted to the CREST Award',
    slug: 'canavan-diagnosis',
  },
  {
    role: 'Author',
    title: 'Novel-gene study in cancer progression',
    venue: 'OJSS',
    status: 'Published',
    detail: 'IIT Bombay / BARC · Mentor: Dr. Mayuri Bandekar',
    slug: 'cancer-gene',
  },
  {
    role: 'Contributor',
    title: 'Single-cell reference atlas project',
    venue: 'IIT',
    status: 'Publication done',
    detail: 'Mentor: Saket Chaudhary',
    slug: 'single-cell-atlas',
  },
]

export const training: Role[] = [
  {
    title: 'Genomics Intern',
    org: 'Dr. Usha Dave, Labassure Advanced Genomics Institute',
    meta: 'Grade 11 · 10 sessions, 45 hours',
    points: [
      'Trained in genetic disorder classification, chromatography, GC-MS metabolic testing, pedigree analysis, cancer biology, immunology and sample handling',
      'Completed laboratory biosafety training, one-to-one forensic testing training, and visits to the ACTREC cancer research laboratory (Kharghar) and biotechnology start-ups in Pune',
      'Wrote a final internship report; the placement led to the Canavan diagnostics research',
    ],
    tags: ['GC-MS', 'Pedigree analysis', 'Biosafety'],
  },
  {
    title: 'Genetics Observer',
    org: 'Dr. Hema Purandare, MedGenome / Centre for Genetic Health Care',
    meta: 'June – July 23, 2025 · 20 hours',
    points: [
      'Shadowed a pioneer of prenatal genetics across 6+ live counseling sessions on how DNA testing informs decisions for families',
    ],
    tags: ['Prenatal genetics', 'Counseling'],
  },
]

export const honors = {
  national: [
    { title: 'CREST Gold Award', year: '2026', note: 'National research award' },
    { title: 'INSEF Regionals', year: 'Grade 11', note: 'Advanced with MannPakad' },
    { title: 'Immerse Education Essay Competition', year: '2026', note: 'Honours List' },
    { title: 'DELE Spanish A2', year: 'Grade 11', note: 'Scored 93%' },
    { title: 'Dr. Homi Bhabha Balvaidyanik Competition', year: '2023–24', note: 'Participant' },
    { title: 'Math Olympiad', year: '2022–23', note: 'Participant' },
  ],
  wscGlobal: [
    { award: 'Gold', event: 'Overall Challenge', result: '6th of 500 participants' },
    { award: 'Gold', event: 'Challenge: Special Area', result: '11th' },
    { award: 'Gold', event: 'Challenge: Art & Music', result: '15th' },
    { award: 'Gold', event: 'Collaborative Writing', result: '50th' },
    { award: 'Gold', event: "Scholar's Bowl, team", result: '41st' },
    { award: 'Silver', event: 'Senior Team', result: '10th' },
    { award: 'Silver', event: 'South Asia Team', result: '5th' },
    { award: 'Silver', event: 'Overall Scholar', result: '99th' },
    { award: 'Trophy', event: 'Team Writing', result: '6th' },
  ],
  wscRegional: [
    'Champion Challenge Scholar (Jac Khor Trophy); Overall Scholar trophy; top-scoring scholar from school (gold)',
    'Team: 3rd Overall Team, Champion Challenge Team, Writing Team and Bowl Team trophies; Debate Team silver (7th)',
    'Gold medals: Writer, Challenge Art & Music, Challenge History, Challenge Special Area; silver medals: Debater (19th), Challenge Social Studies (5th)',
  ],
  school: [
    'Academic Excellence, 2024–2026 (subjects listed under Education)',
    'General Proficiency, Grades 9–11',
    'Attribute Awards, 2023 (Grade 9) and 2024, for empathy, diligence, resilience, honesty, respect and responsibility',
    'Muskaan Foundation Award for Social Service, Grade 11',
  ],
}

export const activities: (Role & { category: string })[] = [
  {
    category: 'Service',
    title: 'Founder & Program Lead, Animal-Assisted Therapy',
    org: 'Yes I Can Foundation × Animal Angels Foundation India',
    points: [
      'Brokered a first-of-its-kind NGO partnership bringing therapy animals to isolated elderly residents',
      "Certified as an animal-assisted therapist; ran the program to support residents' mental wellbeing",
    ],
  },
  {
    category: 'Service',
    title: 'Rescue Volunteer & Content Creator',
    org: 'YODA (Youth Organisation for Defence of Animals) and WSD Initiative',
    points: ['Rescued and rehabilitated injured strays; ran social campaigns that drove adoptions and donations'],
  },
  {
    category: 'Leadership',
    title: 'Core Writer, Newsletter Team',
    org: 'ABWA School Newsletter',
    meta: 'Grade 10 – present',
    points: [
      "Published 20+ articles; started the newsletter's STEM column on current science, research by students and ethics in STEM",
      "Competed in the Derek O'Brien parliamentary writing contest at national level",
    ],
  },
  {
    category: 'Leadership',
    title: 'Team Captain',
    org: "World Scholar's Cup, Bangkok Global Round",
    points: [],
  },
  {
    category: 'Arts & Sport',
    title: 'Vocalist',
    org: 'Trinity College London',
    points: ['Distinction in Grades 1 and 2; solo and band performances for 3+ years, including a 150-person concert'],
  },
  {
    category: 'Arts & Sport',
    title: 'Trainee',
    org: 'Krav Maga India',
    meta: 'Grade 9 – present',
    points: [],
  },
  {
    category: 'STEM',
    title: 'Team Member',
    org: 'Binary Bolts, FIRST Robotics Competition',
    meta: '2022–23',
    points: ['Helped design and build a competition robot under deadline'],
  },
]

export const education = {
  school: 'Aditya Birla World Academy (ABWA), Mumbai',
  meta: 'Grades 9–11 · graduating 2027',
  grades: [
    { grade: 'Grade 9', subjects: ['English (FLE)', 'Computer Science', 'Biology', 'Spanish'] },
    {
      grade: 'Grade 10 (International)',
      subjects: ['Mathematics', 'Spanish', 'Computer Science', 'Economics', 'Biology', 'Physics', 'Chemistry', 'Global Perspectives'],
    },
    { grade: 'Grade 11', subjects: ['English General Paper (EGP)', 'Biology', 'Physics', 'Mathematics'] },
  ],
  note: 'Academic Excellence awards in the subjects above, 2024–2026; General Proficiency, Grades 9–11',
}

export const skills = [
  {
    key: 'computational',
    label: 'Computational',
    lead: 'Computational',
    accent: 'Biology',
    blurb: 'Turning raw single-cell data and scattered literature into structured, analysable knowledge.',
    items: ['R programming', 'Seurat workflow (scRNA-seq)', 'PCA, clustering & UMAP', 'Differential expression', 'Systematic literature review', 'Database curation'],
  },
  {
    key: 'lab',
    label: 'Laboratory',
    lead: 'Laboratory',
    accent: 'Exposure',
    blurb: 'Hands-on bench training across molecular biology and metabolic diagnostics.',
    items: ['PCR', 'Gel electrophoresis', 'Plasmid construction', 'GC-MS', 'Chromatography', 'Sample preparation'],
  },
  {
    key: 'domain',
    label: 'Domain',
    lead: 'Domain',
    accent: 'Knowledge',
    blurb: 'Rare neurological disease, gene therapy and clinical genetics.',
    items: ['Leukodystrophies', 'Canavan disease', 'AAV gene therapy', 'Prenatal genetics', 'Cancer genetics', 'Pedigree analysis'],
  },
  {
    key: 'courses',
    label: 'Coursework',
    lead: 'Independent',
    accent: 'Coursework',
    blurb: 'Self-directed university-level study, both via Coursera with 90%+ (no credit).',
    items: ['Stanford Online — RNA Biology', 'University of Chicago — Neurobiology'],
  },
]
