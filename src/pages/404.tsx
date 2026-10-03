import { Link, type HeadFC } from 'gatsby';
import Starfield from '../components/Starfield';

export default function NotFoundPage() {
  return (
    <>
      <Starfield />
      <main>
        <h1>Page not found</h1>
        <p className="muted">
          <Link to="/">Go to the home page</Link>
        </p>
      </main>
    </>
  );
}

export const Head: HeadFC = () => (
  <>
    <title>Page not found · simplydevlab</title>
    <link rel="icon" href="/favicon.png" type="image/png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  </>
);
