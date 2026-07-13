import type { HireRole } from '../../i18n/translations/site';
import type { SiteTranslations } from '../../i18n/translations/site';
import type { Locale } from '../../i18n/locales';
import type { IntegrationCategoryId } from '../integrations';
import { getIntegrationCategoriesByIds } from '../integrations';
import { getOutcomesByIds, outcomeSections, type OutcomeSection } from '../outcomes';
import type { SiteOutcome } from '../outcomes';
import type { ProjectSectionKey } from '../projects';
import { getCertificatesForRole, getProjectsByIds, getProjectsForRole, getProjectsForSection, projectSections } from '../projects';
import type { CachedProject } from '../projects';
import { getReviewsByIds, getReviewsForRole, getReviews } from '../reviews';
import type { Review } from '../reviews';
import { backendLandingConfig } from './roles/backend';
import { devopsLandingConfig } from './roles/devops';
import { fullStackLandingConfig } from './roles/full-stack';
import type { RoleLandingConfig, RoleLandingCopy } from './types';

export type { RoleLandingConfig, RoleLandingCopy, RoleLandingPrinciple, RoleLandingProofItem } from './types';

/**
 * Registry of roles using the home-style landing template (`RoleLandingPage.astro`).
 *
 * To add a role:
 * 1. Create `src/data/roleLanding/roles/<role>.ts` with `RoleLandingConfig`.
 * 2. Register it below in `roleLandingRegistry`.
 * 3. Add `landing: { ... }` copy under `t.hire.<role>` in `src/i18n/translations/site.ts`.
 * 4. Point `src/pages/hire/<role>/projects.astro` at `ProjectsPage` with `role="<role>"`.
 * 4b. Point `src/pages/hire/<role>/outcomes.astro` at `OutcomesPage` with `role="<role>"`.
 * 4c. Point `src/pages/hire/<role>/reviews.astro` at `ReviewsPage` with `role="<role>"`.
 * 4d. Point `src/pages/hire/<role>/integrations.astro` at `IntegrationsPage` with `role="<role>"`.
 * 5. Point `src/pages/hire/<role>.astro` (and `/ru/`) at `RoleLandingPage` instead of `HireRolePage`.
 *
 * Reviews and certificates reuse existing role filters (`getReviewsForRole`, `getCertificatesForRole`).
 */
const roleLandingRegistry = {
    backend: backendLandingConfig,
    devops: devopsLandingConfig,
    'full-stack': fullStackLandingConfig,
} as const satisfies Partial<Record<HireRole, RoleLandingConfig>>;

export type RoleWithLanding = keyof typeof roleLandingRegistry;

export const rolesWithLanding = Object.keys(roleLandingRegistry) as RoleWithLanding[];

export function hasRoleLanding(role: HireRole): role is RoleWithLanding {
    return role in roleLandingRegistry;
}

export function hasRoleProjectsPage(role: HireRole): role is RoleWithLanding {
    return hasRoleLanding(role);
}

export function getRoleProjectsPath(role: HireRole): `/hire/${RoleWithLanding}/projects` | null {
    if (!hasRoleProjectsPage(role)) {
        return null;
    }
    return `/hire/${role}/projects`;
}

export function hasRoleOutcomesPage(role: HireRole): role is RoleWithLanding {
    return hasRoleLanding(role);
}

export function getRoleOutcomesPath(role: HireRole): `/hire/${RoleWithLanding}/outcomes` | null {
    if (!hasRoleOutcomesPage(role)) {
        return null;
    }
    return `/hire/${role}/outcomes`;
}

export function getOutcomeSectionsForRolePage(role: HireRole): OutcomeSection[] | null {
    const config = getRoleLandingConfig(role);

    if (config?.outcomesPageSectionOrder?.length) {
        return config.outcomesPageSectionOrder
            .map((key) => outcomeSections.find((section) => section.key === key))
            .filter((section): section is OutcomeSection => Boolean(section));
    }

    if (!config?.outcomesPageIds?.length) {
        return null;
    }

    const allowed = new Set(config.outcomesPageIds);
    return outcomeSections
        .map((section) => ({
            ...section,
            outcomeIds: section.outcomeIds.filter((id) => allowed.has(id)),
        }))
        .filter((section) => section.outcomeIds.length > 0);
}

export function hasRoleReviewsPage(role: HireRole): role is RoleWithLanding {
    return hasRoleLanding(role);
}

export function getRoleReviewsPath(role: HireRole): `/hire/${RoleWithLanding}/reviews` | null {
    if (!hasRoleReviewsPage(role)) {
        return null;
    }
    return `/hire/${role}/reviews`;
}

export function getReviewsForRolePage(role: HireRole, locale: Locale = 'en'): Review[] {
    const config = getRoleLandingConfig(role);

    if (config?.reviewsPageShowAll) {
        const all = getReviews(locale);
        const roleTagged = all.filter((review) => review.roles.includes(role));
        const rest = all.filter((review) => !review.roles.includes(role));
        return [...roleTagged, ...rest];
    }

    if (config?.reviewsPageIds?.length) {
        return getReviewsByIds(config.reviewsPageIds, locale);
    }
    return getReviewsForRole(role, Number.MAX_SAFE_INTEGER, locale);
}

export function hasRoleIntegrationsPage(role: HireRole): role is RoleWithLanding {
    return hasRoleLanding(role);
}

