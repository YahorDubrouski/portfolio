export type IntegrationCategoryId =
    | 'crm-marketing-analytics'
    | 'commerce-billing-subscriptions'
    | 'infrastructure-devops'
    | 'data-stores'
    | 'observability'
    | 'collaboration'
    | 'ecommerce-maps'
    | 'ai-automation';

export interface IntegrationCategorySource {
    id: IntegrationCategoryId;
    name: string;
    systems: string[];
}

/** Public integration list — copied from agent DB when updating site content. */
export const integrationCategories: IntegrationCategorySource[] = [
    {
        id: 'crm-marketing-analytics',
        name: 'CRM, marketing & analytics',
        systems: [
            'Salesforce',
            'Marketo',
            'Server-side GTM',
            'Meta CAPI',
            'BigQuery',
            'Airbyte',
            'Metabase',
            'Algolia',
            'Storyblok',
            'ZeroBounce',
            'Greenhouse',
        ],
    },
    {
        id: 'commerce-billing-subscriptions',
        name: 'Commerce, billing & subscriptions',
        systems: ['NetSuite', 'Payment gateways', 'Partner commerce APIs', 'Boxalino'],
    },
    {
        id: 'infrastructure-devops',
        name: 'Infrastructure & DevOps',
        systems: [
            'AWS',
            'DigitalOcean',
            'Docker Swarm',
            'Jenkins',
            'Bitbucket',
            'Cloudflare',
            'Terraform',
            '1Password',
            'Mailpit',
        ],
    },
    {
        id: 'data-stores',
        name: 'Databases & search',
        systems: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'NocoDB', 'OpenSearch'],
    },
    {
        id: 'observability',
        name: 'Observability & monitoring',
        systems: ['Elasticsearch', 'Sentry', 'Grafana'],
    },
    {
        id: 'collaboration',
        name: 'Collaboration & email',
        systems: ['Slack', 'Jira', 'Postmark', 'Microsoft Bookings'],
    },
    {
        id: 'ecommerce-maps',
        name: 'E-commerce & maps',
        systems: ['Magento 2', 'Google Maps', 'PrestaShop'],
    },
    {
        id: 'ai-automation',
        name: 'AI & automation',
        systems: ['n8n', 'OpenAI', 'Translation pipelines', 'Cursor & MCP', 'Claude', 'Zapier'],
    },
];
