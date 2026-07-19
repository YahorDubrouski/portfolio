import { githubBlob } from '../github';

const be = (path: string) => githubBlob('arch-decisions-backend', path);
const docs = (path: string) => githubBlob('arch-decisions', `backend/docs/${path}`);

export interface ExpressProofLink {
    label: string;
    href: string;
    icon: string;
}

export interface ExpressDecision {
    title: string;
    summary: string;
    href: string;
}

export const archDecisionsExpressCaseStudy = {
    hero: {
        kicker: 'Express backend case study',
        title: 'Architecture Decisions · Express',
        lead: 'AI-powered senior Node API for recommendations and Architecture Decision Records — Express 5, multiple data adapters, and async jobs.',
        runLocal: 'From the monorepo root: `make docker-up` → http://localhost:3001/api-docs',
        logo: {
            src: '/proof/tech-icons/express.svg',
            alt: 'Express',
        },
    },
    techStack: {
        heading: 'Tech stack',
        groups: [
            {
                label: 'Language & runtime',
                items: ['TypeScript', 'Node.js'],
            },
            {
                label: 'Framework',
                items: ['Express 5'],
            },
            {
                label: 'Libraries',
                items: [
                    'Awilix',
                    'Zod',
                    'zod-to-openapi',
                    'BullMQ',
                    'Knex',
                    'Winston',
                    'Helmet',
                    'Jest',
                    'Supertest',
                ],
            },
            {
                label: 'Data & queue',
                items: ['SQLite (or memory)', 'Redis', 'BullMQ workers'],
            },
        ],
    },
    structure: {
        heading: 'Project structure',
        caption: 'Flow: routes → controllers → services → integrations',
        tree: `backend/src/
├── app/             # composition root (Awilix DI wiring)
├── routes/          # endpoints definition + OpenAPI documentation
├── controllers/     # controller definitions that delegate business logic to services
├── services/        # application business logic
├── integrations/    # external resource adapters (AI, database, queue)
├── jobs/            # background workers and processes
├── domain/          # pure business types and rules
├── config/          # environment settings by concern
├── openapi/         # shared OpenAPI / Zod schema pieces
├── validators/      # HTTP request validation schemas
├── middleware/      # correlation ID per request and other middleware
├── lib/             # shared helpers (HTTP, errors, logging)
├── migrations/      # Knex database schema migrations
└── test/            # integration test helpers and fixtures`,
        href: be('src/'),
    },
    decisions: {
        heading: 'Architecture decisions',
        items: [
            {
                title: 'Layered system',
                summary: 'Thin controllers parse and return; services own use cases; integrations stay swappable.',
                href: be('src/controllers/recommendations.controller.ts'),
            },
            {
                title: 'Dependency Injection',
                summary: 'Awilix composition root wires controllers, services, and factories in one place.',
                href: be('src/app/create-app-container.ts'),
            },
            {
                title: 'Multiple data adapters',
                summary:
                    'Strategy + factory patterns to interchange OpenAI with a mocked implementation.',
                href: be('src/integrations/openai/recommendation-provider.factory.ts'),
            },
            {
                title: 'Async jobs',
                summary: 'BullMQ + dedicated worker; evaluate/generate return 202 + jobId for polling.',
                href: be('src/integrations/queue/architecture-jobs.queue.ts'),
            },
            {
                title: 'Zod at the boundary + OpenAPI',
                summary: 'One schema story for runtime validation and Swagger UI.',
                href: be('src/routes/recommendations/evaluate.openapi.ts'),
            },
            {
                title: 'Integration + unit tests',
                summary: 'Coverage across adapters and HTTP suites to ensure system stability.',
                href: be('src/routes/__tests__/openapi.integration.test.ts'),
            },
            {
                title: 'Security',
                summary: 'Helmet headers, JSON body size limit, and rate limiting on /api.',
                href: be('src/app.ts'),
            },
            {
                title: 'Docker',
                summary: 'Same image and compose stack across local and other environments.',
                href: be('Dockerfile'),
            },
        ] satisfies ExpressDecision[],
        readMore: {
            label: 'Read more',
            href: docs('practices.md'),
        },
    },
    asyncFlow: {
        heading: 'Async request flow',
        href: be('src/controllers/jobs.controller.ts'),
    },
    swagger: {
        heading: 'OpenAPI / Swagger',
        caption: 'Code-first Zod schemas → Swagger UI at /api-docs',
        src: '/projects/arch-decisions-backend/swagger.png',
        alt: 'Express Swagger UI for Architecture Decisions API',
        href: be('src/routes/swagger.routes.ts'),
    },
    tests: {
        heading: 'Tests',
        summary:
            'Jest unit tests plus Supertest HTTP integration suites — roughly 47 tests covering adapters, controllers, health, and OpenAPI.',
        bullets: [
            'Arrange / Act / Assert (Given/When/Then when non-trivial)',
            'Adapter fail-loud behaviour covered in unit tests',
            'Controller and route integration tests with Supertest',
        ],
        links: [
            {
                label: 'Provider factory tests',
                href: be(
                    'src/integrations/openai/__tests__/recommendation-provider.factory.test.ts',
                ),
                icon: '/proof/tech-icons/github.svg',
            },
            {
                label: 'Evaluate API integration test',
                href: be('src/controllers/recommendations/__tests__/evaluate.integration.test.ts'),
                icon: '/proof/tech-icons/github.svg',
            },
            {
                label: 'OpenAPI integration test',
                href: be('src/routes/__tests__/openapi.integration.test.ts'),
                icon: '/proof/tech-icons/github.svg',
            },
        ] satisfies ExpressProofLink[],
    },
    hardening: {
        heading: 'Hardening',
        items: [
            {
                label: 'Helmet + body size limit + rate limit',
                href: be('src/app.ts'),
                icon: '/proof/tech-icons/express.svg',
            },
            {
                label: 'Correlation ID on request, logs, and errors',
                href: be('src/middleware/correlation-id.middleware.ts'),
                icon: '/proof/tech-icons/github.svg',
            },
            {
                label: 'Central AppError handler',
                href: be('src/middleware/error-handler.middleware.ts'),
                icon: '/proof/tech-icons/github.svg',
            },
            {
                label: 'OpenAI gateway timeouts and backoff',
                href: be('src/integrations/openai/openai-gateway.ts'),
                icon: '/proof/tech-icons/github.svg',
            },
        ] satisfies ExpressProofLink[],
    },
} as const;
