export const profile = {
  name: 'Amaara Subramaniam',
  firstName: 'Amaara',
  school: 'Aditya Birla World Academy (ABWA)',
  city: 'Mumbai',
  graduating: '2027',
  tagline:
    'Emerging researcher in human genetics, gene therapy, and precision medicine, with independent and co-authored publications, research placements at IIT Bombay and other research laboratories, and creator of an integrated leukodystrophy knowledge atlas connecting genetic evidence, disease mechanisms, and therapeutic research.',
  photo: '/photos/portrait.jpg',
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
  /** External site for the work, shown on its detail page */
  link?: { href: string; label: string }
}

const genemap: Work = {
  slug: 'genemap',
  when: 'Jan 2026 – present',
  kind: 'Genomics platform · Research',
  headline: 'GeneMap — an interactive digital atlas of genetic leukodystrophies',
  tone: 'blue',
  stats: [
    { value: '35', label: 'Leukodystrophies covered with literature-based dossiers' },
    { value: '~3,200', label: 'Pages of cited biomedical evidence in one searchable resource' },
  ],
  skills: 'Literature review, biomedical databases, evidence classification, platform design',
  link: { href: 'https://thegenemap.com', label: 'thegenemap.com' },
  title: 'Founder & Lead Researcher, GeneMap',
  org: 'Independent capstone',
  meta: 'Jan 2026 – present',
  mentors: 'Louis (Oxford); Dr. Mayuri Bandekar (IIT Bombay)',
  points: [
    'Conceived and developed an interactive research atlas spanning 35 genetic leukodystrophies, integrating approximately 3,200 pages of cited biomedical evidence into a unified, searchable resource',
    'Synthesized evidence across disease genetics, pathogenic variants, genotype–phenotype relationships, molecular and cellular mechanisms, clinical manifestations, biomarkers, diagnostic approaches and emerging therapeutic strategies',
    'Designed a cross-disease framework for comparing disorders from molecular pathogenesis to therapeutic development, including gene-replacement therapies, clinical trials and investigational treatment pipelines',
    'Linked primary literature, biomedical databases, standardized identifiers, clinical-trial records and source-level evidence classifications to support traceability and distinguish established findings from emerging, investigational or unresolved areas',
    'Developed disease-specific research dossiers and an integrated evidence architecture to help researchers identify shared mechanisms, compare therapeutic approaches, formulate hypotheses and uncover research gaps',
    "Designed the platform's information architecture and user experience around specialist-validated, evidence-linked content",
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
  tone: 'amber',
  stats: [
    { value: 'Pub.', label: 'Co-authored, published in ER Publications' },
    { value: 'CREST', label: 'Awarded the CREST Gold Award' },
  ],
  skills: 'Metabolic testing, GC-MS, Canavan disease biology',
  title: 'Co-author, Urine-Based Diagnosis of Canavan Disease',
  org: 'ER Publications · Mentor: Dr. Usha Dave',
  meta: 'Oct 2025 – Jan 2026',
  points: [
    'Co-authored “A Student Perspective: N-Acetylaspartate (NAA) Detection by Urine GCMS Analysis in a Rare Genetic Brain Disorder – Canavan Disease,” published in ER Publications',
    'Grew out of the genomics internship with Dr. Usha Dave at Labassure Advanced Genomics Institute',
    'Awarded the CREST Gold Award',
  ],
  tags: ['Canavan disease', 'Diagnostics', 'Published'],
}

const cancerGene: Work = {
  slug: 'cancer-gene',
  when: 'IIT Bombay · BARC',
  kind: 'Cancer genetics · Bioinformatics',
  headline: 'PITRM1 — a pan-cancer bioinformatics analysis',
  tone: 'amber',
  stats: [
    { value: '156,010', label: 'Samples from 148,790 patients across 12 pan-cancer studies' },
    { value: 'OJSS', label: 'Accepted for publication in the Oxford Journal of Student Scholarship' },
  ],
  skills: 'Cancer genomics datasets, mutation-distribution analysis, Kaplan–Meier survival analysis, research writing',
  title: 'Independent Researcher, PITRM1 Pan-Cancer Bioinformatics Analysis',
  org: 'IIT Bombay / BARC · Mentor: Dr. Mayuri Bandekar',
  meta: 'Manuscript accepted for publication',
  points: [
    'Conceptualized and conducted an independent investigation into the cancer-associated role of PITRM1, a mitochondrial protease implicated in protein quality control, using publicly available cancer-genomics datasets',
    'Analyzed 156,010 samples from 148,790 patients across 12 pan-cancer studies to characterize PITRM1 genomic alterations, including mutations and copy-number changes, and tumor-versus-normal expression patterns',
    'Conducted mutation-distribution and Kaplan–Meier survival analyses, identifying cancer-specific associations between PITRM1 alterations and poorer overall survival in brain and thyroid cancer cohorts, but no significant association in the overall pan-cancer or lung cancer analyses',
    'Integrated genomic and clinical findings to investigate the potential relationship between mitochondrial proteostasis and tumor biology, highlighting context-dependent associations and avenues for further functional investigation',
    'Authored “Exploring the Cancer-Associated Role of PITRM1: A Pan-Cancer Bioinformatics Analysis,” accepted for publication in the Oxford Journal of Student Scholarship (OJSS)',
  ],
  tags: ['Cancer genomics', 'Survival analysis', 'Accepted'],
}

const singleCell: Work = {
  slug: 'single-cell-atlas',
  when: 'June 15 – July 25',
  kind: 'Computational biology · IIT',
  headline: 'Defining a healthy liver for an MASLD single-cell atlas',
  tone: 'green',
  stats: [
    { value: '~200', label: 'Scientific papers reviewed and curated into a database' },
    { value: 'R', label: 'Full Seurat workflow from QC to cell-type annotation' },
  ],
  skills: 'R, Seurat, PCA, clustering, UMAP, differential expression',
  title: 'Research Intern, Single-Cell Genomics & Computational Biology',
  org: 'Dr. Saket Choudhary, IIT',
  meta: 'June 15 – July 25',
  points: [
    "Served as the laboratory's sole high-school intern",
    'Worked independently through the full Seurat workflow in R: QC, normalization, highly variable gene selection, PCA, clustering, UMAP, differential expression and cell-type annotation',
    'Reviewed approximately 200 scientific papers and built a structured Excel database to support curation of an MASLD (fatty liver) atlas; the assigned task was to define a “healthy” liver and address inter-study heterogeneity in definitions across global laboratories',
    'Attended research seminars on current genomics work',
  ],
  tags: ['R', 'Seurat', 'scRNA-seq'],
}

const geneTherapy: Work = {
  slug: 'gene-therapy',
  when: '6 weeks',
  kind: 'Gene therapy · BARC Hospital',
  headline: 'AAV gene therapy for Canavan disease',
  tone: 'violet',
  stats: [
    { value: 'AAV', label: 'Vectors, capsid engineering and targeted delivery' },
    { value: 'LOR', label: 'Letter of recommendation from Dr. Rahul Checker' },
  ],
  skills: 'Theoretical genetic engineering workflow: PCR, plasmid construction, gel electrophoresis; AAV vector biology',
  title: 'Research Intern, Gene Therapy',
  org: 'BARC Hospital, under Dr. Rahul Checker',
  meta: '6 weeks',
  points: [
    'Theoretical work on the genetic engineering workflow, including PCR, plasmid construction and gel electrophoresis, along with bacterial transformation, transfection, and protein expression and validation',
    'Examined AAV vectors, capsid engineering and oligodendrocyte-targeted delivery in the context of Canavan disease (ASPA/NAA biology) and preclinical and clinical gene-therapy development',
    'Wrote a research report on these topics; received a letter of recommendation from Dr. Checker',
  ],
  tags: ['AAV', 'Gene therapy', 'Canavan'],
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
    title: 'A Student Perspective: N-Acetylaspartate (NAA) Detection by Urine GCMS Analysis in a Rare Genetic Brain Disorder – Canavan Disease',
    venue: 'ER Publications',
    status: 'Published',
    detail: 'Mentor: Dr. Usha Dave · Oct 2025 – Jan 2026 · Awarded CREST Gold Award',
    slug: 'canavan-diagnosis',
  },
  {
    role: 'Author',
    title: 'Exploring the Cancer-Associated Role of PITRM1: A Pan-Cancer Bioinformatics Analysis',
    venue: 'Oxford Journal of Student Scholarship (OJSS)',
    status: 'Accepted',
    detail: 'IIT Bombay / BARC · Mentor: Dr. Mayuri Bandekar',
    slug: 'cancer-gene',
  },
  {
    role: 'Contributor',
    title: 'MASLD atlas project',
    venue: 'IIT',
    status: 'Publication forthcoming',
    detail: 'Mentor: Dr. Saket Choudhary',
    slug: 'single-cell-atlas',
  },
]

