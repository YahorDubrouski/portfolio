import { githubBlob } from '../github';

export const dockerProofPage = {
    title: 'Docker',
    caseStudy: {
        title: 'Docker Swarm',
        verdict:
            'Production multi-node orchestration — replicated services and rolling updates in a long-running client engagement.',
        chips: ['Multi-node cluster', 'Replicated services', 'Overlay network', 'Rolling updates'],
        heroNote:
            'Architecture from a long-running client engagement — web API, schedulers, and queue workers as separate Swarm services, each with its own replica count.',
    },
    architecture: {
        heading: 'Architecture template',
        diagramLabel: 'Diagram',
        templateLabel: 'Stack template',
        templateCaption: 'Minimal `docker-compose.yml` for `docker stack deploy` — matches the diagram above.',
        code: `services:
  web:
    image: app:latest
    ports:
      - "443:80"              # published port (Swarm ingress routing)
    networks: [app]
    deploy:
      replicas: 3             # scale HTTP tier independently
      update_config:
        parallelism: 1        # rolling update across cluster
        failure_action: rollback

  scheduler:
    image: app:latest
    command: schedule:run     # separate service — not bundled with web
    networks: [app]
    deploy:
      replicas: 1

  queue-worker:
    image: app:latest
    command: queue:work       # workers scaled apart from web & scheduler
    networks: [app]
    deploy:
      replicas: 2

  redis:
    image: redis:alpine       # shared queue backend on overlay network
    networks: [app]
    deploy:
      replicas: 1

networks:
  app:
    driver: overlay           # multi-node service discovery`,
    },
    achievedOutcomes: {
        heading: 'Achieved outcomes',
        items: [
            'Web API, schedulers, and queue workers run as independent services — a deploy or failure in one tier does not take down the others.',
            'Rolling updates with automatic rollback — a bad release reverts on its own, so production updates stay safe and low-risk.',
            'Per-service replica counts — add capacity to the web or worker tier when load grows, without redesigning the stack.',
        ],
    },
    dockerElsewhere: {
        kicker: 'Open-source proof',
        heading: 'Public Docker examples',
        intro:
            'Separate from the Swarm case study above — one GitHub link per technology, grouped by type of work.',
        categories: [
            {
                title: 'Application containers',
                icon: '/proof/docker-examples/applications.svg',
                tint: '#5568a8',
                items: [
                    {
                        label: 'Laravel API (Sail)',
                        href: githubBlob('aidesk-mini', 'docker-compose.yml#L3'),
                        icon: '/proof/tech-icons/laravel.svg',
                    },
                    {
                        label: 'Flask API',
                        href: githubBlob('ci-showcase', 'Dockerfile'),
                        icon: '/proof/tech-icons/flask.svg',
                    },
                    {
                        label: 'Express API',
                        href: githubBlob('arch-decisions', 'docker-compose.yml#L21'),
                        icon: '/proof/tech-icons/express.svg',
                    },
                    {
                        label: 'n8n automation',
                        href: githubBlob('ai-planner', 'docker-compose.yml#L25'),
                        icon: '/proof/tech-icons/n8n.svg',
                    },
                ],
            },
            {
                title: 'Reverse proxies & web servers',
                icon: '/proof/docker-examples/proxy.svg',
                tint: '#009639',
                items: [
                    {
                        label: 'nginx (production SPA image)',
                        href: githubBlob('arch-decisions', 'frontend/Dockerfile#L17'),
                        icon: '/proof/tech-icons/nginx.svg',
                    },
                    {
                        label: 'Caddy (HTTPS reverse proxy)',
                        href: githubBlob('aidesk-mini', 'docker-compose.yml#L139'),
                        icon: '/proof/tech-icons/caddy.svg',
                    },
                    {
                        label: 'Traefik (Docker routing)',
                        href: githubBlob('ai-planner', 'docker-compose.yml#L4'),
                        icon: '/proof/tech-icons/traefik.svg',
                    },
                ],
            },
            {
                title: 'Infrastructure services',
                icon: '/proof/docker-examples/infrastructure.svg',
                tint: '#4479A1',
                items: [
                    {
                        label: 'MySQL',
                        href: githubBlob('aidesk-mini', 'docker-compose.yml#L36'),
                        icon: '/proof/tech-icons/mysql.svg',
                    },
                    {
                        label: 'PostgreSQL',
                        href: githubBlob('ai-planner', 'docker-compose.yml#L17'),
                        icon: '/proof/tech-icons/postgresql.svg',
                    },
                    {
                        label: 'Redis',
                        href: githubBlob('aidesk-mini', 'docker-compose.yml#L60'),
                        icon: '/proof/tech-icons/redis.svg',
                    },
                    {
                        label: 'Meilisearch',
                        href: githubBlob('aidesk-mini', 'docker-compose.yml#L114'),
                        icon: '/proof/tech-icons/meilisearch.svg',
                    },
                    {
                        label: 'Mailpit',
                        href: githubBlob('aidesk-mini', 'docker-compose.yml#L131'),
                        icon: '/proof/tech-icons/mailpit.svg',
                    },
                ],
            },
            {
                title: 'Background workers',
                icon: '/proof/docker-examples/workers.svg',
                tint: '#9333EA',
                items: [
                    {
                        label: 'Horizon (Laravel queue worker)',
                        href: githubBlob('aidesk-mini', 'docker-compose.yml#L84'),
                        icon: '/proof/tech-icons/horizon.svg',
                    },
                ],
            },
            {
                title: 'Docker in CI/CD',
                icon: '/proof/docker-examples/cicd.svg',
                tint: '#2088FF',
                items: [
                    {
                        label: 'GitHub Actions — build image & run tests',
                        href: githubBlob('ci-showcase', '.github/workflows/ci.yml'),
                        icon: '/proof/tech-icons/github.svg',
                    },
                    {
                        label: 'GitLab CI — Docker-in-Docker',
                        href: githubBlob('ci-showcase', '.gitlab-ci.yml'),
                        icon: '/proof/tech-icons/gitlab.svg',
                    },
                    {
                        label: 'Laravel Sail image in CI',
                        href: githubBlob('aidesk-mini', '.github/workflows/ci.yml'),
                        icon: '/proof/tech-icons/laravel.svg',
                    },
                    {
                        label: 'Ephemeral MySQL client (mysqldump job)',
                        href: githubBlob('jenkins-database-backup-pipelines', 'Jenkinsfile#L74'),
                        icon: '/proof/tech-icons/jenkins.svg',
                    },
                    {
                        label: 'Ephemeral AWS CLI (S3 upload job)',
                        href: githubBlob('jenkins-database-backup-pipelines', 'Jenkinsfile#L89'),
                        icon: '/proof/tech-icons/aws.svg',
                    },
                ],
            },
            {
                title: 'Compose orchestration',
                icon: '/proof/docker-examples/compose.svg',
                tint: '#2496ED',
                items: [
                    {
                        label: 'Multi-service stack (frontend + backend)',
                        href: githubBlob('arch-decisions', 'docker-compose.yml'),
                        icon: '/proof/tech-icons/docker.svg',
                    },
                    {
                        label: 'Dev override (hot reload)',
                        href: githubBlob('arch-decisions', 'docker-compose.dev.yml'),
                        icon: '/proof/tech-icons/docker.svg',
                    },
                ],
            },
        ],
    },
};
