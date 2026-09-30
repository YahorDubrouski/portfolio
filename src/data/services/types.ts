export type ServiceMarkName =
    | 'sources'
    | 'target'
    | 'live'
    | 'rerun'
    | 'check'
    | 'archive'
    | 'plan'
    | 'boundary'
    | 'cloud'
    | 'risk'
    | 'order';

export interface ServiceFlowItem {
    kicker: string;
    title: string;
    body?: string;
    icon: ServiceMarkName;
    accent?: boolean;
}

export interface ServicePoint {
    title: string;
    body: string;
}

export interface ServiceGet extends ServicePoint {
    icon: ServiceMarkName;
}

export interface ServiceOffer {
    path: string;
    title: string;
    description: string;
    serviceType: string;
    identityLine: string;
    headline: string;
    lede: string;
    proof: readonly string[];
    proofNote?: string;
    priceMin: number;
    priceMax: number;
    flowAria: string;
    flowTitle?: string;
    flow: readonly ServiceFlowItem[];
    getsTitle: string;
    gets: readonly ServiceGet[];
    stepsTitle: string;
    stepsSubtitle: string;
    stepsSequence?: boolean;
    steps: readonly ServicePoint[];
    fitTitle: string;
    fit: readonly string[];
    priceTitle: string;
    priceAmount: string;
    priceBody: string;
    closingTitle: string;
    closingBody: string;
    ctaLabel: string;
    telegramHref: string;
}
