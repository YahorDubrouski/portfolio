import { getAllSiteProjects, type CachedProject } from './projects';

export interface TechnologyFilter {
    label: string;
    slug: string;
}

export type TechnologyFilterGroupKey =
    | 'languages'
    | 'frameworks'
    | 'cloud'
    | 'tools'
    | 'databases'
    | 'libraries';

export interface TechnologyFilterGroup {
    key: TechnologyFilterGroupKey;
    filters: TechnologyFilter[];
    /** Hidden until the user clicks “Show all filters”. */
    hiddenByDefault?: boolean;
}

/** Chips shown before “See more” in a filter group. */
export const filterChipCollapseLimit = 8;

/** Minimum visible project cards for a tag to appear — lower for core hire signals. */
const minProjectsByGroup: Record<TechnologyFilterGroupKey, number> = {
    languages: 1,
    frameworks: 1,
    cloud: 2,
    tools: 2,
    databases: 1,
    libraries: 1,
};

/** Single-project tags that should still appear (outcome proof or flagship stack). */
const alwaysShowFilterSlugs = new Set(['auto-scaling', 'redis', 'gitlab-ci']);

/** Excluded from filter chips — still on project cards and matchable via URL if needed. */
const hiddenFilterSlugs = new Set(['typescript', 'flask']);

/** Runtime tags stored under languages — not shown in Languages. */
const nonLanguageSlugs = new Set(['node.js']);

/** DB tags may live under `tools` or `databases` in project data — always chip under Databases. */
const databaseFilterSlugs = new Set([
    'mysql',
    'redis',
    'postgres',
    'postgresql',
    'mongodb',
    'sqlite',
    'dynamodb',
]);

/** Packages/libraries — separate group, hidden until “Show all filters”. */
const libraryFilterSlugs = new Set([
    'stripe',
    'zod',
    'awilix',
    'alembic',
    'bullmq',
    'celery',
    'jest',
    'knex',
    'pydantic',
    'sqlalchemy',
    'structlog',
    'tailwind',
    'tanstack-query',
    'vitest',
    'winston',
    'pytest',
    'pino',
    'helmet',
    'supertest',
    'swagger',
    'swagger-ui-express',
    'testing-library',
    'uvicorn',
    'ruff',
    'slowapi',
    'phpunit',
    'playwright',
    'react-markdown',
    'css-modules',
    'cloudinary',
    'zod-to-openapi',
]);

/** Filter groups — strongest hire signals first; libraries last (collapsed behind Show all). */
const filterGroupOrder: TechnologyFilterGroupKey[] = [
    'tools',
    'databases',
    'cloud',
    'frameworks',
    'languages',
    'libraries',
];

/** DevOps projects page: Cloud & AWS leads, then DevOps & tools. */
const devopsFilterGroupOrder: TechnologyFilterGroupKey[] = [
    'cloud',
    'tools',
    'databases',
    'frameworks',
    'languages',
    'libraries',
];

/** Backend projects: API stack first, then data, then ops/cloud. */
const backendFilterGroupOrder: TechnologyFilterGroupKey[] = [
    'frameworks',
    'languages',
    'databases',
    'tools',
    'cloud',
    'libraries',
];

/** Full-stack projects: UI/API stack first, then data, cloud, ops. */
const fullStackFilterGroupOrder: TechnologyFilterGroupKey[] = [
    'frameworks',
    'languages',
    'databases',
    'cloud',
    'tools',
    'libraries',
];

const groupsHiddenByDefault = new Set<TechnologyFilterGroupKey>(['libraries']);

/** Curated slug order within each group; unknown tags fall back to project count, then A–Z. */
const filterSlugPriority: Record<TechnologyFilterGroupKey, string[]> = {
    tools: [
        'terraform',
        'docker',
        'github-actions',
        'jenkins',
        'gitlab-ci',
        'notion',
        'telegram',
        'openai',
    ],
    databases: ['postgresql', 'mysql', 'redis', 'mongodb', 'sqlite', 'dynamodb'],
    cloud: [
        'aws',
        'cloudflare',
        'auto-scaling',
        'lambda',
        'ec2',
        'rds',
        's3',
        'vpc',
        'alb',
        'api-gateway',
        'dynamodb',
        'kinesis',
        'cloudwatch',
    ],
    frameworks: ['laravel', 'react', 'express', 'fastapi', 'n8n', 'astro', 'flask', 'vite', 'zustand'],
    languages: ['php', 'javascript', 'python', 'hcl'],
    libraries: [
        'stripe',
        'pytest',
        'tailwind',
        'zod',
        'pydantic',
        'sqlalchemy',
        'alembic',
        'awilix',
        'bullmq',
        'celery',
        'tanstack-query',
        'vitest',
        'jest',
        'playwright',
    ],
};

