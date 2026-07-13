import type { IntegrationCategoryId } from '../integrations';
import type { OutcomeSectionKey } from '../outcomes';
import type { ProjectSectionKey } from '../projects';

export interface RoleProjectSection {
    key: ProjectSectionKey;
    projectIds: readonly string[];
}

/** Curated IDs and section toggles — no marketing copy. */
export interface RoleLandingConfig {
    /** 2–3 outcome ids from `siteOutcomes` (`src/data/outcomes.ts`). */
    outcomeIds: readonly string[];
    /** Full allowlist for `/hire/{role}/outcomes`; omit to show all outcomes. */
    outcomesPageIds?: readonly string[];
    /** Reorder global outcome sections on role page (shows all outcomes in those sections). */
    outcomesPageSectionOrder?: readonly OutcomeSectionKey[];
    /** Full allowlist for `/hire/{role}/reviews`; omit to filter by role tag. */
    reviewsPageIds?: readonly string[];
    /** Curated review ids for landing carousel; omit to filter by role tag. */
    reviewIds?: readonly string[];
    /** Show every review on role page — full-stack tagged first, then the rest. */
    reviewsPageShowAll?: boolean;
    /** Curated project ids; omit to auto-pick from `getProjectsForRole`. */
    projectIds?: readonly string[];
    /** Section layout for `/hire/{role}/projects`; omit to filter global sections by role. */
    projectsPageSections?: readonly RoleProjectSection[];
    /** Reorder global project sections on role page (shows all projects in those sections). */
    projectsPageSectionOrder?: readonly ProjectSectionKey[];
    /** Full allowlist when `projectsPageSections` is not set. */
    projectsPageIds?: readonly string[];
    projectLimit?: number;
    /** Integration category ids from `src/data/integrations.ts`. */
    integrationCategoryIds?: readonly IntegrationCategoryId[];
    /** Full allowlist for `/hire/{role}/integrations`; omit to reuse `integrationCategoryIds`. */
    integrationsPageCategoryIds?: readonly IntegrationCategoryId[];
    /** Reorder all integration categories on role page (shows every public category). */
    integrationsPageCategoryOrder?: readonly IntegrationCategoryId[];
    /** Curated certificate ids for landing only; omit to show all from `getCertificatesForRole`. */
    certificateIds?: readonly string[];
    showPrinciples?: boolean;
    showIntegrations?: boolean;
    showCertificates?: boolean;
    /** Max reviews in carousel (default 3). */
    reviewLimit?: number;
    /** Footer proof nav keys to hide on `/hire/{role}/*`. */
    footerProofExclude?: readonly string[];
}

export interface RoleLandingProofItem {
    label: string;
    /** Link badge to `/certificates`. */
    linkCertificates?: boolean;
}

export interface RoleLandingPrinciple {
    title: string;
    body: string;
}

/** Marketing copy for a role landing — lives in `t.hire[role].landing` (`site.ts`). */
export interface RoleLandingCopy {
    heroIdentityLine: string;
    heroHeadline: string;
    proofItems: RoleLandingProofItem[];
    outcomesSubtitle: string;
    /** Title for `/hire/{role}/outcomes` — e.g. "DevOps outcomes". */
    outcomesPageTitle: string;
    reviewsSubtitle: string;
    /** Title for `/hire/{role}/reviews` — e.g. "DevOps reviews". */
    reviewsPageTitle: string;
    projectsSubtitle: string;
    /** Title for `/hire/{role}/projects` — e.g. "DevOps projects". */
    projectsPageTitle: string;
    integrationsSubtitle: string;
    /** Title for `/hire/{role}/integrations` — e.g. "DevOps integrations". */
    integrationsPageTitle: string;
    /** Title for `/hire/{role}/certificates` — e.g. "DevOps certificates". */
    certificatesPageTitle: string;
    principlesTitle: string;
    principlesSubtitle: string;
    principles: RoleLandingPrinciple[];
    certificatesTitle?: string;
    closingTitle: string;
    closingBody: string;
}
