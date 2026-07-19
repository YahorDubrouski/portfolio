import { githubBlob } from '../github';

const root = (path: string) => githubBlob('arch-decisions', path);

export interface MonorepoCaseStudyLink {
    id: 'arch-decisions-frontend' | 'arch-decisions-backend' | 'arch-decisions-backend-python';
    label: string;
    description: string;
    icon: string;
}

export interface MonorepoScreenshot {
    src: string;
    alt: string;
    caption: string;
}

export const archDecisionsMonorepoCaseStudy = {
    hero: {
        kicker: 'Full-stack product',
        title: 'Architecture Decisions Platform',
        lead: 'Turns project context into Architecture Decision Records — one React SPA with Express and FastAPI twins on the same HTTP contract.',
        runLocal: 'From the repo root: `make docker-up` → UI :5174 · Express :3001 · FastAPI :3002',
        logo: {
            src: '/proof/tech-icons/github.svg',
            alt: 'Architecture Decisions Platform',
        },
        demoHref: 'https://arch-decisions.yahordubrouski.com/',
    },
    techStack: {
        heading: 'Tech stack',
        groups: [
            {
                label: 'Frontend',
                items: ['React 19', 'TypeScript', 'Vite', 'TanStack Query', 'Zod'],
            },
            {
                label: 'Express',
                items: ['Node.js', 'Express 5', 'BullMQ', 'Awilix', 'SQLite'],
            },
            {
                label: 'FastAPI',
                items: ['Python 3.12', 'FastAPI', 'Celery', 'SQLAlchemy', 'PostgreSQL'],
            },
            {
                label: 'Ops & delivery',
                items: ['Docker Compose', 'Redis', 'Cloudflare Workers'],
            },
        ],
    },
    structure: {
        heading: 'Project structure',
        caption: 'Frontend + two API twins + shared docs and compose — details live on each case study.',
        tree: `arch-decisions/
├── frontend/          # React 19 SPA (Vite)
├── backend/           # Express 5 + BullMQ + Zod OpenAPI
├── backend-python/    # FastAPI + Celery + Pydantic
├── docs/              # architecture, practices, reviewer path
├── docker-compose.yml
└── docker-compose.dev.yml`,
        href: 'https://github.com/YahorDubrouski/arch-decisions',
    },
    caseStudies: {
        heading: 'Backend and frontend subprojects',
        caption:
            'This platform is three subprojects — React frontend, Express backend, and FastAPI backend. Open a case study below for that stack.',
        items: [
            {
                id: 'arch-decisions-frontend',
                label: 'Frontend · React',
                description:
                    'Feature folders, gateways, TanStack Query, correct state ownership, Vitest.',
                icon: '/proof/tech-icons/react.svg',
            },
            {
                id: 'arch-decisions-backend',
                label: 'Backend · Express · Node',
                description:
                    'Layered API, Awilix DI, BullMQ jobs, Zod OpenAPI, fail-loud providers.',
                icon: '/proof/tech-icons/express.svg',
            },
            {
                id: 'arch-decisions-backend-python',
                label: 'Backend · FastAPI · Python',
                description:
                    'Same HTTP contract — Celery, SQLAlchemy, Pydantic, Alembic.',
                icon: '/proof/tech-icons/fastapi.svg',
            },
        ] satisfies MonorepoCaseStudyLink[],
    },
    architecture: {
        heading: 'Architecture at a glance',
        bullets: [
            'Browser → React gateways → Express (:3001) or FastAPI (:3002) on one HTTP contract.',
            'Async LLM work off the request path — 202 Accepted + job poll (BullMQ / Celery).',
            'Explicit provider matrix (mock/template/OpenAI) — fail loud on misconfig.',
            'Frontend can run on Cloudflare Workers with local adapters for hire demos without APIs.',
        ],
        diagramSrc: '/projects/arch-decisions/architecture.svg',
        diagramAlt: 'Architecture Decisions — React SPA, API (Express or FastAPI), storage, OpenAI',
        href: root('docs/architecture.md'),
    },
    uiJourney: {
        heading: 'UI journey',
        caption:
            'Browse the story — home → context wizard → recommendations → generated Architecture Decision Record.',
        items: [
            {
                src: '/projects/arch-decisions-frontend/journey-01-home.png',
                alt: 'Home screen — start the project context wizard',
                caption: '1. Home',
            },
            {
                src: '/projects/arch-decisions-frontend/journey-02-context.png',
                alt: 'Context wizard — enter project information step by step',
                caption: '2. Context wizard',
            },
            {
                src: '/projects/arch-decisions-frontend/journey-03-recommendations.png',
                alt: 'Recommendations — trade-offs and generate decision CTA',
                caption: '3. Recommendations',
            },
            {
                src: '/projects/arch-decisions-frontend/journey-04-result.png',
                alt: 'Full Architecture Decision Record document view',
                caption: '4. Generated result',
            },
        ] satisfies MonorepoScreenshot[],
    },
} as const;
