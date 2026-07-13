import { localizedPath } from '../i18n/paths';
import type { Locale } from '../i18n/locales';
import { getGitHubUrl, githubBlob } from './github';

export type SkillProofType = 'direct' | 'hub';

export interface SkillProofOutcome {
    value: string;
    label: string;
}

export interface SkillProofEvidence {
    label: string;
    blurb: string;
    href: string;
    thumbnail: string;
    thumbnailAlt: string;
    projectId?: string;
    /** Defaults to “View on GitHub →” */
    linkLabel?: string;
}

export interface SkillProofProductionResults {
    heading: string;
    intro: string;
    items: string[];
}

export interface SkillProofDirectLink {
    label: string;
    href: string;
}

export interface SkillProofBase {
    id: string;
    slug: string;
    title: string;
    tags: string[];
    pitch: string;
    type: SkillProofType;
}

export interface SkillProofDirect extends SkillProofBase {
    type: 'direct';
    projectId: string;
    thumbnail: string;
    thumbnailAlt: string;
    links: SkillProofDirectLink[];
}

export interface SkillProofHub extends SkillProofBase {
    type: 'hub';
    diagram?: string;
    thumbnail?: string;
    diagramAlt?: string;
    diagramCaption?: string;
    /** Filters that route to this hub instead of scattered direct cards. */
    claimFilters?: string[];
    /** Direct proof slugs hidden while this hub is active for a claimed filter. */
    supersedesDirectSlugs?: string[];
    /** @deprecated Prefer productionResults for hub pages */
    outcomes?: SkillProofOutcome[];
    productionResults?: SkillProofProductionResults;
    evidence: SkillProofEvidence[];
    evidenceIntro?: string;
}

export type SkillProof = SkillProofDirect | SkillProofHub;

