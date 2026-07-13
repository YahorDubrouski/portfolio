export interface SiteOutcome {
    id: string;
    value: string;
    label: string;
    detail: string;
    /** Shorter copy for the homepage cards — falls back to `detail`. */
    homeDetail?: string;
    /** Internal path (e.g. /projects?stack=auto-scaling) or absolute URL for pattern demos */
    proofHref?: string;
    proofLabel?: string;
}

export type OutcomeSectionKey =
    | 'revenue'
    | 'reliability'
    | 'costReduction'
    | 'delivery'
    | 'riskPrevention'
    | 'enablement';

export interface OutcomeSection {
    key: OutcomeSectionKey;
    outcomeIds: string[];
}

/** Public, anonymized outcomes — ordered by business profitability (highest first). */
export const siteOutcomes: SiteOutcome[] = [
    {
        id: 'outcome-lead-gen-platform-2026',
        value: '−75% cost per lead',
        label: 'Lead gen platform — major team lift',
        detail:
            'Designed and built lead capture, conversion tracking, and anti-spam for a B2B marketing platform — edge protection, rate limits, optional verification, and AI-assisted lead quality filtering. Team delivery across marketing and engineering.',
        homeDetail:
            'Lead capture, CAPI integrations, and anti-spam for a B2B marketing platform — delivered with marketing and engineering.',
    },
    {
        id: 'outcome-subscriber-reliability-scaling-2027',
        value: '×3 traffic absorbed',
        label: 'Horizontal scaling under load',
        detail:
            'Separated web, scheduled, and background workloads into independently scaled services — no downtime or client-facing errors.',
        homeDetail:
            'Split web, scheduled, and background workloads into independently scaled services — zero downtime under load.',
        proofHref: '/proof/docker',
        proofLabel: 'Docker proof',
    },
    {
        id: 'outcome-mongodb-postgres-migration-30pct-2025',
        value: '×3 lower database cost',
        label: 'Multiple databases → one',
        detail:
            'Migrated multiple databases to a single relational store — complete cutover with zero downtime and no data loss.',
        homeDetail:
            'Consolidated multiple databases into one relational store — zero-downtime cutover, no data loss.',
    },
    {
        id: 'outcome-bigquery-api-v2-cost-reduction-2025',
        value: '3h → 20m senior dev time daily',
        label: 'API integration architecture',
        detail:
            'Synced replica instead of live API calls to avoid rate limits; idempotent jobs with regular retries. Daily integration firefighting: ~3 hours → ~20 minutes.',
    },
    {
        id: 'outcome-infrastructure-cost-retention-2026',
        value: '50 GB/week registry reclaimed',
        label: 'Container registry cleanup',
        detail:
            'Automated removal of stale container images from the registry — reclaims ~50 GB per week and cuts ongoing storage cost.',
    },
    {
        id: 'outcome-sprint-throughput-30-40-2025',
        value: '7 → 20 features per week',
        label: 'Sprint delivery throughput',
        detail:
            'Same sprint cadence — business feature delivery from ~7 to ~20 tickets per week without adding headcount.',
    },
    {
        id: 'outcome-ai-team-productivity-2-3x-2027',
        value: '~2× team throughput',
        label: 'AI tooling adoption',
        detail:
            'Introduced AI-assisted development workflows across the team — ~2× overall throughput, ~2–3× per engineer.',
    },
    {
        id: 'outcome-ui-tests-cicd-2027',
        value: '7–14× faster release cadence',
        label: 'API integration tests in CI',
        detail:
            'Critical business domains covered with full API integration tests in CI — deploy daily vs weekly; manual backend QA ~3–4 h/day → near zero.',
        proofHref: '/projects/aidesk-mini',
        proofLabel: 'Example: API test suite',
    },
    {
        id: 'outcome-code-review-cursor-mcp-2027',
        value: '1.5h → 20m code review daily',
        label: 'Code review automation',
        detail:
            'Automated review workflows and test generation — daily review time cut from ~1.5 hours to ~20 minutes.',
    },
    {
        id: 'outcome-netsuite-payment-integration-2027',
        value: 'Weeks unblocked billing integration',
        label: 'Shipping without dev sandbox',
        detail:
            'Staged outbound integration calls with a production feature toggle — ship and validate on real data without waiting months for a vendor dev environment.',
    },
    {
        id: 'outcome-metabase-monitoring-2027',
        value: 'Weeks → hours error detection',
        label: 'Proactive monitoring',
        detail:
            'Configurable health checks and alerts — issues surfaced within hours instead of 1–2 weeks via client reports.',
    },
    {
        id: 'outcome-provider-integration-tests-ci-2027',
        value: 'Before prod breaks caught',
        label: 'Vendor API changes in CI',
        detail:
            'Breaking vendor API changes detected in staging before production deploy — fix or escalate before customers are affected.',
    },
    {
        id: 'outcome-bq-to-airbyte-migration-2027',
        value: '1 min → seconds query time',
        label: 'Analytics query performance',
        detail:
            'Moved analytics workloads from a warehouse without usable indexes to synced database replicas — query time from ~1 minute to seconds; background job timeouts eliminated.',
    },
    {
        id: 'outcome-lead-action-monitoring-of4484-2027',
        value: '5× faster incident investigation',
        label: 'Incident investigation',
        detail:
            'Centralized activity logging with fast lookup — investigation from ~1 hour to minutes.',
    },
    {
        id: 'outcome-translation-speed-dozens-2024',
        value: '6× faster content translation',
        label: 'Multi-locale publishing',
        detail:
            'Automated translation pipeline for multi-locale content — localization ~6× faster than manual process.',
    },
    {
        id: 'outcome-offline-docs-40mb-pdf',
        value: '3h → 20m PDF generation',
        label: 'Offline PDF export',
        detail:
            'Parallel rendering and image optimization — generation from ~3 hours to ~20 minutes; output size reduced by ~80%.',
    },
    {
        id: 'outcome-puravita-monorepo-migration',
        value: '4h → 20m release prep weekly',
        label: 'Monorepo consolidation',
        detail:
            'Consolidated custom modules from separate repositories into a monorepo — weekly release prep from ~4 hours to ~20 minutes.',
    },
];

