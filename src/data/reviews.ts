import type { HireRole } from '../i18n/translations/site';
import type { Locale } from '../i18n/locales';

export type ReviewProof =
    | { type: 'external'; href: string; label: string }
    | { type: 'image'; src: string; alt: string; label: string };

export interface Review {
    id: string;
    source: 'Upwork' | 'LinkedIn' | 'Direct';
    clientType: string;
    authorRole?: string;
    roles: HireRole[];
    /** Default (English) quote for the public site */
    quote: string;
    /** Russian quote when the source recommendation was written in Russian */
    quoteRu?: string;
    /** Curated highlight for home — full quote stays on /reviews */
    homeExcerpt?: string;
    rating?: number;
    featured?: boolean;
    proof?: ReviewProof;
}

const linkedInRecommendationsUrl = 'https://www.linkedin.com/in/yahor-dubrouski/details/recommendations/';
const upworkProfileUrl = 'https://www.upwork.com/freelancers/~01457e30e49f253732';

/** Home featured — paid clients first, then strongest colleague proof. */
export const homeReviewIds = [
    'review-upwork-aws-devops-2025',
    'review-linkedin-zhivitsky-2024',
    'review-upwork-dev-environments-2026',
] as const;

/**
 * Full /reviews page order — clients first (newest → oldest), then LinkedIn colleagues
 * (strongest business signal → older peers).
 */
export const siteReviewIds = [
    'review-upwork-aws-devops-2025',
    'review-upwork-dev-environments-2026',
    'review-linkedin-zhivitsky-2024',
    'review-linkedin-kolomiet-2023',
    'review-linkedin-zaiets-2023',
    'review-linkedin-karkusha-2021',
    'review-linkedin-tsetsiaruk-2023',
    'review-linkedin-zhorov-2021',
    'review-linkedin-bahdanovich-2021',
    'review-linkedin-prokharau-2021',
] as const;

