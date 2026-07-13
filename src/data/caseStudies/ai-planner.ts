export const aiPlannerCaseStudy = {
    chips: ['n8n', 'OpenAI', 'Notion', 'Telegram', 'Docker'],
    promptHub: {
        title: 'Prompt Hub',
        tagline: 'Semantic prompt search — find by meaning, not keywords.',
        demoSrc: '/projects/ai-planner/documentation/prompt-hub/demo.gif',
        demoAlt: 'Prompt Hub demo — semantic search in action',
        workflowSrc: '/projects/ai-planner/documentation/prompt-hub/n8n-diagram.png',
        workflowAlt: 'n8n workflow for Prompt Hub',
        features: [
            'Semantic search over a Notion prompt library (HuggingFace embeddings)',
            'ChatGPT integration — the right prompt surfaced automatically',
            'Docker + n8n workflow importable from the repo',
        ],
        screenshots: [
            {
                src: '/projects/ai-planner/documentation/prompt-hub/notion-prompts-db.png',
                alt: 'Notion prompts database schema',
                caption: 'Notion database — prompts, embeddings, checksums',
            },
            {
                src: '/projects/ai-planner/documentation/prompt-hub/result-demo-1.png',
                alt: 'Prompt Hub search result demo 1',
                caption: 'Semantic match in the UI',
            },
            {
                src: '/projects/ai-planner/documentation/prompt-hub/result-demo-2.png',
                alt: 'Prompt Hub search result demo 2',
                caption: 'Result ready for ChatGPT',
            },
        ],
    },
    aiPlanner: {
        title: 'AI Planner',
        tagline: 'Voice or text via Telegram → tasks in Notion, powered by n8n.',
        flowSteps: ['Telegram', 'n8n', 'OpenAI', 'Notion'],
        diagramParts: [
            {
                src: '/projects/ai-planner/documentation/ai-planner/diagram-part-1.png',
                alt: 'AI Planner workflow — intake and intent detection',
            },
            {
                src: '/projects/ai-planner/documentation/ai-planner/diagram-part-2.png',
                alt: 'AI Planner workflow — task creation and updates',
            },
            {
                src: '/projects/ai-planner/documentation/ai-planner/diagram-part-3.png',
                alt: 'AI Planner workflow — analysis and reporting',
            },
        ],
        features: [
            'Voice or text messages via Telegram bot',
            'Intent detection — create, update, or analyze tasks',
            'Smart Notion entries — title, priority, tags, bullet lists',
            'Docker Compose stack (Postgres + n8n) — runs locally at zero infra cost',
        ],
    },
} as const;
