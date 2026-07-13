import type { RoleLandingConfig } from '../types';

export const backendLandingConfig: RoleLandingConfig = {
    outcomeIds: [
        'outcome-lead-gen-platform-2026',
        'outcome-sprint-throughput-30-40-2025',
        'outcome-ui-tests-cicd-2027',
    ],
    outcomesPageSectionOrder: [
        'delivery',
        'revenue',
        'costReduction',
        'reliability',
        'riskPrevention',
        'enablement',
    ],
    reviewsPageIds: [
        'review-linkedin-zhivitsky-2024',
        'review-linkedin-kolomiet-2023',
        'review-upwork-aws-devops-2025',
        'review-linkedin-karkusha-2021',
        'review-linkedin-zaiets-2023',
        'review-linkedin-prokharau-2021',
        'review-linkedin-tsetsiaruk-2023',
        'review-linkedin-zhorov-2021',
        'review-linkedin-bahdanovich-2021',
        'review-upwork-dev-environments-2026',
    ],
    reviewIds: [
        'review-linkedin-zhivitsky-2024',
        'review-linkedin-kolomiet-2023',
        'review-upwork-aws-devops-2025',
    ],
    projectIds: [
        'aidesk-mini',
        'arch-decisions',
        'aws-scalable-web-application',
    ],
    projectsPageSections: [
        {
            key: 'flagship',
            projectIds: ['aidesk-mini', 'arch-decisions', 'aws-scalable-web-application'],
        },
        {
            key: 'iacCiCd',
            projectIds: ['ci-showcase'],
        },
        {
            key: 'aiAutomation',
            projectIds: ['ai-planner', 'ai-amotions'],
        },
        {
            key: 'awsPatterns',
            projectIds: ['aws-real-time-data-processing', 'aws-serverless-application'],
        },
        {
            key: 'other',
            projectIds: [
                'jenkins-database-backup-pipelines',
                'terraform-ci-cd',
                'end-to-end',
            ],
        },
    ],
    integrationCategoryIds: [
        'crm-marketing-analytics',
        'commerce-billing-subscriptions',
        'ai-automation',
    ],
    integrationsPageCategoryOrder: [
        'crm-marketing-analytics',
        'commerce-billing-subscriptions',
        'data-stores',
        'ecommerce-maps',
        'collaboration',
        'ai-automation',
        'infrastructure-devops',
        'observability',
    ],
    certificateIds: [
        'Adobe Certified Professional – Adobe Commerce Developer',
        'Enterprise Patterns',
        'Building with the Claude API',
        'QA Automation Diploma',
    ],
    showPrinciples: true,
    showIntegrations: true,
    showCertificates: true,
    footerProofExclude: ['reviews', 'experience'],
};
