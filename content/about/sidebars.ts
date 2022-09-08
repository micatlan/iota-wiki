module.exports = {
  about: [
    {
      type: 'category',
      label: 'How It Works',
      collapsed: false,
      items: [
        'about-iota/an-introduction-to-iota',
        'about-iota/tangle',
        'about-iota/data-transfer',
        'about-iota/value-transfer',
        'about-iota/why-is-iota-feeless',
        'about-iota/coordinator',
        'about-iota/roadmap-to-decentralization',
        'about-iota/messages',
        'about-iota/energy-efficiency',
      ],
    },
    {
      type: 'category',
      label: 'IOTA Token',
      collapsed: true,
      items: ['iota-token/buying-iota', 'iota-token/staking-iota'],
    },
    {
      type: 'category',
      label: 'Media Library',
      collapsed: true,
      items: [
        'media-library/infographics',
        'media-library/project-presentations',
        'media-library/videos',
      ],
    },
    {
      type: 'category',
      label: 'Future of IOTA',
      collapsed: true,
      items: [
        'future/future-of-iota',
        {
          type: 'category',
          label: 'Smart Contracts',
          collapsed: true,
          items: [
            'future/smart-contracts/smart-contracts-introduction',
            'future/smart-contracts/smart-contracts-VM-and-languages',
            'future/smart-contracts/smart-contracts-validators',
            'future/smart-contracts/smart-contracts-chains',
            'future/smart-contracts/smart-contracts-dapps',
            'future/smart-contracts/smart-contracts-consensus',
            'future/smart-contracts/smart-contracts-tangle',
            'future/smart-contracts/smart-contracts-community-tutorials',
          ],
        },
        'future/shimmer',
        'future/assembly',
        'future/role-of-iota',
        'future/dust-protection',
        'future/nfts',
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      collapsed: true,
      items: [
        'use-cases/data-confidence',
        'use-cases/eco-social-projects',
        'use-cases/healthcare',
        'use-cases/industry-applications',
        'use-cases/mobility',
        'use-cases/real-estate',
        'use-cases/trade-and-supply-chain',
      ],
    },
    'glossary',
    'faqs',
    {
      type: 'link',
      label: 'Partnerships',
      href: 'https://www.iota.org/solutions/partnerships',
    },
  ],
};
