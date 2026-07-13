export const CV_TEMPLATE_IDS = ['classic'] as const;

export type CvTemplateId = (typeof CV_TEMPLATE_IDS)[number];

export interface CvTemplateMeta {
    id: CvTemplateId;
    label: string;
}

export const cvTemplateMeta: Record<CvTemplateId, CvTemplateMeta> = {
    classic: {
        id: 'classic',
        label: 'Classic',
    },
};

export function isCvTemplateId(value: string): value is CvTemplateId {
    return (CV_TEMPLATE_IDS as readonly string[]).includes(value);
}
