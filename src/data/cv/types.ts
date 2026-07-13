import type { CvTemplateId } from './templates';

export interface CvContactItem {
    type: 'email' | 'location' | 'phone' | 'linkedin';
    label: string;
    href?: string;
}

export interface CvExperienceEntry {
    title: string;
    companyLine: string;
    project?: string;
    description?: string;
    responsibilitiesLabel?: boolean;
    bullets: string[];
    tools?: string;
}

export interface CvSkillGroup {
    label: string;
    items: string[];
}

export interface CvEducation {
    title: string;
    institutionLine: string;
    detail: string;
}

/** Role-specific CV content — shared shape for all profiles and templates. */
export interface CvDocument {
    id: string;
    roleTitle: string;
    name: { first: string; last: string };
    photoSrc: string;
    photoSrcWebp?: string;
    contact: CvContactItem[];
    skillGroups: CvSkillGroup[];
    languages: string[];
    summary: string;
    experience: CvExperienceEntry[];
    education: CvEducation;
    certificates: string[];
    certificatesLink: string;
    /** Visual template used when none is specified in the URL. */
    defaultTemplate?: CvTemplateId;
}
