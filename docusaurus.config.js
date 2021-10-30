// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config['presets']} */
const presets = [
  [
    '@docusaurus/preset-classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
      },
      blog: {
        showReadingTime: true,
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    }),
  ],
]

/** @type {import('@docusaurus/preset-classic').ThemeConfig['navbar']} */
const navbar = {
  logo: {
    alt: 'Darío Scattolini',
    src: 'img/logo.png',
  },
  items: [
    {
      type: 'doc',
      docId: 'intro',
      position: 'left',
      label: 'Tutorial',
    },
    {
      to: '/blog', 
      label: 'Blog', 
      position: 'left'
    },
    {
      to: '/about', 
      label: 'About Me', 
      position: 'left'
    },
    {
      href: 'https://github.com/darioscattolini/',
      label: 'GitHub',
      position: 'right',
    },
    {
      href: 'https://www.linkedin.com/in/dario-scattolini/',
      label: 'LinkedIn',
      position: 'right',
    },
    {
      href: 'https://stackoverflow.com/users/11899061/dario-scattolini',
      label: 'Stack Overflow',
      position: 'right',
    },
    {
      type: 'localeDropdown',
      position: 'right',
    },
  ],
};

const copyright = `Copyright © ${new Date().getFullYear()} Darío Scattolini`;
const credits = '<a href="./credits">Credits</a>';

/** @type {import('@docusaurus/preset-classic').ThemeConfig['footer']} */
const footer = {
  style: 'dark',
  copyright: `${copyright} - ${credits} - Built with Docusaurus`,
};

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const prism = { 
  theme: lightCodeTheme, 
  darkTheme: darkCodeTheme 
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Darío Scattolini | Front-end developer based in Barcelona',
  url: 'https://www.darioscattolini.com',
  baseUrl: '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es']
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'darioscattolini',
  projectName: 'personal-website',
  presets,
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({ navbar, footer, prism }),
};

module.exports = config;