/**
 * Related tags share one filter chip (e.g. Workers + Pages → Cloudflare, postgres → PostgreSQL).
 * URL param may still be a member slug; matching expands to the family.
 */
const techFilterFamilies: Record<string, { label: string; members: readonly string[] }> = {
    cloudflare: {
        label: 'cloudflare',
        members: ['cloudflare', 'cloudflare-workers', 'cloudflare-pages'],
    },
    postgresql: {
        label: 'postgresql',
        members: ['postgresql', 'postgres'],
    },
};

/** Lowercase slug for URL params and matching — e.g. "Node.js" → "node.js" */
export function normalizeTechSlug(name: string): string {
    return name.toLowerCase().trim();
}

/** Map Workers/Pages/etc. onto one chip slug. */
export function canonicalTechSlug(name: string): string {
    const slug = normalizeTechSlug(name);
    for (const [canonical, family] of Object.entries(techFilterFamilies)) {
        if (family.members.includes(slug)) {
            return canonical;
        }
    }
    return slug;
}

/** Expand a filter URL/chip slug to every matching project tag. */
export function expandTechFilterSlugs(name: string): readonly string[] {
    const slug = normalizeTechSlug(name);
    for (const family of Object.values(techFilterFamilies)) {
        if (family.members.includes(slug)) {
            return family.members;
        }
    }
    return [slug];
}

/** Client-side family maps for ProjectsPage filter script. */
export const techFilterFamilyMembers: Record<string, readonly string[]> = Object.fromEntries(
    Object.entries(techFilterFamilies).flatMap(([canonical, family]) => {
        const entries: [string, readonly string[]][] = [[canonical, family.members]];
        for (const member of family.members) {
            entries.push([member, family.members]);
        }
        return entries;
    }),
);

export const techFilterChipByMember: Record<string, string> = Object.fromEntries(
    Object.entries(techFilterFamilies).flatMap(([canonical, family]) =>
        family.members.map((member) => [member, canonical] as const),
    ),
);

function technologyNamesForGroup(project: CachedProject, group: TechnologyFilterGroupKey): string[] {
    const tools = project.technologies.tools ?? [];
    const databases = project.technologies.databases ?? [];

    switch (group) {
        case 'languages':
            return project.technologies.languages.filter(
                (name) => !nonLanguageSlugs.has(normalizeTechSlug(name)),
            );
        case 'frameworks':
            return project.technologies.frameworks;
        case 'cloud':
            return project.technologies.cloud;
        case 'tools':
            return tools.filter((name) => {
                const slug = normalizeTechSlug(name);
                return !databaseFilterSlugs.has(slug) && !libraryFilterSlugs.has(slug);
            });
        case 'databases':
            return [
                ...databases,
                ...tools.filter((name) => databaseFilterSlugs.has(normalizeTechSlug(name))),
            ];
        case 'libraries':
            return tools.filter((name) => libraryFilterSlugs.has(normalizeTechSlug(name)));
    }
}

/** All technology names used on a project (for filter matching). */
export function getProjectTechnologySlugs(project: CachedProject): string[] {
    const names = [
        ...project.technologies.languages,
        ...project.technologies.frameworks,
        ...project.technologies.cloud,
        ...project.technologies.tools,
        ...project.technologies.databases,
    ];

    return [...new Set(names.map(normalizeTechSlug))];
}

export function projectMatchesTechnology(project: CachedProject, slug: string): boolean {
    if (!slug || slug === 'all') {
        return true;
    }

    const projectSlugs = new Set(getProjectTechnologySlugs(project));
    return expandTechFilterSlugs(slug).some((candidate) => projectSlugs.has(candidate));
}

function countProjectsPerSlugFor(projects: CachedProject[]): Map<string, number> {
    const counts = new Map<string, number>();

    for (const project of projects) {
        const seenCanonical = new Set<string>();
        for (const slug of getProjectTechnologySlugs(project)) {
            const canonical = canonicalTechSlug(slug);
            if (seenCanonical.has(canonical)) {
                continue;
            }
            seenCanonical.add(canonical);
            counts.set(canonical, (counts.get(canonical) ?? 0) + 1);
        }
    }

    return counts;
}

