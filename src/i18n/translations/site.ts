import type { Locale } from '../locales';
import type { RoleLandingCopy } from '../../data/roleLanding/types';

export type HireRole = 'backend' | 'full-stack' | 'devops' | 'ai-automation';

export interface SiteTranslations {
    meta: {
        siteName: string;
        defaultTitle: string;
        homePageTitle: string;
        defaultDescription: string;
    };
    nav: {
        home: string;
        projects: string;
        experience: string;
        capabilities: string;
        about: string;
        workWithMe: string;
        certificates: string;
        reviews: string;
        outcomes: string;
    };
    ui: {
        seeMore: string;
        seeLess: string;
        viewProject: string;
        viewOnGitHub: string;
        viewPortfolioSite: string;
        downloadCv: string;
        contactMe: string;
        allProjects: string;
        allReviews: string;
        allOutcomes: string;
        allCertificates: string;
        featuredProjects: string;
        proofStrip: string;
        reviewsTitle: string;
        comingSoon: string;
        filterAll: string;
        relatedProjects: string;
        competencies: string;
        designPatterns: string;
        bestPractices: string;
        tradeOffs: string;
        architecture: string;
        technologies: string;
        features: string;
        problemsSolved: string;
        useCases: string;
        complexity: string;
        backToProjects: string;
        projectMedia: string;
    };
    home: {
        heroIdentityLine: string;
        heroHeadline: string;
        proofItems: string[];
        outcomesTitle: string;
        outcomesSubtitle: string;
        reviewsSubtitle: string;
        projectsSubtitle: string;
        integrationsTitle: string;
        integrationsSubtitle: string;
        integrationsLinkLabel: string;
        integrationsMoreTemplate: string;
        integrationsLessLabel: string;
        integrationCategories: Record<
            | 'crm-marketing-analytics'
            | 'commerce-billing-subscriptions'
            | 'infrastructure-devops'
            | 'data-stores'
            | 'observability'
            | 'collaboration'
            | 'ecommerce-maps'
            | 'ai-automation',
            string
        >;
        heroCtaTelegram: string;
        heroCtaProjects: string;
        heroCtaWorkWithMe: string;
        principlesTitle: string;
        principlesSubtitle: string;
        principlesHome: { title: string; body: string }[];
        principles: string[];
        closingTitle: string;
        closingBody: string;
    };
    workWithMe: {
        title: string;
        subtitle: string;
        whoIHelp: string;
        whatIDo: string;
        howIWork: string;
    };
    about: {
        title: string;
        story: string;
        workingStyle: string;
        languagesTitle: string;
        languages: string[];
    };
    experience: {
        title: string;
        subtitle: string;
        intro: string;
    };
    projects: {
        title: string;
        subtitle: string;
        filterByTechnology: string;
        noProjectsForTechnology: string;
        filterGroups: {
            languages: string;
            frameworks: string;
            cloud: string;
            tools: string;
        };
        sections: {
            flagship: string;
            awsPatterns: string;
            iacCiCd: string;
            devopsIndex: string;
            aiAutomation: string;
            other: string;
        };
    };
    capabilities: {
        title: string;
        subtitle: string;
        filterBySkill: string;
        filterHint: string;
        filterHintMore: string;
        proofsHeading: string;
        noMatch: string;
        moreSkills: string;
        moreSkillsLink: string;
    };
    integrationsPage: {
        title: string;
        subtitle: string;
        intro: string;
    };
    certificates: {
        title: string;
        subtitle: string;
    };
    reviews: {
        title: string;
        subtitle: string;
    };
    outcomes: {
        title: string;
        subtitle: string;
        intro: string;
        allTitle: string;
        sections: {
            revenue: string;
            reliability: string;
            costReduction: string;
            delivery: string;
            riskPrevention: string;
            enablement: string;
        };
    };
    hire: Record<
        HireRole,
        {
            title: string;
            subtitle: string;
            intro: string;
            cvLabel: string;
            landing?: RoleLandingCopy;
        }
    >;
    footer: {
        whoItsFor: string;
        proof: string;
        rights: string;
        builtWith: string;
    };
}

