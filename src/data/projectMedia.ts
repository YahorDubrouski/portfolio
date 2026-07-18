export type ProjectMediaKind = 'diagram' | 'screenshot' | 'ci-cd' | 'demo' | 'certificate';

export interface ProjectMediaItem {
    /** Public URL path, e.g. /projects/aidesk-mini/... */
    src: string;
    alt: string;
    caption?: string;
    kind: ProjectMediaKind;
}

export interface ProjectMediaGroup {
    title: string;
    items: ProjectMediaItem[];
}

const media = {
    'devops-portfolio': [
        {
            title: 'CI/CD & infrastructure',
            items: [
                {
                    src: '/projects/devops-portfolio/ci-showcase/ci-cd.png',
                    alt: 'CI/CD lifecycle — plan, code, build, test, release, deploy, operate, measure',
                    caption: 'GitHub Actions and GitLab CI pipelines across portfolio repos.',
                    kind: 'ci-cd',
                },
                {
                    src: '/projects/devops-portfolio/terraform-aws-infrastructure/diagram.png',
                    alt: 'Terraform AWS VPC architecture diagram',
                    caption: 'Modular Terraform: VPC, bastion, NAT, RDS across dev/prod.',
                    kind: 'diagram',
                },
                {
                    src: '/projects/devops-portfolio/aws/scalable-web-application/Diagram.jpg',
                    alt: 'AWS scalable web application architecture',
                    caption: 'ALB → Auto Scaling → EC2 → RDS high-availability pattern.',
                    kind: 'diagram',
                },
                {
                    src: '/projects/devops-portfolio/terraform-ci-cd/documentation/images/ci-cd/terraform_plan_with_details.png',
                    alt: 'Terraform plan output in GitHub Actions',
                    caption: 'Automated Terraform plan on pull request.',
                    kind: 'ci-cd',
                },
            ],
        },
    ],
    'arch-decisions': [
        {
            title: 'Architecture',
            items: [
                {
                    src: '/projects/arch-decisions/architecture.svg',
                    alt: 'Architecture Decisions Platform system diagram',
                    caption:
                        'React SPA → Express or FastAPI → Redis jobs (BullMQ/Celery) → SQLite/PostgreSQL and optional OpenAI.',
                    kind: 'diagram',
                },
            ],
        },
    ],
    'terraform-aws-infrastructure': [
        {
            title: 'Infrastructure diagram',
            items: [
                {
                    src: '/projects/terraform-aws-infrastructure/documentation/diagram.svg',
                    alt: 'Terraform AWS infrastructure architecture diagram',
                    caption: 'Modular Terraform layout: VPC, EC2, RDS, S3, and IAM across dev/prod environments.',
                    kind: 'diagram',
                },
            ],
        },
    ],
    'aws-terraform-vpc-geocoder-example': [
        {
            title: 'CI/CD pipeline',
            items: [
                {
                    src: '/projects/aws-terraform-vpc-geocoder-example/documentation/images/ci-cd/terraform_plan_with_details.png',
                    alt: 'Terraform plan output in GitHub Actions',
                    caption: 'Terraform plan with resource details on pull request.',
                    kind: 'ci-cd',
                },
                {
                    src: '/projects/aws-terraform-vpc-geocoder-example/documentation/images/ci-cd/critical_warning_message.png',
                    alt: 'Critical warning in Terraform CI pipeline',
                    caption: 'Pipeline surfaces critical warnings before apply.',
                    kind: 'ci-cd',
                },
                {
                    src: '/projects/aws-terraform-vpc-geocoder-example/documentation/images/ci-cd/deployment_success_notification.png',
                    alt: 'Deployment success notification',
                    caption: 'Successful deployment notification after manual apply.',
                    kind: 'ci-cd',
                },
            ],
        },
    ],
    'aidesk-mini': [
        {
            title: 'Product',
            items: [
                {
                    src: '/projects/aidesk-mini/documentation/payment/stripe/images/step-01.png',
                    alt: 'AIDesk Mini landing page — AI-powered ticket triage API',
                    caption: 'Landing page highlighting AI triage, API keys, queues, Docker, and CI/CD.',
                    kind: 'screenshot',
                },
            ],
        },
        {
            title: 'API & quality',
            items: [
                {
                    src: '/projects/aidesk-mini/documentation/images/swagger-doc.png',
                    alt: 'OpenAPI Swagger documentation',
                    caption: 'OpenAPI documentation for the ticket triage API.',
                    kind: 'screenshot',
                },
                {
                    src: '/projects/aidesk-mini/documentation/images/ci-cd.png',
                    alt: 'GitHub Actions CI/CD pipeline for AIDesk Mini',
                    caption: 'GitHub Actions pipeline with Docker-based test execution.',
                    kind: 'ci-cd',
                },
                {
                    src: '/projects/aidesk-mini/documentation/images/mailpit-homepage.png',
                    alt: 'Mailpit email testing interface',
                    caption: 'Local email testing with Mailpit during development.',
                    kind: 'screenshot',
                },
            ],
        },
        {
            title: 'Stripe payment flow',
            items: [
                {
                    src: '/projects/aidesk-mini/documentation/payment/stripe/images/step-01.png',
                    alt: 'Stripe integration step 1',
                    kind: 'screenshot',
                },
                {
                    src: '/projects/aidesk-mini/documentation/payment/stripe/images/step-02.png',
                    alt: 'Stripe integration step 2',
                    kind: 'screenshot',
                },
                {
                    src: '/projects/aidesk-mini/documentation/payment/stripe/images/step-03.png',
                    alt: 'Stripe integration step 3',
                    kind: 'screenshot',
                },
                {
                    src: '/projects/aidesk-mini/documentation/payment/stripe/images/step-04.png',
                    alt: 'Stripe integration step 4',
                    kind: 'screenshot',
                },
                {
                    src: '/projects/aidesk-mini/documentation/payment/stripe/images/step-05.png',
                    alt: 'Stripe integration step 5',
                    kind: 'screenshot',
                },
                {
                    src: '/projects/aidesk-mini/documentation/payment/stripe/images/step-06.png',
                    alt: 'Stripe integration step 6',
                    caption: 'End-to-end Stripe checkout and webhook handling.',
                    kind: 'screenshot',
                },
            ],
        },
    ],
    'ai-planner': [
        {
            title: 'Prompt Hub workflow',
            items: [
                {
                    src: '/projects/ai-planner/documentation/prompt-hub/n8n-diagram.png',
                    alt: 'n8n workflow diagram for Prompt Hub',
                    caption: 'n8n automation connecting Notion, OpenAI, and voice input.',
                    kind: 'diagram',
                },
                {
                    src: '/projects/ai-planner/documentation/prompt-hub/demo.gif',
                    alt: 'Prompt Hub demo animation',
                    caption: 'Live demo of voice-to-prompt workflow.',
                    kind: 'demo',
                },
                {
                    src: '/projects/ai-planner/documentation/prompt-hub/notion-prompts-db.png',
                    alt: 'Notion prompts database',
                    kind: 'screenshot',
                },
                {
                    src: '/projects/ai-planner/documentation/prompt-hub/credentials.png',
                    alt: 'n8n credentials configuration',
                    kind: 'screenshot',
                },
                {
                    src: '/projects/ai-planner/documentation/prompt-hub/result-demo-1.png',
                    alt: 'Prompt Hub result demo 1',
                    kind: 'screenshot',
                },
                {
                    src: '/projects/ai-planner/documentation/prompt-hub/result-demo-2.png',
                    alt: 'Prompt Hub result demo 2',
                    kind: 'screenshot',
                },
            ],
        },
    ],
    'terraform-ci-cd': [
        {
            title: 'CI/CD pipeline',
            items: [
                {
                    src: '/projects/terraform-ci-cd/documentation/images/ci-cd/terraform_plan_with_details.png',
                    alt: 'Terraform plan with details',
                    kind: 'ci-cd',
                },
                {
                    src: '/projects/terraform-ci-cd/documentation/images/ci-cd/critical_warning_message.png',
                    alt: 'Critical warning message in CI',
                    kind: 'ci-cd',
                },
                {
                    src: '/projects/terraform-ci-cd/documentation/images/ci-cd/deployment_success_notification.png',
                    alt: 'Deployment success notification',
                    kind: 'ci-cd',
                },
            ],
        },
    ],
    'end-to-end': [
        {
            title: 'Request tracing demo',
            items: [
                {
                    src: '/projects/end-to-end/demo.png',
                    alt: 'Correlated logs linked by the same correlation ID across a request lifecycle',
                    caption: 'One request → many log lines → one shared correlation ID (Pino + Express).',
                    kind: 'demo',
                },
            ],
        },
    ],
    'dziana-portfolio': [
        {
            title: 'Site preview',
            items: [
                {
                    src: '/projects/dziana-portfolio/demo.png',
                    alt: 'Dziana Portfolio — multilingual Astro site preview',
                    caption: 'Client portfolio site built with Astro and Tailwind, deployed on Cloudflare Pages.',
                    kind: 'screenshot',
                },
            ],
        },
    ],
    'ci-showcase': [
        {
            title: 'CI/CD examples',
            items: [
                {
                    src: '/projects/ci-showcase/gitlab-and-github.png',
                    alt: 'GitLab and GitHub CI/CD platforms',
                    caption: 'Same Flask app pipeline on GitHub Actions and GitLab CI.',
                    kind: 'screenshot',
                },
                {
                    src: '/projects/ci-showcase/ci-cd.png',
                    alt: 'CI/CD pipeline showcase',
                    kind: 'ci-cd',
                },
            ],
        },
    ],
    'aws-real-time-data-processing': [
        {
            title: 'Architecture',
            items: [
                {
                    src: '/projects/aws-real-time-data-processing/Diagram.jpg',
                    alt: 'AWS real-time data processing architecture',
                    kind: 'diagram',
                },
            ],
        },
    ],
    'aws-scalable-web-application': [
        {
            title: 'Architecture',
            items: [
                {
                    src: '/projects/aws-scalable-web-application/Diagram.jpg',
                    alt: 'AWS scalable web application architecture',
                    kind: 'diagram',
                },
            ],
        },
    ],
    'aws-serverless-application': [
        {
            title: 'Architecture',
            items: [
                {
                    src: '/projects/aws-serverless-application/Diagram.jpg',
                    alt: 'AWS serverless application architecture',
                    kind: 'diagram',
                },
            ],
        },
    ],
    'jenkins-database-backup-pipelines': [
        {
            title: 'Pipeline diagram',
            items: [
                {
                    src: '/projects/jenkins-database-backup-pipelines/diagram.png',
                    alt: 'Jenkins database backup pipeline diagram',
                    kind: 'diagram',
                },
            ],
        },
    ],
    'ai-amotions': [
        {
            title: 'Demo',
            items: [
                {
                    src: '/projects/ai-amotions/documentation/demo.png',
                    alt: 'Voice emotion detector demo',
                    kind: 'demo',
                },
            ],
        },
    ],
} satisfies Record<string, ProjectMediaGroup[]>;