export const training: Role[] = [
  {
    title: 'Genomics Intern',
    org: 'Dr. Usha Dave, Labassure Advanced Genomics Institute',
    meta: 'Grade 11',
    points: [
      'Trained in genetic disorder classification, chromatography, GC-MS metabolic testing, pedigree analysis, cancer biology, immunology and sample handling',
      'Completed laboratory biosafety training and one-to-one forensic testing training; visited the ACTREC cancer research laboratory (Kharghar) and biotechnology start-ups in Pune',
      'Wrote a final internship report; this placement led to the Canavan diagnostics research project',
    ],
    tags: ['GC-MS', 'Pedigree analysis', 'Biosafety'],
  },
  {
    title: 'Genetics Observer',
    org: 'Dr. Hema Purandare, MedGenome / Centre for Genetic Health Care',
    meta: 'June – July 23, 2025 · 20 hours',
    points: [
      'Shadowed a pioneer of prenatal genetics across 6+ live counselling sessions on how DNA testing informs decisions for families',
    ],
    tags: ['Prenatal genetics', 'Counseling'],
  },
  {
    title: 'Research Intern, Single-Cell Genomics & Computational Biology',
    org: 'Dr. Saket Choudhary, IIT',
    meta: 'June 15 – July 25',
    points: [
      'Sole high-school intern in the research group; worked through the full Seurat workflow in R, from QC to cell-type annotation',
      'Reviewed approximately 200 scientific papers and built a structured database to support curation of an MASLD (fatty liver) atlas, defining a “healthy” liver across inter-study differences',
    ],
    tags: ['R', 'Seurat', 'scRNA-seq'],
  },
]