/** Public site reviews — curated from AI DB (`publicSafe: true` LinkedIn + Upwork). */
const reviewRecords: Review[] = [
    {
        id: 'review-upwork-aws-devops-2025',
        source: 'Upwork',
        clientType: 'AWS DevOps client',
        authorRole: 'Upwork client',
        roles: ['devops', 'backend'],
        quote:
            'Yahor has an exceptional depth of understanding in DevOps and cloud infrastructure, combining strong technical expertise with a clear business mindset. He works seamlessly with both engineering teams and business stakeholders, translating complex infrastructure goals into reliable, scalable outcomes. He is a proactive communicator. His ability to identify improvement opportunities, streamline processes, and proactively solve problems makes him stand out as a trusted partner rather than just a contractor. I am extremely pleased that I picked Yahor to work with us. In a sea of Upwork talent, he truly stands out. I will not hesitate to hire him again for our future DevOps needs as we scale. If you are looking for a DevOps professional who delivers enterprise-level results with genuine commitment and care, Yahor is the person you want on your team.',
        homeExcerpt:
            'He combines strong technical expertise with a clear business mindset, translating complex infrastructure goals into reliable, scalable outcomes. In a sea of Upwork talent, he truly stands out — if you are looking for a DevOps professional who delivers enterprise-level results with genuine commitment and care, Yahor is the person you want on your team.',
        rating: 5,
        featured: true,
        proof: { type: 'external', href: upworkProfileUrl, label: 'View on Upwork' },
    },
    {
        id: 'review-upwork-dev-environments-2026',
        source: 'Upwork',
        clientType: 'Dev / Staging / Production environments',
        authorRole: 'Upwork client',
        roles: ['devops'],
        quote: 'Yahor is a standout! I highly recommend him to anyone who is looking for solid DevOps work.',
        rating: 5,
        featured: false,
        proof: { type: 'external', href: upworkProfileUrl, label: 'View on Upwork' },
    },
    {
        id: 'review-linkedin-zhivitsky-2024',
        source: 'LinkedIn',
        clientType: 'B2B Growth & Demand Generation',
        authorRole: 'Alexander Zhivitsky',
        roles: ['backend', 'devops', 'full-stack'],
        quote:
            'I had the pleasure of working with Yahor while collaborating between marketing and engineering teams.\n\nWhat I especially value about Yahor is that he is not just a strong backend engineer, but a technical specialist who understands business goals, marketing needs, and product impact. He is able to translate unclear business requirements into concrete technical solutions, ask the right questions, and find practical ways to move things forward.\n\nWe worked together on topics related to tracking, integrations, automation, data accuracy, and technical support for marketing processes. Yahor consistently demonstrated strong ownership, attention to detail, and the ability to investigate complex problems across different systems.\n\nHe combines deep Laravel/backend expertise with DevOps thinking, API integration skills, and a strong understanding of how technical decisions affect business results. He is also proactive in improving processes, documentation, and communication between teams.\n\nI would confidently recommend Yahor for senior engineering, technical lead, solutions engineering, or DevOps-oriented roles. He is the kind of person who can take responsibility for complex technical areas and help both technical and non-technical teams achieve better results.',
        homeExcerpt:
            'What I especially value about Yahor is that he is not just a strong backend engineer, but a technical specialist who understands business goals, marketing needs, and product impact. He combines deep backend expertise with DevOps thinking and a strong understanding of how technical decisions affect business results. I would confidently recommend Yahor for senior engineering, technical lead, or DevOps-oriented roles.',
        featured: true,
        proof: { type: 'external', href: linkedInRecommendationsUrl, label: 'View on LinkedIn' },
    },
    {
        id: 'review-linkedin-zaiets-2023',
        source: 'LinkedIn',
        clientType: 'Magento 2 developer',
        authorRole: 'Volodymyr Zaiets',
        roles: ['backend', 'full-stack'],
        quote:
            "Egor is an experienced developer with an excellent knowledge of Magento-2 and related technologies. You don't need to spend a time on a daily supervision or mentoring him. Egor can carry out his part of a project independently. He is inclined to in-depth study of theoretical foundations and self-education. Egor implements the new knowledge into a practice then shares it between colleagues. I am sure he can learn any other technology in a strict time with a best performance.",
        featured: false,
        proof: { type: 'external', href: linkedInRecommendationsUrl, label: 'View on LinkedIn' },
    },
    {
        id: 'review-linkedin-kolomiet-2023',
        source: 'LinkedIn',
        clientType: 'SQA Engineer',
        authorRole: 'Alexandr Kolomiet',
        roles: ['backend', 'full-stack'],
        quote:
            'Yahor is an exceptional developer who possesses all the skills one would want in an excellent software developer. He masters the top programming languages. He has been a great resource to my company. He did an incredible job on all tasks, making timely deliveries and helping me to do necessary refactoring with minimum risks as for business as for tech. department. His work is always top-notch, and he is always welcoming to feedback and making improvements. Plus, Yahor is self-motivated and a great team player. Hope to have possibility to works again with you.',
        featured: true,
        proof: { type: 'external', href: linkedInRecommendationsUrl, label: 'View on LinkedIn' },
    },
    {
        id: 'review-linkedin-tsetsiaruk-2023',
        source: 'LinkedIn',
        clientType: 'Magento 2 developer',
        authorRole: 'Siarhei Tsetsiaruk',
        roles: ['backend', 'full-stack'],
        quote:
            'Egor is a responsible, conscientious and purposeful developer. He is a highly qualified specialist. Constantly working on himself to become better, demanding of himself (more) and others. Easily admits his mistakes and tactfully points out the mistakes of colleagues. Non-conflict person.',
        featured: false,
        proof: { type: 'external', href: linkedInRecommendationsUrl, label: 'View on LinkedIn' },
    },
    {
        id: 'review-linkedin-karkusha-2021',
        source: 'LinkedIn',
        clientType: 'Adobe Commerce Architect',
        authorRole: 'Artemii Karkusha',
        roles: ['backend', 'full-stack'],
        quote:
            'I worked with Egor for over a year. He is a professional in his field, who constantly hones his skills and adds new ones. He was very active in the company. Likewise, he introduced new things to improve the quality of products. Furthermore, he is a great mentor and student. It was comfortable to communicate with him. He knows how to explain the task, the problem, the functionality made in very simple words. He loves and knows how to give a presentation for many people and knows how to present this information to any people. For him, a word qualitatively is not just words in the vocabulary, but one of the points to which he always strives. His code and all his tasks have always been performed with excellent quality. He always thinks over the smallest details.',
        featured: false,
        proof: { type: 'external', href: linkedInRecommendationsUrl, label: 'View on LinkedIn' },
    },
    {
        id: 'review-linkedin-zhorov-2021',
        source: 'LinkedIn',
        clientType: 'Frontend developer',
        authorRole: 'Alex Zhorov',
        roles: ['backend', 'full-stack'],
        quote:
            'High-level specialist.\nPossesses excellent knowledge of Magento 2.\nShe has knowledge in the field PHP.\nExcellent communication skills.\nGreat mentor.\nThanks to Egor, I was able to learn a lot in Magento 2 and PHP.',
        featured: false,
        proof: { type: 'external', href: linkedInRecommendationsUrl, label: 'View on LinkedIn' },
    },
    {
        id: 'review-linkedin-bahdanovich-2021',
        source: 'LinkedIn',
        clientType: 'Senior Software Engineer',
        authorRole: 'Dzmitry Bahdanovich',
        roles: ['backend', 'full-stack'],
        quote:
            'I worked with Egor on one project for a year and I want to note that Egor is a respectable, diligent developer, capable of finding an optimal solution to a problem in a short time.',
        featured: false,
        proof: { type: 'external', href: linkedInRecommendationsUrl, label: 'View on LinkedIn' },
    },
    {
        id: 'review-linkedin-prokharau-2021',
        source: 'LinkedIn',
        clientType: 'Backend developer',
        authorRole: 'Dimitriy Prokharau',
        roles: ['backend', 'full-stack'],
        quote:
            'To begin with, Yahor is a very good and decent person who energizes everyone around him. He is someone who makes you want to develop yourself first and foremost. He motivates you to move forward, keep improving, and treat your work responsibly and meticulously. That is why a team finds it very hard to let go of people like him. My first impression was: "What a sharp guy! How lucky I am to have joined this company and to work on a team with people like him." He is passionate about what he does. You can safely say programming is his calling. I am sorry our professional paths diverged. I hope not for long. Any company that brings Yahor on board will gain more than just a qualified professional.',
        quoteRu:
            'Для начала Егор очень хороший и порядочный парень, заряжающий своей энергетикой. Это человек, находясь рядом с которым хочется развиваться, в первую очередь, самому. Он мотивирует двигаться вперед, постоянно совершенствоваться, ответственно и педантично относиться к своей работе. Поэтому коллектив очень тяжело отпускает таких сотрудников. Мое первое впечатление о нем было - «Какой толковый парень! Как мне повезло, что я попал в эту компанию и что в нашей команде работают такие ребята».\n\nОн горит делом, которым занимается. Можно смело заявить, что программирование - это его призвание. Мне жаль, что наши профессиональные пути разошлись. Надеюсь, не надолго.\n\nЛюбая компания, принявшая Егора в свои ряды, получит нечто большее, кроме как квалифицированного профессионала.',
        featured: false,
        proof: { type: 'external', href: linkedInRecommendationsUrl, label: 'View on LinkedIn' },
    },
];