export const certificateImages: Record<string, string> = {
    'AWS Certified Solutions Architect – Associate':
        '/projects/certificates/png/AWS Certified Solutions Architect - Associate certificate.png',
    'Terraform Associate': '/projects/certificates/png/Terraform_Associate.png',
    'Udemy AWS Solutions Architect Associate 2025':
        '/projects/certificates/png/Udemy_Ultimate_AWS_Certified_Solutions_Architect_Associate_2025.png',
    'Meta Introduction to Front-End Development':
        '/projects/certificates/png/Meta_Introduction_To_FrontEnd_Development.png',
    'Meta Version Control': '/projects/certificates/png/Meta_Version_Control.png',
    'Meta Programming with JavaScript':
        '/projects/certificates/png/Meta_Programming_With_JavaScript.png',
    'Adobe Certified Professional – Adobe Commerce Developer':
        '/projects/certificates/png/Adobe_Certified_Professional_Adobe_Commerce_Developer.png',
    'Enterprise Patterns': '/projects/certificates/png/Enterprise_Patterns.png',
    'GOF and GRASP Design Patterns':
        '/projects/certificates/png/Foxminded_GOF_And_Grasp_Design_Patterns.png',
    'QA Automation Diploma': '/projects/certificates/png/QA_Automation_Diploma.png',
    'AI Automations and AI Agents with n8n':
        '/projects/certificates/AI_Automation_And_AI_Agents_With_N8N.jpg',
    'Anthropic: Agent Skills': '/projects/certificates/png/Anthropic_Agent_Skills.png',
    'Building with the Claude API':
        '/projects/certificates/png/Anthropic_Building_with_the_Claude_API.png',
    'Introduction to Model Context Protocol':
        '/projects/certificates/png/introduction-to-model-context-protocol.png',
    'Claude Code in Action': '/projects/certificates/png/claude-code-in-action.png',
    'English Pre-Intermediate': '/projects/certificates/png/English_PreIntermediate.png',
};