/** Curated skill proofs — direct (single repo) or hub (portfolio index). */
export const skillProofs: SkillProof[] = [
    {
        id: 'jenkins-mysql-s3-backup',
        slug: 'jenkins-mysql-s3-backup',
        type: 'direct',
        title: 'Jenkins · MySQL · S3 backups',
        tags: ['jenkins', 'mysql', 's3', 'docker'],
        pitch:
            'Production backup pipeline — twice-daily mysqldump, gzip + SHA-256 checksums, streamed to S3-compatible storage from Dockerized Jenkins agents.',
        projectId: 'jenkins-database-backup-pipelines',
        thumbnail: '/projects/jenkins-database-backup-pipelines/diagram.png',
        thumbnailAlt: 'Jenkins MySQL backup pipeline architecture diagram',
        links: [
            { label: 'Overview', href: githubBlob('jenkins-database-backup-pipelines', 'README.md') },
            { label: 'Jenkinsfile', href: githubBlob('jenkins-database-backup-pipelines', 'Jenkinsfile') },
            { label: 'Diagram', href: githubBlob('jenkins-database-backup-pipelines', 'diagram.png') },
        ],
    },
    {
        id: 'laravel-phpunit-api',
        slug: 'laravel-phpunit-api',
        type: 'direct',
        title: 'Laravel API · PHPUnit',
        tags: ['laravel', 'phpunit', 'php', 'api'],
        pitch:
            'Laravel 12 REST API with feature tests for auth, API keys, and semantic search — PHPUnit suite ready for daily CI deploys.',
        projectId: 'aidesk-mini',
        thumbnail: '/projects/aidesk-mini/documentation/images/swagger-doc.png',
        thumbnailAlt: 'OpenAPI documentation for Laravel API',
        links: [
            { label: 'Testing', href: githubBlob('aidesk-mini', 'README.md#testing') },
            {
                label: 'Feature test',
                href: githubBlob('aidesk-mini', 'tests/Feature/ArticleSearchTest.php'),
            },
            { label: 'OpenAPI', href: githubBlob('aidesk-mini', 'README.md#-api-documentation') },
        ],
    },
    {
        id: 'docker-ci-laravel',
        slug: 'docker-ci-laravel',
        type: 'direct',
        title: 'Docker · CI (Laravel)',
        tags: ['docker', 'github-actions', 'laravel', 'ci-cd'],
        pitch:
            'Container-native delivery — GitHub Actions builds the app image and runs PHPUnit + Pint inside Docker on every push.',
        projectId: 'aidesk-mini',
        thumbnail: '/projects/aidesk-mini/documentation/images/ci-cd.png',
        thumbnailAlt: 'GitHub Actions CI/CD pipeline for Laravel Docker project',
        links: [
            { label: 'CI/CD', href: githubBlob('aidesk-mini', 'README.md#cicd') },
            { label: 'Workflow', href: githubBlob('aidesk-mini', '.github/workflows/ci.yml') },
            { label: 'Compose', href: githubBlob('aidesk-mini', 'docker-compose.yml') },
        ],
    },
    {
        id: 'terraform-aws-modules',
        slug: 'terraform-aws-modules',
        type: 'direct',
        title: 'Terraform · AWS modules',
        tags: ['terraform', 'aws', 'iac', 'vpc', 'rds'],
        pitch:
            'Production AWS foundation — reusable VPC & RDS modules, multi-AZ networking, bastion access, and remote S3/DynamoDB state.',
        projectId: 'terraform-aws-infrastructure',
        thumbnail: '/projects/terraform-aws-infrastructure/documentation/diagram.svg',
        thumbnailAlt: 'Terraform AWS infrastructure architecture diagram',
        links: [
            { label: 'Diagram', href: githubBlob('terraform-aws-infrastructure', 'documentation/diagram.svg') },
            { label: 'README', href: githubBlob('terraform-aws-infrastructure', 'README.md') },
            { label: 'VPC module', href: githubBlob('terraform-aws-infrastructure', 'main/modules/vpc/main.tf') },
        ],
    },
    {
        id: 'terraform-ci-cd-pipeline',
        slug: 'terraform-ci-cd',
        type: 'direct',
        title: 'Terraform · CI/CD',
        tags: ['terraform', 'github-actions', 'ci-cd', 'iac'],
        pitch:
            'Automated Terraform delivery — plan on every PR, gated apply on merge, environment detection, and production safety warnings in GitHub Actions.',
        projectId: 'terraform-ci-cd',
        thumbnail: '/projects/terraform-ci-cd/documentation/images/ci-cd/terraform_plan_with_details.png',
        thumbnailAlt: 'Terraform plan output in GitHub Actions pull request comment',
        links: [
            { label: 'README', href: githubBlob('terraform-ci-cd', 'README.md') },
            { label: 'Plan workflow', href: githubBlob('terraform-ci-cd', '.github/workflows/terraform-plan.yml') },
            {
                label: 'PR plan',
                href: githubBlob(
                    'terraform-ci-cd',
                    'documentation/images/ci-cd/terraform_plan_with_details.png',
                ),
            },
        ],
    },
    {
        id: 'terraform-multi-env',
        slug: 'terraform-multi-env',
        type: 'direct',
        title: 'Terraform · Multi-environment',
        tags: ['terraform', 'devops', 'multi-env', 'iac'],
        pitch:
            'Dev/prod isolation done right — same modules, separate remote state backends and tfvars so environments never collide.',
        projectId: 'terraform-aws-infrastructure',
        thumbnail: '/projects/terraform-aws-infrastructure/documentation/diagram.svg',
        thumbnailAlt: 'Multi-environment Terraform layout diagram',
        links: [
            { label: 'Environments', href: githubBlob('terraform-aws-infrastructure', 'environments/README.md') },
            { label: 'Dev', href: githubBlob('terraform-aws-infrastructure', 'environments/dev/terraform.tfvars') },
            {
                label: 'Prod',
                href: githubBlob('terraform-aws-infrastructure', 'environments/prod/terraform.tfvars'),
            },
        ],
    },
    {
        id: 'aws-auto-scaling',
        slug: 'aws-auto-scaling',
        type: 'direct',
        title: 'AWS · Auto-scaling (ALB/ASG/RDS)',
        tags: ['aws', 'auto-scaling', 'alb', 'rds', 'ec2'],
        pitch:
            'Highly available web tier — ALB + Auto Scaling (1→3 instances on CPU), RDS MySQL, CloudWatch alarms, and load-test validation.',
        projectId: 'aws-scalable-web-application',
        thumbnail: '/projects/aws-scalable-web-application/Diagram.jpg',
        thumbnailAlt: 'AWS scalable web application architecture diagram',
        links: [
            { label: 'Diagram', href: githubBlob('aws-scalable-web-application', 'Diagram.jpg') },
            { label: 'Walkthrough', href: githubBlob('aws-scalable-web-application', 'PRESENTATION.md') },
        ],
    },
    {
        id: 'aws-serverless',
        slug: 'aws-serverless',
        type: 'direct',
        title: 'AWS · Serverless (Lambda/API Gateway)',
        tags: ['aws', 'lambda', 'serverless', 'api-gateway', 'dynamodb', 's3'],
        pitch:
            'Serverless upload pipeline — API Gateway triggers Lambda for JSON and image uploads, DynamoDB metadata, S3 storage, and lifecycle policies.',
        projectId: 'aws-serverless-application',
        thumbnail: '/projects/aws-serverless-application/Diagram.jpg',
        thumbnailAlt: 'AWS serverless application architecture diagram',
        links: [
            { label: 'Diagram', href: githubBlob('aws-serverless-application', 'Diagram.jpg') },
            { label: 'Walkthrough', href: githubBlob('aws-serverless-application', 'PRESENTATION.md') },
            { label: 'Lambda', href: githubBlob('aws-serverless-application', 'lambda/json/script.py') },
        ],
    },
    {
        id: 'aws-kinesis-realtime',
        slug: 'aws-kinesis-realtime',
        type: 'direct',
        title: 'AWS · Real-time data (Kinesis)',
        tags: ['aws', 'kinesis', 'lambda', 's3', 'athena'],
        pitch:
            'Streaming data pipeline — Kinesis ingestion, Lambda processing, S3 data lake, Athena SQL queries, and QuickSight visualization.',
        projectId: 'aws-real-time-data-processing',
        thumbnail: '/projects/aws-real-time-data-processing/Diagram.jpg',
        thumbnailAlt: 'AWS real-time data processing architecture diagram',
        links: [
            { label: 'Diagram', href: githubBlob('aws-real-time-data-processing', 'Diagram.jpg') },
            { label: 'Walkthrough', href: githubBlob('aws-real-time-data-processing', 'PRESENTATION.md') },
            { label: 'Lambda', href: githubBlob('aws-real-time-data-processing', 'lambda/code.py') },
        ],
    },
    {
        id: 'docker',
        slug: 'docker',
        type: 'hub',
        title: 'Docker',
        tags: ['docker-swarm', 'docker', 'devops'],
        pitch:
            'Production Docker Swarm — web, scheduler, and queue workers as separate services; rolling updates with rollback. Proof page links 20+ Compose, CI/CD, and stack examples.',
        thumbnail: '/proof/docker-swarm-topology.svg',
        claimFilters: ['docker', 'docker-swarm'],
        supersedesDirectSlugs: ['docker-ci-laravel'],
        evidence: [],
    },
];

