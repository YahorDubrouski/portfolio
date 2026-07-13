import type { CvDocument } from '../types';

export const fullStackProfile: CvDocument = {
    id: 'full-stack',
    defaultTemplate: 'classic',
    roleTitle: 'Full Stack Developer',
    name: { first: 'YAHOR', last: 'DUBROUSKI' },
    photoSrc: '/images/yahor-dubrouski-cv.png',
    photoSrcWebp: '/images/yahor-dubrouski-cv.webp',
    contact: [
        { type: 'email', label: 'yahordubrouski@gmail.com', href: 'mailto:yahordubrouski@gmail.com' },
        { type: 'phone', label: '+48 889 708 006', href: 'tel:+48889708006' },
        { type: 'location', label: 'Poland, Warsaw' },
        {
            type: 'linkedin',
            label: 'linkedin.com/in/yahor-dubrouski',
            href: 'https://www.linkedin.com/in/yahor-dubrouski/',
        },
    ],
    skillGroups: [
        {
            label: 'Backend',
            items: ['PHP', 'Laravel', 'Magento', 'PHPUnit'],
        },
        {
            label: 'Frontend',
            items: ['React', 'TypeScript', 'Tailwind CSS', 'Alpine.js'],
        },
        {
            label: 'Cloud & Delivery',
            items: ['AWS', 'CI/CD', 'Docker', 'QA Automation'],
        },
    ],
    languages: [
        'Russian – Native',
        'English – Upper Intermediate',
        'Polish – Intermediate',
        'German – Intermediate',
    ],
    summary:
        'Experienced Full Stack developer able to implement tasks of any complexity and coach others. Experienced in various areas, from development to team leadership — spanning Magento and Laravel backends, React and Knockout frontends, QA automation, and DevOps delivery.',
    experience: [
        {
            title: 'Full Stack Developer',
            companyLine: 'Hidden Hint. Poland, Warsaw | Jan 2024 - Aug 2024',
            project: 'E-commerce Platforms for Digital Products',
            description:
                'Full stack development across e-commerce platforms for digital products with QA automation and DevOps responsibilities.',
            responsibilitiesLabel: true,
            bullets: [
                'Delivered full stack features across Magento and Laravel projects.',
                'Built QA automation — unit, integration, and UI tests for critical business flows.',
                'Handled DevOps tasks across concurrent client projects.',
                'Used Alpine.js and Tailwind CSS for modern frontend enhancements.',
            ],
            tools: 'Magento 2, Laravel, PHP, PHPUnit, JavaScript, Alpine.js, Tailwind CSS, Docker.',
        },
        {
            title: 'PHP Backend Developer / Scrum Master',
            companyLine: 'Puravita (Online Pharmacy). Switzerland, st. Gallen | Apr 2022 - Dec 2023',
            project: 'National Online Pharmacy (Switzerland)',
            description:
                'Online pharmacy platform with microservices, AWS integrations, and international team collaboration.',
            responsibilitiesLabel: true,
            bullets: [
                'Implemented microservices for Magento 2 and AWS integrations.',
                'Introduced feature toggles and trunk-based development practices.',
                'Drove page-speed optimizations across storefront and checkout.',
                'Integrated Agile and Scrum practices as Scrum Master.',
                'Collaborated with colleagues across cultures and languages (German and English).',
            ],
            tools: 'Laravel, Magento 2, PHP, AWS, JavaScript, Knockout.js, MySQL, Docker.',
        },
        {
            title: 'Magento Full Stack Developer / Team Lead',
            companyLine: 'Lindenvalley (E-commerce websites). Belarus, Minsk | Feb 2021 - Apr 2022',
            project: 'E-commerce Solutions (Outsourcing)',
            description:
                'Magento-based client projects with internal meetups on design patterns, best practices, and delivery processes.',
            responsibilitiesLabel: true,
            bullets: [
                'Implemented Click & Collect and custom checkout flows for client storefronts.',
                'Hosted internal meetups on design patterns, best practices, and team processes.',
                'Worked as Manager and Team Lead alongside hands-on development.',
                'Used Alpine.js for interactive frontend components on Magento 2.',
            ],
            tools: 'Magento 2, PHP, JavaScript, Knockout.js, Alpine.js, MySQL, Elasticsearch, Docker.',
        },
        {
            title: 'Magento Full Stack Developer',
            companyLine: 'BelVG (Online Cosmetics Store). Belarus, Minsk | Jun 2020 - Feb 2021',
            project: 'Online Store for Cosmetics',
            responsibilitiesLabel: true,
            bullets: [
                'Built API integrations and payment gateway integrations.',
                'Implemented custom checkout flows.',
                'Participated in Magento migration efforts.',
            ],
            tools: 'Magento 2, PHP, JavaScript, jQuery, Knockout.js, SASS, MySQL.',
        },
        {
            title: 'Laravel / React Developer',
            companyLine: 'iTechArt Group (Surveys Generator). Belarus, Minsk | Mar 2019 - Mar 2020',
            project: 'SaaS Platforms and Startups',
            description:
                'E-commerce startups and enterprise applications with strong focus on integration tests and performance.',
            responsibilitiesLabel: true,
            bullets: [
                'Developed backend logic for early-stage SaaS and e-commerce startups.',
                'Wrote integration and unit tests; implemented site performance optimizations.',
                'Built UI with React and Redux; worked with AngularJS and Vue.js on client projects.',
            ],
            tools: 'Laravel, PHP, React, Redux, AngularJS, Vue.js, MongoDB, PostgreSQL, MySQL, PHPUnit.',
        },
    ],
    education: {
        title: 'Programmer',
        institutionLine: 'College of Business and Law. Belarus, Minsk | Sep 2016 - Jul 2019',
        detail: 'Diploma in Programming',
    },
    certificates: [
        'AWS Certified Solutions Architect - Associate certificate',
        'Adobe Certified Professional Adobe Commerce Developer',
        'Terraform Associate',
        'Enterprise Patterns',
        'GOF And Grasp Design Patterns',
        'QA Automation Diploma',
    ],
    certificatesLink: 'https://github.com/YahorDubrouski/Certificates',
};
