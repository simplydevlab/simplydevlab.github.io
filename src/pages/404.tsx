import { Link, type HeadFC } from 'gatsby';
import Seo from '../components/Seo';
import Starfield from '../components/Starfield';

export default function NotFoundPage() {
  return (
    <>
      <Starfield />
      <main className="centered">
        <h1>Page not found</h1>
        <p className="muted">
          <Link to="/">Go to the home page</Link>
        </p>
      </main>
    </>
  );
}

export const Head: HeadFC = () => <Seo title="Page not found · simplydevlab" noindex />;
