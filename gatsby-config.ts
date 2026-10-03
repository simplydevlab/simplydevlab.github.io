import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'simplydevlab',
    description: 'Simple apps for everyday problems.',
    siteUrl: 'https://simplydevlab.github.io',
  },
  // Served from the root of simplydevlab.github.io, so no pathPrefix.
  graphqlTypegen: false,
  // Matches tsconfig's react-jsx, so pages don't need to import React.
  jsxRuntime: 'automatic',
  plugins: [],
};

export default config;