export const honors = {
  national: [
    { title: 'CREST Gold Award', year: '2026', note: 'National research award' },
    { title: 'INSEF Regionals', year: 'Grade 11', note: 'Advanced with MannPakad' },
    { title: 'Immerse Education Essay Competition', year: '2026', note: 'Honours List' },
    { title: 'DELE Spanish A2', year: 'Grade 11', note: 'Scored 93%' },
    { title: 'Dr. Homi Bhabha Balvaidyanik Competition', year: '2023–24', note: 'Participant' },
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
    'Academic Excellence, 2024–2026 (subjects listed under Education); General Proficiency, Grades 9–11',
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
      'Brokered a first-of-its-kind NGO partnership bringing animals to interact with and provide comfort to isolated elderly residents',
      "Ran the program to support residents' mental wellbeing",
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
      "Published 20+ articles; started the newsletter's STEM column on current science, student research and ethics in STEM",
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
    points: ['Earned Distinction in Grades 1 and 2; performed solo and with bands for 3+ years, including a 150-person concert'],
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
  meta: 'Grades 9–12 · expected graduation 2027',
  grades: [
    {
      grade: 'Grade 9',
      subjects: ['English', 'Computer Science', 'Economics', 'Spanish', 'Mathematics', 'Global Perspectives', 'Biology', 'Chemistry', 'Physics'],
      awarded: ['English (FLE)', 'Computer Science', 'Biology', 'Spanish'],
    },
    {
      grade: 'Grade 10 (International)',
      subjects: ['English', 'Computer Science', 'Economics', 'Spanish', 'Mathematics', 'Global Perspectives', 'Biology', 'Chemistry', 'Physics'],
      awarded: ['Mathematics', 'Spanish', 'Computer Science', 'Economics', 'Biology', 'Physics', 'Chemistry', 'Global Perspectives'],
    },
    {
      grade: 'Grade 11',
      subjects: ['English', 'Biology', 'Chemistry', 'Physics', 'Mathematics'],
      awarded: ['English General Paper (EGP)', 'Biology', 'Physics', 'Mathematics'],
    },
  ],
  note: 'Academic Excellence awards, 2024–2026; General Proficiency, Grades 9–11',
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
    blurb: 'Hands-on bench training in metabolic diagnostics and laboratory practice.',
    items: ['GC-MS metabolic testing', 'Chromatography', 'Sample preparation', 'Laboratory biosafety'],
  },
  {
    key: 'domain',
    label: 'Domain',
    lead: 'Domain',
    accent: 'Knowledge',
    blurb: 'Rare neurological disease, gene therapy and clinical genetics.',
    items: [
      'Leukodystrophies',
      'Canavan disease',
      'AAV gene therapy',
      'Genetic engineering workflow (theory): PCR, plasmid construction, gel electrophoresis',
      'Prenatal genetics',
      'Cancer genetics',
      'Pedigree analysis',
      'Single-cell RNA sequencing',
    ],
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
