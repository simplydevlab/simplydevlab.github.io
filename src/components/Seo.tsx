import type { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

type SiteMetadata = {
  title: string;
  description: string;
  siteUrl: string;
};

type SeoProps = {
  // Full page title; defaults to the site title.
  title?: string;
  description?: string;
  // Path of the page, used for the canonical and og:url links.
  path?: string;
  // Keeps pages such as the 404 out of search results.
  noindex?: boolean;
  children?: ReactNode;
};

// 1200x630 card shown when the site is shared on social apps and chat.
const OG_IMAGE_PATH = '/og-image.png';

export default function Seo({ title, description, path = '/', noindex = false, children }: SeoProps) {
  const { site } = useStaticQuery<{ site: { siteMetadata: SiteMetadata } }>(graphql`
    query SeoMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  const metadata = site.siteMetadata;
  const pageTitle = title ?? metadata.title;
  const pageDescription = description ?? metadata.description;
  const url = `${metadata.siteUrl}${path}`;
  const image = `${metadata.siteUrl}${OG_IMAGE_PATH}`;

  return (
    <>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}
      <meta name="theme-color" content="#000000" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="simplydevlab: Simple apps for everyday problems" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />

      <link rel="icon" href="/favicon.png" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      {children}
    </>
  );
}
