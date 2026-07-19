import { githubBlob } from '../github';

const fe = (path: string) => githubBlob('arch-decisions-frontend', path);
const feLine = (path: string, line: number) => `${fe(path)}#L${line}`;
const feDocs = (path: string) => githubBlob('arch-decisions', `frontend/docs/${path}`);

export interface FrontendProofLink {
    label: string;
    href: string;
    icon: string;
}

export interface FrontendDecisionLink {
    label: string;
    href: string;
}

export interface FrontendDecision {
    title: string;
    summary: string;
    /** Single proof link when the decision has one target. */
    href?: string;
    /** Multiple proof links (e.g. one per state-ownership kind). */
    links?: FrontendDecisionLink[];
}

export interface FrontendScreenshot {
    src: string;
    alt: string;
    caption: string;
}

export const archDecisionsFrontendCaseStudy = {
    hero: {
        kicker: 'React frontend case study',
        title: 'Architecture Decisions · Frontend',
        lead: 'Senior React SPA that generates Architecture Decision Records from project info — feature folders, swappable gateways, and clear state ownership.',
        runLocal: 'From the monorepo root: `make docker-up` → http://localhost:5174',
        logo: {
            src: '/proof/tech-icons/react.svg',
            alt: 'React',
        },
        demoHref: 'https://arch-decisions.yahordubrouski.com/',
    },
    techStack: {
        heading: 'Tech stack',
        groups: [
            {
                label: 'Language & tooling',
                items: ['JavaScript', 'TypeScript', 'Vite'],
            },
            {
                label: 'Framework',
                items: ['React 19'],
            },
            {
                label: 'Libraries',
                items: [
                    'React Router',
                    'TanStack Query',
                    'Zod',
                    'Vitest',
                    'Testing Library',
                    'CSS Modules',
                ],
            },
            {
                label: 'Deployment / Hosting',
                items: ['Docker', 'Cloudflare Workers'],
            },
        ],
    },
    structure: {
        heading: 'Project structure',
        caption: 'Flow: pages → feature hooks → gateways → API or local adapters',
        tree: `frontend/src/
├── app/             # router, providers, Suspense fallbacks
├── pages/           # thin route screens (compose hooks + UI)
├── features/
│   ├── context/
│   │   ├── components/   # wizard steps
│   │   ├── hooks/        # form + evaluate mutation
│   │   └── services/     # session storage
│   ├── recommendations/
│   │   ├── components/
│   │   ├── gateways/     # HTTP | local adapters
│   │   ├── domain/
│   │   └── services/
│   └── architecture-decisions/
│       ├── components/   # grid, skeletons, detail UI
│       ├── gateways/
│       ├── hooks/        # Query + URL filters
│       ├── domain/       # pagination / filter helpers
│       └── services/
├── domain/          # Zod schemas and pure helpers (no React)
├── shared/          # httpClient, dataSource config, generic UI
└── test/            # shared test utilities`,
        href: fe('src/'),
    },
    decisions: {
        heading: 'Architecture decisions',
        items: [
            {
                title: 'Feature folders',
                summary:
                    'One user flow per folder — components, hooks, gateways, domain, and services stay colocated.',
                href: fe('src/features/architecture-decisions/'),
            },
            {
                title: 'Thin pages',
                summary:
                    'Pages compose hooks and presentational UI; lists take props — loading → error → empty → success.',
                href: fe('src/pages/ArchitectureDecisionsPage.tsx'),
            },
            {
                title: 'Multiple data adapters',
                summary:
                    'Strategy + factory patterns to interchange HTTP API with a local mocked implementation.',
                href: fe('src/features/recommendations/gateways/createRecommendationsGateway.ts'),
            },
            {
                title: 'Correct state ownership',
                summary:
                    'Each kind of state has one owner — form, server cache, URL filters, session, or derived values.',
                links: [
                    {
                        label: 'Form (useState)',
                        href: feLine('src/features/context/hooks/useContextForm.ts', 10),
                    },
                    {
                        label: 'Server (TanStack Query)',
                        href: feLine(
                            'src/features/architecture-decisions/hooks/useArchitectureDecisionsQuery.ts',
                            11,
                        ),
                    },
                    {
                        label: 'URL filters',
                        href: feLine(
                            'src/features/architecture-decisions/hooks/useArchitectureDecisionListFilters.ts',
                            50,
                        ),
                    },
                    {
                        label: 'Session + Zod',
                        href: feLine('src/features/context/services/contextStorage.ts', 16),
                    },
                    {
                        label: 'Derived pagination',
                        href: feLine(
                            'src/features/architecture-decisions/domain/listFilters.ts',
                            23,
                        ),
                    },
                ],
            },
            {
                title: 'Zod at the boundary',
                summary: 'Forms, API payloads, and storage reads share one schema story.',
                href: fe('src/domain/contextSchema.ts'),
            },
            {
                title: 'Unit + page tests',
                summary: 'Vitest + Testing Library — behavior-focused suites for pages and features.',
                href: fe('src/pages/__tests__/ArchitectureDecisionsPage.test.tsx'),
            },
            {
                title: 'Accessible UI states',
                summary: 'ErrorState with retry, EmptyState with CTA, skeletons while Query loads.',
                href: fe('src/shared/ui/ErrorState.tsx'),
            },
            {
                title: 'Docker',
                summary: 'Same image and compose stack across local and other environments.',
                href: fe('Dockerfile'),
            },
        ] satisfies FrontendDecision[],
        readMore: {
            label: 'Read more',
            href: feDocs('practices.md'),
        },
    },
    userActionsFlow: {
        heading: 'User actions flow',
        href: fe('src/app/routes.tsx'),
    },
    uiJourney: {
        heading: 'UI journey',
        caption: 'Browse the story — home → context wizard → recommendations → generated Architecture Decision Record.',
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
        ] satisfies FrontendScreenshot[],
    },
    documentsGrid: {
        heading: 'Documents grid',
        caption: 'List view with search/status filters and pagination in the URL.',
        src: '/projects/arch-decisions-frontend/documents-grid.png',
        alt: 'Architecture Decision Records grid with filters and pagination',
        href: fe('src/features/architecture-decisions/hooks/useArchitectureDecisionListFilters.ts'),
    },
    tests: {
        heading: 'Tests',
        summary:
            'Vitest + Testing Library — page and feature suites assert loading, empty, error, and success.',
        bullets: [
            'Arrange / Act / Assert with user events and accessible roles',
            'Gateway and Query behavior covered without raw fetch in UI',
            'Page tests cover loading → error → empty → success branches',
        ],
        links: [
            {
                label: 'Documents list page test',
                href: fe('src/pages/__tests__/ArchitectureDecisionsPage.test.tsx'),
                icon: '/proof/tech-icons/github.svg',
            },
            {
                label: 'Recommendations page test',
                href: fe('src/pages/__tests__/RecommendationsPage.test.tsx'),
                icon: '/proof/tech-icons/github.svg',
            },
            {
                label: 'Context wizard page test',
                href: fe('src/pages/__tests__/ContextBuilderPage.test.tsx'),
                icon: '/proof/tech-icons/github.svg',
            },
        ] satisfies FrontendProofLink[],
    },
    hardening: {
        heading: 'Hardening',
        items: [
            {
                label: 'ErrorState with retry for expected failures',
                href: fe('src/shared/ui/ErrorState.tsx'),
                icon: '/proof/tech-icons/react.svg',
            },
            {
                label: 'No raw fetch in UI — httpClient + gateways',
                href: fe('src/shared/api/httpClient.ts'),
                icon: '/proof/tech-icons/github.svg',
            },
            {
                label: 'Lazy routes with Suspense fallback',
                href: fe('src/app/routes.tsx'),
                icon: '/proof/tech-icons/github.svg',
            },
            {
                label: 'Cloudflare Workers live demo',
                href: 'https://arch-decisions.yahordubrouski.com/',
                icon: '/proof/tech-icons/docker.svg',
            },
        ] satisfies FrontendProofLink[],
    },
} as const;
