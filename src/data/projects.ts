import siteProjects from './projects.json';
import type { HireRole } from '../i18n/translations/site';

export interface Technologies {
    languages: string[];
    frameworks: string[];
    cloud: string[];
    tools: string[];
    databases: string[];
}

/** Public site project record — curated in `projects.json`, not read from the AI cache. */
export interface CachedProject {
    id: string;
    type: 'project' | 'collection';
    parent_collection: string | null;
    name: string;
    summary: string | null;
    technologies: Technologies;
    features: string[];
    architecture: string | null;
    problems_solved: string[];
    use_cases: string[];
    when_to_use: string | null;
    competencies: string[];
    design_patterns: string[];
    best_practices: string[];
    keywords: string[];
    trade_offs: string[];
    audience: string[];
    complexity: string | null;
    related_projects: string[];
    sub_project_ids: string[];
}

export const projects = siteProjects.projects as CachedProject[];

export const caseStudySlugs = [
    'ai-planner',
    'arch-decisions',
    'arch-decisions-frontend',
    'arch-decisions-backend',
    'arch-decisions-backend-python',
] as const;

export type CaseStudySlug = (typeof caseStudySlugs)[number];

export function isCaseStudySlug(id: string): id is CaseStudySlug {
    return caseStudySlugs.includes(id as CaseStudySlug);
}

export function getProjectById(id: string): CachedProject | undefined {
    return projects.find((project) => project.id === id);
}

/** Not shown on `/projects` auto-lists — data may still power other pages (e.g. certificates).
 * Parent `arch-decisions` is Flagship; FE / Express / FastAPI sit in Frontend / Backend sections.
 */
export const hiddenProjectIds = [
    'file-storage',
    'certificates',
    'aws-guides-aws-calculator',
    'aws-terraform-vpc-geocoder-example',
    'atlassian-mcp',
    'aws',
    'aws-guides',
    'ai-diary',
] as const;

/** Home featured — backend → scaling proof → architecture monorepo → AI automation. */
export const homeProjectIds = [
    'aidesk-mini',
    'aws-scalable-web-application',
    'arch-decisions',
    'ai-planner',
] as const;

export type ProjectSectionKey =
    | 'flagship'
    | 'awsPatterns'
    | 'iacCiCd'
    | 'devopsIndex'
    | 'aiAutomation'
    | 'frontendDelivery'
    | 'backendDelivery';

export interface ProjectSection {
    key: ProjectSectionKey;
    projectIds: string[];
}

/**
 * When a technology filter is active, these project ids are promoted into Flagship
 * for that stack (instead of whatever sits in the default Flagship section).
 */
export const filterFlagshipByStack: Record<string, readonly string[]> = {
    python: ['arch-decisions-backend-python'],
    fastapi: ['arch-decisions-backend-python'],
    express: ['arch-decisions-backend'],
    'node.js': ['arch-decisions-backend'],
    react: ['arch-decisions-frontend'],
    javascript: ['arch-decisions-frontend'],
    vite: ['arch-decisions-frontend'],
    php: ['aidesk-mini'],
    laravel: ['aidesk-mini'],
    terraform: ['terraform-aws-infrastructure'],
    aws: ['aws-scalable-web-application'],
    'auto-scaling': ['aws-scalable-web-application'],
    docker: ['aidesk-mini'],
    n8n: ['ai-planner'],
    openai: ['aidesk-mini'],
};

export function getFilterFlagshipIds(stackSlug: string): readonly string[] {
    return filterFlagshipByStack[stackSlug.toLowerCase()] ?? [];
}

export const projectSections: ProjectSection[] = [
    {
        key: 'flagship',
        projectIds: [
            'aidesk-mini',
            'arch-decisions',
            'terraform-aws-infrastructure',
        ],
    },
    {
        key: 'awsPatterns',
        projectIds: [
            'aws-scalable-web-application',
            'aws-real-time-data-processing',
            'aws-serverless-application',
        ],
    },
    {
        key: 'iacCiCd',
        projectIds: [
            'terraform-ci-cd',
            'jenkins-database-backup-pipelines',
            'ci-showcase',
        ],
    },
    {
        key: 'devopsIndex',
        projectIds: ['devops-portfolio'],
    },
    {
        key: 'aiAutomation',
        projectIds: ['ai-planner', 'ai-amotions'],
    },
    {
        key: 'frontendDelivery',
        projectIds: [
            'arch-decisions-frontend',
            'dziana-portfolio',
            'yahor-portfolio',
        ],
    },
    {
        key: 'backendDelivery',
        projectIds: [
            'arch-decisions-backend',
            'arch-decisions-backend-python',
            'end-to-end',
        ],
    },
];

