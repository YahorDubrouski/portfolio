/** Internal portfolio paths for repo index cards (e.g. DevOps hub → hire landing). */
export const projectSitePaths: Partial<Record<string, `/${string}`>> = {
    'devops-portfolio': '/hire/devops',
};

/** Live demo URLs for project cards (opens in a new tab). */
export const projectDemoUrls: Partial<Record<string, string>> = {
    'arch-decisions': 'https://arch-decisions.yahordubrouski.com/',
    'arch-decisions-frontend': 'https://arch-decisions.yahordubrouski.com/',
};

/** Optional card chip order (overrides languages→frameworks concat). */
export const projectCardTechTags: Partial<Record<string, string[]>> = {
    'arch-decisions': ['react', 'fastapi', 'express', 'javascript', 'python'],
};

export function getProjectSitePath(projectId: string): string | undefined {
    return projectSitePaths[projectId];
}

export function getProjectDemoUrl(projectId: string): string | undefined {
    return projectDemoUrls[projectId];
}

export function getProjectCardTechTags(
    projectId: string,
    technologies: {
        languages: string[];
        frameworks: string[];
        cloud: string[];
        tools: string[];
        databases?: string[];
    },
): string[] {
    const override = projectCardTechTags[projectId];
    if (override?.length) {
        return override;
    }

    return [
        ...technologies.languages,
        ...technologies.frameworks,
        ...technologies.cloud,
        ...technologies.tools,
        ...(technologies.databases ?? []),
    ].slice(0, 6);
}
