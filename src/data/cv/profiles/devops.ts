import type { CvDocument } from '../types';

export const devopsProfile: CvDocument = {
    id: 'devops',
    defaultTemplate: 'classic',
    roleTitle: 'DevOps & Cloud Engineer',
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
            label: 'Cloud',
            items: ['AWS', 'Terraform', 'DigitalOcean', 'Cloudflare'],
        },
        {
            label: 'CI/CD & Deployment',
            items: ['Jenkins', 'Bitbucket Pipelines', 'GitHub Actions', 'Blue-green & rolling deploys'],
        },
        {
            label: 'Observability',
            items: ['Prometheus & Grafana', 'ELK stack', 'Elasticsearch', 'CloudWatch'],
        },
    ],
    languages: [
        'Russian – Native',
        'English – Upper Intermediate',
        'Polish – Intermediate',
        'German – Intermediate',
    ],
    summary:
        'DevOps and cloud engineer with 6+ years owning CI/CD, container platforms, and production infrastructure. AWS Certified Solutions Architect and HashiCorp Terraform Associate — builds IaC modules, multi-environment pipelines, and observable systems that survive traffic spikes. Known for Terraform-backed AWS infrastructure and CI/CD pipelines with unit, integration, and UI tests — enabling production deploys at any time.',
    experience: [
        {
            title: 'Senior DevOps Engineer / Platform Engineer',
            companyLine: 'ObjectFirst. Remote from Warsaw, Poland | Aug 2024 - Present',
            project: 'B2B Marketing & Infrastructure Platform',
            description:
                'Enterprise marketing platform on microservices and Docker — platform ownership spans CI/CD, cloud migration planning, edge automation, and production reliability for lead-gen and subscription workloads.',
            responsibilitiesLabel: true,
            bullets: [
                'Separated web, scheduled, and background workloads into independently scaled Docker Swarm services — absorbed 3× traffic with zero downtime and no client-facing errors.',
                'Developed and maintained CI/CD pipelines with Jenkins and Bitbucket — introduced API integration tests in CI, cutting manual backend QA from ~3–4 h/day to near zero and enabling daily releases on critical domains.',
                'Built Terraform modules for AWS infrastructure with CI plan/apply gates — reproducible, reviewable changes across staging and production.',
                'Authored full DigitalOcean → AWS migration plan; prefer native AWS/Cloudflare capabilities over custom infrastructure where it saves cost and ops burden.',
                'Managed Docker-based microservice infrastructure; integrated Cloudflare automation for redirects, bot protection, header injection, and caching rules.',
                'Accelerated releases with centralized secrets management for environment variables across services and environments.',
                'Built configurable health checks and alerts with dashboards and Grafana — issues surfaced within hours instead of 1–2 weeks via client reports.',
                'Designed Jenkins database backup pipelines with restore validation — MySQL dumps to S3 with automated integrity checks.',
            ],
            tools: 'Docker Swarm, Jenkins, Bitbucket Pipelines, AWS (ECS, S3, RDS, CloudWatch, IAM), Terraform, Cloudflare, Grafana, Sentry, Shell, Python, MySQL, PostgreSQL, Redis.',
        },
        {
            title: 'Full Stack Developer',
            companyLine: 'Hidden Hint. Poland, Warsaw | Jan 2024 - Aug 2024',
            project: 'E-commerce Platforms for Digital Products',
            description:
                'Concurrent Magento/Laravel marketplaces — backend-focused full stack delivery across four client platforms, with early Docker adoption while transitioning toward platform and DevOps work.',
            responsibilitiesLabel: true,
            bullets: [
                'Delivered backend APIs and full stack features across concurrent Magento and Laravel projects.',
                'Introduced Docker for local and staging environments.',
                'Established integration test coverage for critical checkout flows — long-term stability across parallel production codebases.',
            ],
            tools: 'Docker, Magento 2, Laravel, PHP, OpenSearch, PHPUnit.',
        },
        {
            title: 'Team Lead',
            companyLine: 'Puravita - Online Pharmacy (Switzerland). Switzerland, st. Gallen | Apr 2022 - Dec 2023',
            project: 'National Online Pharmacy (Switzerland)',
            description:
                'National pharmacy e-commerce on Magento 2 with microservices, partner integrations, and AWS-backed fulfillment — led delivery process and platform structure improvements.',
            responsibilitiesLabel: true,
            bullets: [
                'Migrated 15 custom modules from multi-repo to monorepo — weekly release preparation cut from ~4 hours to ~20 minutes.',
                'Built fault-tolerant microservice for automated order fulfillment integrated with robotic warehouse partner systems.',
                'Operated Docker-based development and deployment workflows across Magento core and standalone services.',
                'Defined GitFlow strategy, QA gates, and review standards — reduced release complexity for a multi-team pharmacy network.',
                'Integrated Elasticsearch in a modular service layout balancing Magento with standalone workers.',
            ],
            tools: 'Docker, AWS, Elasticsearch, Magento 2, Laravel, PHP, MySQL.',
        },
        {
            title: 'Technical Lead',
            companyLine: 'Lindenvalley (E-commerce websites). Belarus, Minsk | Feb 2021 - Apr 2022',
            project: 'E-commerce Solutions (Outsourcing)',
            description:
                'Outsourced Magento programs for international retail clients — Technical Lead owning delivery standards, team process, and hands-on module development.',
            responsibilitiesLabel: true,
            bullets: [
                'Introduced GitFlow, Jira workflows, and formal code review practices across concurrent client projects.',
                'Standardized Docker-based local and staging environments to improve consistency across the delivery team.',
                'Hosted internal sessions on clean architecture, SOLID, and maintainable module structure.',
            ],
            tools: 'Docker, Magento 2, PHP, Elasticsearch, MySQL.',
        },
    ],
    education: {
        title: 'Programmer',
        institutionLine: 'College of Business and Law. Belarus, Minsk | Sep 2016 - Jul 2019',
        detail: 'Diploma in Programming',
    },
    certificates: [
        'AWS Certified Solutions Architect - Associate',
        'HashiCorp Terraform Associate',
        'QA Automation Diploma',
        'Enterprise Patterns',
        'GOF And Grasp Design Patterns',
    ],
    certificatesLink: 'https://github.com/YahorDubrouski/Certificates',
};