const hiddenProjectIdSet = new Set<string>(hiddenProjectIds);

export function isSiteProjectHidden(id: string): boolean {
    return hiddenProjectIdSet.has(id);
}

/** Hub/index cards — visible with “All”, excluded when any stack filter is active. */
export const nonFilterableProjectIds = ['devops-portfolio'] as const;

const nonFilterableProjectIdSet = new Set<string>(nonFilterableProjectIds);

export function isProjectFilterExcluded(id: string): boolean {
    return nonFilterableProjectIdSet.has(id);
}

function orderSiteProjects(ids: readonly string[]): CachedProject[] {
    return ids
        .map((id) => getProjectById(id))
        .filter((project): project is CachedProject => project != null && !isSiteProjectHidden(project.id));
}

export function getProjectsByIds(ids: readonly string[]): CachedProject[] {
    return orderSiteProjects(ids);
}

export function getHomeProjects(limit = 4): CachedProject[] {
    return orderSiteProjects(homeProjectIds).slice(0, limit);
}

export function getFeaturedProjects(limit = 4): CachedProject[] {
    return getHomeProjects(limit);
}

export function getProjectsForSection(section: ProjectSection): CachedProject[] {
    return orderSiteProjects(section.projectIds);
}

/** Flat list of all visible site projects in section order. */
export function getAllSiteProjects(): CachedProject[] {
    return projectSections.flatMap((section) => getProjectsForSection(section));
}

const roleKeywords: Record<HireRole, string[]> = {
    backend: ['backend', 'laravel', 'php', 'api', 'express', 'node'],
    'full-stack': ['full stack', 'monorepo', 'react', 'laravel', 'express'],
    devops: ['devops', 'terraform', 'aws', 'ci/cd', 'docker', 'jenkins'],
    'ai-automation': ['ai', 'n8n', 'mcp', 'openai', 'automation', 'agent'],
};

function projectMatchesRole(project: CachedProject, role: HireRole): boolean {
    const keywords = roleKeywords[role];
    const haystack = [
        project.summary ?? '',
        ...project.competencies,
        ...project.keywords,
        ...project.technologies.languages,
        ...project.technologies.frameworks,
        ...project.technologies.cloud,
        ...project.technologies.tools,
    ]
        .join(' ')
        .toLowerCase();

    return keywords.some((keyword) => haystack.includes(keyword));
}

export function getProjectsForRole(role: HireRole): CachedProject[] {
    return projects.filter(
        (project) =>
            project.type === 'project' &&
            !isSiteProjectHidden(project.id) &&
            projectMatchesRole(project, role),
    );
}

export function getAllCapabilities(): { name: string; projects: CachedProject[] }[] {
    const capabilityMap = new Map<string, Set<string>>();

    for (const project of projects) {
        for (const competency of project.competencies) {
            if (!capabilityMap.has(competency)) {
                capabilityMap.set(competency, new Set());
            }
            capabilityMap.get(competency)?.add(project.id);
        }

        for (const tool of [
            ...project.technologies.tools,
            ...project.technologies.frameworks,
            ...project.technologies.cloud,
        ]) {
            const key = tool.toLowerCase();
            if (!capabilityMap.has(key)) {
                capabilityMap.set(key, new Set());
            }
            capabilityMap.get(key)?.add(project.id);
        }
    }

    return [...capabilityMap.entries()]
        .map(([name, ids]) => ({
            name,
            projects: [...ids]
                .map((id) => getProjectById(id))
                .filter(
                    (project): project is CachedProject =>
                        project != null && !isSiteProjectHidden(project.id),
                ),
        }))
        .filter((entry) => entry.projects.length > 0)
        .sort((a, b) => a.name.localeCompare(b.name));
}

export const certificateCategories: { category: string; items: string[] }[] = [
    {
        category: 'DevOps / Cloud',
        items: [
            'AWS Certified Solutions Architect – Associate',
            'Terraform Associate',
            'Udemy AWS Solutions Architect Associate 2025',
        ],
    },
    {
        category: 'Frontend',
        items: [
            'Meta Introduction to Front-End Development',
            'Meta Version Control',
            'Meta Programming with JavaScript',
        ],
    },
    {
        category: 'Backend',
        items: ['Adobe Certified Professional – Adobe Commerce Developer'],
    },
    {
        category: 'Architecture / Design Patterns',
        items: ['Enterprise Patterns', 'GOF and GRASP Design Patterns'],
    },
    {
        category: 'QA',
        items: ['QA Automation Diploma'],
    },
    {
        category: 'AI / Automation',
        items: [
            'AI Automations and AI Agents with n8n',
            'Anthropic: Agent Skills',
            'Building with the Claude API',
            'Introduction to Model Context Protocol',
            'Claude Code in Action',
        ],
    },
    {
        category: 'Languages',
        items: ['English Pre-Intermediate'],
    },
];