export function getRoleIntegrationsPath(role: HireRole): `/hire/${RoleWithLanding}/integrations` | null {
    if (!hasRoleIntegrationsPage(role)) {
        return null;
    }
    return `/hire/${role}/integrations`;
}

export function getIntegrationCategoriesForRolePage(
    role: HireRole,
    t: SiteTranslations,
): RoleLandingContext['integrationCategories'] {
    const config = getRoleLandingConfig(role);
    if (config?.integrationsPageCategoryOrder?.length) {
        return integrationLabels(config.integrationsPageCategoryOrder, t);
    }

    const categoryIds = config?.integrationsPageCategoryIds ?? config?.integrationCategoryIds;
    if (!categoryIds?.length) {
        return [];
    }
    return integrationLabels(categoryIds, t);
}

export function hasRoleCertificatesPage(role: HireRole): role is RoleWithLanding {
    return hasRoleLanding(role);
}

export function getRoleCertificatesPath(role: HireRole): `/hire/${RoleWithLanding}/certificates` | null {
    if (!hasRoleCertificatesPage(role)) {
        return null;
    }
    return `/hire/${role}/certificates`;
}

export function getRoleLandingConfig(role: HireRole): RoleLandingConfig | undefined {
    if (!hasRoleLanding(role)) {
        return undefined;
    }
    return roleLandingRegistry[role];
}

export interface RoleLandingContext {
    role: RoleWithLanding;
    config: RoleLandingConfig;
    copy: RoleLandingCopy;
    roleTitle: string;
    roleIntro: string;
    cvLabel: string;
    outcomes: SiteOutcome[];
    projects: CachedProject[];
    reviews: Review[];
    certificates: string[];
    integrationCategories: {
        id: IntegrationCategoryId;
        label: string;
        systems: string[];
    }[];
}

function integrationLabels(
    categoryIds: readonly IntegrationCategoryId[] | undefined,
    t: SiteTranslations,
): RoleLandingContext['integrationCategories'] {
    if (!categoryIds?.length) {
        return [];
    }

    return getIntegrationCategoriesByIds(categoryIds).map((category) => ({
        id: category.id,
        label: t.home.integrationCategories[category.id] ?? category.name,
        systems: category.systems,
    }));
}

export function getProjectsForRolePage(role: HireRole): CachedProject[] {
    const config = getRoleLandingConfig(role);
    const orderedSections = getProjectSectionsForRolePage(role);
    if (orderedSections) {
        return orderedSections.flatMap((section) => section.projects);
    }
    if (config?.projectsPageIds) {
        return getProjectsByIds(config.projectsPageIds);
    }
    return getProjectsForRole(role);
}

export interface RolePageProjectSection {
    key: ProjectSectionKey;
    projects: CachedProject[];
}

export function getProjectSectionsForRolePage(role: HireRole): RolePageProjectSection[] | null {
    const config = getRoleLandingConfig(role);

    if (config?.projectsPageSectionOrder?.length) {
        return config.projectsPageSectionOrder
            .map((key) => {
                const section = projectSections.find((entry) => entry.key === key);
                if (!section) {
                    return null;
                }
                return {
                    key: section.key,
                    projects: getProjectsForSection(section),
                };
            })
            .filter((section): section is RolePageProjectSection => Boolean(section) && section.projects.length > 0);
    }

    if (!config?.projectsPageSections) {
        return null;
    }

    return config.projectsPageSections
        .map((section) => ({
            key: section.key,
            projects: getProjectsByIds(section.projectIds),
        }))
        .filter((section) => section.projects.length > 0);
}

/** Validates config + copy and resolves all section data for `RoleLandingPage`. */
export function resolveRoleLanding(
    role: HireRole,
    locale: Locale,
    t: SiteTranslations,
): RoleLandingContext {
    const config = getRoleLandingConfig(role);
    if (!config) {
        throw new Error(
            `[roleLanding] Missing config for "${role}". Add src/data/roleLanding/roles/${role}.ts and register it in roleLandingRegistry.`,
        );
    }

    const hireCopy = t.hire[role];
    const copy = hireCopy.landing;
    if (!copy) {
        throw new Error(
            `[roleLanding] Missing copy for "${role}". Add t.hire.${role}.landing in src/i18n/translations/site.ts.`,
        );
    }

    const curatedProjects = config.projectIds
        ? getProjectsByIds(config.projectIds)
        : getProjectsForRole(role);
    const projectLimit = config.projectLimit ?? curatedProjects.length;
    const roleCertificates = getCertificatesForRole(role);
    const landingCertificates = config.certificateIds
        ? config.certificateIds.filter((id) => roleCertificates.includes(id))
        : roleCertificates;

    return {
        role,
        config,
        copy,
        roleTitle: hireCopy.title,
        roleIntro: hireCopy.intro,
        cvLabel: hireCopy.cvLabel,
        outcomes: getOutcomesByIds(config.outcomeIds),
        projects: curatedProjects.slice(0, projectLimit),
        reviews: config.reviewIds?.length
            ? getReviewsByIds(config.reviewIds, locale)
            : getReviewsForRole(role, config.reviewLimit ?? 3, locale),
        certificates: config.showCertificates ? landingCertificates : [],
        integrationCategories: integrationLabels(config.integrationCategoryIds, t),
    };
}