function countProjectsPerSlug(): Map<string, number> {
    return countProjectsPerSlugFor(getAllSiteProjects());
}

function sortFiltersByAttractiveness(
    filters: TechnologyFilter[],
    group: TechnologyFilterGroupKey,
    counts: Map<string, number>,
): TechnologyFilter[] {
    const priorityIndex = new Map(
        filterSlugPriority[group].map((slug, index) => [normalizeTechSlug(slug), index]),
    );

    return [...filters].sort((a, b) => {
        const aPriority = priorityIndex.get(a.slug);
        const bPriority = priorityIndex.get(b.slug);

        if (aPriority !== undefined && bPriority !== undefined) {
            return aPriority - bPriority;
        }
        if (aPriority !== undefined) {
            return -1;
        }
        if (bPriority !== undefined) {
            return 1;
        }

        const countDiff = (counts.get(b.slug) ?? 0) - (counts.get(a.slug) ?? 0);
        if (countDiff !== 0) {
            return countDiff;
        }

        return a.label.localeCompare(b.label);
    });
}

function filtersForGroupFromProjects(
    group: TechnologyFilterGroupKey,
    projects: CachedProject[],
    counts: Map<string, number>,
    minProjects: number,
): TechnologyFilter[] {
    const bySlug = new Map<string, string>();

    for (const project of projects) {
        for (const name of technologyNamesForGroup(project, group)) {
            const rawSlug = normalizeTechSlug(name);
            const slug = canonicalTechSlug(rawSlug);
            if (hiddenFilterSlugs.has(slug) || hiddenFilterSlugs.has(rawSlug)) {
                continue;
            }
            const projectCount = counts.get(slug) ?? 0;
            if (projectCount < minProjects && !alwaysShowFilterSlugs.has(slug)) {
                continue;
            }
            if (!bySlug.has(slug)) {
                const familyLabel = techFilterFamilies[slug]?.label;
                bySlug.set(slug, normalizeTechSlug(familyLabel ?? name));
            }
        }
    }

    return sortFiltersByAttractiveness(
        [...bySlug.entries()].map(([slug, label]) => ({ slug, label })),
        group,
        counts,
    );
}

function filtersForGroup(
    group: TechnologyFilterGroupKey,
    counts: Map<string, number>,
    minProjects: number,
): TechnologyFilter[] {
    return filtersForGroupFromProjects(group, getAllSiteProjects(), counts, minProjects);
}

/** Grouped filters scoped to a project subset — for `/hire/{role}/projects`. */
export function getGroupedTechnologyFiltersForProjects(
    projects: CachedProject[],
    options?: { groupOrder?: readonly TechnologyFilterGroupKey[] },
): TechnologyFilterGroup[] {
    const counts = countProjectsPerSlugFor(projects);
    const order = options?.groupOrder ?? filterGroupOrder;

    return order
        .map((key) => ({
            key,
            filters: filtersForGroupFromProjects(key, projects, counts, minProjectsByGroup[key]),
            hiddenByDefault: groupsHiddenByDefault.has(key),
        }))
        .filter((group) => group.filters.length > 0);
}

/** Group order for role project pages (falls back to default when omitted). */
export function getFilterGroupOrderForRole(
    role: string | undefined,
): readonly TechnologyFilterGroupKey[] {
    switch (role) {
        case 'devops':
            return devopsFilterGroupOrder;
        case 'backend':
            return backendFilterGroupOrder;
        case 'full-stack':
            return fullStackFilterGroupOrder;
        default:
            return filterGroupOrder;
    }
}

/** Grouped filters — per-group thresholds; flagship singles in `alwaysShowFilterSlugs`. */
export function getGroupedTechnologyFilters(): TechnologyFilterGroup[] {
    const counts = countProjectsPerSlug();

    return filterGroupOrder
        .map((key) => ({
            key,
            filters: filtersForGroup(key, counts, minProjectsByGroup[key]),
            hiddenByDefault: groupsHiddenByDefault.has(key),
        }))
        .filter((group) => group.filters.length > 0);
}

/** Flat list — derived from grouped filters. */
export function getAllTechnologyFilters(): TechnologyFilter[] {
    return getGroupedTechnologyFilters().flatMap((group) => group.filters);
}

export function getProjectsByTechnology(slug: string): CachedProject[] {
    return getAllSiteProjects().filter((project) => projectMatchesTechnology(project, slug));
}