/** Curated filter chips — order = most client-attractive first; only slugs with matching proofs are shown. */
const skillProofFilterCatalog: { slug: string; label: string }[] = [
    { slug: 'docker', label: 'Docker' },
    { slug: 'aws', label: 'AWS' },
    { slug: 'terraform', label: 'Terraform' },
    { slug: 'ci-cd', label: 'CI/CD' },
    { slug: 'jenkins', label: 'Jenkins' },
    { slug: 'laravel', label: 'Laravel' },
    { slug: 'github-actions', label: 'GitHub Actions' },
    { slug: 'iac', label: 'IaC' },
];

/** Filters that match at least one skill proof card. */
export function getSkillProofFilters(): { slug: string; label: string }[] {
    return skillProofFilterCatalog.filter(({ slug }) =>
        skillProofs.some((proof) => proofMatchesSkillTags(proof, [slug])),
    );
}

/** @deprecated Use getSkillProofFilters() — kept for tests referencing length. */
export const skillProofFilters = skillProofFilterCatalog;

export function proofMatchesSkillTags(proof: SkillProof, tags: string[]): boolean {
    const normalized = tags.map((tag) => tag.trim().toLowerCase()).filter(Boolean);
    if (normalized.length === 0) {
        return true;
    }

    return proof.tags.some((tag) =>
        normalized.some((needle) => tag.includes(needle) || needle.includes(tag)),
    );
}

