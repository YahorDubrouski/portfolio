import type { CvDocument } from '../types';

export const solutionArchitectProfile: CvDocument = {
    id: 'solution-architect',
    defaultTemplate: 'classic',
    roleTitle: 'Solution Architect',
    name: { first: 'YAHOR', last: 'DUBROUSKI' },
    photoSrc: '/images/yahor-dubrouski-cv.png',
    photoSrcWebp: '/images/yahor-dubrouski-cv.webp',
    contact: [
        { type: 'email', label: 'yahordubrouski@gmail.com', href: 'mailto:yahordubrouski@gmail.com' },
        { type: 'phone', label: '+48 889 708 006', href: 'tel:+48889708006' },
        { type: 'location', label: 'Poland, Warsaw' },
        {
            type: 'linkedin',
            label: 'linkedin.com/in/yahor-dubrouski',
            href: 'https://www.linkedin.com/in/yahor-dubrouski/',
        },
    ],
    skillGroups: [
        {
            label: 'Architecture & Cloud',
            items: ['AWS', 'Terraform', 'Docker', 'Microservices', 'Cloudflare'],
        },
        {
            label: 'Integration & Data',
            items: ['PostgreSQL', 'RabbitMQ', 'Elasticsearch', 'BigQuery'],
        },
        {
            label: 'Delivery & Leadership',
            items: ['CI/CD', 'Zero-downtime migrations', 'Monorepo', 'Technical leadership'],
        },
    ],
    languages: [
        'Russian – Native',
        'English – Upper Intermediate',
        'Polish – Intermediate',
        'German – Intermediate',
    ],
    summary:
        'Solution Architect with 6+ years designing scalable platforms across e-commerce, SaaS, and B2B marketing infrastructure. AWS Certified Solutions Architect who bridges business goals and technical delivery — microservices decomposition, cloud migration, integration architecture, and cost-aware system design. Known for zero-downtime migrations, fault-tolerant integration patterns, and turning complex multi-system landscapes into maintainable, observable platforms.',
    experience: [
        {
            title: 'Solution Architect / Technical Lead',
            companyLine: 'ObjectFirst. Remote from Warsaw, Poland | Aug 2024 - Present',
            project: 'B2B Marketing & Infrastructure Platform',
            description:
                'Enterprise marketing platform for physical backup appliances — lead generation, product documentation, subscription commerce, and multi-language content. Evolved from senior backend ownership to company-wide architecture and technical leadership.',
            responsibilitiesLabel: true,
            bullets: [
                'Architected subscription & billing integration across CRM, web storefront, and partner commerce systems — fault-tolerant services with horizontal scaling under 3× traffic growth.',
                'Designed analytics data pipeline: moved heavy CRM reads off live API limits onto warehouse sync with failover-friendly jobs — daily senior firefighting dropped from ~3 hours to ~20 minutes.',
                'Led phased MongoDB/MySQL → PostgreSQL consolidation — one database instead of three (~3× lower cost), zero downtime on business-critical leads and form data.',
                'Planned and executed zero-downtime domain migration from legacy Server-type to Inventory-type subscription records — no production bugs.',
                'Authored full DigitalOcean → AWS migration plan; applied architectural principles to eliminate redundant microservice logic and prefer native cloud/edge features over custom builds.',
                'Designed lead capture, conversion API, and anti-spam architecture for the marketing platform — edge protection, rate limits, and AI-assisted lead quality filtering.',
                'Separated web, scheduled, and background workloads into independently scaled services — sustained load with no client-facing errors.',
                'Drove end-to-end observability patterns, CI/CD test architecture, and secure secrets management — accelerated release cadence from weekly to daily on critical domains.',
                'Promoted to Technical Lead (Apr 2026); mentor backend team on architecture standards, code review quality, and AI-assisted delivery practices.',
            ],
            tools: 'Laravel, PHP, PostgreSQL, MongoDB, MySQL, BigQuery, Airbyte, Elasticsearch, Docker Swarm, Jenkins, Bitbucket, AWS, Cloudflare, RabbitMQ, Redis, Python, Terraform, Sentry, Grafana.',
        },
        {
            title: 'Solution Architect / Team Lead',
            companyLine: 'Puravita - Online Pharmacy (Switzerland). Switzerland, st. Gallen | Apr 2022 - Dec 2023',
            project: 'National Online Pharmacy (Switzerland)',
            description:
                'National pharmacy e-commerce with Magento 2 core, partner pharmacy network, robotic warehouse fulfillment, and recommendation-driven search — daily operations in German and English.',
            responsibilitiesLabel: true,
            bullets: [
                'Defined fault-tolerant microservice boundaries around checkout, fulfillment, and partner integrations — balancing Magento modularity with standalone services.',
                'Architected Click & Collect: Google Maps UX, partner API availability/pricing comparison, and checkout flows spanning multiple pharmacy backends.',
                'Designed automated order-fulfillment microservice integrated with robotic warehouse partner systems.',
                'Migrated 15 custom modules from multi-repo to monorepo — weekly release preparation cut from ~4 hours to ~20 minutes.',
                'Introduced feature toggles and trunk-based development to de-risk frequent pharmacy-network changes.',
                'Aligned architecture with warehouse, call center, and back-office teams; translated operational constraints into modular Magento extensions.',
            ],
            tools: 'Magento 2, Laravel, PHP, AWS, RabbitMQ, Elasticsearch, Google Maps API, Docker.',
        },
        {
            title: 'Technical Lead',
            companyLine: 'Lindenvalley (E-commerce websites). Belarus, Minsk | Feb 2021 - Apr 2022',
            project: 'E-commerce Solutions (Outsourcing)',
            description:
                'Outsourced Magento programs for international retail clients — raised architecture consistency and delivery standards across concurrent projects.',
            responsibilitiesLabel: true,
            bullets: [
                'Designed Elasticsearch-backed product search and indexing architecture for personalized storefront experiences.',
                'Standardized Magento module architecture, GitFlow, and code review practices across the delivery team.',
                'Hosted internal architecture sessions on SOLID, enterprise patterns, and checkout extensibility for client-specific flows.',
            ],
            tools: 'Magento 2, PHP, Elasticsearch, MySQL, Docker.',
        },
        {
            title: 'Full Stack Developer',
            companyLine: 'Hidden Hint. Poland, Warsaw | Jan 2024 - Aug 2024',
            project: 'E-commerce Platforms for Digital Products',
            description:
                'Concurrent digital-product marketplaces — custom product-type modeling and pricing engines with strong test coverage.',
            responsibilitiesLabel: true,
            bullets: [
                'Designed extensible virtual product-type module with dynamic pricing rules shared across frontend and backend.',
                'Established integration test strategy for pricing and checkout — long-term stability across four parallel platforms.',
                'Proposed lightweight Scrum cadence to improve cross-project delivery in a remote freelance environment.',
            ],
            tools: 'Magento 2, Laravel, PHP, OpenSearch, Docker, PHPUnit.',
        },
        {
            title: 'Backend Developer',
            companyLine: 'iTechArt Group. Belarus, Minsk | Mar 2019 - Mar 2020',
            project: 'SaaS Platforms and Startups',
            description: 'Early-stage SaaS and e-commerce startups — REST APIs, performance tuning, and integration testing foundations.',
            responsibilitiesLabel: false,
            bullets: [
                'Built REST APIs and integration/unit test suites for SaaS backends.',
                'Implemented performance optimizations and React/Redux frontends on client projects.',
            ],
            tools: 'Laravel, PHP, React, MongoDB, PostgreSQL, MySQL, PHPUnit.',
        },
    ],
    education: {
        title: 'Programmer',
        institutionLine: 'College of Business and Law. Belarus, Minsk | Sep 2016 - Jul 2019',
        detail: 'Diploma in Programming',
    },
    certificates: [
        'AWS Certified Solutions Architect - Associate',
        'Terraform Associate',
        'Enterprise Patterns',
        'GOF And Grasp Design Patterns',
        'Adobe Certified Professional Adobe Commerce Developer',
        'QA Automation Diploma',
    ],
    certificatesLink: 'https://github.com/YahorDubrouski/Certificates',
};
