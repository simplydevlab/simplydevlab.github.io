import type { HeadFC } from 'gatsby';
import Seo from '../components/Seo';
import Starfield from '../components/Starfield';
import avatar from '../images/avatar.jpg';
import simplyDoneIcon from '../images/simplydone-icon.png';
import simplyDoneScreenshot from '../images/simplydone-dark.webp';

const GITHUB_URL = 'https://github.com/DannMolina';
const SIMPLYDONE_APP_STORE_URL = 'https://apps.apple.com/app/id6815755294';
const SIMPLYDONE_SITE_URL = 'https://simplydevlab.github.io/simplydone-site/';
const SITE_URL = 'https://simplydevlab.github.io/';

// Tells search engines who runs the site and what SimplyDone is (schema.org JSON-LD).
const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
      name: 'simplydevlab',
      url: SITE_URL,
      logo: `${SITE_URL}favicon.png`,
      founder: { '@id': `${SITE_URL}#founder` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}#founder`,
      name: 'Dann Russell Molina',
      jobTitle: 'Senior Software Engineer',
      url: SITE_URL,
      sameAs: [GITHUB_URL],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      name: 'simplydevlab',
      url: SITE_URL,
      publisher: { '@id': `${SITE_URL}#organization` },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'SimplyDone',
      description: 'Lists, tasks, reminders and routines, kept simple.',
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'iOS, iPadOS',
      url: SIMPLYDONE_SITE_URL,
      installUrl: SIMPLYDONE_APP_STORE_URL,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      publisher: { '@id': `${SITE_URL}#organization` },
    },
  ],
};

export default function IndexPage() {
  return (
    <>
      <Starfield />
      <div className="page">
        <header className="site-header">
          <span className="wordmark">simplydevlab</span>
        </header>

        <main>
          <section className="hero">
            <h1>Simple apps for everyday problems</h1>
            <p className="lead">A software lab building focused, practical apps.</p>
            <a className="status" href="#apps">
              SimplyDone is out now on the App Store
            </a>
          </section>

          <section id="apps" className="card app" aria-labelledby="apps-heading">
            <div className="app-info">
              <h2 id="apps-heading" className="section-title">
                Apps
              </h2>
              <div className="app-header">
                <img className="app-icon" src={simplyDoneIcon} alt="" width={72} height={72} />
                <div>
                  <h3 className="name">SimplyDone</h3>
                  <p className="role">ToDo &amp; Tasks</p>
                </div>
              </div>
              <p>Lists, tasks, reminders and routines, kept simple.</p>
              <p className="app-meta">Free · iPhone and iPad · Pro is a one-time purchase</p>
              <div className="actions">
                <a className="button button-solid" href={SIMPLYDONE_APP_STORE_URL}>
                  App Store
                </a>
                <a className="button" href={SIMPLYDONE_SITE_URL}>
                  Learn more
                </a>
              </div>
            </div>
            <div className="phone">
              <img
                src={simplyDoneScreenshot}
                alt="SimplyDone's main screen in dark mode, with the tasks-done and streak card above pinned and active lists in color groups"
                width={660}
                height={1434}
                loading="lazy"
              />
            </div>
          </section>

          <section className="card about" aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">
              Who's behind it
            </h2>
            <div className="profile">
              <img
                className="avatar"
                src={avatar}
                alt="Dann Russell Molina"
                width={112}
                height={112}
              />
              <div>
                <p className="name">Dann Russell Molina</p>
                <p className="role">Software Engineer / Philippines</p>
              </div>
            </div>
            <p>
              I've been building software professionally for six years, first as a developer, then
              as a project lead, and now as a senior software engineer. simplydevlab is where I
              share what I build, from personal apps to projects I've shipped professionally.
            </p>
            <a className="button" href={GITHUB_URL}>
              GitHub
            </a>
          </section>
        </main>

        <footer className="site-footer">© {new Date().getFullYear()} simplydevlab</footer>
      </div>
    </>
  );
}

export const Head: HeadFC = () => (
  <Seo title="simplydevlab · Simple apps for everyday problems">
    <link
      rel="preload"
      href="/fonts/D-DIN-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
    <link rel="preload" href="/fonts/D-DIN.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    <script type="application/ld+json">{JSON.stringify(STRUCTURED_DATA)}</script>
  </Seo>
);
