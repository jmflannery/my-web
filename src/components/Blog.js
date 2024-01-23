import Link from 'next/link';
import CoffeeCodeIcon from '../../public/coffee-code.svg';

import './Blog.css';

const Blog = ({profile, children}) => {
  return (
    <div className="blog">
      <header>
        <nav>
          <span>
            <Link href="/blog">
              <CoffeeCodeIcon />
            </Link>
          </span>
          <span>
            <Link href="/">{profile.name}</Link>
          </span>
          <span>Weblog</span>
        </nav>
      </header>
      <main>{children}</main>
      <footer>&copy; Jack Flannery 2024</footer>
    </div>
  );
};

export default Blog;
