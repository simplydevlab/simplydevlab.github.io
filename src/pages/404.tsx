import { Link, type HeadFC } from 'gatsby';

export default function NotFoundPage() {
  return (
    <main>
      <h1>Page not found</h1>
      <p className="muted">
        <Link to="/">Go to the home page</Link>
      </p>
    </main>
  );
}

export const Head: HeadFC = () => <title>Page not found · simplydevlab</title>;
