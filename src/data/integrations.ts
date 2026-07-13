import {
    integrationCategories,
    type IntegrationCategoryId,
} from './integrationCategories';

export type { IntegrationCategoryId };

/** Homepage — highest-signal integration groups only. Full list on `/integrations`. */
export const homeIntegrationCategoryIds = [
    'crm-marketing-analytics',
    'infrastructure-devops',
    'collaboration',
] as const satisfies readonly IntegrationCategoryId[];

export interface IntegrationCategory {
    id: IntegrationCategoryId;
    name: string;
    systems: string[];
}

export function getPublicIntegrationCategories(): IntegrationCategory[] {
    return integrationCategories.filter((category) => category.systems.length > 0);
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
