export const databaseMigrationOffer = {
    path: '/services/database-migration',
    title: 'Database migration without downtime',
    description:
        'PostgreSQL migration from a live MySQL or MongoDB database. No downtime and no lost rows. Fixed price, $6–12k.',
    identityLine: 'Yahor Dubrouski · Database migration',
    headline: 'Move a live MySQL or MongoDB database onto PostgreSQL without downtime or lost rows.',
    lede: 'For a production database the business cannot turn off. Tables move a few at a time. The old database is archived, then switched off only after nothing still queries it.',
    proof: ['×3 lower database cost', 'Zero-downtime cutover', 'Two databases into one'],
    proofNote: 'One production move: MySQL and MongoDB into a single PostgreSQL, with no downtime.',
    serviceType: 'Database migration',
    priceMin: 6000,
    priceMax: 12000,
    flowAria: 'Migration path',
    flow: [
        { kicker: 'FROM', title: 'MySQL and MongoDB', icon: 'sources' },
        { kicker: 'TO', title: 'One PostgreSQL', icon: 'target', accent: true },
    ],
    getsTitle: 'What you get',
    gets: [
        {
            title: 'The application stays up',
            body: 'Two connections run together. Moved tables read PostgreSQL. Tables still waiting stay on MySQL or MongoDB.',
            icon: 'live',
        },
        {
            title: 'A copy you can run again',
            body: 'Each run moves only rows that are not current yet. Rows already copied are left alone.',
            icon: 'rerun',
        },
        {
            title: 'A check before the switch',
            body: 'Rows that never change match by the id from the old database. Rows that still change match by a hash of every column.',
            icon: 'check',
        },
        {
            title: 'An archive before deletion',
            body: 'The old database is archived first. It is turned off after a profiler shows no remaining queries.',
            icon: 'archive',
        },
    ],
    stepsTitle: 'How the move works',
    stepsSubtitle: 'A few tables at a time, until the whole database is on PostgreSQL.',
    steps: [
        {
            title: 'Copy only what is new',
            body: 'A command copies rows that are missing or out of date. Run it again and finished rows stay as they are.',
        },
        {
            title: 'Prove both sides match',
            body: 'Immutable rows are matched by the old id. Rows that keep changing are matched by a hash of every column. Then the copy runs once more for late updates.',
        },
        {
            title: 'Switch those tables',
            body: 'The application keeps both connections. The moved tables use PostgreSQL. The rest stay on the old database. The copy runs once more after the switch.',
        },
        {
            title: 'Archive, then turn the old one off',
            body: 'When every table has moved, the profiler confirms the old database is idle. It is archived, then shut down.',
        },
    ],
    fitTitle: 'When this is the right job',
    fit: [
        'The database is in production and cannot take a long outage.',
        'The source is MySQL, MongoDB, or both, and the target is one PostgreSQL.',
        'You want the old data kept until the new side is proven.',
    ],
    priceTitle: 'Fixed price',
    priceAmount: '$6–12k',
    priceBody:
        'One production database, over 6–8 weeks. The price is fixed once the engines, size, and cutover rules are clear.',
    closingTitle: 'Have a database that cannot go down?',
    closingBody: 'Tell me the engine, the rough size, and whether any table can be offline. I reply on Telegram.',
    ctaLabel: 'Message on Telegram',
    telegramHref: 'https://t.me/YahorDubrouski',
} as const;