function normalizeSkillTag(tag: string): string {
    return tag.trim().toLowerCase();
}

function getActiveHubs(selectedSkills: string[]): SkillProofHub[] {
    return skillProofs.filter(
        (proof): proof is SkillProofHub => proof.type === 'hub' && proofMatchesSkillTags(proof, selectedSkills),
    );
}

/** Whether a proof card should show for the current filter selection. */
export function shouldShowSkillProof(proof: SkillProof, selectedSkills: string[]): boolean {
    const normalized = selectedSkills.map(normalizeSkillTag).filter(Boolean);
    if (normalized.length === 0) {
        return true;
    }

    if (!proofMatchesSkillTags(proof, normalized)) {
        return false;
    }

    if (proof.type === 'hub') {
        return true;
    }

    const activeHubs = getActiveHubs(normalized);
    if (activeHubs.length === 0) {
        return true;
    }

    const claimedSelected = new Set<string>();
    const supersededSlugs = new Set<string>();

    for (const hub of activeHubs) {
        for (const claim of hub.claimFilters ?? []) {
            for (const selected of normalized) {
                if (claim.includes(selected) || selected.includes(claim)) {
                    claimedSelected.add(selected);
                }
            }
        }
        for (const slug of hub.supersedesDirectSlugs ?? []) {
            supersededSlugs.add(slug);
        }
    }

    if (supersededSlugs.has(proof.slug)) {
        return false;
    }

    const matchesViaClaimed = normalized.some(
        (selected) =>
            claimedSelected.has(selected) &&
            proof.tags.some((tag) => tag.includes(selected) || selected.includes(tag)),
    );

    if (!matchesViaClaimed) {
        return true;
    }

    return normalized.some(
        (selected) =>
            !claimedSelected.has(selected) &&
            proof.tags.some((tag) => tag.includes(selected) || selected.includes(tag)),
    );
}

/** Minimal metadata for client-side filter logic on /capabilities. */
export function getSkillProofFilterMeta(): {
    slug: string;
    type: SkillProofType;
    tags: string[];
    claimFilters?: string[];
    supersedesDirectSlugs?: string[];
}[] {
    return skillProofs.map((proof) => ({
        slug: proof.slug,
        type: proof.type,
        tags: proof.tags,
        ...(proof.type === 'hub'
            ? {
                  claimFilters: proof.claimFilters,
                  supersedesDirectSlugs: proof.supersedesDirectSlugs,
              }
            : {}),
    }));
}

export function getSkillProofBySlug(slug: string): SkillProof | undefined {
    return skillProofs.find((proof) => proof.slug === slug);
}

/** Root GitHub repo URL for direct proofs (hub pages span multiple repos). */
export function getSkillProofGitHubUrl(proof: SkillProof): string | undefined {
    if (proof.type !== 'direct') {
        return undefined;
    }

    return getGitHubUrl(proof.projectId);
}

export function getAllSkillProofSlugs(): string[] {
    return skillProofs.map((proof) => proof.slug);
}

export function getSkillProofPath(slug: string, locale: Locale): string {
    return localizedPath(`/proof/${slug}`, locale);
}

export function getSkillProofsMatchingTags(tags: string[]): SkillProof[] {
    return skillProofs.filter((proof) => shouldShowSkillProof(proof, tags));
}

export function parseSkillsQuery(raw: string | null): string[] {
    if (!raw?.trim()) {
        return [];
    }

    return raw
        .split(',')
        .map((tag) => tag.trim().toLowerCase())
        .filter(Boolean);
}