export const outcomeSections: OutcomeSection[] = [
    {
        key: 'revenue',
        outcomeIds: ['outcome-lead-gen-platform-2026'],
    },
    {
        key: 'reliability',
        outcomeIds: ['outcome-subscriber-reliability-scaling-2027'],
    },
    {
        key: 'costReduction',
        outcomeIds: [
            'outcome-mongodb-postgres-migration-30pct-2025',
            'outcome-bigquery-api-v2-cost-reduction-2025',
            'outcome-infrastructure-cost-retention-2026',
        ],
    },
    {
        key: 'delivery',
        outcomeIds: [
            'outcome-sprint-throughput-30-40-2025',
            'outcome-ai-team-productivity-2-3x-2027',
            'outcome-ui-tests-cicd-2027',
            'outcome-code-review-cursor-mcp-2027',
            'outcome-netsuite-payment-integration-2027',
        ],
    },
    {
        key: 'riskPrevention',
        outcomeIds: [
            'outcome-metabase-monitoring-2027',
            'outcome-provider-integration-tests-ci-2027',
            'outcome-bq-to-airbyte-migration-2027',
            'outcome-lead-action-monitoring-of4484-2027',
        ],
    },
    {
        key: 'enablement',
        outcomeIds: [
            'outcome-translation-speed-dozens-2024',
            'outcome-offline-docs-40mb-pdf',
            'outcome-puravita-monorepo-migration',
        ],
    },
];

export const homeOutcomeIds = [
    'outcome-lead-gen-platform-2026',
    'outcome-subscriber-reliability-scaling-2027',
    'outcome-mongodb-postgres-migration-30pct-2025',
] as const;

export function getHomeOutcomes(): SiteOutcome[] {
    return homeOutcomeIds
        .map((id) => siteOutcomes.find((outcome) => outcome.id === id))
        .filter((outcome): outcome is SiteOutcome => Boolean(outcome));
}

export function getOutcomesForSection(section: OutcomeSection): SiteOutcome[] {
    return getOutcomesByIds(section.outcomeIds);
}

export function getOutcomesByIds(ids: readonly string[]): SiteOutcome[] {
    return ids
        .map((id) => siteOutcomes.find((outcome) => outcome.id === id))
        .filter((outcome): outcome is SiteOutcome => Boolean(outcome));
}