function findReview(id: string): Review | undefined {
    return reviewRecords.find((review) => review.id === id);
}

export const reviews: Review[] = siteReviewIds
    .map((id) => findReview(id))
    .filter((review): review is Review => Boolean(review));

function orderReviews(ids: readonly string[], locale: Locale): Review[] {
    return ids
        .map((id) => findReview(id))
        .filter((review): review is Review => Boolean(review))
        .map((review) => localizeReview(review, locale));
}

function localizeReview(review: Review, locale: Locale): Review {
    if (locale === 'ru' && review.quoteRu) {
        return { ...review, quote: review.quoteRu };
    }
    return review;
}

export function getReviewsByIds(ids: readonly string[], locale: Locale = 'en'): Review[] {
    return orderReviews(ids, locale);
}

export function getReviews(locale: Locale = 'en'): Review[] {
    return orderReviews(siteReviewIds, locale);
}

export function getReviewsForRole(role: HireRole, limit = 3, locale: Locale = 'en'): Review[] {
    return getReviews(locale)
        .filter((review) => review.roles.includes(role))
        .slice(0, limit);
}

export function getFeaturedReviews(limit = 3, locale: Locale = 'en'): Review[] {
    return orderReviews(homeReviewIds, locale).slice(0, limit);
}

/** Home block — same trio as featured; excerpts applied in ReviewCard when `useHomeExcerpts` is set. */
export function getHomeReviews(limit = 3, locale: Locale = 'en'): Review[] {
    return getFeaturedReviews(limit, locale);
}

export function getLinkedInReviews(locale: Locale = 'en'): Review[] {
    return getReviews(locale).filter((review) => review.source === 'LinkedIn');
}

export function getUpworkReviews(locale: Locale = 'en'): Review[] {
    return getReviews(locale).filter((review) => review.source === 'Upwork');
}
