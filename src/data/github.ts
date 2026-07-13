/** GitHub repo URLs keyed by cache project id. */
export const githubUrls: Record<string, string> = {
    'arch-decisions': 'https://github.com/YahorDubrouski/arch-decisions',
    certificates: 'https://github.com/YahorDubrouski/Certificates',
    'devops-portfolio': 'https://github.com/YahorDubrouski/devops-portfolio',
    'dziana-portfolio': 'https://github.com/YahorDubrouski/dziana-portfolio',
    'yahor-portfolio': 'https://github.com/YahorDubrouski/portfolio',
    'ai-diary': 'https://github.com/YahorDubrouski/ai-planner',
    'ai-planner': 'https://github.com/YahorDubrouski/ai-planner',
    'aws-terraform-vpc-geocoder-example': 'https://github.com/YahorDubrouski/aws-terraform-vpc-geocoder-example',
    'aidesk-mini': 'https://github.com/YahorDubrouski/aidesk-mini',
    'end-to-end': 'https://github.com/YahorDubrouski/end-to-end',
    'ai-amotions': 'https://github.com/YahorDubrouski/ai-amotions',
    'atlassian-mcp': 'https://github.com/YahorDubrouski/atlassian-mcp',
    'file-storage': 'https://github.com/YahorDubrouski/File-storage',
    aws: 'https://github.com/YahorDubrouski/AWS',
    'aws-real-time-data-processing':
        'https://github.com/YahorDubrouski/AWS/tree/main/real-time-data-processing',
    'aws-scalable-web-application':
        'https://github.com/YahorDubrouski/AWS/tree/main/scalable-web-application',
    'aws-serverless-application':
        'https://github.com/YahorDubrouski/AWS/tree/main/serverless-application',
    'aws-guides': 'https://github.com/YahorDubrouski/aws-guides',
    'ci-showcase': 'https://github.com/YahorDubrouski/ci-showcase',
    'jenkins-database-backup-pipelines': 'https://github.com/YahorDubrouski/jenkins-database-backup-pipelines',
    'terraform-aws-infrastructure': 'https://github.com/YahorDubrouski/terraform-aws-infrastructure',
    'terraform-ci-cd': 'https://github.com/YahorDubrouski/terraform-ci-cd',
};

export function getGitHubUrl(projectId: string): string | undefined {
    return githubUrls[projectId];
}

/** GitHub blob URL for a file in a cached project repo (supports tree/… subpaths). */
export function githubBlob(projectId: string, filePath: string): string {
    const base = getGitHubUrl(projectId);
    if (!base) {
        return '#';
    }

    const cleanPath = filePath.replace(/^\//, '');
    const treeMatch = base.match(/^(https:\/\/github\.com\/[^/]+\/[^/]+)\/tree\/([^/]+)\/(.*)$/);
    if (treeMatch) {
        const [, repoRoot, branch, prefix] = treeMatch;
        const prefixPath = prefix ? `${prefix}/` : '';
        return `${repoRoot}/blob/${branch}/${prefixPath}${cleanPath}`;
    }

    return `${base.replace(/\/$/, '')}/blob/main/${cleanPath}`;
}
