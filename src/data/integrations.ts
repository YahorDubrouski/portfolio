import profileDatabase from '../../ai-agents/database/profile.json';

export type IntegrationCategoryId =
    | 'crm-marketing-analytics'
    | 'commerce-billing-subscriptions'
    | 'infrastructure-devops'
    | 'data-stores'
    | 'observability'
    | 'collaboration'
    | 'ecommerce-maps'
    | 'ai-automation';

/** Homepage — highest-signal integration groups only. Full list on `/integrations`. */
export const homeIntegrationCategoryIds = [
    'crm-marketing-analytics',
    'infrastructure-devops',
    'collaboration',
] as const satisfies readonly IntegrationCategoryId[];

interface ProfileIntegrationSystem {
    name: string;
    siteLabel?: string;
    publicSafe?: boolean;
}

interface ProfileIntegrationCategory {
    id: IntegrationCategoryId;
    name: string;
    systems: ProfileIntegrationSystem[] | string[];
}

export interface IntegrationCategory {
    id: IntegrationCategoryId;
    name: string;
    systems: string[];
}

function normalizeSystems(systems: ProfileIntegrationCategory['systems']): string[] {
    return systems
        .map((entry) => {
            if (typeof entry === 'string') {
                return { name: entry, publicSafe: true };
            }
            return entry;
        })
        .filter((entry) => entry.publicSafe !== false)
        .map((entry) => entry.siteLabel ?? entry.name);
}

/** Public integrations — sourced from `ai-agents/database/profile.json`. */
export function getPublicIntegrationCategories(): IntegrationCategory[] {
    const categories = profileDatabase.record.integrations?.categories ?? [];

    return (categories as ProfileIntegrationCategory[])
        .map((category) => ({
            id: category.id,
            name: category.name,
            systems: normalizeSystems(category.systems),
        }))
        .filter((category) => category.systems.length > 0);
}

export function getHomeIntegrationCategories(): IntegrationCategory[] {
    return getIntegrationCategoriesByIds(homeIntegrationCategoryIds);
}

export function getIntegrationCategoriesByIds(
    ids: readonly IntegrationCategoryId[],
): IntegrationCategory[] {
    const byId = new Map(getPublicIntegrationCategories().map((category) => [category.id, category]));

    return ids
        .map((id) => byId.get(id))
        .filter((category): category is IntegrationCategory => Boolean(category));
}

/** Flat list of all public integration names (deduplicated). */
export function getPublicIntegrationSystems(): string[] {
    const seen = new Set<string>();
    const names: string[] = [];

    for (const category of getPublicIntegrationCategories()) {
        for (const system of category.systems) {
            if (!seen.has(system)) {
                seen.add(system);
                names.push(system);
            }
        }
    }

    return names;
}
