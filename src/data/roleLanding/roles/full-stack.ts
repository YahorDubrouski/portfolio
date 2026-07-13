import type { RoleLandingConfig } from '../types';

export const fullStackLandingConfig: RoleLandingConfig = {
    outcomeIds: [
        'outcome-lead-gen-platform-2026',
        'outcome-sprint-throughput-30-40-2025',
        'outcome-ui-tests-cicd-2027',
    ],
    outcomesPageSectionOrder: [
        'delivery',
        'revenue',
        'enablement',
        'reliability',
        'costReduction',
        'riskPrevention',
    ],
    reviewsPageShowAll: true,
    reviewLimit: 3,
    projectIds: [
        'aidesk-mini',
        'arch-decisions',
        'ai-planner',
        'aws-scalable-web-application',
    ],
    projectsPageSectionOrder: [
        'flagship',
        'aiAutomation',
        'other',
        'awsPatterns',
        'iacCiCd',
        'devopsIndex',
    ],
    integrationCategoryIds: ['crm-marketing-analytics', 'infrastructure-devops', 'collaboration'],
    integrationsPageCategoryOrder: [
        'crm-marketing-analytics',
        'commerce-billing-subscriptions',
        'collaboration',
        'ecommerce-maps',
        'data-stores',
        'ai-automation',
        'infrastructure-devops',
        'observability',
    ],
    certificateIds: [
        'Adobe Certified Professional – Adobe Commerce Developer',
        'Meta Introduction to Front-End Development',
        'Meta Programming with JavaScript',
        'AWS Certified Solutions Architect – Associate',
    ],
    showPrinciples: true,
    showIntegrations: true,
    showCertificates: true,
    footerProofExclude: ['reviews', 'experience'],
};
