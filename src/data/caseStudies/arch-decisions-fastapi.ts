import { githubBlob } from '../github';

const py = (path: string) => githubBlob('arch-decisions-backend-python', path);
const docs = (path: string) => githubBlob('arch-decisions', `backend-python/docs/${path}`);

export interface FastapiProofLink {
    label: string;
    href: string;
    icon: string;
}

export interface FastapiDecision {
    title: string;
    summary: string;
    href: string;
}

export const archDecisionsFastapiCaseStudy = {
    hero: {
        kicker: 'FastAPI backend case study',
        title: 'Architecture Decisions · FastAPI',
        lead: 'AI-powered senior Python API for recommendations and Architecture Decision Records — FastAPI, multiple data adapters, and async jobs.',
        runLocal: 'From the monorepo root: `make docker-up` → http://localhost:3002/docs',
        logo: {
            src: '/proof/tech-icons/fastapi.svg',
            alt: 'FastAPI',
        },
    },
    techStack: {
        heading: 'Tech stack',
        groups: [
            {
                label: 'Language & runtime',
                items: ['Python 3.12'],
            },
            {
                label: 'Framework',
                items: ['FastAPI'],
            },
            {
                label: 'Libraries',
                items: [
                    'Pydantic v2',
                    'SQLAlchemy 2',
                    'Alembic',
                    'Celery',
                    'structlog',
                    'slowapi',
                    'httpx',
                    'pytest',
                    'Ruff',
                ],
            },
            {
                label: 'Data & queue',
                items: ['PostgreSQL (or memory)', 'Redis', 'Celery workers'],
            },
        ],
    },
    structure: {
        heading: 'Project structure',
        caption: 'Flow: api/routes → services → infrastructure',
        tree: `backend-python/src/arch_decisions/
├── api/             # routes, schemas, middleware, Depends
├── services/        # application business logic
├── infrastructure/  # external adapters (AI, DB, queue, storage)
├── workers/         # Celery tasks and processors
├── domain/          # pure business types and rules
├── core/            # config, logging, errors
├── container.py     # composition root (DI wiring)
├── celery_app.py    # Celery app + Redis broker
└── main.py          # FastAPI app factory
tests/
├── api/             # HTTP integration tests (TestClient)
└── unit/            # unit tests for adapters and services`,
        href: py('src/arch_decisions/'),
    },
    decisions: {
        heading: 'Architecture decisions',
        items: [
            {
                title: 'Layered system',
                summary: 'Thin routes parse and return; services own use cases; infrastructure stays swappable.',
                href: py('src/arch_decisions/api/routes/recommendations.py'),
            },
            {
                title: 'Dependency Injection',
                summary: 'Composition root plus FastAPI Depends wires services and factories in one place.',
                href: py('src/arch_decisions/container.py'),
            },
            {
                title: 'Multiple data adapters',
                summary:
                    'Strategy + factory patterns to interchange OpenAI with a mocked implementation.',
                href: py(
                    'src/arch_decisions/infrastructure/openai/recommendation_provider_factory.py',
                ),
            },
            {
                title: 'Async jobs',
                summary: 'Celery + dedicated worker; evaluate/generate return 202 + jobId for polling.',
                href: py('src/arch_decisions/workers/generate_architecture_decision_task.py'),
            },
            {
                title: 'Pydantic at the boundary + OpenAPI',
                summary: 'One schema story for runtime validation and Swagger UI at /docs.',
                href: py('src/arch_decisions/api/routes/recommendations_evaluate_docs.py'),
            },
            {
                title: 'Integration + unit tests',
                summary: 'Coverage across adapters and HTTP suites to ensure system stability.',
                href: py('tests/api/openapi/test_openapi.py'),
            },
            {
                title: 'Security',
                summary: 'Security headers, CORS, and rate limiting on /api via slowapi.',
                href: py('src/arch_decisions/main.py'),
            },
            {
                title: 'Docker',
                summary: 'Same image and compose stack across local and other environments.',
                href: py('Dockerfile'),
            },
        ] satisfies FastapiDecision[],
        readMore: {
            label: 'Read more',
            href: docs('practices.md'),
        },
    },
    asyncFlow: {
        heading: 'Async request flow',
        href: py('src/arch_decisions/api/routes/jobs.py'),
    },
    swagger: {
        heading: 'OpenAPI / Swagger',
        caption: 'Code-first Pydantic schemas → Swagger UI at /docs',
        src: '/projects/arch-decisions-backend-python/swagger.png',
        alt: 'FastAPI Swagger UI for Architecture Decisions API',
        href: py('src/arch_decisions/main.py'),
    },
    tests: {
        heading: 'Tests',
        summary:
            'pytest unit tests plus FastAPI TestClient HTTP suites — roughly 26 tests covering adapters, routes, health, and OpenAPI.',
        bullets: [
            'Arrange / Act / Assert (Given/When/Then when non-trivial)',
            'Adapter fail-loud behaviour covered in unit tests',
            'Route integration tests with TestClient',
        ],
        links: [
            {
                label: 'OpenAI gateway unit tests',
                href: py('tests/unit/openai/test_openai_gateway.py'),
                icon: '/proof/tech-icons/github.svg',
            },
            {
                label: 'Evaluate API integration test',
                href: py('tests/api/recommendations/test_evaluate.py'),
                icon: '/proof/tech-icons/github.svg',
            },
            {
                label: 'OpenAPI integration test',
                href: py('tests/api/openapi/test_openapi.py'),
                icon: '/proof/tech-icons/github.svg',
            },
        ] satisfies FastapiProofLink[],
    },
    hardening: {
        heading: 'Hardening',
        items: [
            {
                label: 'Security headers + CORS + rate limit',
                href: py('src/arch_decisions/main.py'),
                icon: '/proof/tech-icons/fastapi.svg',
            },
            {
                label: 'Correlation ID on request, logs, and errors',
                href: py('src/arch_decisions/api/middleware/correlation_id.py'),
                icon: '/proof/tech-icons/github.svg',
            },
            {
                label: 'Central AppError handlers',
                href: py('src/arch_decisions/api/middleware/error_handlers.py'),
                icon: '/proof/tech-icons/github.svg',
            },
            {
                label: 'OpenAI gateway timeouts and backoff',
                href: py('src/arch_decisions/infrastructure/openai/openai_gateway.py'),
                icon: '/proof/tech-icons/github.svg',
            },
        ] satisfies FastapiProofLink[],
    },
} as const;