const en: SiteTranslations = {
    meta: {
        siteName: 'Yahor Dubrouski',
        defaultTitle: 'Yahor Dubrouski — Full Stack & DevOps',
        homePageTitle: 'Yahor Dubrouski — Full Stack & DevOps',
        defaultDescription:
            'Technical Lead and integration specialist — Laravel, AWS, Salesforce, and CI/CD delivery with measurable outcomes. AWS & Terraform certified.',
    },
    nav: {
        home: 'Home',
        projects: 'Projects',
        experience: 'Experience',
        capabilities: 'Skills proof',
        about: 'About',
        workWithMe: 'Work with me',
        certificates: 'Certificates',
        reviews: 'Reviews',
        outcomes: 'Outcomes',
    },
    ui: {
        seeMore: 'See more',
        seeLess: 'See less',
        viewProject: 'View project',
        viewOnGitHub: 'View on GitHub',
        viewPortfolioSite: 'View portfolio site',
        downloadCv: 'Download CV',
        contactMe: 'Contact',
        allProjects: 'All projects',
        allReviews: 'All reviews',
        allOutcomes: 'All outcomes',
        allCertificates: 'All certificates',
        featuredProjects: 'Featured projects',
        proofStrip: 'Proof at a glance',
        reviewsTitle: 'Client feedback',
        comingSoon: 'Content will be added soon.',
        filterAll: 'All',
        relatedProjects: 'Related projects',
        competencies: 'Competencies',
        designPatterns: 'Design patterns',
        bestPractices: 'Best practices',
        tradeOffs: 'Trade-offs',
        architecture: 'Architecture',
        technologies: 'Technologies',
        features: 'Features',
        problemsSolved: 'Problems solved',
        useCases: 'Use cases',
        complexity: 'Complexity',
        backToProjects: 'Back to projects',
        projectMedia: 'Diagrams & screenshots',
    },
    home: {
        heroIdentityLine: 'Yahor Dubrouski · Solution Architect · Technical Lead',
        heroHeadline: 'Laravel APIs, AWS, and CRM integrations — production delivery at scale.',
        proofItems: [
            '6+ years delivery',
            'AWS Certified',
        ],
        outcomesTitle: 'Measured outcomes',
        outcomesSubtitle: 'Production results — migrations, scaling, lead gen, and cost reduction.',
        reviewsSubtitle: 'Upwork and LinkedIn feedback from clients and cross-functional partners.',
        projectsSubtitle: 'Proof repos — backend, cloud patterns, architecture, and automation.',
        integrationsTitle: 'Systems I integrate with',
        integrationsSubtitle: 'CRM, cloud, and collaboration platforms from production work.',
        integrationsLinkLabel: 'All integrations',
        integrationsMoreTemplate: '+{count} more',
        integrationsLessLabel: 'Show less',
        integrationCategories: {
            'crm-marketing-analytics': 'CRM, marketing & analytics',
            'commerce-billing-subscriptions': 'Commerce, billing & subscriptions',
            'infrastructure-devops': 'Infrastructure & DevOps',
            'data-stores': 'Databases & search',
            'observability': 'Observability & monitoring',
            'collaboration': 'Collaboration & email',
            'ecommerce-maps': 'E-commerce & maps',
            'ai-automation': 'AI & automation',
        },
        heroCtaTelegram: 'Message on Telegram',
        heroCtaProjects: 'See projects',
        heroCtaWorkWithMe: 'Work with me',
        principlesTitle: 'How I work',
        principlesSubtitle: 'How I deliver — clear scope, steady progress, systems that last in production.',
        principlesHome: [
            {
                title: 'Scope in writing first',
                body: 'Business goals and task definitions captured before build starts — no surprises mid-sprint.',
            },
            {
                title: 'Visible progress every day',
                body: 'Small iterations with something shippable each day, so you always know where the work stands.',
            },
            {
                title: 'Built for production load',
                body: 'Stable, scalable architecture and CI/CD that survive real traffic and team growth.',
            },
            {
                title: 'Best practices that last',
                body: 'Clean code, security hygiene, and maintainable systems — built to survive growth and change.',
            },
        ],
        closingTitle: 'Ready to ship something reliable?',
        closingBody:
            'Tell me what you need — scope, timeline, and stack. I reply quickly on Telegram.',
        principles: [
            'Small iterations — a visible portion of progress every day.',
            'Crystal-clear business and task definitions in writing. I start work only after critical questions are answered — to guarantee client satisfaction.',
            'Stable solutions that are scalable and easy to maintain.',
            'Best practices so the project survives growth and security risks.',
        ],
    },
    workWithMe: {
        title: 'Work with me',
        subtitle: 'Direct collaboration for referrals and trusted introductions',
        whoIHelp: 'Founders, product teams, and businesses that need a reliable senior engineer or architect.',
        whatIDo: 'Backend APIs, cloud infrastructure, CI/CD, architecture reviews, and AI workflow automation.',
        howIWork: 'Clear communication, small iterations, documented decisions, and focus on maintainable delivery.',
    },
    about: {
        title: 'About',
        story:
            'I am a Solution Architect with hands-on experience across backend engineering, DevOps, full stack delivery, and AI automation. I care about trade-offs, readable architecture, and systems that teams can actually operate.',
        workingStyle:
            'I prefer pragmatic decisions over hype, document rationale in ADRs, and align technical choices with business constraints.',
        languagesTitle: 'Languages',
        languages: ['English', 'Russian', 'Polish', 'German'],
    },
    experience: {
        title: 'Experience',
        subtitle: 'Professional background across backend, architecture, and technical leadership',
        intro:
            'Six years of delivery from SaaS startups through national e-commerce and B2B platform work — spanning full-stack development, solution architecture, DevOps ownership, and team leadership.',
    },
    projects: {
        title: 'Projects',
        subtitle: 'GitHub repos and case studies — filter by technology to explore backend, cloud, DevOps, and AI work.',
        filterByTechnology: 'Filter by technology',
        noProjectsForTechnology: 'No projects tagged with {tech} yet.',
        filterGroups: {
            languages: 'Languages',
            frameworks: 'Frameworks',
            cloud: 'Cloud & AWS',
            tools: 'Tools & DevOps',
        },
        sections: {
            flagship: 'Flagship',
            awsPatterns: 'AWS patterns',
            iacCiCd: 'IaC & CI/CD',
            devopsIndex: 'DevOps hub',
            aiAutomation: 'AI & automation',
            other: 'Other delivery',
        },
    },
    capabilities: {
        title: 'Skills proof',
        subtitle: 'Pick skills, share the URL — each card links to the exact GitHub file or proof page.',
        filterBySkill: 'Filter by skill',
        filterHint: 'Filters list every skill tag on a proof card below.',
        filterHintMore:
            'AI, n8n, React, and other stacks appear on the projects page until a dedicated proof is added.',
        proofsHeading: 'Skill proofs',
        noMatch: 'No skill proofs match the selected filters.',
        moreSkills: 'Need a skill not listed here?',
        moreSkillsLink: 'Browse all projects by technology →',
    },
    integrationsPage: {
        title: 'Integrations',
        subtitle: 'Platforms and systems connected in production work',
        intro:
            'CRM, marketing, commerce, cloud, data, observability, and automation — grouped by domain. Employer and internal product names are omitted on the public site.',
    },
    certificates: {
        title: 'Certificates',
        subtitle: 'Professional credentials across cloud, engineering, architecture, QA, and AI',
    },
    reviews: {
        title: 'Reviews',
        subtitle: 'Feedback from Upwork, LinkedIn, and direct clients',
    },
    outcomes: {
        title: 'Measured outcomes',
        subtitle: 'Quantified delivery, reliability, and integration impact',
        intro:
            'Measured results from production work — migrations, observability, CI/CD, scaling, and integrations.',
        allTitle: 'All outcomes',
        sections: {
            revenue: 'Revenue & marketing',
            reliability: 'Reliability & scale',
            costReduction: 'Cost reduction',
            delivery: 'Delivery speed',
            riskPrevention: 'Risk prevention',
            enablement: 'Enablement',
        },
    },
    hire: {
        backend: {
            title: 'Backend Engineering',
            subtitle: 'Laravel APIs, microservices, integrations, and CI-tested delivery',
            intro: 'Senior backend delivery — service layers, API integrations, AWS-backed microservices, and CI pipelines that gate quality before production.',
            cvLabel: 'Senior Backend & DevOps CV',
            landing: {
                heroIdentityLine: 'Yahor Dubrouski · Senior Backend Developer',
                heroHeadline: 'Laravel APIs and microservices — integrations, CI tests, and production scale.',
                proofItems: [
                    { label: 'AWS Certified Solutions Architect', linkCertificates: true },
                    { label: 'Adobe Certified Commerce Developer', linkCertificates: true },
                ],
                outcomesSubtitle:
                    'Lead-gen APIs, 3× sprint throughput, and daily deploys with integration tests in CI.',
                outcomesPageTitle: 'Backend outcomes',
                reviewsSubtitle:
                    'Client and colleague feedback on API delivery, integrations, and production ownership.',
                reviewsPageTitle: 'Backend reviews',
                projectsSubtitle:
                    'Laravel APIs, CI/CD pipelines, architecture decisions, and AWS scaling patterns.',
                projectsPageTitle: 'Backend projects',
                integrationsSubtitle:
                    'CRM, commerce, billing, and AI APIs integrated in production backends.',
                integrationsPageTitle: 'Backend integrations',
                certificatesPageTitle: 'Backend certificates',
                certificatesTitle: 'Certificates',
                principlesTitle: 'How I build production backends',
                principlesSubtitle:
                    'Microservices, clean service layers, and full test coverage — unit, integration, and end-to-end.',
                principles: [
                    {
                        title: 'Service layer & clean code',
                        body: 'Business logic in tested services — thin controllers, jobs, and handlers; SOLID boundaries your team can extend safely.',
                    },
                    {
                        title: 'Full test coverage in CI',
                        body: 'Feature unit tests, API integration tests, and end-to-end flows on critical paths — gated before merge, not caught in production.',
                    },
                    {
                        title: 'Integration resilience',
                        body: 'Idempotent jobs, replica syncs, and vendor API monitoring — microservices that survive third-party changes.',
                    },
                    {
                        title: 'Ship without blocking releases',
                        body: 'Feature toggles, incremental rollouts, and rollback paths — velocity with production safety.',
                    },
                ],
                closingTitle: 'Need Laravel APIs and integrations that scale?',
                closingBody:
                    'Tell me your stack, scope, and timeline — I reply quickly on Telegram.',
            },
        },
        'full-stack': {
            title: 'Full Stack Engineering',
            subtitle: 'End-to-end delivery from API to UI',
            intro: 'Full stack projects combining backend APIs, frontend UX, Docker workflows, and CI/CD.',
            cvLabel: 'Full Stack Developer CV',
            landing: {
                heroIdentityLine: 'Yahor Dubrouski · Full Stack Developer',
                heroHeadline: 'Laravel, React, and Magento — end-to-end features from API design to production UI.',
                proofItems: [
                    { label: 'Adobe Certified Commerce Developer', linkCertificates: true },
                    { label: 'Meta Front-End Development', linkCertificates: true },
                ],
                outcomesSubtitle:
                    '−75% lead cost, 3× sprint output, and daily releases with CI tests.',
                outcomesPageTitle: 'Full stack outcomes',
                reviewsSubtitle:
                    'Client and colleague feedback on full-stack delivery, teamwork, and production ownership.',
                reviewsPageTitle: 'Full stack reviews',
                projectsSubtitle:
                    'Laravel and React apps, architecture docs, AI tooling, and AWS-backed full-stack patterns.',
                projectsPageTitle: 'Full stack projects',
                integrationsSubtitle:
                    'CRM, commerce, cloud, data stores, and collaboration platforms from production full-stack work.',
                integrationsPageTitle: 'Full stack integrations',
                certificatesPageTitle: 'Full stack certificates',
                certificatesTitle: 'Certificates',
                principlesTitle: 'How I deliver full-stack work',
                principlesSubtitle:
                    'Clear service layers, tested APIs, and modern, fast UIs built for production.',
                principles: [
                    {
                        title: 'Service layer first',
                        body: 'Business logic in tested services — controllers and UI stay thin, changes stay localized.',
                    },
                    {
                        title: 'API + frontend ownership',
                        body: 'Backend API and the UI that calls it — I build and ship both, so there is no waiting on handoffs, alignment meetings, or cross-team deploy sync.',
                    },
                    {
                        title: 'Quality gates in CI',
                        body: 'Unit, integration, and UI tests on critical flows before merge — regressions caught early.',
                    },
                    {
                        title: 'Pragmatic delivery',
                        body: 'Ship in small increments with feature toggles and rollback paths — progress without blocking releases.',
                    },
                ],
                closingTitle: 'Need a full-stack engineer who ships end to end?',
                closingBody:
                    'Tell me your stack, scope, and timeline — I reply quickly on Telegram.',
            },
        },
        devops: {
            title: 'DevOps & Cloud',
            subtitle: 'AWS, Terraform, CI/CD, and reliable infrastructure',
            intro: 'Cloud and platform work with IaC, pipelines, observability, and cost-aware architecture.',
            cvLabel: 'DevOps & Cloud CV',
            landing: {
                heroIdentityLine: 'Yahor Dubrouski · DevOps & Cloud Engineer',
                heroHeadline: 'AWS, Terraform, and CI/CD — infrastructure built to scale under real load.',
                proofItems: [
                    { label: 'AWS Certified Solutions Architect', linkCertificates: true },
                    { label: 'HashiCorp Terraform Associate', linkCertificates: true },
                ],
                outcomesSubtitle:
                    'Traffic scaling, proactive monitoring, and fast CI/CD with integration tests.',
                outcomesPageTitle: 'DevOps outcomes',
                reviewsSubtitle:
                    'Client feedback on infrastructure delivery, pipelines, and cloud migrations.',
                reviewsPageTitle: 'DevOps reviews',
                projectsSubtitle:
                    'Terraform modules, AWS patterns, Jenkins pipelines, and Docker workflows.',
                projectsPageTitle: 'DevOps projects',
                integrationsSubtitle:
                    'Cloud platforms, observability stacks, and data stores from production integrations.',
                integrationsPageTitle: 'DevOps integrations',
                certificatesPageTitle: 'DevOps certificates',
                certificatesTitle: 'Certificates',
                principlesTitle: 'How I deliver platform work',
                principlesSubtitle:
                    'IaC, observable pipelines, and architectures that survive traffic spikes.',
                principles: [
                    {
                        title: 'Infrastructure as code first',
                        body: 'Modular Terraform, PR-reviewed changes, and environment parity from dev to production — infrastructure defined and provisioned as version-controlled code.',
                    },
                    {
                        title: 'Pipelines that gate quality',
                        body: 'CI/CD with tests, security checks, and rollback paths before anything reaches production.',
                    },
                    {
                        title: 'Scale without downtime',
                        body: 'Workload separation, autoscaling, and zero-downtime deploy patterns under real traffic.',
                    },
                    {
                        title: 'Cost and ops visibility',
                        body: 'Registry cleanup, monitoring, and alerts — issues caught daily, not weeks later.',
                    },
                ],
                closingTitle: 'Need reliable cloud and CI/CD?',
                closingBody:
                    'Tell me your stack, constraints, and timeline — I reply quickly on Telegram.',
            },
        },
        'ai-automation': {
            title: 'AI Automation',
            subtitle: 'n8n, MCP, OpenAI integrations, and workflow design',
            intro: 'Practical automation that connects Telegram, Notion, Confluence, and AI services into reliable workflows.',
            cvLabel: 'Full Stack Developer CV',
        },
    },
    footer: {
        whoItsFor: "Who it's for",
        proof: 'Proof',
        rights: 'All rights reserved.',
        builtWith: 'Built with Astro and deployed on Cloudflare Pages.',
    },
};

// RU mirrors EN for now — content to be translated later.
const ru: SiteTranslations = structuredClone(en);

export function getSiteTranslations(locale: Locale): SiteTranslations {
    return locale === 'ru' ? ru : en;
}

export function getPageTitle(locale: Locale, pageTitle: string): string {
    const { siteName } = getSiteTranslations(locale).meta;
    return `${pageTitle} | ${siteName}`;
}
