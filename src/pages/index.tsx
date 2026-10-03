import type { HeadFC } from 'gatsby';

export default function IndexPage() {
  return (
    <main>
      <h1>simplydevlab</h1>
      <p className="muted">Coming soon.</p>
    </main>
  );
}

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <title>simplydevlab</title>
    <meta name="description" content="Simple apps that keep your data on your device." />
  </>
);
