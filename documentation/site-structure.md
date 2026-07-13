# Portfolio Site Structure & Deliverables

## Goal

- Build one professional portfolio site that can support different audiences without showing every skill to every visitor.
- Use clean paths for audience and role entry points.
- Use URL params only for filters inside list pages, not for primary positioning.
- Keep the home page short and focused.
- Use the project cache as the main data source for projects, skills, competencies, certificates, and proof links.

## Target Audiences

- Upwork clients looking for a specific freelance skill or delivery proof.
- Direct clients who came by recommendation and need trust, clarity, and contact options.
- Employers and recruiters looking for Solution Architect, Backend, Frontend, Full Stack, DevOps, AI Automation, Scrum Master, or Tech Lead fit.

## Positioning

- Primary brand line: **Solution Architect**.
- Secondary supported positions:
  - Backend Engineer
  - Frontend Engineer
  - Full Stack Engineer
  - DevOps / Cloud Engineer
  - AI Automation Engineer
  - Scrum Master
  - Tech Lead / Team Lead
- Important rule: do not show all roles equally on every page. Each audience/role page should show only relevant proof.

## Routing Strategy

- Use clean paths for audience/role pages.
- Use query params only for filters, for example `/projects?stack=docker`.

## Sitemap

### Core Routes

- `/` — short default home page.
- `/careers` — employer/recruiter entry page, defaulting to Solution Architect positioning.
- `/hire/backend` — client/freelance backend page.
- `/hire/frontend` — client/freelance frontend page.
- `/hire/full-stack` — client/freelance full stack page.
- `/hire/devops` — client/freelance DevOps/cloud page.
- `/hire/ai-automation` — client/freelance AI automation page.
- `/work-with-me` — direct referral page, simple and personal.
- `/about` — professional story, working style, languages, contact links.
- `/experience` — job history, responsibilities, projects, challenges, outcomes.
- `/projects` — project cards with filters.
- `/projects/{slug}` — project case study pages for larger projects.
- `/capabilities` — skill/competency to proof matrix.
- `/certificates` — neutral full certificate gallery.
- `/reviews` — Upwork, LinkedIn, and direct feedback.
- `/architecture` — architecture, ADRs, trade-offs, system design proof.
- `/automation-ai` — n8n, MCP, AI agents, OpenAI/Hume/automation proof.

### Optional Route

- `/contact` — optional; only needed if a standalone contact URL becomes useful. Otherwise contact links can live in header/footer.

## Navigation Rules

- Header should include the most universal links:
  - Home
  - Projects
  - Experience
  - Capabilities
  - About
  - Contact links
- Footer should include:
  - LinkedIn
  - Gmail
  - Telegram
  - GitHub
  - CV links
- Do not show a visible audience switcher.
- The visitor should receive the correct entry URL directly.

## Home Page

### Purpose

- Short proof-first overview.
- Not a full resume.
- Not a skills matrix.

### Blocks

- Hero:
  - Name
  - Primary line: Solution Architect
  - Short secondary line mentioning backend, DevOps, full stack, and AI automation only if it does not dilute the page.
- Proof strip:
  - Certifications
  - Strongest technologies
  - Years/roles if accurate data is available.
- Featured projects:
  - 3 to 4 strongest cards.
  - Filter by default positioning.
- Reviews carousel:
  - 2 to 3 strongest reviews.
- Contact links:
  - LinkedIn
  - Gmail
  - Telegram
- CV links:
  - Attach 2 current CVs.
  - Allow more role-specific CVs later.

## Audience Pages

### `/careers`

- Target: employers and recruiters.
- Main positioning: Solution Architect.
- Include:
  - Architecture proof.
  - Work experience preview.
  - Capability proof matrix preview.
  - Role-specific CV download.
  - Relevant certificates only.
  - Strongest projects and case studies.
- Avoid:
  - Freelance-heavy wording.
  - Showing unrelated certificates inline.

### `/hire/{role}`

- Target: Upwork and freelance clients.
- One role per page.
- Supported roles:
  - backend
  - frontend
  - full-stack
  - devops
  - ai-automation
- Include:
  - Client-focused headline.
  - Relevant project cards.
  - Relevant reviews.
  - Relevant certificates inline.
  - Contact links.
- Avoid:
  - Showing all unrelated roles.
  - Linking to full certificate gallery from narrow role pages.

### `/work-with-me`

- Target: direct clients and referrals.
- Tone: simpler, more personal, less corporate.
- Include:
  - Who I help.
  - What I can do.
  - How I work.
  - 2 to 3 reviews.
  - Contact links.

## Projects

### `/projects`

- Rename from Portfolio because the domain/site itself is the portfolio.
- Show filtered project cards.
- Filters:
  - Role
  - Technology
  - Competency
  - Complexity
  - Audience
- Each card should include:
  - Name
  - Short summary
  - Main technologies
  - Competencies
  - Best practices
  - GitHub link if available
  - `See more` link if a case study exists.

### `/projects/{slug}`

