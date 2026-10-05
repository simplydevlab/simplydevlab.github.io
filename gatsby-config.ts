import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'simplydevlab',
    description:
      'simplydevlab is a software lab by Dann Russell Molina building simple, focused apps, like SimplyDone, a to-do and task app for iPhone and iPad.',
    siteUrl: 'https://simplydevlab.github.io',
  },
  // Served from the root of simplydevlab.github.io, so no pathPrefix.
  graphqlTypegen: false,
  // Matches tsconfig's react-jsx, so pages don't need to import React.
  jsxRuntime: 'automatic',
  // Writes /sitemap-index.xml from siteMetadata.siteUrl; 404 pages are left out by default.
  plugins: ['gatsby-plugin-sitemap'],
};

export default config;
