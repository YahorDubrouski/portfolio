import { siteOutcomes } from './outcomes';

export interface ExperienceProject {
    name: string;
    description: string;
}

export interface ExperienceRoleHistory {
    title: string;
    period: string;
}

export interface ExperienceHighlight {
    value: string;
    label: string;
}

export interface ExperienceEntry {
    id: string;
    company: string;
    role: string;
    period: string;
    location: string;
    workMode: string;
    domain: string;
    summary: string;
    roleHistory?: ExperienceRoleHistory[];
    responsibilities: string[];
    projects: ExperienceProject[];
    highlights?: ExperienceHighlight[];
    leadership?: string[];
    technologies: string[];
    current?: boolean;
}

function outcomeHighlights(ids: string[]): ExperienceHighlight[] {
    return ids
        .map((id) => siteOutcomes.find((outcome) => outcome.id === id))
        .filter((outcome): outcome is NonNullable<typeof outcome> => Boolean(outcome))
        .map((outcome) => ({ value: outcome.value, label: outcome.label }));
}

/** Public work history — anonymized where required by site publishing rules. */
export const experienceEntries: ExperienceEntry[] = [
    {
        id: 'exp-objectfirst',
        company: 'B2B data-protection company',
        role: 'Technical Lead',
        period: 'Aug 2024 – Present',
        location: 'Warsaw, Poland',
        workMode: 'Remote',
        domain: 'Marketing & infrastructure platform for enterprise backup appliances',
        current: true,
        summary:
            'Evolved from Senior Backend Developer / DevOps to Technical Lead. Own architecture and delivery across microservices, CRM integrations, cloud migration, CI/CD, and large-scale data migrations on a B2B marketing and product platform.',
        roleHistory: [
            {
                title: 'Senior Backend Developer / DevOps',
                period: 'Aug 2024 – Apr 2026',
            },
            {
                title: 'Technical Lead',
                period: 'Apr 2026 – Present',
            },
        ],
        responsibilities: [
            'Led API and microservice development — subscription & billing integration across CRM, web storefront, and partner commerce systems.',
            'Designed analytics data pipeline: moved heavy CRM reads off live API limits onto warehouse sync with failover-friendly jobs.',
            'Delivered phased MongoDB/MySQL → PostgreSQL consolidation and zero-downtime domain entity migrations — business-critical data cut over with no downtime or data loss.',
            'Built AI tools for multi-language content automation, spam/bot detection, and email validation.',
            'Authored full DigitalOcean → AWS migration plan; owned Docker Swarm, Jenkins, Bitbucket CI/CD, and Cloudflare delivery.',
            'Designed lead capture, conversion API, and anti-spam architecture for the marketing platform.',
            'Sped up overall feature delivery — each feature deploys to production as soon as it is ready, with CI/CD automation and no waiting on release batches.',
            'Mentor backend team on architecture standards, code review quality, and AI-assisted delivery practices.',
        ],
        projects: [
            {
                name: 'B2B marketing & product documentation platform',
                description:
                    'Lead generation, product documentation, multi-language content, and careers — targeting technical and business buyers.',
            },
            {
                name: 'Subscription & billing API integration platform',
                description:
                    'Fault-tolerant subscription logic integrated across CRM, web storefront, and partner commerce systems.',
            },
            {
                name: 'AI multi-language content automation',
                description:
                    'Parallel AI translation pipeline for blogs, events, and catalog entities across six languages.',
            },
            {
                name: 'Analytics data pipeline migration',
                description:
                    'Moved API and subscription workloads to a warehouse layer to reduce CRM API limits and operational cost.',
            },
            {
                name: 'Lead generation forms & conversion API integrations',
                description:
                    'Lead capture, conversion tracking, and anti-spam — delivered with marketing and engineering teams.',
            },
        ],
        highlights: outcomeHighlights([
            'outcome-lead-gen-platform-2026',
            'outcome-subscriber-reliability-scaling-2027',
            'outcome-mongodb-postgres-migration-30pct-2025',
            'outcome-bigquery-api-v2-cost-reduction-2025',
            'outcome-sprint-throughput-30-40-2025',
        ]),
        leadership: [
            'Promoted to Technical Lead (Apr 2026)',
            'Backend team leadership and hiring',
            'DevOps and infrastructure ownership',
        ],
        technologies: [
            'Laravel',
            'PHP',
            'PostgreSQL',
            'MongoDB',
            'MySQL',
            'BigQuery',
            'Airbyte',
            'Docker Swarm',
            'Jenkins',
            'AWS',
            'Cloudflare',
            'Elasticsearch',
            'Python',
            'n8n',
            'Sentry',
        ],
    },
    {
        id: 'exp-hidden-hint-2024',
        company: 'Hidden Hint',
        role: 'Full Stack Developer',
        period: 'Jan 2024 – Aug 2024',
        location: 'Warsaw, Poland',
        workMode: 'Remote · Part-time',
        domain: 'E-commerce — digital products (Photoshop scripts, online courses)',
        summary:
            'Full stack delivery across four concurrent e-commerce platforms for digital goods — custom product-type modeling, dynamic pricing engines, and strong test coverage.',
        responsibilities: [
            'Delivered backend APIs and interactive frontend across multiple concurrent Magento and Laravel projects.',
            'Built extensible virtual product-type module with dynamic pricing rules shared across frontend and backend.',
            'Achieved high integration test coverage for pricing and checkout on critical business flows.',
            'Handled QA automation and DevOps tasks across parallel client projects.',
            'Introduced lightweight Scrum cadence in a remote freelance-style environment.',
        ],
        projects: [
            {
                name: 'Hidden Hint e-commerce platforms',
                description:
                    'Marketplaces for Photoshop scripts and online course sales with seamless digital purchase flows.',
            },
        ],
        technologies: [
            'Magento 2',
            'Laravel',
            'PHP',
            'OpenSearch',
            'JavaScript',
            'Alpine.js',
            'Tailwind CSS',
            'Docker',
            'PHPUnit',
        ],
    },
    {
        id: 'exp-puravita-2022',
        company: 'Puravita',
        role: 'Full Stack Developer / Team Lead / Scrum Master',
        period: 'Apr 2022 – Dec 2023',
        location: 'St. Gallen, Switzerland',
        workMode: 'Hybrid',
        domain: 'Online pharmacy e-commerce',
        summary:
            'Magento 2 pharmacy platform with microservices, Click & Collect, robotic warehouse fulfillment, and daily collaboration in German and English across an international team.',
        responsibilities: [
            'Held Developer, Team Lead, and Scrum Master roles across the project lifecycle.',
            'Architected Click & Collect with Google Maps UX and partner pharmacy API integrations.',
            'Built automated order-fulfillment microservice integrated with robotic warehouse partner systems.',
            'Designed fault-tolerant microservice boundaries around checkout, fulfillment, and partner integrations.',
            'Migrated 15 custom modules from multi-repo to monorepo — cut weekly release preparation dramatically.',
            'Introduced feature toggles, trunk-based development, and page-speed optimizations.',
            'Aligned development with warehouse, call center, and back-office operations.',
        ],
        projects: [
            {
                name: 'Puravita online pharmacy',
                description:
                    'Pharmaceutical and everyday products across Switzerland — delivery and Click & Collect via partner pharmacies.',
            },
        ],
        highlights: outcomeHighlights(['outcome-puravita-monorepo-migration']),
        leadership: ['Team Lead', 'Scrum Master', 'GitFlow and QA standards'],
        technologies: [
            'Magento 2',
            'Laravel',
            'PHP',
            'AWS',
            'RabbitMQ',
            'Elasticsearch',
            'Google Maps API',
            'Boxalino',
            'Docker',
        ],
    },
    {
        id: 'exp-lindenvalley-2021',
        company: 'Lindenvalley',
        role: 'Magento Developer / Team Lead',
        period: 'Feb 2021 – Apr 2022',
        location: 'Minsk, Belarus',
        workMode: 'Remote',
        domain: 'E-commerce outsourcing',
        summary:
            'Magento-based client projects for international retail — raised architecture consistency, search quality, and delivery standards across concurrent programs.',
        responsibilities: [
            'Led custom Magento modules including AI-powered product search and checkout extensions.',
            'Integrated Elasticsearch for advanced product indexing and personalized search.',
            'Hosted internal architecture sessions on SOLID, enterprise patterns, and Magento module design.',
            'Standardized Jira workflows, Git branching models, and formal code review practices.',
            'Onboarded Notion as the team documentation hub.',
        ],
        leadership: ['Team Lead', 'Tech meetups host'],
        projects: [],
        technologies: ['Magento 2', 'PHP', 'Elasticsearch', 'MySQL', 'JavaScript', 'Knockout.js', 'Alpine.js', 'Docker'],
    },
    {
        id: 'exp-belvg-2020',
        company: 'BelVG',
        role: 'Magento Full Stack Developer',
        period: 'Jun 2020 – Feb 2021',
        location: 'Minsk, Belarus',
        workMode: 'On-site',
        domain: 'E-commerce — cosmetics retail',
        summary:
            'Maintained and extended Magento e-commerce platforms — custom checkout flows, payment gateway integrations, and platform migration support.',
        responsibilities: [
            'Built API integrations and payment gateway integrations.',
            'Implemented custom checkout flows for client storefronts.',
            'Participated in Magento migration efforts.',
        ],
        projects: [],
        technologies: ['Magento 2', 'PHP', 'JavaScript', 'jQuery', 'Knockout.js', 'MySQL', 'SASS'],
    },
    {
        id: 'exp-itechart-2019',
        company: 'iTechArt Group',
        role: 'Laravel / React Developer',
        period: 'Mar 2019 – Mar 2020',
        location: 'Minsk, Belarus',
        workMode: 'On-site',
        domain: 'SaaS startups and enterprise applications',
        summary:
            'Full-stack delivery on early-stage SaaS products and secure enterprise applications — Laravel backends, React/Vue frontends, and a strong code review culture.',
        responsibilities: [
            'Developed backend logic and REST APIs for early-stage SaaS startups.',
            'Wrote integration and unit tests; implemented performance optimizations.',
            'Built UI with React, Redux, Vue.js, and TypeScript on client projects.',
            'Contributed to secure enterprise projects with encrypted databases in ~10-person teams.',
        ],
        projects: [
            {
                name: 'Cleaning service platform',
                description: 'Laravel backend with PHPUnit; Vue.js and TypeScript frontend with integration test focus.',
            },
            {
                name: 'Secure enterprise application',
                description: 'Full-stack role on an encrypted-database enterprise project in a ~10-person team.',
            },
            {
                name: 'Movies online platform',
                description: 'Laravel backend with external APIs; React and TypeScript frontend.',
            },
        ],
        technologies: [
            'Laravel',
            'PHP',
            'React',
            'Vue.js',
            'TypeScript',
            'MongoDB',
            'PostgreSQL',
            'MySQL',
            'PHPUnit',
        ],
    },
];

export function getFeaturedExperience(limit = 1): ExperienceEntry[] {
    return experienceEntries.slice(0, limit);
}
