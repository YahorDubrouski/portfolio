/** Internal portfolio paths for repo index cards (e.g. DevOps hub → hire landing). */
export const projectSitePaths: Partial<Record<string, `/${string}`>> = {
    'devops-portfolio': '/hire/devops',
};

export function getProjectSitePath(projectId: string): string | undefined {
    return projectSitePaths[projectId];
}
