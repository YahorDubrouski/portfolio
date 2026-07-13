import { getAllSiteProjects, type CachedProject } from './projects';

export interface TechnologyFilter {
    label: string;
    slug: string;
}

export type TechnologyFilterGroupKey = 'languages' | 'frameworks' | 'cloud' | 'tools';

export interface TechnologyFilterGroup {
    key: TechnologyFilterGroupKey;
    filters: TechnologyFilter[];
}

/** Minimum visible project cards for a tag to appear — lower for core hire signals. */
const minProjectsByGroup: Record<TechnologyFilterGroupKey, number> = {
    languages: 1,
    frameworks: 1,
    cloud: 2,
    tools: 2,
};

/** Single-project tags that should still appear (outcome proof or flagship stack). */
const alwaysShowFilterSlugs = new Set([
    'auto-scaling',
    'redis',
    'stripe',
    'gitlab-ci',
]);

/** Excluded from filter chips — still on project cards and matchable via URL if needed. */
const hiddenFilterSlugs = new Set(['typescript', 'flask', 'python']);

/** Filter groups — strongest hire signals first (DevOps/tools → cloud → frameworks → languages). */
const filterGroupOrder: TechnologyFilterGroupKey[] = ['tools', 'cloud', 'frameworks', 'languages'];

/** Curated slug order within each group; unknown tags fall back to project count, then A–Z. */
const filterSlugPriority: Record<TechnologyFilterGroupKey, string[]> = {
    tools: [
        'terraform',
        'docker',
        'github-actions',
        'jenkins',
        'openai',
        'gitlab-ci',
        'mysql',
        'redis',
        'postgres',
        'notion',
        'telegram',
        'stripe',
        'pytest',
    ],
    cloud: [
        'aws',
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
    frameworks: ['laravel', 'react', 'n8n', 'express', 'astro', 'flask', 'vite', 'zustand'],
    languages: ['php', 'javascript', 'python', 'hcl'],
};

/** Lowercase slug for URL params and matching — e.g. "Node.js" → "node.js" */
export function normalizeTechSlug(name: string): string {
    return name.toLowerCase().trim();
}

function technologyNamesForGroup(project: CachedProject, group: TechnologyFilterGroupKey): string[] {
    switch (group) {
        case 'languages':
            return project.technologies.languages;
        case 'frameworks':
            return project.technologies.frameworks;
        case 'cloud':
            return project.technologies.cloud;
        case 'tools':
            return [...project.technologies.tools, ...project.technologies.databases];
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

    return getProjectTechnologySlugs(project).includes(normalizeTechSlug(slug));
}

function countProjectsPerSlugFor(projects: CachedProject[]): Map<string, number> {
    const counts = new Map<string, number>();

    for (const project of projects) {
        for (const slug of getProjectTechnologySlugs(project)) {
            counts.set(slug, (counts.get(slug) ?? 0) + 1);
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
            const slug = normalizeTechSlug(name);
            if (hiddenFilterSlugs.has(slug)) {
                continue;
            }
            const projectCount = counts.get(slug) ?? 0;
            if (projectCount < minProjects && !alwaysShowFilterSlugs.has(slug)) {
                continue;
            }
            if (!bySlug.has(slug)) {
                bySlug.set(slug, name);
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
): TechnologyFilterGroup[] {
    const counts = countProjectsPerSlugFor(projects);

    return filterGroupOrder
        .map((key) => ({
            key,
            filters: filtersForGroupFromProjects(key, projects, counts, minProjectsByGroup[key]),
        }))
        .filter((group) => group.filters.length > 0);
}

/** Grouped filters — per-group thresholds; flagship singles in `alwaysShowFilterSlugs`. */
export function getGroupedTechnologyFilters(): TechnologyFilterGroup[] {
    const counts = countProjectsPerSlug();

    return filterGroupOrder
        .map((key) => ({
            key,
            filters: filtersForGroup(key, counts, minProjectsByGroup[key]),
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