export function getCertificateCategories(): { category: string; items: string[] }[] {
    return certificateCategories.filter((group) => group.items.length > 0);
}

const backendCertificatePageOrder = [
    'Adobe Certified Professional – Adobe Commerce Developer',
    'Enterprise Patterns',
    'GOF and GRASP Design Patterns',
    'QA Automation Diploma',
    'Meta Introduction to Front-End Development',
    'Meta Version Control',
    'Meta Programming with JavaScript',
    'AWS Certified Solutions Architect – Associate',
    'Terraform Associate',
    'Udemy AWS Solutions Architect Associate 2025',
    'AI Automations and AI Agents with n8n',
    'Anthropic: Agent Skills',
    'Building with the Claude API',
    'Introduction to Model Context Protocol',
    'Claude Code in Action',
    'English Pre-Intermediate',
];

const backendCertificateCategoryOrder = [
    'Backend',
    'Architecture / Design Patterns',
    'QA',
    'Frontend',
    'DevOps / Cloud',
    'AI / Automation',
    'Languages',
];

const fullStackCertificatePageOrder = [
    'Adobe Certified Professional – Adobe Commerce Developer',
    'Meta Introduction to Front-End Development',
    'Meta Version Control',
    'Meta Programming with JavaScript',
    'Enterprise Patterns',
    'GOF and GRASP Design Patterns',
    'QA Automation Diploma',
    'AWS Certified Solutions Architect – Associate',
    'Terraform Associate',
    'Udemy AWS Solutions Architect Associate 2025',
    'AI Automations and AI Agents with n8n',
    'Anthropic: Agent Skills',
    'Building with the Claude API',
    'Introduction to Model Context Protocol',
    'Claude Code in Action',
    'English Pre-Intermediate',
];

const fullStackCertificateCategoryOrder = [
    'Backend',
    'Frontend',
    'Architecture / Design Patterns',
    'QA',
    'DevOps / Cloud',
    'AI / Automation',
    'Languages',
];

function orderByPriorityList(priority: string[], items: string[]): string[] {
    const prioritized = priority.filter((item) => items.includes(item));
    const remainder = items.filter((item) => !priority.includes(item));
    return [...prioritized, ...remainder];
}

function orderCertificateItems(roleOrder: string[], items: string[]): string[] {
    const index = new Map(roleOrder.map((item, position) => [item, position]));
    return [...items].sort((a, b) => (index.get(a) ?? Number.MAX_SAFE_INTEGER) - (index.get(b) ?? Number.MAX_SAFE_INTEGER));
}

export function getCertificateCategoriesForRole(role: HireRole): { category: string; items: string[] }[] {
    const roleOrder = getCertificatesForRole(role);
    const allowed = new Set(roleOrder);
    let groups = getCertificateCategories()
        .map((group) => ({
            ...group,
            items: orderCertificateItems(roleOrder, group.items.filter((item) => allowed.has(item))),
        }))
        .filter((group) => group.items.length > 0);

    if (role === 'backend') {
        groups = backendCertificateCategoryOrder
            .map((category) => groups.find((group) => group.category === category))
            .filter((group): group is { category: string; items: string[] } => Boolean(group));
    }

    if (role === 'full-stack') {
        groups = fullStackCertificateCategoryOrder
            .map((category) => groups.find((group) => group.category === category))
            .filter((group): group is { category: string; items: string[] } => Boolean(group));
    }

    return groups;
}

export function getCertificatesForRole(role: HireRole): string[] {
    const all = getProjectById('certificates')?.features ?? [];

    switch (role) {
        case 'devops':
            return all.filter((item) => /aws|terraform|devops/i.test(item));
        case 'backend':
            return orderByPriorityList(backendCertificatePageOrder, all);
        case 'ai-automation':
            return all.filter((item) => /ai|n8n|anthropic|mcp|claude/i.test(item));
        case 'full-stack':
            return orderByPriorityList(fullStackCertificatePageOrder, all);
        default:
            return all.slice(0, 6);
    }
}
