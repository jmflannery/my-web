import Link from 'next/link';
import CoffeeCodeIcon from '../../public/coffee-code.svg';

import './Blog.css';

const Blog = ({profile, children}) => {
  return (
    <div className="blog">
      <header>
        <nav>
          <Link href="/blog">
            <CoffeeCodeIcon />
          </Link>
          <div>
            <Link href="/">{profile.name}</Link>
            <p>Weblog</p>
          </div>
          <span></span>
        </nav>
      </header>
      <main>{children}</main>
      <footer>&copy; Jack Flannery 2024</footer>
    </div>
  );
};

export default Blog;
