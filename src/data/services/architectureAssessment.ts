export const architectureAssessmentOffer = {
    path: '/services/architecture-assessment',
    title: 'Architecture assessment before you build',
    description:
        'Architecture assessment before implementation: cloud provider, DevOps stack, and application stack, as a PDF. Two weeks, $5–10k.',
    serviceType: 'Architecture assessment',
    identityLine: 'Yahor Dubrouski · Architecture assessment',
    headline: 'Decide the architecture before you spend time and money implementing it.',
    lede: 'In two weeks you get a PDF: a detailed plan of the technical solution you need, and two alternatives if your business requirements change later.',
    proof: ['Cloud migration', 'DevOps stack', 'Database selection'],
    priceMin: 5000,
    priceMax: 10000,
    flowAria: 'Decisions the plan covers',
    flowTitle: 'Decisions the plan covers',
    flow: [
        {
            kicker: 'CLOUD',
            title: 'Cloud provider',
            body: 'A single server, DigitalOcean, or on-premises, onto AWS or another cloud provider. The diagram comes before the move, with a plan of the advantages and the drawbacks.',
            icon: 'cloud',
        },
        {
            kicker: 'DEVOPS',
            title: 'DevOps stack',
            body: 'Terraform or the AWS Management Console. Docker, Docker Swarm, or Kubernetes. DigitalOcean or AWS. Cloud or on-premises.',
            icon: 'boundary',
        },
        {
            kicker: 'STACK',
            title: 'Application stack',
            body: 'Laravel or Python. FastAPI or Express. MongoDB or PostgreSQL.',
            icon: 'sources',
        },
        {
            kicker: 'TOOL OR CODE',
            title: 'Build or buy',
            body: 'A no-code platform such as n8n, or application code. A product that already covers the requirement, a custom build, or a product you adapt.',
            icon: 'plan',
        },
    ],
    getsTitle: 'What is in the PDF',
    gets: [
        {
            title: 'The solution and two alternatives',
            body: 'The technical solution I recommend: what it is, how it is built, and why. Two other options, described in the same detail.',
            icon: 'plan',
        },
        {
            title: 'Trade-offs',
            body: 'The advantages and drawbacks of each option, so you can switch to another one later.',
            icon: 'risk',
        },
        {
            title: 'A plan for each option',
            body: 'A step-by-step plan, in order, for how to build it. You can hand that plan to the developer who will do the work.',
            icon: 'order',
        },
    ],
    stepsTitle: 'How the two weeks go',
    stepsSubtitle: 'The delivery is a PDF. The build stays a separate decision.',
    stepsSequence: true,
    steps: [
        {
            title: 'I learn the project',
            body: 'You explain what you want and what already exists. I study it and ask questions until I understand.',
        },
        {
            title: 'You review a draft',
            body: 'I send a draft PDF. We comment and revise until it fits.',
        },
        {
            title: 'You approve the final PDF',
            body: 'I send the final file. You approve it. That is the end of these two weeks.',
        },
    ],
    fitTitle: 'When this is the right job',
    fit: [
        'You do not know which cloud provider to choose, or whether you need a cloud at all instead of one server.',
        'You do not know which stack to choose: the language, the framework, and the database.',
        'You do not know whether a ready product can be plugged in, or you need something custom.',
    ],
    priceTitle: 'Fixed price',
    priceAmount: '$5–10k',
    priceBody: 'Two weeks. The price is fixed once the systems and the decision are clear.',
    closingTitle: 'Starting a new project, or migrating an old one?',
    closingBody: 'Write to me on Telegram. I reply within a couple of hours.',
    ctaLabel: 'Message on Telegram',
    telegramHref: 'https://t.me/YahorDubrouski',
} as const;
