import type { CvTemplateId } from './templates';
import { CV_TEMPLATE_IDS } from './templates';
import { backendDevopsProfile } from './profiles/backend-devops';
import { devopsProfile } from './profiles/devops';
import { fullStackProfile } from './profiles/full-stack';
import { solutionArchitectProfile } from './profiles/solution-architect';
import type { CvDocument } from './types';

const cvProfiles: Record<string, CvDocument> = {
    [backendDevopsProfile.id]: backendDevopsProfile,
    [devopsProfile.id]: devopsProfile,
    [fullStackProfile.id]: fullStackProfile,
    [solutionArchitectProfile.id]: solutionArchitectProfile,
};

export function getCvProfile(slug: string): CvDocument | undefined {
    return cvProfiles[slug];
}

export function getCvSlugs(): string[] {
    return Object.keys(cvProfiles);
}

export function getDefaultTemplate(slug: string): CvTemplateId {
    const profile = getCvProfile(slug);
    return profile?.defaultTemplate ?? 'classic';
}

/** All slug + template pairs for static generation of explicit template URLs. */
export function getCvTemplatePaths(): Array<{ slug: string; template: CvTemplateId }> {
    const paths: Array<{ slug: string; template: CvTemplateId }> = [];

    for (const slug of getCvSlugs()) {
        for (const template of CV_TEMPLATE_IDS) {
            paths.push({ slug, template });
        }
    }

    return paths;
}
