import type { RoleLandingConfig } from '../types';

export const devopsLandingConfig: RoleLandingConfig = {
    outcomeIds: [
        'outcome-subscriber-reliability-scaling-2027',
        'outcome-metabase-monitoring-2027',
        'outcome-ui-tests-cicd-2027',
    ],
    outcomesPageIds: [
        'outcome-subscriber-reliability-scaling-2027',
        'outcome-mongodb-postgres-migration-30pct-2025',
        'outcome-infrastructure-cost-retention-2026',
        'outcome-ui-tests-cicd-2027',
        'outcome-metabase-monitoring-2027',
        'outcome-lead-action-monitoring-of4484-2027',
        'outcome-puravita-monorepo-migration',
    ],
    reviewsPageIds: [
        'review-upwork-aws-devops-2025',
        'review-upwork-dev-environments-2026',
        'review-linkedin-zhivitsky-2024',
    ],
    projectIds: [
        'terraform-aws-infrastructure',
        'aws-scalable-web-application',
        'jenkins-database-backup-pipelines',
        'terraform-ci-cd',
    ],
    projectsPageSections: [
        {
            key: 'flagship',
            projectIds: ['devops-portfolio', 'terraform-aws-infrastructure'],
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
            projectIds: ['terraform-ci-cd', 'jenkins-database-backup-pipelines', 'ci-showcase'],
        },
    ],
    integrationCategoryIds: ['infrastructure-devops', 'observability', 'data-stores'],
    showPrinciples: true,
    showIntegrations: true,
    showCertificates: true,
    footerProofExclude: ['reviews', 'experience'],
};
