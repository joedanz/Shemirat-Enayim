import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Parents',
      href: getPermalink('/parents'),
    },
    {
      text: 'Organizations',
      href: getPermalink('/leaders'),
    },
    {
      text: 'Individuals',
      href: getPermalink('/individuals'),
    },
    {
      text: 'Methods',
      links: [
        {
          text: 'Network-Level',
          href: getPermalink('/methods#network'),
        },
        {
          text: 'Device Controls',
          href: getPermalink('/methods#devices'),
        },
        {
          text: 'Software Solutions',
          href: getPermalink('/methods#software'),
        },
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Setup Guides',
          href: getPermalink('/resources#guides'),
        },
        {
          text: 'Recommended Tools',
          href: getPermalink('/resources#tools'),
        },
        {
          text: 'Glossary',
          href: getPermalink('/resources#glossary'),
        },
      ],
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'For You',
      links: [
        { text: 'Parents', href: getPermalink('/parents') },
        { text: 'Organizations', href: getPermalink('/leaders') },
        { text: 'Individuals', href: getPermalink('/individuals') },
      ],
    },
    {
      title: 'Methods',
      links: [
        { text: 'All Methods', href: getPermalink('/methods') },
        { text: 'DNS Filtering', href: getPermalink('/guides/dns-filtering') },
        { text: 'Parental Controls', href: getPermalink('/guides/ios-screen-time') },
        { text: 'Browser Extensions', href: getPermalink('/guides/browser-extensions') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'All Resources', href: getPermalink('/resources') },
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Troubleshooting', href: getPermalink('/troubleshooting') },
        { text: 'Emergency Resources', href: getPermalink('/resources/emergency') },
      ],
    },
    {
      title: 'About',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Feedback', href: getPermalink('/feedback') },
        { text: 'Changelog', href: getPermalink('/changelog') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    <p class="text-sm">Shemirat Einayim — Protection for the Eyes. Comprehensive guides for internet safety and digital protection.</p>
  `,
};