- Use only for larger or flagship projects.
- Smaller projects stay as cards only.
- Case study structure:
  - Problem
  - Context
  - Goals
  - Architecture
  - Technologies
  - Design patterns
  - Best practices
  - Trade-offs
  - Screenshots/diagrams if available
  - Outcome
  - Links

## Capabilities Page

### Purpose

- Recruiter/client proof map.
- Example: if someone needs Docker, show where Docker was used.

### Structure

- Skill/competency list grouped by category:
  - Backend
  - Frontend
  - DevOps / Cloud
  - Architecture
  - AI Automation
  - Leadership / Scrum
- Each capability row should show:
  - Capability name
  - Short explanation
  - Related projects
  - Related work experience
  - Relevant certificates

### Examples

- Docker:
  - AIDesk Mini
  - CI Showcase
  - Architecture Decisions
- CI/CD:
  - CI Showcase
  - Terraform CI/CD
  - AIDesk Mini
- Architecture / ADR:
  - Architecture Decisions Platform
- n8n:
  - AI Planner
  - AI Diary

## Certificates

### Rules

- Full gallery should exist as a neutral page.
- Narrow role pages should show only relevant certificates inline.
- Avoid sending specialist visitors to a page that exposes all unrelated certificates.

### Categories

- DevOps / Cloud
- Frontend
- Backend
- Architecture / Design Patterns
- QA
- AI / Automation
- Version Control
- Languages

## Reviews

### Sources

- Upwork
- LinkedIn
- Direct clients

### Placement

- Home: short carousel.
- Role pages: only relevant reviews.
- `/reviews`: full list.

### Review Fields

- Source
- Client type
- Related role/skill
- Quote
- Optional rating
- Optional project link

## Experience

### Content Status

- User has some work experience content, but it may be incomplete or outdated.
- Content will be provided later when implementing this page/component.

### Job Entry Structure

- Company
- Role
- Dates
- Employment/contract type
- Domain/context
- Team size if known
- Responsibilities
- Projects
- Technologies
- Challenges
- Outcomes
- Leadership/Scrum responsibilities if relevant
- Related capabilities

## About

### Blocks

- Short professional story.
- Working style.
- What kind of work is interesting.
- Languages:
  - Russian
  - Polish
  - German
  - English
- Details should be read from CV when final content is prepared.
- Contact links:
  - LinkedIn
  - Gmail
  - Telegram

## Architecture Page

### Purpose

- Support Solution Architect positioning.

### Blocks

- Architecture Decisions Platform highlight.
- ADR examples.
- Trade-off examples.
- Design patterns and best practices.
- Certificates related to architecture and design patterns.
- Links to relevant projects/case studies.

## Automation / AI Page

### Purpose

- Support AI Automation Engineer and modern AI workflow positioning.

### Blocks

- n8n automations:
  - AI Planner
  - AI Diary
- MCP / Cursor / Atlassian example.
- Voice/emotion AI demo if relevant.
- AI-related certificates.
- Contact CTA links.

## CV Strategy

- Attach two current CVs:
  - Full Stack Developer CV
  - Senior Backend & DevOps CV
- Prepare more role-specific CVs later if useful:
  - Solution Architect
  - DevOps / Cloud
  - Backend
  - AI Automation
- Role pages should link to the most relevant CV, not all CVs.

## Components

- `Hero`
- `ProofStrip`
- `RoleEntryPage`
- `ProjectCard`
- `ProjectFilters`
- `CaseStudyPage`
- `CapabilityMatrix`
- `CapabilityProofRow`
- `ExperienceTimeline`
- `ExperienceDetail`
- `CertificateGrid`
- `CertificateSubset`
- `ReviewCarousel`
- `ReviewCard`
- `LanguageList`
- `ContactLinks`
- `CVDownload`
- `SectionHeader`
- `CTAButton`

## Data Sources

- **AI agent cache (Cursor only):** `ai-agents/database/projects.cache.json` — enrichment workspace, not imported by the site build.
- **Public site projects:** `src/data/projects.json` — curated copy; refresh with `python3 ai-agents/scripts/export_site_projects.py` when updating project pages.
  - Projects, technologies, competencies, design patterns, best practices, trade-offs, related projects
- CV PDFs from file storage.
- Certificates repository.
- Reviews from Upwork, LinkedIn, and direct clients.
- Work experience content to be provided later.

## MVP Scope

### Include

- Home
- `/careers`
- `/work-with-me`
- `/hire/backend`
- `/hire/devops`
- `/hire/ai-automation`
- `/projects`
- Case study route support for flagship projects
- `/capabilities`
- `/certificates`
- `/reviews`
- `/about`
- `/architecture`
- `/automation-ai`
- Contact links in header/footer

### Exclude for now

- YouTube / Content page
- FAQ
- Contact form
- Blog
- Pricing page

## Phase 2

- More role pages:
  - `/hire/frontend`
  - `/hire/full-stack`
- More case studies.
- More role-specific CVs.
- Better review filtering.
- Optional contact page if needed.
- Optional YouTube/content page.

## Open Questions

- Which projects should become full case studies first?
- Which current CV should be attached to each role page?
- What exact language levels should be shown after reviewing CV?
- Which reviews are strongest for each audience?
- What work experience details should be added per job?