const extraCertificateImages: ProjectMediaItem[] = [];

export function getProjectMediaGroups(projectId: string): ProjectMediaGroup[] {
    return media[projectId as keyof typeof media] ?? [];
}

export function getProjectMediaItems(projectId: string): ProjectMediaItem[] {
    return getProjectMediaGroups(projectId).flatMap((group) => group.items);
}

/** Card hero — overrides diagram/first-item heuristic where a specific shot works better */
const projectCardThumbnails: Record<string, ProjectMediaItem> = {
    'devops-portfolio': {
        src: '/projects/devops-portfolio/ci-showcase/ci-cd.png',
        alt: 'CI/CD lifecycle — plan, code, build, test, release, deploy, operate, measure',
        kind: 'ci-cd',
    },
    'ci-showcase': {
        src: '/projects/ci-showcase/gitlab-and-github.png',
        alt: 'GitLab and GitHub CI/CD platforms',
        kind: 'screenshot',
    },
    'aidesk-mini': {
        src: '/projects/aidesk-mini/documentation/payment/stripe/images/step-01.png',
        alt: 'AIDesk Mini landing page — AI-powered ticket triage API',
        kind: 'screenshot',
    },
    'yahor-portfolio': {
        src: '/projects/yahor-portfolio/homepage.png',
        alt: 'Yahor Dubrouski portfolio homepage — hero, proof sections, and hire funnels',
        kind: 'screenshot',
    },
};

export function getProjectThumbnail(projectId: string): ProjectMediaItem | undefined {
    const override = projectCardThumbnails[projectId];
    if (override) {
        return override;
    }

    const items = getProjectMediaItems(projectId);
    return items.find((item) => item.kind === 'diagram') ?? items[0];
}

export function hasProjectMedia(projectId: string): boolean {
    return getProjectMediaItems(projectId).length > 0;
}

export function getCertificateImage(label: string): string | undefined {
    return certificateImages[label];
}

export function getAllCertificateMedia(): ProjectMediaItem[] {
    const mapped = Object.entries(certificateImages).map(([label, src]) => ({
        src,
        alt: label,
        kind: 'certificate' as const,
    }));
    return [...mapped, ...extraCertificateImages];
}
