export const releasePipelineOffer = {
    path: '/services/release-pipeline',
    title: 'Release pipeline with tests and rollback',
    description:
        'CI/CD release pipeline: unit, integration, and UI tests before production, plus automatic rollback to the previous version. 10 days, $2–5k.',
    serviceType: 'Release pipeline',
    identityLine: 'Yahor Dubrouski · Release pipeline',
    headline: 'Release only after all tests pass. Automatic rollback to the previous version.',
    lede: 'Tests run before the new version goes live. If they fail, production stays on the current release. If a new container fails its health check during rollout, the previous version is restored.',
    proof: ['Tests before production', 'Current release stays', 'Health-check rollback'],
    proofNote:
        'On one production release, releases ran about 7–14× faster, and manual backend checks fell from about 3–4 hours a day to near zero.',
    priceMin: 2000,
    priceMax: 5000,
    flowAria: 'What the pipeline does',
    flowTitle: 'What the pipeline does',
    flow: [
        {
            kicker: 'CI',
            title: 'Tests before promotion',
            body: 'Unit, integration, UI, or any other tests run in CI. The new image is promoted only after they pass.',
            icon: 'check',
        },
        {
            kicker: 'PROMOTE',
            title: 'A failed test does not promote',
            body: 'Production stays on the current release. The previous image keeps running.',
            icon: 'live',
        },
        {
            kicker: 'ROLLBACK',
            title: 'Health-check rollback',
            body: 'During rollout, if the new container fails its HTTP health check, the previous version is restored.',
            icon: 'rerun',
        },
    ],
    getsTitle: 'What you get',
    gets: [
        {
            title: 'Any tests in CI',
            body: 'Unit, integration, UI, or any other tests. The new version is promoted only after they pass.',
            icon: 'check',
        },
        {
            title: 'A deploy that waits',
            body: 'The new image reaches production only after those tests pass. Jenkins, GitHub Actions, or Bitbucket Pipelines.',
            icon: 'order',
        },
        {
            title: 'Rollback during rollout',
            body: 'One replica at a time. The new container starts first. If its health check fails, the previous task is restored.',
            icon: 'rerun',
        },
    ],
    stepsTitle: 'How the 10 days go',
    stepsSubtitle: 'You leave with a release you can run again. The pipeline file is not the product.',
    stepsSequence: true,
    steps: [
        {
            title: 'I learn the current release',
            body: 'How a version reaches production today, and which tests must pass.',
        },
        {
            title: 'Tests gate the promote step',
            body: 'A failed test leaves the running release in place. Nothing new is promoted.',
        },
        {
            title: 'You run a release',
            body: 'The rollout restores the previous version if the new container fails its health check.',
        },
    ],
    fitTitle: 'When this is the right job',
    fit: [
        'The application is already in production, and releases are still manual or slow.',
        'You want the next version live only after the tests pass.',
        'You want the previous version back when a new container fails its health check.',
    ],
    priceTitle: 'Fixed price',
    priceAmount: '$2–5k',
    priceBody: '10 days. The price is fixed once the application and the current release path are clear.',
    closingTitle: 'Still releasing by hand?',
    closingBody: 'Tell me how a version reaches production today. I reply on Telegram within a couple of hours.',
    ctaLabel: 'Message on Telegram',
    telegramHref: 'https://t.me/YahorDubrouski',
} as const;
